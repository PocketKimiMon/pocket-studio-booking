import { createFileRoute } from "@tanstack/react-router";
import { buildSystemPrompt } from "../../lib/chat-brain";
import { CAL_BASE, SERVICES } from "../../lib/services";

// Provider chain, in order:
//   1. Ollama cloud (needs OLLAMA_API_KEY) — minimax-m3:cloud (free with account)
//   2. OpenRouter free models (needs OPENROUTER_API_KEY)
// Each provider falls over to the next on error/429.
// If no keys or all fail, we use a local smart fallback so the chat ALWAYS works.

type ChatMessage = { role: "user" | "assistant" | "system"; content: string };

const OR_MODELS = [
  "inclusionai/ling-3.0-flash:free",
  "google/gemma-4-31b-it:free",
  "nvidia/nemotron-3-super-120b-a12b:free",
  "nvidia/nemotron-3-nano-30b-a3b:free",
];

const OLLAMA_MODELS = ["minimax-m3:cloud"];

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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
  return text.replace(/^[\s\S]*?\.\.\.done thinking\.\s*/i, "").trim() || text;
}

async function callOpenRouter(model: string, messages: ChatMessage[], key: string): Promise<string> {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ model, messages, max_tokens: 400, temperature: 0.7 }),
    signal: AbortSignal.timeout(30_000),
  });
  if (res.status === 429) throw new Error(`${model} -> 429 rate limited`);
  if (!res.ok) throw new Error(`${model} -> ${res.status}`);
  const data = (await res.json()) as { choices?: { message?: { content?: string } }[] };
  const text = data.choices?.[0]?.message?.content?.trim();
  if (!text) throw new Error(`${model} -> empty reply`);
  return text;
}

// Local smart fallback — always works, uses the same locked facts.
function localReply(userText: string): string {
  const t = userText.toLowerCase();

  // direct service asks
  for (const s of SERVICES) {
    if (t.includes(s.slug) || t.includes(s.name.toLowerCase())) {
      return `the ${s.name.toLowerCase()} is ${s.duration.toLowerCase()}, ${s.price.toLowerCase()}. ${s.detail} book here: ${CAL_BASE}${s.slug}`;
    }
  }
  if (t.includes("buzz")) return `buzz cut: 30 min, priced at the chair. book: ${CAL_BASE}buzz-cut`;
  if (t.includes("short")) return `short cut: 45 min, priced at the chair. book: ${CAL_BASE}short-cut`;
  if (t.includes("long")) return `long cut: 60 min, priced at the chair. book: ${CAL_BASE}long-cut`;
  if (t.includes("color") || t.includes("consult")) return `new color? start with the 45min consult: ${CAL_BASE}hair-consultation . returning? ${CAL_BASE}existing-client-color-appointment`;

  if (t.includes("hour") || t.includes("when") || t.includes("open")) {
    return "thu 11am–6pm, fri 12pm–5pm, sat–sun 12pm–8pm, mon–wed closed. calendar opens one month at a time on the 1st.";
  }
  if (t.includes("deposit") || t.includes("pay") || t.includes("$25") || t.includes("hold")) {
    return "$25 deposit via stripe after you pick the slot on cal. holds your time.";
  }
  if (t.includes("cancel") || t.includes("24")) {
    return "24-hour cancellation. no-call-no-show gets charged. text 425-918-2029 for real emergencies.";
  }
  if (t.includes("house") || t.includes("travel") || t.includes("come to")) {
    return "house calls only right now (seattle area). no travel fee at the moment.";
  }
  if (t.includes("pet")) {
    return "pets must be secured during the visit.";
  }
  if (t.includes("emergency") || t.includes("sooner") || t.includes("asap")) {
    return `text mykey directly 425-918-2029 or use the emergency request on the page. full calendar: ${CAL_BASE}`;
  }

  // default helpful nudge
  return `tell me cut or color (or buzz/short/long) and i'll give the right link. or just open the calendar: ${CAL_BASE} . text 425-918-2029 if nothing fits.`;
}

function fallbackReply(userText = ""): string {
  if (userText) return localReply(userText);
  return `hey — text mykey 425-918-2029 or grab a slot: ${CAL_BASE}`;
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

        // no keys? use local smart fallback immediately so the bot is always live
        if (attempts.length === 0) {
          const lastUser = [...history].reverse().find((m) => m.role === "user")?.content || "";
          return Response.json({ reply: fallbackReply(lastUser), model: "local-fallback" });
        }

        let lastErr = "unknown";
        for (const a of attempts) {
          try {
            const reply = await a.run();
            return Response.json({ reply, model: a.name });
          } catch (e) {
            lastErr = e instanceof Error ? e.message : String(e);
            console.error(`[chat] provider failed: ${a.name} -> ${lastErr}`);
            if (lastErr.includes("429")) {
              await sleep(400);
            }
          }
        }

        // all external providers failed — still give the client a useful reply
        const lastUser = [...history].reverse().find((m) => m.role === "user")?.content || "";
        return Response.json({ reply: fallbackReply(lastUser), model: "local-fallback", error: lastErr });
      },
    },
  },
});
