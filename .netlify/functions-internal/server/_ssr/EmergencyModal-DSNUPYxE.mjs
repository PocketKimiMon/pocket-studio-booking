import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/EmergencyModal-DSNUPYxE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EMERGENCY_ENDPOINT = "https://formsubmit.co/ajax/itspocketmykey@gmail.com";
var inputStyle = {
	background: "var(--color-bone)",
	borderColor: "var(--color-void)",
	color: "var(--color-void)"
};
/**
* Emergency request modal. Any element with [data-emergency] opens it.
*/
function EmergencyModal() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [phase, setPhase] = (0, import_react.useState)("form");
	(0, import_react.useEffect)(() => {
		const onClick = (e) => {
			if (e.target.closest("[data-emergency]")) {
				e.preventDefault();
				setPhase("form");
				setOpen(true);
			}
		};
		document.addEventListener("click", onClick);
		return () => document.removeEventListener("click", onClick);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		window.dispatchEvent(new CustomEvent("mybesti:waiting"));
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [open]);
	if (!open) return null;
	const submit = async (e) => {
		e.preventDefault();
		setPhase("sending");
		const f = new FormData(e.currentTarget);
		try {
			const res = await fetch(EMERGENCY_ENDPOINT, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: JSON.stringify({
					_subject: "🚨 EMERGENCY booking request — Pocket Studio",
					_template: "table",
					name: f.get("name"),
					contact: f.get("contact"),
					what: f.get("what"),
					when: f.get("when")
				})
			});
			if (!res.ok) throw new Error(String(res.status));
			setPhase("success");
			window.dispatchEvent(new CustomEvent("mybesti:celebrate"));
		} catch {
			setPhase("error");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Emergency request",
		className: "fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center",
		style: { background: "rgba(18,14,23,.6)" },
		onClick: (e) => {
			if (e.target === e.currentTarget) setOpen(false);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-md rounded-2xl border-2 p-6 sm:p-8",
			style: {
				background: "var(--color-bone)",
				borderColor: "var(--color-void)",
				boxShadow: "10px 10px 0 var(--color-flush)"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Close",
				onClick: () => setOpen(false),
				className: "absolute right-4 top-4 flex h-8 w-8 items-center justify-center border-2 text-lg font-black transition-transform hover:rotate-90",
				style: {
					borderColor: "var(--color-void)",
					background: "#fff"
				},
				children: "×"
			}), phase === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-black",
						style: { fontFamily: "var(--font-display)" },
						children: "got it, request sent. 🎉"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-base leading-relaxed",
						style: { color: "var(--color-mist)" },
						children: [
							"i'll get back to you fast. if it's truly urgent, also text",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:425-918-2029",
								className: "underline underline-offset-4",
								style: { color: "var(--color-flush)" },
								children: "425-918-2029"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen(false),
						className: "mt-6 border-2 px-6 py-2.5 text-sm font-black transition-transform hover:-translate-y-0.5",
						style: {
							background: "var(--color-lime)",
							borderColor: "var(--color-void)",
							boxShadow: "3px 3px 0 var(--color-void)"
						},
						children: "CLOSE"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: {
						fontFamily: "var(--font-mono)",
						fontSize: 12,
						letterSpacing: "0.15em",
						color: "var(--color-flush)"
					},
					children: "EMERGENCY REQUEST"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-3xl font-black leading-tight",
					style: { fontFamily: "var(--font-display)" },
					children: "🚨 need it sooner than the calendar allows?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed",
					style: { color: "var(--color-mist)" },
					children: "tomorrow, this weekend, whenever. tell me and i'll try to make it work."
				}),
				phase === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 rounded-lg border-2 p-3 text-sm",
					style: {
						background: "rgba(232,93,4,.12)",
						borderColor: "var(--color-flush)",
						color: "var(--color-flush)"
					},
					children: [
						"hmm, that didn't go through. text",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:425-918-2029",
							className: "font-bold underline underline-offset-2",
							children: "425-918-2029"
						}),
						" ",
						"or email",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:itspocketmykey@gmail.com",
							className: "font-bold underline underline-offset-2",
							children: "itspocketmykey@gmail.com"
						}),
						" ",
						"instead."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "mt-5 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-bold",
							children: ["your name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								name: "name",
								placeholder: "who am i talking to?",
								className: "mt-1 w-full rounded-lg border-2 px-3 py-2 text-sm font-normal",
								style: inputStyle
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-bold",
							children: ["phone or email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								name: "contact",
								placeholder: "fastest way to reach you",
								className: "mt-1 w-full rounded-lg border-2 px-3 py-2 text-sm font-normal",
								style: inputStyle
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-bold",
							children: ["what do you need?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								name: "what",
								placeholder: "cut? color? event hair? the whole situation?",
								className: "mt-1 w-full rounded-lg border-2 px-3 py-2 text-sm font-normal",
								style: inputStyle
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-bold",
							children: ["when do you need it?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								name: "when",
								placeholder: "e.g. tomorrow afternoon, before saturday…",
								className: "mt-1 w-full rounded-lg border-2 px-3 py-2 text-sm font-normal",
								style: inputStyle
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: phase === "sending",
							className: "w-full border-2 px-6 py-3 text-sm font-black transition-transform hover:-translate-y-0.5 disabled:opacity-60",
							style: {
								background: "var(--color-flush)",
								color: "#fff",
								borderColor: "var(--color-void)",
								boxShadow: "3px 3px 0 var(--color-void)"
							},
							children: phase === "sending" ? "SENDING…" : "SEND EMERGENCY REQUEST →"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs",
							style: { color: "var(--color-ash)" },
							children: [
								"goes straight to my inbox. truly urgent? text",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:425-918-2029",
									className: "underline underline-offset-2",
									children: "425-918-2029"
								}),
								"."
							]
						})
					]
				})
			] })]
		})
	});
}
//#endregion
export { EmergencyModal as t };
