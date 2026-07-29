import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as ReadingModeToggle } from "./ReadingModeToggle-DTkXsAiK.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LegalLayout-D4mp2i5B.js
var import_jsx_runtime = require_jsx_runtime();
function LegalSection({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-2xl font-black tracking-tight",
			style: {
				fontFamily: "var(--font-display)",
				color: "var(--color-void)"
			},
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 space-y-3 text-base leading-relaxed",
			style: { color: "var(--color-mist)" },
			children
		})]
	});
}
function LegalLayout({ kicker, title, updated, intro, children }) {
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
				className: "mx-auto max-w-3xl px-5 pb-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-12 sm:pt-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									fontFamily: "var(--font-mono)",
									fontSize: 12,
									letterSpacing: "0.2em",
									color: "var(--color-lime)"
								},
								children: kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl",
								style: { fontFamily: "var(--font-display)" },
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm",
								style: {
									fontFamily: "var(--font-mono)",
									color: "var(--color-ash)"
								},
								children: ["last updated: ", updated]
							}),
							intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-lg leading-relaxed",
								style: { color: "var(--color-mist)" },
								children: intro
							})
						]
					}),
					children,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14 border-2 p-5 text-sm leading-relaxed",
						style: {
							borderColor: "var(--color-void)",
							borderRadius: 12,
							background: "var(--color-card-2)",
							color: "var(--color-mist)"
						},
						children: [
							"questions about any of this? text",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "sms:425-918-2029",
								className: "underline underline-offset-4",
								style: { color: "var(--color-lime)" },
								children: "425-918-2029"
							}),
							" ",
							"or email",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:mykeypocket@icloud.com",
								className: "underline underline-offset-4",
								style: { color: "var(--color-lime)" },
								children: "mykeypocket@icloud.com"
							}),
							". i'd rather explain a clause than have you guess at it."
						]
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
							to: "/privacy",
							className: "underline-offset-4 hover:underline",
							children: "privacy"
						}),
						" ",
						"·",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/terms",
							className: "underline-offset-4 hover:underline",
							children: "terms"
						})
					]
				})
			})
		]
	});
}
//#endregion
export { LegalSection as n, LegalLayout as t };
