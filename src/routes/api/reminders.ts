import { createFileRoute } from "@tanstack/react-router";
import { listReminders, processReminders, cancelReminder, markSent, markFailed } from "../../lib/reminders";

export const Route = createFileRoute("/api/reminders")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const mode = url.searchParams.get("mode");
        if (mode === "run") {
          const results = await processReminders();
          return Response.json({ processed: results.length, results });
        }
        const status = url.searchParams.get("status") as any;
        const items = listReminders(status);
        return Response.json({ count: items.length, items });
      },
      POST: async ({ request }) => {
        const body = await request.json().catch(() => ({}));
        const id = typeof body.id === "string" ? body.id.trim() : "";
        if (!id) return Response.json({ error: "id required" }, { status: 400 });
        if (body.cancel) {
          const item = cancelReminder(id);
          return Response.json({ canceled: !!item, item });
        }
        if (body.markSent) {
          const item = markSent(id);
          return Response.json({ marked: !!item, item });
        }
        if (body.markFailed && typeof body.error === "string") {
          const item = markFailed(id, body.error);
          return Response.json({ marked: !!item, item });
        }
        return Response.json({ error: "unknown action" }, { status: 400 });
      },
    },
  },
});
