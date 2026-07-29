import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Phone, c as Mail, i as Scissors, l as Clock, n as TriangleAlert, o as Palette, r as Sparkles, s as MapPin, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/studio-BEMhvTSH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CAL_BASE = "https://cal.com/maneautoimation/";
var SERVICES = [
	{
		slug: "buzz-cut",
		name: "Buzz Cut",
		duration: "30 min",
		leadDays: 2,
		category: "cut",
		blurb: "Clean, quick, dialed clipper work.",
		icon: Scissors,
		accent: "var(--color-lime)"
	},
	{
		slug: "short-cut",
		name: "Short Cut",
		duration: "45 min",
		leadDays: 2,
		category: "cut",
		blurb: "Precision short shapes with intention.",
		icon: Scissors,
		accent: "var(--color-violet-brand)"
	},
	{
		slug: "long-cut",
		name: "Long Cut",
		duration: "60 min",
		leadDays: 2,
		category: "cut",
		blurb: "Long layers, texture, and movement.",
		icon: Scissors,
		accent: "var(--color-flush)"
	},
	{
		slug: "hair-consultation",
		name: "New-Client Color Consult",
		duration: "45 min",
		leadDays: 3,
		category: "color",
		blurb: "Meet, plan, and price your first color visit.",
		icon: Sparkles,
		accent: "var(--color-violet-brand)"
	},
	{
		slug: "existing-client-color-appointment",
		name: "Existing-Client Color Appointment",
		duration: "3 hr / up to 5 hr",
		leadDays: 7,
		category: "color",
		blurb: "Full color session for returning clients.",
		icon: Palette,
		accent: "var(--color-lime)"
	}
];
function earliestDate(leadDays) {
	const d = /* @__PURE__ */ new Date();
	d.setDate(d.getDate() + leadDays);
	return d.toLocaleDateString(void 0, {
		weekday: "long",
		month: "long",
		day: "numeric"
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		style: {
			background: "var(--color-bone)",
			color: "var(--color-void)",
			fontFamily: "var(--font-sans)"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1040px] px-5 pb-24 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopNav, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Policies, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Booking, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingPopup, {})]
	});
}
function TopNav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		className: "flex items-center justify-between pt-6 sm:pt-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: "#top",
			className: "font-black tracking-tight",
			style: {
				fontFamily: "var(--font-display)",
				color: "var(--color-void)"
			},
			children: [
				"pocket",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { color: "var(--color-flush)" },
					children: "·"
				}),
				"studio"
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hidden gap-6 text-sm font-medium sm:flex",
			style: { color: "var(--color-mist)" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#about",
					className: "hover:text-[color:var(--color-void)]",
					children: "about"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#services",
					className: "hover:text-[color:var(--color-void)]",
					children: "services"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#policies",
					className: "hover:text-[color:var(--color-void)]",
					children: "policies"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#book",
					className: "hover:text-[color:var(--color-void)]",
					children: "book"
				})
			]
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "pt-10 sm:pt-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "text-[54px] leading-[0.95] font-extrabold tracking-tight sm:text-[92px]",
				style: { fontFamily: "var(--font-display)" },
				children: [
					"POCKET",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block rounded-full px-4 py-1 align-baseline",
						style: {
							background: "var(--color-lime)",
							color: "var(--color-void)",
							boxShadow: "6px 6px 0 var(--color-void)"
						},
						children: "STUDIO"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-xl text-xl leading-relaxed sm:text-2xl",
				style: {
					fontFamily: "Georgia, serif",
					color: "var(--color-mist)"
				},
				children: "Independent hair studio in Seattle. Cuts & color from MyKey Pocket (they/them) — small chair, big attention."
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
						className: "absolute -top-4 -left-2 -rotate-6 text-3xl sm:text-4xl",
						style: {
							fontFamily: "var(--font-hand)",
							color: "var(--color-flush)"
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
				className: "mt-6 grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border p-4 text-sm",
					style: {
						background: "color-mix(in oklab, var(--color-violet-brand) 12%, white)",
						borderColor: "var(--color-violet-brand)"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "font-bold",
							style: { color: "var(--color-violet-brand)" },
							children: "former Rudy's clients:"
						}),
						" ",
						"i'm not at Rudy's anymore. this is where you book now. same hands, same energy, way fewer hoops."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border p-4 text-sm",
					style: {
						background: "color-mix(in oklab, var(--color-flush) 10%, white)",
						borderColor: "var(--color-flush)"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "font-bold",
							style: { color: "var(--color-flush)" },
							children: "house calls only right now."
						}),
						" ",
						"i come to you, no travel fee yet, but that won't last forever. thank you for rolling with it."
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap items-center gap-4 text-sm",
				style: {
					fontFamily: "var(--font-mono)",
					color: "var(--color-mist)"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 16 }), " HOURS"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "THU 11–6" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "FRI 12–5" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SAT–SUN 12–8" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 16 }), " Seattle, WA"]
					})
				]
			})
		]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		className: "mt-24 grid gap-10 md:grid-cols-[1.2fr_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium uppercase tracking-[0.2em]",
				style: {
					color: "var(--color-flush)",
					fontFamily: "var(--font-mono)"
				},
				children: "about"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-4xl font-black leading-tight sm:text-5xl",
				style: { fontFamily: "var(--font-display)" },
				children: "Small studio, careful hands."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-lg leading-relaxed",
				style: { color: "var(--color-mist)" },
				children: "I'm MyKey (they/them) — a Seattle hairstylist running Pocket Studio as an indie parent chair. Not affiliated with Rudy's Barbershop. I take on a small number of clients each month so every cut and color gets the time it actually needs."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-6 space-y-3 text-base",
				style: { color: "var(--color-void)" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: "var(--color-lime)" },
							children: "▍"
						}), " Textured cuts, gender-inclusive shapes, grown-out grace."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: "var(--color-violet-brand)" },
							children: "▍"
						}), " Color built around your hair's biology — porosity, history, tone."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: "var(--color-flush)" },
							children: "▍"
						}), " Consult-first for new color clients so pricing & timing are honest."]
					})
				]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative rounded-2xl p-6",
			style: {
				background: "var(--color-void)",
				color: "var(--color-bone)",
				boxShadow: "10px 10px 0 var(--color-violet-brand)"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm uppercase tracking-widest",
					style: {
						fontFamily: "var(--font-mono)",
						color: "var(--color-lime)"
					},
					children: "say hi"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 text-2xl font-bold",
					style: { fontFamily: "var(--font-display)" },
					children: "Reach the chair"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 space-y-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "mailto:mykeypocket@icloud.com",
							className: "flex items-center gap-3 hover:underline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								size: 16,
								style: { color: "var(--color-lime)" }
							}), " mykeypocket@icloud.com"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:14259182029",
							className: "flex items-center gap-3 hover:underline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								size: 16,
								style: { color: "var(--color-lime)" }
							}), " 425-918-2029"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								size: 16,
								style: { color: "var(--color-lime)" }
							}), " Seattle, WA · by appointment"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-xs",
					style: { color: "color-mix(in oklab, var(--color-bone) 70%, transparent)" },
					children: "Text is fastest. Please allow up to 24 hours for a reply outside studio hours."
				})
			]
		})]
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "services",
		className: "mt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium uppercase tracking-[0.2em]",
				style: {
					color: "var(--color-flush)",
					fontFamily: "var(--font-mono)"
				},
				children: "services"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-4xl font-black leading-tight sm:text-5xl",
				style: { fontFamily: "var(--font-display)" },
				children: "What you can book."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2",
				children: SERVICES.map((s) => {
					const Icon = s.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `${CAL_BASE}${s.slug}`,
						target: "_blank",
						rel: "noreferrer",
						className: "group relative flex gap-4 rounded-2xl border bg-white p-5 transition hover:-translate-y-0.5",
						style: {
							borderColor: "rgba(18,14,23,.12)",
							boxShadow: "6px 6px 0 rgba(18,14,23,.06)"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute inset-y-3 left-0 w-1.5 rounded-full",
							style: { background: s.accent }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pl-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										size: 18,
										style: { color: s.accent }
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-bold",
										style: { fontFamily: "var(--font-display)" },
										children: s.name
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm",
									style: { color: "var(--color-mist)" },
									children: s.blurb
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex flex-wrap gap-3 text-xs",
									style: {
										fontFamily: "var(--font-mono)",
										color: "var(--color-ash)"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["⏱ ", s.duration] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"📅 ",
										s.leadDays,
										" day",
										s.leadDays === 1 ? "" : "s",
										" out"
									] })]
								})
							]
						})]
					}, s.slug);
				})
			})
		]
	});
}
function Policies() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "policies",
		className: "mt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium uppercase tracking-[0.2em]",
				style: {
					color: "var(--color-flush)",
					fontFamily: "var(--font-mono)"
				},
				children: "policies"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-4xl font-black leading-tight sm:text-5xl",
				style: { fontFamily: "var(--font-display)" },
				children: "The house rules."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-3 sm:grid-cols-2",
				children: [
					["One month at a time", "Books open month-by-month, first come first serve."],
					["Lead times", "Cuts: 2 days · New color consult: 3 days · Existing color: 1 week."],
					["24-hour cancellation", "Cancel or reschedule at least 24 hours before your appointment."],
					["No-show", "No-shows may be charged up to the full quoted / estimated amount."],
					["Confirmation window", "Please confirm your appointment within a 2-hour confirmation window."],
					["House-call space", "Give me a safe, ready spot and an accurate address — and flag allergies or prior chemical work so i don't fry your hair."]
				].map(([title, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border p-5",
					style: {
						background: "var(--color-card-2)",
						borderColor: "rgba(18,14,23,.12)"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-bold",
						style: { fontFamily: "var(--font-display)" },
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm",
						style: { color: "var(--color-mist)" },
						children: body
					})]
				}, title))
			})
		]
	});
}
function Booking() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "book",
		className: "mt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium uppercase tracking-[0.2em]",
				style: {
					color: "var(--color-flush)",
					fontFamily: "var(--font-mono)"
				},
				children: "book"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-4xl font-black leading-tight sm:text-5xl",
				style: { fontFamily: "var(--font-display)" },
				children: "Pick your slot."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 overflow-hidden rounded-2xl border bg-white",
				style: {
					borderColor: "var(--color-void)",
					boxShadow: "10px 10px 0 var(--color-void)"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					src: "https://cal.com/maneautoimation/",
					title: "Book with Pocket Studio",
					className: "h-[820px] w-full",
					style: { border: 0 }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-xs",
				style: { color: "var(--color-ash)" },
				children: [
					"By booking you agree to the studio's policies. See",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/terms",
						className: "underline",
						children: "Terms"
					}),
					" and",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						className: "underline",
						children: "Privacy"
					}),
					"."
				]
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-24 border-t pt-6 text-sm",
		style: {
			borderColor: "rgba(18,14,23,.12)",
			color: "var(--color-ash)"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Pocket Studio · MyKey Pocket · Seattle, WA"
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/terms",
						className: "hover:text-[color:var(--color-void)]",
						children: "Terms"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						className: "hover:text-[color:var(--color-void)]",
						children: "Privacy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://pocketstudio.biz",
						className: "hover:text-[color:var(--color-void)]",
						children: "pocketstudio.biz"
					})
				]
			})]
		})
	});
}
function BookingPopup() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [step, setStep] = (0, import_react.useState)(1);
	const [cat, setCat] = (0, import_react.useState)(null);
	const [chosen, setChosen] = (0, import_react.useState)(null);
	const [emergency, setEmergency] = (0, import_react.useState)(false);
	const reset = () => {
		setStep(1);
		setCat(null);
		setChosen(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => setOpen(true),
			className: "fixed bottom-5 right-5 z-40 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wider transition hover:-translate-y-0.5",
			style: {
				background: "var(--color-void)",
				color: "var(--color-lime)",
				boxShadow: "6px 6px 0 var(--color-lime)",
				fontFamily: "var(--font-display)"
			},
			"aria-label": "Open booking helper",
			children: "book"
		}),
		open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-50 flex items-end justify-end p-4 sm:items-center sm:justify-center",
			style: { background: "rgba(18,14,23,0.55)" },
			onClick: () => setOpen(false),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full max-w-md rounded-2xl border-2 p-6",
				style: {
					background: "var(--color-bone)",
					borderColor: "var(--color-void)",
					boxShadow: "10px 10px 0 var(--color-void)"
				},
				onClick: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setOpen(false);
							reset();
						},
						className: "absolute right-3 top-3 rounded-full p-1 hover:opacity-70",
						"aria-label": "Close",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
					}),
					!chosen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl font-black",
							style: { fontFamily: "var(--font-display)" },
							children: step === 1 ? "cut or color?" : "which one?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm",
							style: { color: "var(--color-mist)" },
							children: "Two quick taps and I'll show your earliest bookable date."
						}),
						step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizButton, {
								label: "cut",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scissors, { size: 18 }),
								onClick: () => {
									setCat("cut");
									setStep(2);
								}
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizButton, {
								label: "color",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { size: 18 }),
								onClick: () => {
									setCat("color");
									setStep(2);
								}
							})]
						}),
						step === 2 && cat && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-2",
							children: [SERVICES.filter((s) => s.category === cat).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setChosen(s),
								className: "flex w-full items-center justify-between rounded-xl border bg-white px-4 py-3 text-left transition hover:-translate-y-0.5",
								style: { borderColor: "rgba(18,14,23,.12)" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: s.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs",
									style: {
										color: "var(--color-ash)",
										fontFamily: "var(--font-mono)"
									},
									children: s.duration
								})]
							}, s.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "mt-2 text-xs underline",
								style: { color: "var(--color-ash)" },
								onClick: () => setStep(1),
								children: "← back"
							})]
						})
					] }),
					chosen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl font-black",
							style: { fontFamily: "var(--font-display)" },
							children: chosen.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 rounded-xl border p-4",
							style: {
								background: "white",
								borderColor: "rgba(18,14,23,.12)"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-widest",
									style: {
										color: "var(--color-ash)",
										fontFamily: "var(--font-mono)"
									},
									children: "duration"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-base font-semibold",
									children: chosen.duration
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 text-xs uppercase tracking-widest",
									style: {
										color: "var(--color-ash)",
										fontFamily: "var(--font-mono)"
									},
									children: "earliest bookable"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-base font-semibold",
									style: { color: "var(--color-violet-brand)" },
									children: earliestDate(chosen.leadDays)
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `${CAL_BASE}${chosen.slug}`,
							target: "_blank",
							rel: "noreferrer",
							className: "mt-5 block w-full rounded-full px-4 py-3 text-center text-sm font-bold uppercase tracking-wider",
							style: {
								background: "var(--color-lime)",
								color: "var(--color-void)",
								boxShadow: "4px 4px 0 var(--color-void)",
								fontFamily: "var(--font-display)"
							},
							children: "book my appointment →"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: reset,
								className: "underline",
								style: { color: "var(--color-ash)" },
								children: "start over"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setEmergency(true),
								className: "inline-flex items-center gap-1 font-semibold",
								style: { color: "var(--color-flush)" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { size: 14 }), " 🚨 need it sooner? emergency request"]
							})]
						})
					] })
				]
			})
		}),
		emergency && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmergencyModal, {
			defaultService: chosen?.name ?? "",
			onClose: () => setEmergency(false)
		})
	] });
}
function QuizButton({ label, icon, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick,
		className: "flex flex-col items-center gap-2 rounded-xl border-2 bg-white py-6 text-sm font-bold uppercase tracking-wider transition hover:-translate-y-0.5",
		style: {
			borderColor: "var(--color-void)",
			boxShadow: "4px 4px 0 var(--color-void)",
			fontFamily: "var(--font-display)"
		},
		children: [icon, label]
	});
}
function EmergencyModal({ defaultService, onClose }) {
	const [state, setState] = (0, import_react.useState)("form");
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		contact: "",
		service: defaultService,
		timing: ""
	});
	async function submit(e) {
		e.preventDefault();
		setState("sending");
		try {
			if (!(await fetch("https://formsubmit.co/ajax/itspocketmykey@gmail.com", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: JSON.stringify({
					_subject: "🚨 EMERGENCY booking request — Pocket Studio",
					...form
				})
			})).ok) throw new Error("bad status");
			setState("ok");
		} catch {
			setState("err");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[60] flex items-center justify-center p-4",
		style: { background: "rgba(18,14,23,0.6)" },
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			onClick: (e) => e.stopPropagation(),
			className: "relative w-full max-w-md rounded-2xl border-2 p-6",
			style: {
				background: "white",
				borderColor: "var(--color-flush)",
				boxShadow: "10px 10px 0 var(--color-flush)"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "absolute right-3 top-3 rounded-full p-1 hover:opacity-70",
					"aria-label": "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
						size: 20,
						style: { color: "var(--color-flush)" }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl font-black",
						style: { fontFamily: "var(--font-display)" },
						children: "emergency request"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm",
					style: { color: "var(--color-mist)" },
					children: "Nothing within lead time? Send the details — I'll reply if I can squeeze you in."
				}),
				state === "form" || state === "sending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "mt-5 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "your name",
							value: form.name,
							onChange: (v) => setForm({
								...form,
								name: v
							}),
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "best contact (phone or email)",
							value: form.contact,
							onChange: (v) => setForm({
								...form,
								contact: v
							}),
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "desired service",
							value: form.service,
							onChange: (v) => setForm({
								...form,
								service: v
							}),
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "when do you need it?",
							value: form.timing,
							onChange: (v) => setForm({
								...form,
								timing: v
							}),
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: state === "sending",
							className: "w-full rounded-full px-4 py-3 text-sm font-bold uppercase tracking-wider",
							style: {
								background: "var(--color-flush)",
								color: "white",
								fontFamily: "var(--font-display)"
							},
							children: state === "sending" ? "sending…" : "send request"
						})
					]
				}) : state === "ok" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 rounded-xl p-4 text-sm",
					style: { background: "color-mix(in oklab, var(--color-lime) 20%, white)" },
					children: "got it — your request is in. I'll reach out at your contact info shortly."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 rounded-xl p-4 text-sm",
					style: { background: "color-mix(in oklab, var(--color-flush) 12%, white)" },
					children: [
						"couldn't send that. text",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:14259182029",
							className: "underline font-semibold",
							children: "425-918-2029"
						}),
						" or email",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:mykeypocket@icloud.com",
							className: "underline font-semibold",
							children: "mykeypocket@icloud.com"
						}),
						" directly."
					]
				})
			]
		})
	});
}
function Field({ label, value, onChange, required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs uppercase tracking-widest",
			style: {
				color: "var(--color-ash)",
				fontFamily: "var(--font-mono)"
			},
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			value,
			onChange: (e) => onChange(e.target.value),
			required,
			className: "mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2",
			style: { borderColor: "rgba(18,14,23,.15)" }
		})]
	});
}
//#endregion
export { Home as component };
