import { t as POSTS } from "./posts-D9Z9S4v5.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as ReadingModeToggle } from "./ReadingModeToggle-DTkXsAiK.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-KqvdlG1O.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
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
					className: "mx-auto flex max-w-4xl items-center justify-between gap-3 px-5 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "text-sm font-black tracking-tight",
						style: { fontFamily: "var(--font-display)" },
						children: "← pocket studio"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadingModeToggle, { compact: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/book",
							className: "border-2 px-4 py-1.5 text-sm font-black transition-transform hover:-translate-y-0.5",
							style: {
								background: "var(--color-lime)",
								borderColor: "var(--color-void)",
								boxShadow: "3px 3px 0 var(--color-void)",
								color: "var(--color-void)"
							},
							children: "BOOK"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-4xl px-5 pb-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "pt-12 sm:pt-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									fontFamily: "var(--font-mono)",
									fontSize: 12,
									letterSpacing: "0.2em",
									color: "var(--color-flush)"
								},
								children: "JOURNAL"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl",
								style: { fontFamily: "var(--font-display)" },
								children: "dispatches from the chair"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xl text-lg leading-relaxed",
								style: { color: "var(--color-mist)" },
								children: "dated notes from one brain behind one chair. house-call logistics, color season, shop gossip (the legal kind), and whatever else needs saying."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
								className: "mt-8 overflow-hidden rounded-2xl border-2",
								style: {
									borderColor: "var(--color-void)",
									boxShadow: "8px 8px 0 var(--color-lime)"
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/blog-header.jpg",
									alt: "the chair, mid-house-call — tools out, tea on",
									className: "aspect-[21/9] w-full object-cover",
									loading: "eager"
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "mt-12 space-y-4",
						children: POSTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/blog/$slug",
							params: { slug: p.slug },
							className: "block border-2 p-5 transition-transform hover:-translate-y-0.5 sm:p-6",
							style: {
								borderColor: "var(--color-void)",
								borderRadius: 16,
								background: i === 0 ? "var(--color-card-2)" : "var(--color-card-w)",
								boxShadow: i === 0 ? "6px 6px 0 var(--color-void)" : "3px 3px 0 var(--color-void)"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: {
										fontFamily: "var(--font-mono)",
										fontSize: 11,
										color: "var(--color-ash)",
										textTransform: "uppercase",
										letterSpacing: "0.12em"
									},
									children: p.date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-1 text-2xl font-black leading-tight sm:text-3xl",
									style: { fontFamily: "var(--font-display)" },
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed sm:text-base",
									style: { color: "var(--color-mist)" },
									children: p.excerpt
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-xl",
									style: {
										fontFamily: "var(--font-hand)",
										color: "var(--color-flush)"
									},
									children: "read it →"
								})
							]
						}, p.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-12 border-2 p-6 text-center",
						style: {
							borderColor: "var(--color-void)",
							borderRadius: 16,
							background: "var(--color-lime)",
							boxShadow: "6px 6px 0 var(--color-void)"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-2xl",
							style: { fontFamily: "var(--font-hand)" },
							children: "enough reading — your ends aren't getting any less split ~"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/book",
							className: "mt-4 inline-block border-2 px-8 py-3 text-base font-black transition-transform hover:-translate-y-0.5",
							style: {
								background: "var(--color-void)",
								borderColor: "var(--color-void)",
								color: "var(--color-bone)",
								boxShadow: "4px 4px 0 rgba(11,11,15,.4)"
							},
							children: "BOOK THE CHAIR →"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t-2 px-5 py-8 text-center",
				style: {
					borderColor: "var(--color-void)",
					background: "var(--color-card-2)"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm",
					style: { color: "var(--color-mist)" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "underline underline-offset-4",
							style: { color: "var(--color-lime)" },
							children: "pocket studio"
						}),
						" ",
						"·",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "sms:425-918-2029",
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
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs",
					style: {
						fontFamily: "var(--font-mono)",
						color: "var(--color-ash)"
					},
					children: "© pocket studio / mykey pocket · seattle, wa"
				})]
			})
		]
	});
}
//#endregion
export { Page as component };
