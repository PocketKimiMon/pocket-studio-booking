import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as ReadingModeToggle } from "./ReadingModeToggle-DTkXsAiK.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SERVICES, r as STRIPE_DEPOSIT_LINK, t as CAL_BASE } from "./services-CC8WogQK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-CtR-exQo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var bySlug = (slug) => SERVICES.find((s) => s.slug === slug);
var CUTS = [
	"buzz-cut",
	"short-cut",
	"long-cut"
].map(bySlug);
var CONSULT = bySlug("hair-consultation");
var EXISTING = bySlug("existing-client-color-appointment");
var GREETING = [{
	id: 0,
	from: "bot",
	text: "hey! I'm the booking bot ✂ I come to you — let's find your service."
}, {
	id: 1,
	from: "bot",
	text: "cut or color?"
}];
function BookPage() {
	const [messages, setMessages] = (0, import_react.useState)(GREETING);
	const [stage, setStage] = (0, import_react.useState)("start");
	const endRef = (0, import_react.useRef)(null);
	const nextId = (0, import_react.useRef)(2);
	(0, import_react.useEffect)(() => {
		if (messages.length > GREETING.length) endRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "nearest"
		});
	}, [messages]);
	(0, import_react.useEffect)(() => {
		if (stage === "done") window.dispatchEvent(new CustomEvent("mybesti:review"));
		else if (stage !== "start") window.dispatchEvent(new CustomEvent("mybesti:waiting"));
	}, [stage]);
	const push = (...msgs) => setMessages((m) => [...m, ...msgs.map((msg) => ({
		...msg,
		id: nextId.current++
	}))]);
	const pickCut = () => {
		push({
			from: "user",
			text: "cut"
		}, {
			from: "bot",
			text: "love that for you. which cut are we doing?"
		});
		setStage("cut");
	};
	const pickColor = () => {
		push({
			from: "user",
			text: "color"
		}, {
			from: "bot",
			text: "ooh, color day 🎨 have we colored together before?"
		});
		setStage("color");
	};
	const pickService = (s, userText) => {
		push({
			from: "user",
			text: userText
		}, {
			from: "bot",
			text: "say less. here's the deal:"
		}, {
			from: "bot",
			card: s
		});
		setStage("done");
	};
	const reset = () => {
		setMessages(GREETING);
		setStage("start");
		nextId.current = 2;
	};
	const chips = stage === "start" ? [{
		label: "CUT ✂",
		onClick: pickCut
	}, {
		label: "COLOR 🎨",
		onClick: pickColor
	}] : stage === "cut" ? CUTS.map((s) => ({
		label: `${s.name} · ${s.price} · ${s.duration}`,
		onClick: () => pickService(s, `${s.name}, please`)
	})) : stage === "color" ? [{
		label: "first time",
		onClick: () => pickService(CONSULT, "first time with you")
	}, {
		label: "returning client",
		onClick: () => pickService(EXISTING, "returning client, you know the vibe")
	}] : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			background: "linear-gradient(rgba(11,11,15,.94), rgba(11,11,15,.96)), url(/images/booking-bg.jpg) center/cover fixed",
			color: "var(--color-void)",
			fontFamily: "var(--font-sans)",
			minHeight: "100vh"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes msg-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        .msg-in { animation: msg-in 0.25s ease-out both; }
      ` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-50 border-b",
				style: {
					background: "var(--color-bone)",
					borderColor: "var(--color-ash)"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "text-sm font-black tracking-tight",
						style: {
							fontFamily: "var(--font-display)",
							color: "var(--color-void)"
						},
						children: "✂ POCKET STUDIO"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						style: {
							fontFamily: "var(--font-mono)",
							fontSize: 12
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block h-2 w-2 animate-pulse rounded-full",
								style: { background: "var(--color-go)" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadingModeToggle, { compact: true }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								hash: "services",
								className: "underline-offset-4 hover:underline",
								style: { color: "var(--color-void)" },
								children: "← services"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-2xl px-5 py-12 sm:py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: {
							fontFamily: "var(--font-mono)",
							fontSize: 12,
							letterSpacing: "0.15em",
							color: "var(--color-lime)"
						},
						children: "BOOK"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-2 text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl",
						style: { fontFamily: "var(--font-display)" },
						children: ["Chat your way in", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: "var(--color-flush)" },
							children: "."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-lg text-lg leading-relaxed",
						style: { color: "var(--color-ash)" },
						children: "Two taps and you're booked. Every appointment is a house call — your couch, your mirror, your gossip."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 border-2 p-4 sm:p-6",
						style: {
							borderColor: "var(--color-lime)",
							boxShadow: "6px 6px 0 var(--color-lime)",
							background: "rgba(255,255,255,0.03)"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex items-center gap-2 border-b pb-3",
							style: {
								borderColor: "var(--color-ash)",
								fontFamily: "var(--font-mono)",
								fontSize: 11,
								letterSpacing: "0.12em",
								color: "var(--color-ash)"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block h-2 w-2 rounded-full",
								style: { background: "var(--color-go)" }
							}), "BOOKING BOT · ONLINE"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3",
							children: [
								messages.map((m) => "card" in m ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
									service: m.card,
									onReset: reset
								}, m.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `msg-in max-w-[85%] px-4 py-2.5 text-sm leading-relaxed ${m.from === "user" ? "self-end" : "self-start"}`,
									style: m.from === "user" ? {
										background: "var(--color-lime)",
										color: "var(--color-void)",
										fontWeight: 700,
										border: "2px solid var(--color-void)",
										boxShadow: "3px 3px 0 rgba(255,255,255,0.25)"
									} : {
										background: "var(--color-card-w)",
										color: "var(--color-void)",
										border: "2px solid var(--color-void)",
										boxShadow: "3px 3px 0 var(--color-lime)"
									},
									children: m.text
								}, m.id)),
								chips.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "msg-in mt-1 flex flex-wrap gap-2 self-end",
									children: chips.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: c.onClick,
										className: "border-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition hover:-translate-y-0.5",
										style: {
											borderColor: "var(--color-lime)",
											color: "var(--color-lime)",
											background: "transparent",
											fontFamily: "var(--font-display)",
											boxShadow: "3px 3px 0 var(--color-lime)"
										},
										children: c.label
									}, c.label))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: endRef })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreaChecker, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-sm",
						style: {
							color: "var(--color-ash)",
							fontFamily: "var(--font-mono)"
						},
						children: [
							"prefer the full calendar?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://cal.com/maneautoimation",
								target: "_blank",
								rel: "noreferrer",
								className: "underline underline-offset-4",
								style: { color: "var(--color-void)" },
								children: "open cal.com →"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Calendar not showing a slot soon enough? Text",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "sms:+14259182029",
								className: "underline underline-offset-4",
								style: { color: "var(--color-lime)" },
								children: "425-918-2029"
							}),
							"."
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t px-5 py-8",
				style: { borderColor: "var(--color-ash)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 text-xs sm:flex-row sm:items-center",
					style: {
						color: "var(--color-ash)",
						fontFamily: "var(--font-mono)"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Pocket Studio · MyKey Pocket (they/them) · Seattle"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "underline-offset-4 hover:underline",
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/terms",
								className: "underline-offset-4 hover:underline",
								children: "Terms"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy",
								className: "underline-offset-4 hover:underline",
								children: "Privacy"
							})
						]
					})]
				})
			})
		]
	});
}
function AreaChecker() {
	const [address, setAddress] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [result, setResult] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	async function calculate() {
		if (!address.trim() || loading) return;
		setLoading(true);
		setError(null);
		setResult(null);
		try {
			const res = await fetch("/api/travel-fee", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ address: address.trim() })
			});
			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			setResult(await res.json());
		} catch {
			setError("couldn't reach the checker — try again, or text us and we'll confirm.");
		} finally {
			setLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-8 border-2 p-4 sm:p-6",
		style: {
			borderColor: "var(--color-violet-brand)",
			boxShadow: "6px 6px 0 var(--color-violet-brand)",
			background: "rgba(255,255,255,0.03)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				style: {
					fontFamily: "var(--font-mono)",
					fontSize: 11,
					letterSpacing: "0.15em",
					color: "var(--color-violet-brand)"
				},
				children: "SERVICE AREA"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 text-xl font-black tracking-tight",
				style: { fontFamily: "var(--font-display)" },
				children: "House call? Check you're in range."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm leading-relaxed",
				style: { color: "var(--color-ash)" },
				children: [
					"House calls are Seattle-area only — and right now there's",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						style: { color: "var(--color-go)" },
						children: "no travel fee at all"
					}),
					". $0, anywhere in range, while the books are building."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					value: address,
					onChange: (e) => setAddress(e.target.value),
					onKeyDown: (e) => {
						if (e.key === "Enter") {
							e.preventDefault();
							calculate();
						}
					},
					placeholder: "your address or neighborhood (e.g. Capitol Hill, Seattle)",
					className: "w-full flex-1 border-2 px-4 py-2.5 text-sm outline-none",
					style: {
						background: "var(--color-bone)",
						color: "var(--color-void)",
						borderColor: "var(--color-ash)",
						fontFamily: "var(--font-mono)"
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => void calculate(),
					disabled: loading || !address.trim(),
					className: "border-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50",
					style: {
						background: "var(--color-lime)",
						color: "var(--color-void)",
						borderColor: "var(--color-void)",
						boxShadow: "4px 4px 0 var(--color-void)",
						fontFamily: "var(--font-display)"
					},
					children: loading ? "checking…" : "Check my address"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 text-sm",
				"aria-live": "polite",
				style: { fontFamily: "var(--font-mono)" },
				children: [
					loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: { color: "var(--color-ash)" },
						children: "checking the map…"
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: { color: "var(--color-flush)" },
						children: error
					}),
					result && (result.available ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: { color: "var(--color-void)" },
						children: result.distance_mi != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"You're in range (",
							result.distance_mi,
							" mi) — travel fee: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-black",
								style: { color: "var(--color-go)" },
								children: "$0"
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: "var(--color-ash)" },
								children: "(no fee right now)"
							})
						] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"You're in range — travel fee: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-black",
								style: { color: "var(--color-go)" },
								children: "$0"
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								style: { color: "var(--color-ash)" },
								children: [
									"(",
									result.reason ?? "no fee right now",
									")"
								]
							})
						] })
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						style: { color: "var(--color-flush)" },
						children: [
							"sorry, no house calls there",
							result.distance_mi != null ? ` (${result.distance_mi} mi)` : "",
							" — ",
							result.reason ?? "outside service area",
							"."
						]
					}))
				]
			})
		]
	});
}
function ServiceCard({ service, onReset }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "msg-in max-w-[92%] self-start border-2 p-4",
		style: {
			background: "var(--color-card-w)",
			color: "var(--color-void)",
			borderColor: "var(--color-void)",
			boxShadow: "4px 4px 0 var(--color-lime)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				style: {
					fontFamily: "var(--font-mono)",
					fontSize: 11,
					letterSpacing: "0.15em",
					color: "var(--color-mist)"
				},
				children: "YOUR PICK"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-1 text-xl font-black",
				style: { fontFamily: "var(--font-display)" },
				children: service.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm font-bold",
				style: { fontFamily: "var(--font-mono)" },
				children: [
					service.duration,
					" · ",
					service.price
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed",
				children: service.detail
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: `${CAL_BASE}${service.slug}`,
				target: "_blank",
				rel: "noreferrer",
				onClick: () => window.dispatchEvent(new CustomEvent("mybesti:celebrate")),
				className: "mt-4 block w-full px-4 py-3 text-center text-sm font-bold uppercase tracking-wider transition hover:-translate-y-0.5",
				style: {
					background: "var(--color-lime)",
					color: "var(--color-void)",
					border: "2px solid var(--color-void)",
					boxShadow: "4px 4px 0 var(--color-void)",
					fontFamily: "var(--font-display)"
				},
				children: [
					"BOOK ",
					service.name,
					" →"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-xs leading-relaxed",
				style: { color: "var(--color-ash)" },
				children: [
					"a ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						style: { color: "var(--color-void)" },
						children: "$25 deposit"
					}),
					" holds your slot — applied to your total at the chair.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: STRIPE_DEPOSIT_LINK,
						target: "_blank",
						rel: "noreferrer",
						className: "underline underline-offset-2",
						style: { color: "var(--color-violet-brand)" },
						children: "pay deposit →"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-center justify-between text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/services/$slug",
					params: { slug: service.slug },
					className: "underline underline-offset-4 font-semibold",
					children: "see the work"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onReset,
					className: "underline underline-offset-4",
					style: { color: "var(--color-mist)" },
					children: "start over"
				})]
			})
		]
	});
}
//#endregion
export { BookPage as component };
