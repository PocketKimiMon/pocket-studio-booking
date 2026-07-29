import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as EmergencyModal } from "./EmergencyModal-DSNUPYxE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mobile-4KqnxHst.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SERVICES = [
	{
		name: "Buzz Cut",
		slug: "buzz-cut",
		duration: "30 MIN",
		price: "at the chair",
		emoji: "✂"
	},
	{
		name: "Short Cut",
		slug: "short-cut",
		duration: "45 MIN",
		price: "at the chair",
		emoji: "💇"
	},
	{
		name: "Long Cut",
		slug: "long-cut",
		duration: "60 MIN",
		price: "at the chair",
		emoji: "🦁"
	},
	{
		name: "New-Client Color Consult",
		slug: "hair-consultation",
		duration: "45 MIN",
		price: "at the chair",
		emoji: "🎨"
	},
	{
		name: "Existing-Client Color Appointment",
		slug: "existing-client-color-appointment",
		duration: "3 HR / UP TO 5 HR",
		price: "at the chair",
		emoji: "🌈"
	}
];
var POSTS = [{
	date: "JUL 21, 2026",
	title: "former rudy's clients: this is where you book now",
	body: "i'm not at rudy's anymore. same hands, same energy, way fewer hoops. book direct, i come to you, done."
}, {
	date: "JUL 14, 2026",
	title: "house calls + the hunt for a new chair",
	body: "house calls only right now — i show up, set up wherever works, and get you sorted. no travel fee for now. call it a thank-you while i figure out my next spot."
}];
function MobilePage() {
	const [openSlug, setOpenSlug] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		style: {
			background: "var(--color-bone)",
			color: "var(--color-void)",
			fontFamily: "var(--font-sans)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @media (prefers-reduced-motion: reduce) {
          .psm-pulse { animation: none !important; }
        }
        .psm-pulse { animation: psm-pulse 1.6s ease-in-out infinite; }
        @keyframes psm-pulse { 0%,100% { opacity: 1; } 50% { opacity: .35; } }
      ` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b-2 px-4 py-3",
				style: {
					background: "var(--color-bone)",
					borderColor: "var(--color-void)"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-md items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2",
						style: {
							fontFamily: "var(--font-mono)",
							fontSize: 11
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "psm-pulse inline-block h-2 w-2 rounded-full",
							style: { background: "var(--color-go)" }
						}), "BOOKING OPEN"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "tel:425-918-2029",
						className: "text-sm font-black underline underline-offset-4",
						style: { fontFamily: "var(--font-mono)" },
						children: "425-918-2029"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-md px-4 pb-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "pt-10 pb-8 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									fontFamily: "var(--font-mono)",
									fontSize: 11,
									letterSpacing: "0.2em",
									color: "var(--color-flush)"
								},
								children: "YOUR CHAIR MOVED"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-2 text-6xl font-black leading-[0.9] tracking-tight",
								style: { fontFamily: "var(--font-display)" },
								children: [
									"pocket",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-block rounded-full px-4",
										style: {
											background: "var(--color-lime)",
											color: "var(--color-void)",
											boxShadow: "4px 4px 0 var(--color-void)"
										},
										children: "studio"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-base leading-relaxed",
								style: { color: "var(--color-mist)" },
								children: "cuts + color with mykey. i come to you — house calls only, seattle area. no travel fee right now."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-xs",
								style: {
									fontFamily: "var(--font-mono)",
									color: "var(--color-ash)"
								},
								children: "THU 11–6 · FRI 12–5 · SAT–SUN 12–8"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-2xl border-2 p-5",
						style: {
							background: "var(--color-lime)",
							borderColor: "var(--color-void)",
							boxShadow: "6px 6px 0 var(--color-void)"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									fontFamily: "var(--font-mono)",
									fontSize: 11,
									letterSpacing: "0.15em"
								},
								children: "CURRENT DEAL"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 text-2xl font-black uppercase",
								style: { fontFamily: "var(--font-display)" },
								children: "spill the tea ☕"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed",
								style: { color: "var(--color-void)" },
								children: "book 2+ days out and you get the full story of why i left the old shop — plus product recs — during your appointment."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: {
								fontFamily: "var(--font-mono)",
								fontSize: 11,
								letterSpacing: "0.2em",
								color: "var(--color-ash)"
							},
							children: "PICK A SERVICE"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 space-y-3",
							children: SERVICES.map((s) => {
								const open = openSlug === s.slug;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "overflow-hidden rounded-2xl border-2",
									style: {
										borderColor: "var(--color-void)",
										background: "var(--color-card-w)",
										boxShadow: "4px 4px 0 var(--color-void)"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										"aria-expanded": open,
										onClick: () => setOpenSlug(open ? null : s.slug),
										className: "flex w-full items-center justify-between gap-3 px-4 py-4 text-left",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "block text-lg font-black",
											style: { fontFamily: "var(--font-display)" },
											children: [
												s.emoji,
												" ",
												s.name
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs",
											style: {
												fontFamily: "var(--font-mono)",
												color: "var(--color-ash)"
											},
											children: s.duration
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs",
											style: {
												fontFamily: "var(--font-mono)",
												color: "var(--color-violet-brand)"
											},
											children: s.price
										})]
									}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "border-t-2 px-4 py-4",
										style: { borderColor: "var(--color-void)" },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: `https://cal.com/maneautoimation/${s.slug}`,
												target: "_blank",
												rel: "noreferrer",
												className: "flex-1 rounded-xl border-2 px-4 py-3 text-center text-sm font-black",
												style: {
													background: "var(--color-lime)",
													borderColor: "var(--color-void)",
													color: "var(--color-void)",
													boxShadow: "3px 3px 0 var(--color-void)"
												},
												children: "BOOK →"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/services/$slug",
												params: { slug: s.slug },
												className: "flex-1 rounded-xl border-2 px-4 py-3 text-center text-sm font-black",
												style: {
													borderColor: "var(--color-void)",
													color: "var(--color-void)"
												},
												children: "DETAILS"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-3 text-xs",
											style: {
												fontFamily: "var(--font-mono)",
												color: "var(--color-ash)"
											},
											children: [
												s.slug === "existing-client-color-appointment" ? "books 1 week out" : s.slug === "hair-consultation" ? "books 3 days out" : "books 2 days out",
												" ",
												"· one month at a time"
											]
										})]
									})]
								}, s.slug);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"data-emergency": true,
						className: "mt-6 w-full rounded-2xl border-2 px-4 py-4 text-sm font-black",
						style: {
							background: "var(--color-flush)",
							borderColor: "var(--color-flush)",
							color: "#fff",
							boxShadow: "4px 4px 0 var(--color-violet-brand)"
						},
						children: "🚨 need it sooner? emergency request"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: {
								fontFamily: "var(--font-mono)",
								fontSize: 11,
								letterSpacing: "0.2em",
								color: "var(--color-ash)"
							},
							children: "DISPATCHES FROM THE CHAIR"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 space-y-3",
							children: [POSTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-2xl border-2 p-4",
								style: {
									borderColor: "var(--color-void)",
									background: "var(--color-card-w)",
									boxShadow: "3px 3px 0 var(--color-void)"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										style: {
											fontFamily: "var(--font-mono)",
											fontSize: 10,
											color: "var(--color-ash)",
											letterSpacing: "0.1em"
										},
										children: p.date
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 text-lg font-black",
										style: { fontFamily: "var(--font-display)" },
										children: p.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm leading-relaxed",
										style: { color: "var(--color-mist)" },
										children: p.body
									})
								]
							}, p.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/blog",
								className: "block text-center text-sm underline underline-offset-4",
								style: {
									color: "var(--color-violet-brand)",
									fontFamily: "var(--font-mono)"
								},
								children: "all dispatches →"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: {
								fontFamily: "var(--font-mono)",
								fontSize: 11,
								letterSpacing: "0.2em",
								color: "var(--color-ash)"
							},
							children: "THE SHORT RULES"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 space-y-2 text-sm",
							style: { color: "var(--color-mist)" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· one month at a time, first come first serve" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· cuts book 2 days out · consult 3 · existing color 1 week" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· 24-hour cancellation — emergencies are real, ghosting isn't" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· no-call-no-show = charged up to the full amount" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· 2-hour verification text — reply to hold your slot" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· house calls: safe space, pets secured if we haven't met them" })
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t-2 px-4 py-8 text-center",
				style: {
					borderColor: "var(--color-void)",
					background: "var(--color-card-2)"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm",
						children: [
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
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-xs",
						style: {
							fontFamily: "var(--font-mono)",
							color: "var(--color-ash)"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "underline-offset-4 hover:underline",
								children: "full site"
							}),
							" ·",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy",
								className: "underline-offset-4 hover:underline",
								children: "privacy"
							}),
							" ·",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/terms",
								className: "underline-offset-4 hover:underline",
								children: "terms"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs",
						style: {
							fontFamily: "var(--font-mono)",
							color: "var(--color-ash)"
						},
						children: "© pocket studio / mykey pocket · seattle, wa · not affiliated with rudy's barbershop"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmergencyModal, {})
		]
	});
}
//#endregion
export { MobilePage as component };
