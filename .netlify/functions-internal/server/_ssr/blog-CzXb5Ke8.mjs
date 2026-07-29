import { t as UPDATES_NEWEST_FIRST } from "./updates-BGaHA-vd.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-CzXb5Ke8.js
var import_jsx_runtime = require_jsx_runtime();
function UpdatesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			background: "var(--color-bone)",
			color: "var(--color-void)",
			fontFamily: "var(--font-sans)",
			minHeight: "100vh"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DispatchList, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookCta, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterNote, {})
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
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "flex items-center gap-2 text-sm font-black tracking-tight",
				style: { fontFamily: "var(--font-display)" },
				children: "✂ pocket studio · seattle"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "tel:425-918-2029",
					className: "hidden text-sm underline-offset-4 hover:underline md:block",
					style: { fontFamily: "var(--font-mono)" },
					children: "425-918-2029"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/book",
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
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-5 pb-12 pt-14 sm:pb-16 sm:pt-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				style: {
					fontFamily: "var(--font-mono)",
					fontSize: 13,
					letterSpacing: "0.2em",
					color: "var(--color-flush)"
				},
				children: "UPDATES — DISPATCHES FROM THE CHAIR"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-3 text-[13vw] font-extrabold leading-[0.9] tracking-tight sm:text-[88px]",
				style: { fontFamily: "var(--font-display)" },
				children: [
					"dispatches from the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block rounded-full px-4 py-1 align-baseline",
						style: {
							background: "var(--color-lime)",
							color: "var(--color-void)",
							boxShadow: "6px 6px 0 var(--color-void)"
						},
						children: "chair"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 max-w-xl text-xl leading-relaxed sm:text-2xl",
				style: {
					fontFamily: "Georgia, serif",
					color: "var(--color-mist)"
				},
				children: "not a blog, not a newsletter. dated notes from one chair and one brain — what's changing, what i'm hunting for, and the stories clients let me tell. signed, always, — mykey."
			})
		]
	});
}
function DispatchList() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-6xl px-5 pb-16 sm:pb-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t-2",
			style: { borderColor: "var(--color-void)" },
			children: UPDATES_NEWEST_FIRST.map((post, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "border-b-2 py-10 sm:py-12",
				style: { borderColor: "var(--color-void)" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								fontFamily: "var(--font-mono)",
								fontSize: 13,
								color: "var(--color-ash)"
							},
							children: String(i + 1).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
							dateTime: post.dateISO,
							style: {
								fontFamily: "var(--font-mono)",
								fontSize: 12,
								color: "var(--color-ash)",
								textTransform: "uppercase",
								letterSpacing: "0.1em"
							},
							children: post.displayDate
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl font-black leading-tight tracking-tight sm:text-5xl",
						style: { fontFamily: "var(--font-display)" },
						children: post.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 border-2 p-5 sm:p-8",
						style: {
							background: "#fff",
							borderColor: "rgba(18,14,23,.14)",
							boxShadow: "6px 6px 0 rgba(18,14,23,.08)"
						},
						children: [post.body.map((paragraph, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: j === 0 ? "text-base leading-relaxed sm:text-lg" : "mt-4 text-base leading-relaxed sm:text-lg",
							style: { color: "var(--color-mist)" },
							children: paragraph
						}, j)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-2xl",
							style: {
								fontFamily: "var(--font-hand)",
								color: "var(--color-flush)"
							},
							children: "— mykey"
						})]
					})
				]
			}, post.slug))
		})
	});
}
function BookCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t-2",
		style: {
			background: "var(--color-void)",
			borderColor: "var(--color-void)"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 text-center sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-black leading-tight sm:text-5xl",
					style: {
						fontFamily: "var(--font-display)",
						color: "var(--color-bone)"
					},
					children: "rather skip the reading and just get the hair?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-md text-lg",
					style: { color: "var(--color-ash)" },
					children: "house calls only right now, no travel fee yet. the calendar opens on the 1st for the full month ahead."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/book",
					className: "mt-8 inline-block border-2 px-10 py-4 text-lg font-black transition-transform hover:-translate-y-0.5",
					style: {
						background: "var(--color-lime)",
						borderColor: "var(--color-lime)",
						boxShadow: "4px 4px 0 var(--color-violet-brand)",
						color: "var(--color-void)"
					},
					children: "BOOK A HOUSE CALL →"
				})
			]
		})
	});
}
function FooterNote() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t-2 px-5 py-8",
		style: {
			background: "var(--color-void)",
			borderColor: "var(--color-void)"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mx-auto max-w-6xl text-center text-xs",
			style: {
				color: "var(--color-ash)",
				fontFamily: "var(--font-mono)"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "underline-offset-4 hover:underline",
					children: "pocket studio"
				}),
				" ",
				"· © pocket studio / mykey pocket · not affiliated with Rudy's Barbershop"
			]
		})
	});
}
//#endregion
export { UpdatesPage as component };
