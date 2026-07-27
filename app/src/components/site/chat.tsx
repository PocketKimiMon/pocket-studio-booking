// Guided multiple-choice booking chat (design-brief.md, brand revision 2).
// The primary booking path: three chip questions, a changeable summary, then
// the calendar. Every question's last chip drops to free text, which composes
// a real sms:/mailto: message to MyKey. No backend, no AI, no timers beyond a
// 400ms typing beat. All state is React state and browser globals only appear
// in handlers and effects, so SSR renders the greeting and the first question.
import { useEffect, useRef, useState } from "react";
import { calEventUrl, contact, services, travel, travelFeeRange } from "../../lib/site";
import { IconArrow, IconMail, IconPhone } from "./icons";

type Step =
  | "service"
  | "serviceHelp"
  | "where"
  | "travel"
  | "when"
  | "summary"
  | "freetext"
  | "sendoff";

type Msg = {
  id: number;
  role: "guide" | "user";
  text: string;
  q?: Step; // guide message that asked a question (back/change anchor)
  summary?: boolean; // guide message that renders the answer summary rows
  fee?: { phrase: string; range: string }; // guide message with the would-be travel fee
};

type Answers = {
  service?: string;
  slug?: string;
  where?: string;
  travel?: string;
  travelFee?: string;
  when?: string;
};

const ESCAPE = "Just type to me, we'll figure it out together";

const GREETING =
  "Hey. I am the booking guide for this chair. Four quick steps and you are booked. No account, no phone tag.";

const QUESTIONS = {
  service: "First up. What are we doing with your hair?",
  serviceHelp: "No problem, that is what I am here for. Which sounds closest?",
  where: "Chair at Rudy's in Fremont, or should I come to you?",
  travel: "Roughly how far from Fremont are you?",
  when: "Last pick. When were you thinking?",
  feeNote:
    "Travel is on us right now. When that changes, this is exactly what it would cost, no surprises.",
  outsideZone:
    "That is outside my 30-mile travel zone. The Fremont chair is always an option, or type to me and we will figure something out together.",
  summary:
    "Here is the plan. Tap anything you want to change, otherwise pick a time below.",
  freetext:
    "Go for it. Type like you would text a friend. Dates, hair history, access needs, all of it.",
  sendoff:
    "Got it. Pick how to send it and a human (hi, MyKey) replies. Text is fastest. No bots past this guide.",
} as const;

const WHERE_CHIPS = [
  "Chair at Rudy's Fremont",
  "House call within 30 miles",
  "Not sure yet",
];

const HOUSE_CALL = WHERE_CHIPS[1];

const OUTSIDE_ZONE = "Outside 30 miles";

const WHEN_CHIPS = ["This week", "Next week", "A specific day", "Just browsing"];

// "Not sure, help me pick" sub-answers: label plus the service it maps to.
const HELP_PICKS = [
  { label: "Something quick and easy", service: "Buzz Cut" },
  { label: "A proper restyle", service: "Long Cut" },
  { label: "I want to talk color", service: "New-Client Color Consult" },
] as const;

const reduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function ChatCard() {
  const nextId = useRef(1);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevStep = useRef<Step>("service");
  const interacted = useRef(false);
  const logRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [msgs, setMsgs] = useState<Msg[]>([
    { id: 0, role: "guide", text: GREETING },
  ]);
  const [answers, setAnswers] = useState<Answers>({});
  const [step, setStep] = useState<Step>("service");
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState("");
  const [sentNote, setSentNote] = useState("");

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  // Keep the log scrolled to the newest bubble.
  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, typing]);

  // Focus the first chip of a freshly asked question, but only after the
  // visitor has started interacting (never steal focus on page load).
  useEffect(() => {
    if (!interacted.current || typing) return;
    if (step === "freetext") {
      inputRef.current?.focus({ preventScroll: true });
      return;
    }
    const first = chipsRef.current?.querySelector("button");
    first?.focus({ preventScroll: true });
  }, [step, typing, msgs]);

  const push = (m: Omit<Msg, "id">): Msg => ({ ...m, id: nextId.current++ });

  // Append the guide's next message(s) after a 400ms typing beat (skipped
  // entirely under prefers-reduced-motion).
  const askNext = (guideMsgs: Omit<Msg, "id">[], next: Step) => {
    const go = () => {
      setMsgs((cur) => [...cur, ...guideMsgs.map(push)]);
      setStep(next);
    };
    if (reduceMotion()) {
      go();
      return;
    }
    setTyping(true);
    timer.current = setTimeout(() => {
      setTyping(false);
      go();
    }, 400);
  };

  const answer = (
    stepKey: "service" | "where" | "when",
    label: string,
    guideMsgs: Omit<Msg, "id">[],
    next: Step,
    slug?: string,
  ) => {
    interacted.current = true;
    setAnswers((cur) => ({
      ...cur,
      [stepKey]: label,
      ...(stepKey === "service" ? { slug } : {}),
    }));
    setMsgs((cur) => [...cur, push({ role: "user", text: label })]);
    askNext(guideMsgs, next);
  };

  const answerService = (name: string, slug?: string) =>
    answer("service", name, [{ role: "guide", text: QUESTIONS.where, q: "where" }], "where", slug);

  const answerWhere = (label: string) => {
    if (label === HOUSE_CALL) {
      answer("where", label, [{ role: "guide", text: QUESTIONS.travel, q: "travel" }], "travel");
      return;
    }
    answer("where", label, [{ role: "guide", text: QUESTIONS.when, q: "when" }], "when");
  };

  // Travel band picked: show the would-be fee (clearly NOT charged today),
  // then move on to the when question. Outside the radius: the honest
  // "let's figure it out" path instead of a number.
  const answerTravel = (label: string, phrase?: string, range?: string) => {
    interacted.current = true;
    setAnswers((cur) => ({ ...cur, travel: label, travelFee: range }));
    setMsgs((cur) => [...cur, push({ role: "user", text: label })]);
    askNext(
      [
        range && phrase
          ? { role: "guide" as const, text: QUESTIONS.feeNote, fee: { phrase, range } }
          : { role: "guide" as const, text: QUESTIONS.outsideZone },
        { role: "guide" as const, text: QUESTIONS.when, q: "when" as const },
      ],
      "when",
    );
  };

  const answerWhen = (label: string) =>
    answer(
      "when",
      label,
      [{ role: "guide", text: QUESTIONS.summary, q: "summary", summary: true }],
      "summary",
    );

  const notSure = () => {
    interacted.current = true;
    setMsgs((cur) => [...cur, push({ role: "user", text: "Not sure, help me pick" })]);
    askNext([{ role: "guide", text: QUESTIONS.serviceHelp, q: "serviceHelp" }], "serviceHelp");
  };

  const helpPick = (label: string, serviceName: string) => {
    const svc = services.find((s) => s.name === serviceName);
    interacted.current = true;
    setAnswers((cur) => ({ ...cur, service: serviceName, slug: svc?.slug }));
    setMsgs((cur) => [...cur, push({ role: "user", text: label })]);
    askNext(
      [
        {
          role: "guide",
          text: `Then let us say ${serviceName}. You can change it at the end.`,
        },
        { role: "guide", text: QUESTIONS.where, q: "where" },
      ],
      "where",
    );
  };

  const showWholeMenu = () => {
    interacted.current = true;
    setMsgs((cur) => [...cur, push({ role: "user", text: "Show me the whole menu" })]);
    askNext([{ role: "guide", text: QUESTIONS.service, q: "service" }], "service");
  };

  const escapeToText = () => {
    interacted.current = true;
    prevStep.current = step;
    askNext([{ role: "guide", text: QUESTIONS.freetext, q: "freetext" }], "freetext");
  };

  // Cut the log back to just after the guide message that asked `target`,
  // clear that answer (and everything after it), and re-ask.
  const rewindTo = (target: Step) => {
    if (timer.current) {
      clearTimeout(timer.current);
      setTyping(false);
    }
    setMsgs((cur) => {
      let idx = -1;
      for (let i = cur.length - 1; i >= 0; i--) {
        if (cur[i].q === target) {
          idx = i;
          break;
        }
      }
      return idx === -1 ? cur : cur.slice(0, idx + 1);
    });
    setAnswers((cur) => {
      const next = { ...cur };
      const order = ["service", "where", "travel", "when"] as const;
      const start = order.indexOf(target as (typeof order)[number]);
      if (start !== -1) {
        for (let i = start; i < order.length; i++) delete next[order[i]];
        if (start === 0) delete next.slug;
        if (start <= 2) delete next.travelFee;
      }
      return next;
    });
    setStep(target);
  };

  const back = () => {
    interacted.current = true;
    const targets: Record<Step, Step> = {
      service: "service",
      serviceHelp: "service",
      where: "service",
      travel: "where",
      when: answers.travel ? "travel" : "where",
      summary: "when",
      freetext: prevStep.current,
      sendoff: "freetext",
    };
    const target = targets[step];
    if (target !== step) rewindTo(target);
  };

  const sendNote = () => {
    const text = draft.trim();
    if (!text) return;
    interacted.current = true;
    setSentNote(text);
    setDraft("");
    setMsgs((cur) => [...cur, push({ role: "user", text })]);
    askNext([{ role: "guide", text: QUESTIONS.sendoff, q: "sendoff" }], "sendoff");
  };

  // The composed hand-off message: chat picks plus the typed note.
  const sendBody = () => {
    const lines = ["Hi MyKey, from the booking chat:"];
    if (answers.service) lines.push(`Service: ${answers.service}`);
    if (answers.where) lines.push(`Where: ${answers.where}`);
    if (answers.travel) {
      lines.push(
        `Travel: ${answers.travel}${
          answers.travelFee
            ? ` (would be ${answers.travelFee}, free for now)`
            : " (outside the 30-mile zone)"
        }`,
      );
    }
    if (answers.when) lines.push(`When: ${answers.when}`);
    lines.push("", sentNote);
    return lines.join("\n");
  };

  const smsHref = `sms:${contact.phoneDisplay}?&body=${encodeURIComponent(sendBody())}`;
  const mailHref = `mailto:${contact.email}?subject=${encodeURIComponent("Booking chat with MyKey")}&body=${encodeURIComponent(sendBody())}`;

  // The path grows by one step when a house call adds the travel question.
  const hasTravel = answers.where === HOUSE_CALL || step === "travel";
  const path: Step[] = hasTravel
    ? ["service", "where", "travel", "when", "summary"]
    : ["service", "where", "when", "summary"];
  const answeredCount =
    (answers.service ? 1 : 0) +
    (answers.where ? 1 : 0) +
    (answers.travel ? 1 : 0) +
    (answers.when ? 1 : 0);
  const pos =
    step === "summary" || step === "sendoff"
      ? path.length - 1
      : step === "freetext"
        ? Math.min(answeredCount, path.length - 1)
        : Math.max(0, path.indexOf(step));
  const stepLabel =
    step === "freetext"
      ? "type to me"
      : step === "sendoff"
        ? "send it"
        : `step ${Math.min(pos + 1, path.length)} of ${path.length}`;

  const canBack = step !== "service" && !typing;

  const chips: { label: string; onPick: () => void }[] =
    step === "service"
      ? [
          ...services.map((s) => ({
            label: s.name,
            onPick: () => answerService(s.name, s.slug),
          })),
          { label: "Not sure, help me pick", onPick: notSure },
        ]
      : step === "serviceHelp"
        ? [
            ...HELP_PICKS.map((h) => ({
              label: h.label,
              onPick: () => helpPick(h.label, h.service),
            })),
            { label: "Show me the whole menu", onPick: showWholeMenu },
          ]
        : step === "where"
          ? WHERE_CHIPS.map((label) => ({ label, onPick: () => answerWhere(label) }))
          : step === "travel"
            ? [
                ...travel.bands.map((b) => ({
                  label: b.label,
                  onPick: () => answerTravel(b.label, b.phrase, travelFeeRange(b)),
                })),
                { label: OUTSIDE_ZONE, onPick: () => answerTravel(OUTSIDE_ZONE) },
              ]
            : step === "when"
              ? WHEN_CHIPS.map((label) => ({ label, onPick: () => answerWhen(label) }))
              : [];

  const isQuestionStep =
    step === "service" ||
    step === "serviceHelp" ||
    step === "where" ||
    step === "travel" ||
    step === "when";

  return (
    <div className="mk-chat-card">
      <div className="mk-chat-head">
        <span className="mk-chat-title">booking guide</span>
        <div className="mk-chat-progress">
          <div className="mk-chat-dots" aria-hidden="true">
            {path.map((s, i) => (
              <span
                key={s}
                className={`mk-chat-dot${i < pos ? " mk-done" : i === pos ? " mk-now" : ""}`}
              />
            ))}
          </div>
          <span className="mk-chat-step-label">{stepLabel}</span>
          <button
            type="button"
            className="mk-chat-back"
            onClick={back}
            disabled={!canBack}
          >
            <IconArrow size={14} style={{ transform: "scaleX(-1)" }} />
            Back
          </button>
        </div>
      </div>

      <div className="mk-chat-log" role="log" aria-live="polite" ref={logRef}>
        {msgs.map((m) => (
          <div key={m.id} className={`mk-msg ${m.role === "guide" ? "mk-msg-guide" : "mk-msg-user"}`}>
            {m.text}
            {m.fee && (
              <span className="mk-fee">
                <span className="mk-fee-kicker">{"// not charged yet"}</span>
                <span className="mk-fee-amount">{m.fee.range}</span>
                <span className="mk-fee-note">
                  for {m.fee.phrase}, at ${travel.flat} flat + ${travel.perMile} a
                  mile. Free for now.
                </span>
              </span>
            )}
            {m.summary && (
              <dl className="mk-msg-rows">
                <div className="mk-msg-row">
                  <dt>service</dt>
                  <dd>
                    {answers.service ?? "not picked"}
                    <button type="button" className="mk-change-btn" onClick={() => rewindTo("service")}>
                      change
                    </button>
                  </dd>
                </div>
                <div className="mk-msg-row">
                  <dt>where</dt>
                  <dd>
                    {answers.where ?? "not picked"}
                    <button type="button" className="mk-change-btn" onClick={() => rewindTo("where")}>
                      change
                    </button>
                  </dd>
                </div>
                {answers.travel && (
                  <div className="mk-msg-row">
                    <dt>travel fee</dt>
                    <dd>
                      {answers.travelFee
                        ? `${answers.travelFee}, free for now`
                        : "outside the zone, let's talk"}
                      <button type="button" className="mk-change-btn" onClick={() => rewindTo("travel")}>
                        change
                      </button>
                    </dd>
                  </div>
                )}
                <div className="mk-msg-row">
                  <dt>when</dt>
                  <dd>
                    {answers.when ?? "not picked"}
                    <button type="button" className="mk-change-btn" onClick={() => rewindTo("when")}>
                      change
                    </button>
                  </dd>
                </div>
              </dl>
            )}
          </div>
        ))}
        {typing && (
          <span className="mk-typing" aria-label="The guide is typing">
            <span />
            <span />
            <span />
          </span>
        )}
      </div>

      {!typing && isQuestionStep && (
        <div className="mk-chips" ref={chipsRef}>
          {chips.map((c) => (
            <button key={c.label} type="button" className="mk-chat-chip" onClick={c.onPick}>
              {c.label}
            </button>
          ))}
          <button type="button" className="mk-chat-chip mk-chat-chip-escape" onClick={escapeToText}>
            {ESCAPE}
          </button>
        </div>
      )}

      {!typing && step === "summary" && (
        <div className="mk-chat-ctas">
          <a className="mk-chat-primary" href="#calendar">
            Pick a time on the calendar
            <IconArrow size={18} />
          </a>
          {answers.slug && (
            <a
              className="mk-chat-secondary"
              href={calEventUrl(answers.slug)}
              target="_blank"
              rel="noreferrer"
            >
              Open the {answers.service} page on Cal.com
            </a>
          )}
          <button type="button" className="mk-chat-secondary" onClick={escapeToText}>
            Rather just talk? Type to me
          </button>
        </div>
      )}

      {!typing && step === "freetext" && (
        <form
          className="mk-chat-input-row"
          onSubmit={(e) => {
            e.preventDefault();
            sendNote();
          }}
        >
          <label className="mk-sr-only" htmlFor="mk-chat-note">
            Type your message to MyKey
          </label>
          <input
            id="mk-chat-note"
            ref={inputRef}
            className="mk-chat-input"
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Type it like a text to a friend"
            autoComplete="off"
          />
          <button type="submit" className="mk-chat-send" disabled={!draft.trim()}>
            Send
            <IconArrow size={16} />
          </button>
        </form>
      )}

      {!typing && step === "sendoff" && (
        <>
          <div className="mk-chat-sendoff">
            <a className="mk-chat-send" href={smsHref}>
              <IconPhone size={16} />
              Text it to MyKey
            </a>
            <a className="mk-chat-secondary" href={mailHref}>
              <IconMail size={16} />
              Email it instead
            </a>
          </div>
          <p className="mk-chat-note">
            Opens your text or mail app with everything pre-filled. You press
            send, a human replies.
          </p>
        </>
      )}
    </div>
  );
}

/* ---------- chat section: the guided booking path ---------- */

export function ChatSection({ level = "h2" }: { level?: "h1" | "h2" }) {
  const H = level;
  return (
    <section className="mk-section">
      <div className="mk-wrap">
        <div className="mk-section-head">
          <H className="mk-h2">The easy way to book.</H>
          <p className="mk-tldr">
            <strong>TL;DR</strong> Four quick picks and you are booked. Every
            question also lets you skip the picks and just type to me.
          </p>
        </div>
        <ChatCard />
      </div>
    </section>
  );
}
