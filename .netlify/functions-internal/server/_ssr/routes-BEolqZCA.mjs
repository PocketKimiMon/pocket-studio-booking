import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as ReadingModeToggle } from "./ReadingModeToggle-DTkXsAiK.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CAL_BASE } from "./services-CC8WogQK.mjs";
import { t as EmergencyModal } from "./EmergencyModal-DSNUPYxE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BEolqZCA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CUTS = [
	{
		slug: "buzz-cut",
		name: "Buzz",
		time: "30 min",
		minDays: 2,
		leadLabel: "books 2 days out minimum"
	},
	{
		slug: "short-cut",
		name: "Short",
		time: "45 min",
		minDays: 2,
		leadLabel: "books 2 days out minimum"
	},
	{
		slug: "long-cut",
		name: "Long",
		time: "60 min",
		minDays: 2,
		leadLabel: "books 2 days out minimum"
	}
];
var COLORS = [{
	slug: "hair-consultation",
	name: "New-Client Color Consult",
	time: "45 min consult",
	minDays: 3,
	leadLabel: "books 3 days out minimum"
}, {
	slug: "existing-client-color-appointment",
	name: "Existing-Client Color",
	time: "3 hr, up to 5 for complex",
	minDays: 7,
	leadLabel: "books 1 week out minimum"
}];
var ALL_SLUGS = [...CUTS, ...COLORS].map((p) => p.slug);
function earliestDate(minDays) {
	return new Date(Date.now() + minDays * 864e5).toLocaleDateString("en-US", {
		weekday: "short",
		month: "short",
		day: "numeric"
	});
}
function BookingPopup() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [step, setStep] = (0, import_react.useState)("start");
	const [pick, setPick] = (0, import_react.useState)(null);
	const [booked, setBooked] = (0, import_react.useState)([]);
	const allBooked = booked.length >= ALL_SLUGS.length;
	(0, import_react.useEffect)(() => {
		const open = () => {
			setStep("start");
			setPick(null);
			setOpen(true);
		};
		window.addEventListener("mybesti:open-booking", open);
		return () => window.removeEventListener("mybesti:open-booking", open);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		window.dispatchEvent(new CustomEvent(step === "result" ? "mybesti:review" : "mybesti:waiting"));
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [open, step]);
	const choose = (p) => {
		setPick(p);
		setStep("result");
	};
	const go = () => {
		if (!pick) return;
		window.dispatchEvent(new CustomEvent("mybesti:celebrate"));
		setBooked((b) => b.includes(pick.slug) ? b : [...b, pick.slug]);
		window.open(`${CAL_BASE}${pick.slug}`, "_blank", "noopener");
	};
	const reset = () => {
		setStep("start");
		setPick(null);
	};
	const choiceBtn = (label, sub, onClick, accent) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: "w-full rounded-xl border-2 p-3.5 text-left transition-transform hover:-translate-y-0.5",
		style: {
			borderColor: "var(--color-void)",
			background: "#fff",
			boxShadow: "3px 3px 0 var(--color-void)"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-base font-black",
			style: {
				fontFamily: "var(--font-display)",
				color: accent
			},
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-0.5 block text-xs",
			style: { color: "var(--color-mist)" },
			children: sub
		})]
	}, label);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => {
			setOpen((o) => !o);
			reset();
		},
		"aria-expanded": open,
		className: "fixed bottom-5 right-5 z-[70] border-2 px-6 py-3 text-base font-black transition-transform hover:-translate-y-1",
		style: {
			background: "var(--color-lime)",
			borderColor: "var(--color-void)",
			boxShadow: "4px 4px 0 var(--color-void)",
			fontFamily: "var(--font-display)"
		},
		children: open ? "× CLOSE" : "BOOK"
	}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "dialog",
		"aria-label": "Book with MyKey",
		className: "fixed bottom-24 right-5 z-[70] w-[calc(100vw-2.5rem)] max-w-sm rounded-2xl border-2 p-5",
		style: {
			background: "var(--color-bone)",
			borderColor: "var(--color-void)",
			boxShadow: "8px 8px 0 var(--color-violet-brand)"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			style: {
				fontFamily: "var(--font-mono)",
				fontSize: 11,
				letterSpacing: "0.15em",
				color: "var(--color-ash)"
			},
			children: "BOOK WITH MYKEY"
		}), allBooked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-2xl font-black",
					style: { fontFamily: "var(--font-display)" },
					children: "that's the whole menu"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm leading-relaxed",
					style: { color: "var(--color-mist)" },
					children: [
						"you've lined up everything i offer. want something custom? text",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:425-918-2029",
							className: "underline underline-offset-2",
							style: { color: "var(--color-flush)" },
							children: "425-918-2029"
						}),
						" ",
						"and we'll figure it out."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen(false),
					className: "mt-4 w-full border-2 px-4 py-2.5 text-sm font-black",
					style: {
						background: "var(--color-lime)",
						borderColor: "var(--color-void)",
						boxShadow: "3px 3px 0 var(--color-void)"
					},
					children: "CLOSE"
				})
			]
		}) : step === "start" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 space-y-2.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-black",
					style: { fontFamily: "var(--font-display)" },
					children: "what are we doing?"
				}),
				choiceBtn("a cut", "buzz, short, or long — clippers or scissors", () => setStep("cut"), "var(--color-void)"),
				choiceBtn("color", "roots, refresh, or a full transformation", () => setStep("color"), "var(--color-violet-brand)")
			]
		}) : step === "cut" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 space-y-2.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Back, { onClick: reset }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-black",
					style: { fontFamily: "var(--font-display)" },
					children: "which cut?"
				}),
				CUTS.map((c) => choiceBtn(c.name, `${c.time} · ${c.leadLabel}`, () => choose(c), "var(--color-void)"))
			]
		}) : step === "color" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 space-y-2.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Back, { onClick: reset }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-black",
					style: { fontFamily: "var(--font-display)" },
					children: "first time coloring with me?"
				}),
				choiceBtn("yes, i'm new", "we plan the lift, tone & maintenance first · 45 min consult · books 3 days out", () => choose(COLORS[0]), "var(--color-violet-brand)"),
				choiceBtn("nope, coming back", "we already know the vibe · 3 hr, up to 5 for complex · books 1 week out", () => choose(COLORS[1]), "var(--color-violet-brand)")
			]
		}) : pick ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Back, { onClick: reset }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "mt-2 text-xl font-black leading-snug",
					style: { fontFamily: "var(--font-display)" },
					children: ["nice, you're set up for ", pick.name]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1.5 text-sm",
					style: {
						fontFamily: "var(--font-mono)",
						color: "var(--color-ash)"
					},
					children: [
						pick.leadLabel,
						" · earliest: ",
						earliestDate(pick.minDays)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: go,
					className: "mt-4 w-full border-2 px-4 py-3 text-sm font-black transition-transform hover:-translate-y-0.5",
					style: {
						background: "var(--color-lime)",
						borderColor: "var(--color-void)",
						boxShadow: "3px 3px 0 var(--color-void)"
					},
					children: "BOOK MY APPOINTMENT →"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-xs leading-relaxed",
					style: { color: "var(--color-ash)" },
					children: [
						"opens the live calendar to pick a day & time. by booking you accept the",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/classic/terms.html",
							className: "underline underline-offset-2",
							children: "terms"
						}),
						" ",
						"&",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/classic/privacy.html",
							className: "underline underline-offset-2",
							children: "privacy policy"
						}),
						". text",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:425-918-2029",
							className: "underline underline-offset-2",
							children: "425-918-2029"
						}),
						" ",
						"if nothing works."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 border-t-2 pt-3",
					style: { borderColor: "rgba(18,14,23,.15)" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-black",
							style: { fontFamily: "var(--font-display)" },
							children: "now that you're sorted…"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-xs",
							style: { color: "var(--color-mist)" },
							children: "want to add anything else while you're here?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: reset,
								className: "flex-1 border-2 px-3 py-2 text-xs font-black",
								style: {
									background: "#fff",
									borderColor: "var(--color-void)",
									boxShadow: "2px 2px 0 var(--color-void)"
								},
								children: "ADD ANOTHER"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setOpen(false),
								className: "flex-1 px-3 py-2 text-xs underline underline-offset-2",
								style: { color: "var(--color-mist)" },
								children: "i'm good, thanks — close"
							})]
						})
					]
				})
			]
		}) : null]
	})] });
}
function Back({ onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: "text-xs underline underline-offset-2",
		style: {
			fontFamily: "var(--font-mono)",
			color: "var(--color-ash)"
		},
		children: "← back"
	});
}
var BASE_LAT = 47.6062;
var BASE_LON = -122.3321;
var RANGE_MI = 30;
function haversineMi(lat1, lon1, lat2, lon2) {
	const toRad = (d) => d * Math.PI / 180;
	const R = 3958.8;
	const dLat = toRad(lat2 - lat1);
	const dLon = toRad(lon2 - lon1);
	const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
	return 2 * R * Math.asin(Math.sqrt(a));
}
function TravelFee() {
	const [address, setAddress] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [result, setResult] = (0, import_react.useState)(null);
	const calculate = async (e) => {
		e.preventDefault();
		if (!address.trim() || loading) return;
		setLoading(true);
		setResult(null);
		try {
			const q = encodeURIComponent(`${address.trim()}, Seattle, WA`);
			const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${q}`);
			if (!res.ok) throw new Error(String(res.status));
			const hit = (await res.json())[0];
			if (!hit) throw new Error("not found");
			const miles = haversineMi(BASE_LAT, BASE_LON, parseFloat(hit.lat), parseFloat(hit.lon));
			if (miles > RANGE_MI) setResult({
				kind: "outside",
				miles
			});
			else setResult({
				kind: "ok",
				miles,
				fee: 25 + 2 * Math.round(miles)
			});
		} catch {
			setResult({ kind: "fallback" });
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-5 py-16 sm:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				style: {
					fontFamily: "var(--font-mono)",
					fontSize: 12,
					letterSpacing: "0.15em",
					color: "var(--color-ash)"
				},
				children: "06 · TRAVEL FEE CALCULATOR"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 max-w-2xl text-4xl font-black leading-tight sm:text-5xl",
				style: { fontFamily: "var(--font-display)" },
				children: "house call? check your travel fee first."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-base leading-relaxed",
				style: { color: "var(--color-mist)" },
				children: "house calls are Seattle-area only. the fee is $25 base + $2/mile from Seattle, quoted before you book, never after. no surprises."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: calculate,
				className: "mt-8 flex max-w-xl flex-col gap-3 rounded-2xl border-2 p-5 sm:flex-row sm:items-center sm:p-6",
				style: {
					background: "#fff",
					borderColor: "var(--color-void)",
					boxShadow: "6px 6px 0 var(--color-violet-brand)"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: address,
					onChange: (e) => setAddress(e.target.value),
					placeholder: "your address or neighborhood (e.g. Capitol Hill, Ballard)",
					"aria-label": "Your address or neighborhood",
					className: "min-w-0 flex-1 rounded-lg border-2 px-3 py-2.5 text-sm",
					style: {
						borderColor: "var(--color-void)",
						background: "var(--color-bone)"
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: loading || !address.trim(),
					className: "shrink-0 border-2 px-5 py-2.5 text-sm font-black transition-transform hover:-translate-y-0.5 disabled:opacity-60",
					style: {
						background: "var(--color-lime)",
						borderColor: "var(--color-void)",
						boxShadow: "3px 3px 0 var(--color-void)"
					},
					children: loading ? "CALCULATING…" : "CALCULATE TRAVEL FEE"
				})]
			}),
			loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm",
				style: {
					fontFamily: "var(--font-mono)",
					color: "var(--color-ash)"
				},
				children: "checking the map…"
			}),
			result?.kind === "ok" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 inline-block rounded-lg border-2 px-4 py-2.5 text-sm font-black",
				style: {
					background: "var(--color-lime)",
					borderColor: "var(--color-void)",
					boxShadow: "3px 3px 0 var(--color-void)"
				},
				children: [
					"distance: ",
					result.miles.toFixed(1),
					" mi · travel fee: $",
					result.fee
				]
			}),
			result?.kind === "outside" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 inline-block rounded-lg border-2 px-4 py-2.5 text-sm font-black",
				style: {
					background: "rgba(232,93,4,.15)",
					borderColor: "var(--color-flush)",
					color: "var(--color-flush)"
				},
				children: [
					"sorry, can't get there. ",
					result.miles.toFixed(1),
					" mi is outside my ",
					RANGE_MI,
					"-mile range."
				]
			}),
			result?.kind === "fallback" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 inline-block rounded-lg border-2 px-4 py-2.5 text-sm font-black",
				style: {
					background: "#fff",
					borderColor: "var(--color-void)",
					boxShadow: "3px 3px 0 var(--color-void)"
				},
				children: "travel fee: $25 (estimate — exact distance unavailable)"
			})
		]
	});
}
var STUDIO_SERVICES = [
	{
		name: "Buzz Cut",
		slug: "buzz-cut",
		duration: "30 MIN",
		price: "priced at the chair",
		desc: "clippers all over, clean edges, back to your life.",
		tag: "quick",
		accent: "var(--color-lime)"
	},
	{
		name: "Short Cut",
		slug: "short-cut",
		duration: "45 MIN",
		price: "priced at the chair",
		desc: "scissor or clipper-over-comb, shaped to your actual head.",
		tag: "classic",
		accent: "var(--color-flush)"
	},
	{
		name: "Long Cut",
		slug: "long-cut",
		duration: "60 MIN",
		price: "priced at the chair",
		desc: "layers, texture, cleanup. keep the length, kill the dead ends.",
		tag: "detail",
		accent: "var(--color-violet-brand)"
	},
	{
		name: "New-Client Color Consult",
		slug: "hair-consultation",
		duration: "45 MIN",
		price: "priced at the chair",
		desc: "first time coloring with me? we sit down and plan everything (lift, tone, maintenance, realistic expectations) before anything touches your hair. books 3 days out.",
		tag: "required for new color",
		accent: "var(--color-violet-brand)"
	},
	{
		name: "Existing-Client Color Appointment",
		slug: "existing-client-color-appointment",
		duration: "3 HR",
		price: "priced at the chair",
		desc: "roots, refresh, full transformation. we already know the vibe. block the afternoon; complex sessions can run 3–5 hours and i'm not rushing your hair for anyone's schedule. books 1 week out.",
		tag: "color",
		accent: "var(--color-lime)"
	}
];
var POLICIES = [
	{
		n: "01",
		h: "one month at a time",
		p: "calendar opens on the 1st for the full month ahead. first come, first serve, and i don't hold slots."
	},
	{
		n: "02",
		h: "advance notice",
		p: "haircuts book 2 days out. new-client color consults book 3 days out. existing-client color books 1 week out. color takes prep and i refuse to wing it. need it sooner? send an emergency request."
	},
	{
		n: "03",
		h: "24-hour cancellation",
		p: "cancel or reschedule? 24 hours notice. emergencies are real and i'm reasonable, but my time is literally how i pay rent, so please don't ghost me."
	},
	{
		n: "04",
		h: "no-call-no-show = charged",
		p: "miss a confirmed appointment with no heads-up and you'll be charged up to the full service amount. i'll invoice you if there's no card on file. fairness goes both ways. full terms on the terms page."
	},
	{
		n: "05",
		h: "2-hour confirmation",
		p: "you'll get a text or email 2 hours before your appointment. if i don't hear back, i may give your slot to someone else. just a quick \"yep\" is all i need."
	},
	{
		n: "06",
		h: "pricing & payment",
		p: "prices are quoted before or at the chair. they vary by hair and complexity because hair isn't one-size-fits-all. payment is due at the appointment unless we work something out."
	},
	{
		n: "07",
		h: "house-call space",
		p: "give me a safe, ready spot and an accurate address. i may leave if the situation isn't workable; nothing personal. let me know about allergies and any prior chemical work so i don't fry your hair."
	}
];
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			background: "var(--color-bone)",
			color: "var(--color-void)",
			fontFamily: "var(--font-sans)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Updates, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rules, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Book, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TravelFee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingPopup, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmergencyModal, {})
		]
	});
}
function TopBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-50 border-b-2",
		style: {
			background: "var(--color-bone)",
			borderColor: "var(--color-void)"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "flex items-center gap-2 text-sm font-black tracking-tight",
					style: { fontFamily: "var(--font-display)" },
					children: "✂ pocket studio · seattle"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-2 sm:flex",
					style: {
						fontFamily: "var(--font-mono)",
						fontSize: 12
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block h-2 w-2 animate-pulse rounded-full",
						style: { background: "var(--color-go)" }
					}), "booking open"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadingModeToggle, { compact: true }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:425-918-2029",
							className: "hidden text-sm underline-offset-4 hover:underline md:block",
							style: { fontFamily: "var(--font-mono)" },
							children: "425-918-2029"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/book",
							className: "border-2 px-4 py-1.5 text-sm font-black transition-transform hover:-translate-y-0.5",
							style: {
								background: "var(--color-lime)",
								borderColor: "var(--color-void)",
								boxShadow: "3px 3px 0 var(--color-void)"
							},
							children: "BOOK"
						})
					]
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "mx-auto max-w-6xl px-5 pb-16 pt-14 sm:pb-20 sm:pt-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				style: {
					fontFamily: "var(--font-mono)",
					fontSize: 13,
					letterSpacing: "0.2em",
					color: "var(--color-flush)"
				},
				children: "YOUR CHAIR MOVED"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-3 text-[15vw] font-extrabold leading-[0.9] tracking-tight sm:text-[96px] md:text-[112px]",
				style: { fontFamily: "var(--font-display)" },
				children: [
					"mykey",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block rounded-full px-4 py-1 align-baseline",
						style: {
							background: "var(--color-lime)",
							color: "var(--color-void)",
							boxShadow: "6px 6px 0 var(--color-void)"
						},
						children: "pocket"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 max-w-xl text-xl leading-relaxed sm:text-2xl",
				style: {
					fontFamily: "Georgia, serif",
					color: "var(--color-mist)"
				},
				children: "book cuts + color directly. no front desk, no phone tag, no wondering if the message went through."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				style: {
					fontFamily: "var(--font-mono)",
					fontSize: 12
				},
				children: [
					"✂ scissors ready",
					"color chaos welcome",
					"house calls",
					"the tea if you rebook"
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-block rounded-full border-2 px-3 py-1",
					style: {
						borderColor: "var(--color-void)",
						background: i % 2 === 0 ? "var(--color-card-w)" : "rgba(111,230,235,.14)",
						transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)`
					},
					children: s
				}, s))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-10 rounded-2xl border-2 p-6 sm:p-8",
				style: {
					background: "var(--color-lime)",
					borderColor: "var(--color-void)",
					boxShadow: "10px 10px 0 var(--color-void)"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute -top-4 -left-2 -rotate-6 text-2xl sm:text-3xl",
						style: {
							fontFamily: "var(--font-hand)",
							color: "var(--color-violet-brand)"
						},
						children: "spill the tea ~"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: {
							fontFamily: "var(--font-mono)",
							fontSize: 12,
							letterSpacing: "0.15em"
						},
						children: "CURRENT DEAL"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 text-3xl font-black uppercase tracking-tight sm:text-4xl",
						style: { fontFamily: "var(--font-display)" },
						children: "rebook ahead, get the tea."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-lg text-base sm:text-lg",
						style: { color: "var(--color-void)" },
						children: "book your next appointment at least 2 days out and i'll spill everything. why i'm not at the old shop anymore, what really went down, all of it. consider it a loyalty bribe. ☕"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border-2 p-4 text-sm",
					style: {
						background: "var(--color-void)",
						borderColor: "var(--color-void)",
						color: "var(--color-bone)"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "font-bold",
							style: { color: "var(--color-lime)" },
							children: "former Rudy's clients:"
						}),
						" ",
						"i'm not at Rudy's anymore. this is where you book now. same hands, same energy, way fewer hoops."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border p-4 text-sm",
					style: {
						background: "rgba(51,203,210,.10)",
						borderColor: "var(--color-violet-brand)"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "font-bold",
							style: { color: "var(--color-violet-brand)" },
							children: "house calls only right now."
						}),
						" ",
						"i come to you, no travel fee yet, but that won't last forever. i'm between chairs and figuring out where to land next. thank you for rolling with it. i know shaking up your routine is a lot, especially if you're neurodivergent and changes hit different. i get it, i'm right there with you. we'll get back to something steady soon."
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
				className: "mt-8 overflow-hidden rounded-2xl border-2",
				style: {
					borderColor: "var(--color-void)",
					boxShadow: "10px 10px 0 var(--color-lime)"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/home-hero.jpg",
					alt: "MyKey's chair and kit, packed for a house call",
					className: "aspect-[16/9] w-full object-cover sm:aspect-[21/9]",
					loading: "eager"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap items-center gap-4 text-sm",
				style: {
					fontFamily: "var(--font-mono)",
					color: "var(--color-mist)"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "HOURS" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "THU 11–6" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "FRI 12–5" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SAT–SUN 12–8" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Seattle, WA" })
				]
			})
		]
	});
}
function Marquee() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden border-y-2 py-2",
		style: {
			background: "var(--color-void)",
			borderColor: "var(--color-void)"
		},
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee whitespace-nowrap text-sm font-bold tracking-widest",
			style: {
				color: "var(--color-lime)",
				fontFamily: "var(--font-mono)"
			},
			children: "YOUR CHAIR MOVED ✦ HOUSE CALLS ✦ CUTS & COLOR ✦ THE TEA IF YOU REBOOK ✦ ".repeat(6)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        .marquee { display:inline-block; animation: ps-marquee 30s linear infinite; }
        @keyframes ps-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .marquee { animation: none; } }
      ` })]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y-2",
		style: {
			background: "linear-gradient(rgba(11,11,15,.93), rgba(11,11,15,.93)), url(/images/gallery-texture-2.jpg) center/cover",
			borderColor: "var(--color-void)"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-[1.2fr_1fr] sm:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: {
						fontFamily: "var(--font-mono)",
						fontSize: 12,
						letterSpacing: "0.15em",
						color: "var(--color-flush)"
					},
					children: "01 · ABOUT THE ARTIST"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-4xl font-black leading-tight sm:text-5xl",
					style: { fontFamily: "var(--font-display)" },
					children: "the human behind the chair"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg leading-relaxed",
					style: { color: "var(--color-mist)" },
					children: "i'm MyKey: hair artist, solo operator, the whole front desk and back office in one neurodivergent brain. i just left Rudy's and i'm taking clients directly now. no middleman, no corporate scheduling system, just me and my booking link."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg leading-relaxed",
					style: { color: "var(--color-mist)" },
					children: "i cut and color all textures, but the transformations are what light me up: the grow-out rescue, the \"i need to feel like a different person by friday\" moment, the color correction that takes six hours and a dangerous amount of trust. hair is the one kind of magic i actually believe in."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg leading-relaxed",
					style: { color: "var(--color-mist)" },
					children: "show up however you show up. reference pics, bedhead, a vague idea and a willingness to talk it through. all valid. i'm not here to judge your hair crimes."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-sm",
					style: {
						fontFamily: "var(--font-mono)",
						color: "var(--color-ash)"
					},
					children: [
						"pronouns: they/them · seattle, wa ·",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:425-918-2029",
							className: "underline underline-offset-4",
							children: "425-918-2029"
						}),
						" ",
						"·",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:mykeypocket@icloud.com",
							className: "underline underline-offset-4",
							children: "mykeypocket@icloud.com"
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative self-start rounded-2xl p-6",
				style: {
					background: "var(--color-void)",
					color: "var(--color-bone)",
					boxShadow: "10px 10px 0 var(--color-violet-brand)"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute -top-4 -right-2 rotate-6 text-2xl",
						style: {
							fontFamily: "var(--font-hand)",
							color: "var(--color-lime)"
						},
						children: "see you in the chair ~"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm uppercase tracking-widest",
						style: {
							fontFamily: "var(--font-mono)",
							color: "var(--color-lime)"
						},
						children: "why book direct?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 space-y-4 text-sm leading-relaxed",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: { color: "var(--color-lime)" },
									children: "▍"
								}), " no front-desk telephone game"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: { color: "var(--color-lime)" },
									children: "▍"
								}), " you know exactly who's holding the scissors"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: { color: "var(--color-lime)" },
									children: "▍"
								}), " rebooking reminders from a real human, not an auto-drip"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: { color: "var(--color-lime)" },
									children: "▍"
								}), " your notes live with me. no rotating cast of receptionists who've never seen your hair."]
							})
						]
					})
				]
			})]
		})
	});
}
function Updates() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-5 py-16 sm:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				style: {
					fontFamily: "var(--font-mono)",
					fontSize: 12,
					letterSpacing: "0.15em",
					color: "var(--color-ash)"
				},
				children: "02 · WHAT'S GOING ON"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-4xl font-black leading-tight sm:text-5xl",
				style: { fontFamily: "var(--font-display)" },
				children: "dispatches from the chair"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "mb-3 border-2 p-5 sm:p-6",
					style: {
						background: "var(--color-card-w)",
						borderColor: "var(--border-subtle)",
						boxShadow: "3px 3px 0 var(--color-void)"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-1",
							style: {
								fontFamily: "var(--font-mono)",
								fontSize: 11,
								color: "var(--color-ash)",
								textTransform: "uppercase",
								letterSpacing: "0.1em"
							},
							children: "JUL 14, 2026"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-xl font-black",
							style: { fontFamily: "var(--font-display)" },
							children: "house calls + the hunt for a new chair"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed sm:text-base",
							style: { color: "var(--color-mist)" },
							children: "doing house calls only right now. i show up, set up wherever works, and get you sorted. no travel fee for now. call it a thank-you for sticking around while i figure out my next spot."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed sm:text-base",
							style: { color: "var(--color-mist)" },
							children: "i know it's chaotic. i know routine changes are hard. believe me, my brain runs on routine too. i'm working on locking down a chair so we can both stop improvising. genuinely appreciate you riding this out with me."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-lg",
							style: {
								fontFamily: "var(--font-hand)",
								color: "var(--color-flush)"
							},
							children: "— mykey"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/blog",
					className: "inline-block text-sm font-bold underline underline-offset-4",
					style: {
						fontFamily: "var(--font-mono)",
						color: "var(--color-violet-brand)"
					},
					children: "all dispatches →"
				})]
			})
		]
	});
}
function Services() {
	const [open, setOpen] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "services",
		className: "mx-auto max-w-6xl px-5 pb-16 sm:pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				style: {
					fontFamily: "var(--font-mono)",
					fontSize: 12,
					letterSpacing: "0.15em",
					color: "var(--color-ash)"
				},
				children: "03 · PICK A SERVICE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-4xl font-black leading-tight sm:text-6xl",
				style: { fontFamily: "var(--font-display)" },
				children: "tap one to book"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 border-t-2",
				style: { borderColor: "var(--color-void)" },
				children: STUDIO_SERVICES.map((s, i) => {
					const isOpen = open === s.slug;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group border-b-2",
						style: { borderColor: "var(--color-void)" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-expanded": isOpen,
							onClick: () => setOpen(isOpen ? null : s.slug),
							className: "flex w-full items-baseline gap-4 py-5 text-left transition-colors sm:gap-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "w-8 shrink-0 text-sm",
									style: {
										fontFamily: "var(--font-mono)",
										color: "var(--color-ash)"
									},
									children: ["0", i + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-2xl font-black tracking-tight sm:text-4xl",
											style: { fontFamily: "var(--font-display)" },
											children: s.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-sm",
											style: { color: "var(--color-mist)" },
											children: s.desc
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-2 inline-block rounded-full border px-2.5 py-0.5",
											style: {
												fontFamily: "var(--font-mono)",
												fontSize: 11,
												borderColor: s.accent,
												color: "var(--color-mist)"
											},
											children: s.tag
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden shrink-0 text-sm sm:block",
									style: {
										fontFamily: "var(--font-mono)",
										color: "var(--color-ash)"
									},
									children: s.duration
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 text-xs sm:text-sm",
									style: {
										fontFamily: "var(--font-mono)",
										color: s.accent === "var(--color-lime)" ? "var(--color-void)" : s.accent
									},
									children: s.price
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden h-8 w-8 shrink-0 items-center justify-center border-2 text-lg transition-transform group-hover:rotate-45 sm:flex",
									style: {
										borderColor: "var(--color-void)",
										background: s.accent
									},
									"aria-hidden": true,
									children: "+"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `grid transition-all duration-200 sm:max-h-0 sm:opacity-0 sm:group-hover:max-h-40 sm:group-hover:opacity-100 ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-3 pb-6 pl-12 pr-2 sm:flex-row sm:items-center sm:justify-between sm:pl-16",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "max-w-xl text-sm leading-relaxed",
									style: { color: "var(--color-mist)" },
									children: [s.desc, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "sm:hidden",
										style: {
											fontFamily: "var(--font-mono)",
											color: "var(--color-ash)"
										},
										children: [
											" ",
											"· ",
											s.duration
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex shrink-0 flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/services/$slug",
										params: { slug: s.slug },
										className: "inline-block border-2 px-5 py-2 text-sm font-black transition-transform hover:-translate-y-0.5",
										style: {
											background: s.accent,
											borderColor: "var(--color-void)",
											boxShadow: "3px 3px 0 var(--color-void)",
											color: "var(--color-void)"
										},
										children: "SEE THE WORK →"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `${CAL_BASE}${s.slug}`,
										target: "_blank",
										rel: "noreferrer",
										className: "inline-block border-2 px-5 py-2 text-sm font-black transition-transform hover:-translate-y-0.5",
										style: {
											background: "var(--color-card-w)",
											borderColor: "var(--color-void)",
											boxShadow: "3px 3px 0 var(--color-void)",
											color: "var(--color-void)"
										},
										children: "BOOK →"
									})]
								})]
							})
						})]
					}, s.slug);
				})
			})
		]
	});
}
function Rules() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-5 pb-16 sm:pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				style: {
					fontFamily: "var(--font-mono)",
					fontSize: 12,
					letterSpacing: "0.15em",
					color: "var(--color-ash)"
				},
				children: "04 · THE FINE PRINT"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-4xl font-black leading-tight sm:text-5xl",
				style: { fontFamily: "var(--font-display)" },
				children: "so nobody gets surprised"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-10 border-t",
				style: { borderColor: "var(--color-ash)" },
				children: POLICIES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid gap-1 border-b py-5 sm:grid-cols-[64px_240px_1fr] sm:gap-6",
					style: { borderColor: "var(--color-ash)" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								fontFamily: "var(--font-mono)",
								color: "var(--color-ash)",
								fontSize: 13
							},
							children: p.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-black",
							style: { fontFamily: "var(--font-display)" },
							children: p.h
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed",
							style: { color: "var(--color-mist)" },
							children: p.p
						})
					]
				}, p.h))
			})
		]
	});
}
function Book() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "book",
		className: "border-t-2",
		style: {
			background: "var(--color-void)",
			borderColor: "var(--color-void)"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 text-center sm:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: {
						fontFamily: "var(--font-mono)",
						fontSize: 12,
						letterSpacing: "0.15em",
						color: "var(--color-lime)"
					},
					children: "05 · BOOK IT"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-4xl font-black leading-tight sm:text-6xl",
					style: {
						fontFamily: "var(--font-display)",
						color: "var(--color-bone)"
					},
					children: "let's book it →"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-md text-lg",
					style: { color: "var(--color-ash)" },
					children: "answer a couple quick questions and i'll point you to the right slot. no guesswork, no booking the wrong thing and having to start over."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-3 text-sm",
					style: {
						fontFamily: "var(--font-mono)",
						color: "var(--color-ash)"
					},
					children: "thu 11am–6pm · fri 12pm–5pm · sat–sun 12pm–8pm"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/book",
						className: "inline-block border-2 px-10 py-4 text-lg font-black transition-transform hover:-translate-y-0.5",
						style: {
							background: "var(--color-lime)",
							borderColor: "var(--color-lime)",
							boxShadow: "4px 4px 0 var(--color-violet-brand)",
							color: "var(--color-void)"
						},
						children: "LET'S BOOK IT →"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"data-emergency": true,
						className: "inline-block border-2 px-8 py-4 text-base font-black transition-transform hover:-translate-y-0.5",
						style: {
							background: "var(--color-flush)",
							borderColor: "var(--color-flush)",
							boxShadow: "4px 4px 0 var(--color-violet-brand)",
							color: "#fff"
						},
						children: "🚨 need it sooner? emergency request"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-6 max-w-xl text-sm",
					style: { color: "var(--color-ash)" },
					children: "calendar is live. real time, instant confirmation. house calls only right now."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mx-auto mt-2 max-w-xl text-sm",
					style: { color: "var(--color-ash)" },
					children: [
						"by booking you agree to the",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/terms",
							className: "underline underline-offset-4",
							style: { color: "var(--color-lime)" },
							children: "terms of service"
						}),
						" ",
						"and",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							className: "underline underline-offset-4",
							style: { color: "var(--color-lime)" },
							children: "privacy policy"
						}),
						", including the 24-hour cancel rule, no-show charge, SMS/email reminders, and house-call terms. booking runs on cal.com."
					]
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t-2 px-5 py-10",
		style: {
			background: "var(--color-void)",
			borderColor: "var(--color-void)"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-base",
					style: { color: "var(--color-bone)" },
					children: [
						"hit me up:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:425-918-2029",
							className: "underline underline-offset-4",
							style: { color: "var(--color-lime)" },
							children: "425-918-2029"
						}),
						" ",
						"·",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:mykeypocket@icloud.com",
							className: "underline underline-offset-4",
							style: { color: "var(--color-lime)" },
							children: "mykeypocket@icloud.com"
						}),
						" ",
						"· popl card"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs",
					style: {
						color: "var(--color-ash)",
						fontFamily: "var(--font-mono)"
					},
					children: "the small print: pronouns: they/them / location: seattle, wa / hours: thu 11am–6pm, fri 12pm–5pm, sat–sun 12pm–8pm"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 -rotate-2 text-2xl",
					style: {
						fontFamily: "var(--font-hand)",
						color: "var(--color-lime)"
					},
					children: "built by one brain, on purpose ~"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 text-xs",
					style: {
						color: "var(--color-ash)",
						fontFamily: "var(--font-mono)"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							className: "underline-offset-4 hover:underline",
							children: "privacy policy"
						}),
						" ",
						"·",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/terms",
							className: "underline-offset-4 hover:underline",
							children: "terms of service"
						}),
						" ",
						"·",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/blog",
							className: "underline-offset-4 hover:underline",
							children: "dispatches"
						}),
						" ",
						"· © pocket studio / mykey pocket · not affiliated with Rudy's Barbershop"
					]
				})
			]
		})
	});
}
//#endregion
export { Page as component };
