import { t as POSTS } from "./posts-D9Z9S4v5.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as ReadingModeToggle } from "./ReadingModeToggle-DTkXsAiK.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./blog._slug-Bzl75u77.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-WLIRzjpI.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const post = Route.useLoaderData();
	const others = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
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
					className: "mx-auto flex max-w-3xl items-center justify-between gap-3 px-5 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/blog",
						className: "text-sm font-black tracking-tight",
						style: { fontFamily: "var(--font-display)" },
						children: "← dispatches"
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
				className: "mx-auto max-w-3xl px-5 pb-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "pt-12 sm:pt-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								style: {
									fontFamily: "var(--font-mono)",
									fontSize: 12,
									letterSpacing: "0.2em",
									color: "var(--color-flush)"
								},
								children: [post.date, " · DISPATCH FROM THE CHAIR"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl",
								style: { fontFamily: "var(--font-display)" },
								children: post.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
								className: "mt-8 overflow-hidden rounded-2xl border-2",
								style: {
									borderColor: "var(--color-void)",
									boxShadow: "6px 6px 0 var(--color-lime)"
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/blog-header.jpg",
									alt: "the chair, mid-house-call",
									className: "aspect-[21/9] w-full object-cover",
									loading: "eager"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 space-y-5",
								children: post.body.map((para, i) => para.trim() === "— mykey" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "pt-2 text-3xl",
									style: {
										fontFamily: "var(--font-hand)",
										color: "var(--color-flush)"
									},
									children: "— mykey"
								}, i) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-lg leading-relaxed",
									style: { color: "var(--color-mist)" },
									children: para
								}, i))
							})
						]
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
							children: "want the chair version of this conversation? ~"
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
					}),
					others.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: {
								fontFamily: "var(--font-mono)",
								fontSize: 12,
								letterSpacing: "0.15em",
								color: "var(--color-ash)"
							},
							children: "KEEP READING"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid gap-3",
							children: others.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/blog/$slug",
								params: { slug: o.slug },
								className: "group flex items-baseline justify-between gap-4 border-2 px-5 py-4 transition-transform hover:-translate-y-0.5",
								style: {
									borderColor: "var(--color-void)",
									borderRadius: 12,
									background: "var(--color-card-w)",
									boxShadow: "3px 3px 0 var(--color-void)"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs",
									style: {
										fontFamily: "var(--font-mono)",
										color: "var(--color-ash)"
									},
									children: o.date
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-lg font-black",
									style: { fontFamily: "var(--font-display)" },
									children: o.title
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 transition-transform group-hover:translate-x-1",
									children: "→"
								})]
							}, o.slug))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t-2 px-5 py-8 text-center",
				style: {
					borderColor: "var(--color-void)",
					background: "var(--color-card-2)"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs",
					style: {
						fontFamily: "var(--font-mono)",
						color: "var(--color-ash)"
					},
					children: [
						"© pocket studio / mykey pocket · seattle, wa ·",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "underline-offset-4 hover:underline",
							children: "home"
						})
					]
				})
			})
		]
	});
}
//#endregion
export { Page as component };
