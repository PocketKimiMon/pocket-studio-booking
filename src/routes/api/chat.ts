import { createFileRoute } from "@tanstack/react-router";
import { buildSystemPrompt } from "../../lib/chat-brain";

// Provider chain, in order:
//   1. Ollama cloud (needs OLLAMA_API_KEY) — minimax-m3:cloud (free with account)
//   2. OpenRouter free models (needs OPENROUTER_API_KEY)
// Each provider falls over to the next on error/429.

type ChatMessage = { role: "user" | "assistant" | "system"; content: string };

const OR_MODELS = [
  "inclusionai/ling-3.0-flash:free",
  "google/gemma-4-31b-it:free",
  "nvidia/nemotron-3-super-120b-a12b:free",
];

const OLLAMA_MODELS = ["minimax-m3:cloud"];

async function callOllama(model: string, messages: ChatMessage[], key: string): Promise<string> {
  const res = await fetch("https://ollama.com/api/chat", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ model, messages, stream: false }),
    signal: AbortSignal.timeout(45_000),
  });
  if (!res.ok) throw new Error(`ollama ${model} -> ${res.status}`);
  const data = (await res.json()) as { message?: { content?: string } };
  const text = data.message?.content?.trim();
  if (!text) throw new Error(`ollama ${model} -> empty reply`);
  // minimax "thinking" noise: strip up to "...done thinking." if present
  return text.replace(/^[\s\S]*?\.\.\.done thinking\.\s*/i, "").trim() || text;
}

async function callOpenRouter(model: string, messages: ChatMessage[], key: string): Promise<string> {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ model, messages, max_tokens: 400, temperature: 0.7 }),
    signal: AbortSignal.timeout(30_000),
  });
  if (!res.ok) throw new Error(`${model} -> ${res.status}`);
  const data = (await res.json()) as { choices?: { message?: { content?: string } }[] };
  const text = data.choices?.[0]?.message?.content?.trim();
  if (!text) throw new Error(`${model} -> empty reply`);
  return text;
}

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: { messages?: ChatMessage[] };
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "bad json" }, { status: 400 });
        }
        const history = Array.isArray(body.messages) ? body.messages.slice(-12) : [];
        if (history.length === 0) return Response.json({ error: "no messages" }, { status: 400 });
        const messages: ChatMessage[] = [
          { role: "system", content: buildSystemPrompt() },
          ...history.filter((m) => m.role === "user" || m.role === "assistant"),
        ];

        const attempts: { name: string; run: () => Promise<string> }[] = [];
        const ollamaKey = process.env.OLLAMA_API_KEY;
        const orKey = process.env.OPENROUTER_API_KEY;
        if (ollamaKey) {
          for (const m of OLLAMA_MODELS) attempts.push({ name: `ollama:${m}`, run: () => callOllama(m, messages, ollamaKey) });
        }
        if (orKey) {
          for (const m of OR_MODELS) attempts.push({ name: `or:${m}`, run: () => callOpenRouter(m, messages, orKey) });
        }
        if (attempts.length === 0) {
          return Response.json({ error: "chat not configured (no OLLAMA_API_KEY or OPENROUTER_API_KEY)" }, { status: 503 });
        }

        let lastErr = "unknown";
        for (const a of attempts) {
          try {
            const reply = await a.run();
            return Response.json({ reply, model: a.name });
          } catch (e) {
            lastErr = e instanceof Error ? e.message : String(e);
          }
        }
        return Response.json({ error: `all providers unavailable (${lastErr})` }, { status: 502 });
      },
    },
  },
});
