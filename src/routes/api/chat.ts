import { createFileRoute } from "@tanstack/react-router";
import { buildSystemPrompt } from "../../lib/chat-brain";

// Free-first model chain (OpenRouter). Each falls over to the next on 429/5xx.
const MODELS = [
  "inclusionai/ling-3.0-flash:free",
  "google/gemma-4-31b-it:free",
  "nvidia/nemotron-3-super-120b-a12b:free",
];

type ChatMessage = { role: "user" | "assistant" | "system"; content: string };

async function callModel(model: string, messages: ChatMessage[], key: string): Promise<string> {
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
        const key = process.env.OPENROUTER_API_KEY;
        if (!key) {
          return Response.json({ error: "chat not configured (missing OPENROUTER_API_KEY)" }, { status: 503 });
        }
        let body: { messages?: ChatMessage[] };
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "bad json" }, { status: 400 });
        }
        const history = Array.isArray(body.messages) ? body.messages.slice(-12) : [];
        if (history.length === 0) {
          return Response.json({ error: "no messages" }, { status: 400 });
        }
        const messages: ChatMessage[] = [
          { role: "system", content: buildSystemPrompt() },
          ...history.filter((m) => m.role === "user" || m.role === "assistant"),
        ];
        let lastErr = "unknown";
        for (const model of MODELS) {
          try {
            const reply = await callModel(model, messages, key);
            return Response.json({ reply, model });
          } catch (e) {
            lastErr = e instanceof Error ? e.message : String(e);
          }
        }
        return Response.json({ error: `all models unavailable (${lastErr})` }, { status: 502 });
      },
    },
  },
});
