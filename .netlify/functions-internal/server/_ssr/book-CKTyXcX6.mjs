import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SERVICES, t as CAL_BASE } from "./services-DG2tVleS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-CKTyXcX6.js
var import_jsx_runtime = require_jsx_runtime();
function BookingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			background: "var(--color-bone)",
			color: "var(--color-void)",
			fontFamily: "var(--font-sans)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-50 border-b-2",
				style: {
					background: "var(--color-bone)",
					borderColor: "var(--color-void)"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "text-sm font-black tracking-tight",
						style: { fontFamily: "var(--font-display)" },
						children: "✂ POCKET STUDIO"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "hidden text-sm underline-offset-4 hover:underline sm:block",
							style: { fontFamily: "var(--font-mono)" },
							children: "← home"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:425-918-2029",
							className: "border-2 px-4 py-1.5 text-sm font-black transition-transform hover:-translate-y-0.5",
							style: {
								background: "var(--color-lime)",
								borderColor: "var(--color-void)",
								boxShadow: "3px 3px 0 var(--color-void)"
							},
							children: "CALL/TEXT"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-5 pb-10 pt-12 sm:pt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: {
							fontFamily: "var(--font-mono)",
							fontSize: 13,
							letterSpacing: "0.2em",
							color: "var(--color-flush)"
						},
						children: "BOOKING"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-3 text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl",
						style: { fontFamily: "var(--font-display)" },
						children: [
							"pick a slot.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block rounded-full px-4 py-1 align-baseline",
								style: {
									background: "var(--color-lime)",
									color: "var(--color-void)",
									boxShadow: "6px 6px 0 var(--color-void)"
								},
								children: "i come to you."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-xl leading-relaxed",
						style: {
							fontFamily: "Georgia, serif",
							color: "var(--color-mist)"
						},
						children: "booking runs through cal.com — pick a service below and you'll land on my calendar. house calls only right now, no travel fee for now."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-6xl px-5 pb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-2 p-6 sm:p-8",
					style: {
						background: "var(--color-card-2)",
						borderColor: "var(--color-void)",
						boxShadow: "6px 6px 0 var(--color-void)"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-black tracking-tight",
						style: { fontFamily: "var(--font-display)" },
						children: "how it works"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
						children: [
							"you pick a slot on cal.com",
							"you get a confirmation + my number",
							"$25 deposit holds your slot (applied to your total)",
							"i show up with the chair, tools, and gossip"
						].map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-black",
								style: {
									background: "var(--color-lime)",
									color: "var(--color-void)"
								},
								children: i + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm leading-relaxed",
								style: { color: "var(--color-mist)" },
								children: step
							})]
						}, i))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-5 pb-16 sm:pb-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-black tracking-tight sm:text-5xl",
						style: { fontFamily: "var(--font-display)" },
						children: "the calendar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-base",
						style: {
							fontFamily: "var(--font-mono)",
							color: "var(--color-ash)"
						},
						children: "each service has its own cal.com page. opens the 1st for the full month ahead — prime slots go fast."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: SERVICES.map((svc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `${CAL_BASE}${svc.slug}`,
							target: "_blank",
							rel: "noreferrer",
							className: "group block border-2 p-5 transition-transform hover:-translate-y-1",
							style: {
								background: "#fff",
								borderColor: "var(--color-void)",
								boxShadow: "5px 5px 0 var(--color-void)"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-block rounded-full px-3 py-1 text-sm font-black",
										style: {
											background: svc.accent,
											color: "var(--color-void)"
										},
										children: svc.price
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											fontFamily: "var(--font-mono)",
											fontSize: 12,
											color: "var(--color-ash)"
										},
										children: svc.duration
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-xl font-black leading-tight",
									style: { fontFamily: "var(--font-display)" },
									children: svc.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm",
									style: { color: "var(--color-mist)" },
									children: svc.blurb
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm font-bold transition-transform group-hover:translate-x-1",
									style: { color: "var(--color-flush)" },
									children: "grab a slot ↗"
								})
							]
						}, svc.slug))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "border-y-2 px-5 py-12 text-center",
				style: {
					background: "var(--color-void)",
					borderColor: "var(--color-void)"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-2xl font-black leading-snug sm:text-3xl",
					style: {
						fontFamily: "var(--font-display)",
						color: "var(--color-bone)"
					},
					children: [
						"cal.com being weird? just text me —",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:425-918-2029",
							className: "underline",
							style: { color: "var(--color-lime)" },
							children: "425-918-2029"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm",
					style: { color: "var(--color-ash)" },
					children: "i answer my own phone. thu–sun, seattle."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-6xl px-5 py-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-3",
					children: [
						{
							h: "the deposit",
							p: "$25 holds your slot and comes off your total. no-shows make me sad and make other clients miss out."
						},
						{
							h: "the lead time",
							p: "cuts book at least 2 days out. new color clients: consult first, 3 days out. existing color: 1 week out."
						},
						{
							h: "the disclaimer",
							p: "pocket studio is independent — not affiliated with rudy's barbershop. terms + privacy live on the classic page footer."
						}
					].map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-2 p-5",
						style: {
							background: i % 2 ? "#fff" : "var(--color-card-2)",
							borderColor: "var(--color-void)",
							boxShadow: "4px 4px 0 var(--color-void)"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-black",
							style: { fontFamily: "var(--font-display)" },
							children: x.h
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed",
							style: { color: "var(--color-mist)" },
							children: x.p
						})]
					}, i))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t px-5 py-8",
				style: {
					background: "var(--color-void)",
					borderColor: "var(--color-ash)"
				},
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/classic/terms.html",
								className: "underline-offset-4 hover:underline",
								children: "Terms"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/classic/privacy.html",
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
//#endregion
export { BookingPage as component };
