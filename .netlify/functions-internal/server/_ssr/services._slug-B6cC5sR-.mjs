import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SERVICES, t as CAL_BASE } from "./services-DG2tVleS.mjs";
import { i as Route } from "./services._slug-CfgdBA4k.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-B6cC5sR-.js
var import_jsx_runtime = require_jsx_runtime();
function ServicePage() {
	const svc = Route.useLoaderData();
	const idx = SERVICES.findIndex((s) => s.slug === svc.slug);
	const next = SERVICES[(idx + 1) % SERVICES.length];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			background: "var(--color-bone)",
			color: "var(--color-void)",
			fontFamily: "var(--font-sans)",
			minHeight: "100vh"
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
							hash: "services",
							className: "hidden text-sm underline-offset-4 hover:underline sm:block",
							style: { fontFamily: "var(--font-mono)" },
							children: "← all services"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `${CAL_BASE}${svc.slug}`,
							target: "_blank",
							rel: "noreferrer",
							className: "border-2 px-4 py-1.5 text-sm font-black transition-transform hover:-translate-y-0.5",
							style: {
								background: "var(--color-lime)",
								borderColor: "var(--color-void)",
								boxShadow: "3px 3px 0 var(--color-void)"
							},
							children: "BOOK"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-5 pb-10 pt-12 sm:pt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						style: {
							fontFamily: "var(--font-mono)",
							fontSize: 12,
							letterSpacing: "0.15em",
							color: "var(--color-ash)"
						},
						children: [
							"SERVICE 0",
							idx + 1,
							" / 0",
							SERVICES.length
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-2 text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl",
						style: { fontFamily: "var(--font-display)" },
						children: [svc.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: svc.accent === "var(--color-lime)" ? "var(--color-flush)" : svc.accent },
							children: "."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-wrap items-center gap-3",
						style: {
							fontFamily: "var(--font-mono)",
							fontSize: 14
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "border-2 px-3 py-1",
								style: {
									borderColor: "var(--color-void)",
									background: "#fff"
								},
								children: svc.duration
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "border-2 px-3 py-1 font-black",
								style: {
									borderColor: "var(--color-void)",
									background: svc.accent,
									color: "var(--color-void)"
								},
								children: svc.price
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: "var(--color-ash)" },
								children: "house call · Seattle"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-xl leading-relaxed",
						style: {
							fontFamily: "Georgia, serif",
							color: "var(--color-mist)"
						},
						children: svc.detail
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-5 pb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `grid gap-4 ${svc.images.length === 1 ? "sm:grid-cols-[2fr_1fr]" : svc.images.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`,
					children: [svc.images.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
						className: `overflow-hidden border-2 ${i % 2 === 1 ? "sm:translate-y-4" : ""}`,
						style: {
							borderColor: "var(--color-void)",
							boxShadow: "6px 6px 0 var(--color-void)",
							background: "#fff"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img.src,
							alt: img.alt,
							className: "aspect-[4/5] w-full object-cover",
							loading: i === 0 ? "eager" : "lazy"
						})
					}, img.src)), svc.images.length === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center border-2 p-6",
						style: {
							borderColor: "var(--color-void)",
							background: "var(--color-card-2)",
							boxShadow: "6px 6px 0 var(--color-void)"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rotate-[-3deg] text-3xl leading-snug",
							style: {
								fontFamily: "var(--font-hand)",
								color: "var(--color-flush)"
							},
							children: "fresh out of the chair — more coming to the wall soon ~"
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs",
					style: {
						fontFamily: "var(--font-mono)",
						color: "var(--color-ash)"
					},
					children: "real clients, real couches · shared with permission"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y-2",
				style: {
					background: "var(--color-card-2)",
					borderColor: "var(--color-void)"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-[1.3fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-black",
						style: { fontFamily: "var(--font-display)" },
						children: "what happens"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-6 space-y-4",
						children: svc.whatHappens.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-8 w-8 shrink-0 items-center justify-center border-2 text-sm font-black",
								style: {
									borderColor: "var(--color-void)",
									background: i === 0 ? svc.accent : "#fff",
									fontFamily: "var(--font-mono)"
								},
								children: i + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "pt-1 text-base leading-relaxed",
								style: { color: "var(--color-mist)" },
								children: step
							})]
						}, i))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "self-start border-2 p-6",
						style: {
							background: "var(--color-void)",
							color: "var(--color-bone)",
							borderColor: "var(--color-void)",
							boxShadow: "6px 6px 0 " + (svc.accent === "var(--color-lime)" ? "var(--color-lime)" : svc.accent)
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-black",
								style: { fontFamily: "var(--font-display)" },
								children: "good for"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed",
								style: { color: "var(--color-bone)" },
								children: svc.goodFor
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-xs leading-relaxed",
								style: { color: "var(--color-ash)" },
								children: "every appointment is a house call — i bring the chair, tools, and the gossip. you bring decent light and an outlet."
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-5 py-14 text-center sm:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-black sm:text-5xl",
						style: { fontFamily: "var(--font-display)" },
						children: "want this one?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `${CAL_BASE}${svc.slug}`,
							target: "_blank",
							rel: "noreferrer",
							className: "border-2 px-8 py-3 text-base font-black transition-transform hover:-translate-y-0.5",
							style: {
								background: svc.accent,
								borderColor: "var(--color-void)",
								boxShadow: "4px 4px 0 var(--color-void)",
								color: "var(--color-void)"
							},
							children: [
								"BOOK ",
								svc.name.toUpperCase(),
								" →"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/book",
							className: "border-2 px-8 py-3 text-base font-black transition-transform hover:-translate-y-0.5",
							style: {
								background: "#fff",
								borderColor: "var(--color-void)",
								boxShadow: "4px 4px 0 var(--color-void)"
							},
							children: "SEE ALL SLOTS"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 text-sm",
						style: { color: "var(--color-ash)" },
						children: [
							"Next up:",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services/$slug",
								params: { slug: next.slug },
								className: "font-bold underline underline-offset-4",
								style: { color: "var(--color-void)" },
								children: [next.name, " →"]
							})
						]
					})
				]
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
export { ServicePage as component };
