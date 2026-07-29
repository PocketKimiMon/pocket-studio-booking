import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ReadingModeToggle-DTkXsAiK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Reading-mode (dyslexia-friendly) toggle. Works with /reading-mode.js,
* which owns the state (default ON, persisted in localStorage) and also
* handles clicks via the [data-reading-toggle] attribute — so this button
* just renders state and lets the global handler do the work.
*/
function ReadingModeToggle({ compact = false }) {
	const [on, setOn] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const sync = () => setOn(window.PSReadingMode ? window.PSReadingMode.isOn() : true);
		sync();
		const handler = () => sync();
		document.addEventListener("ps-reading-mode-change", handler);
		return () => document.removeEventListener("ps-reading-mode-change", handler);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"data-reading-toggle": true,
		"aria-pressed": on,
		"aria-label": (on ? "Turn off" : "Turn on") + " dyslexia-friendly reading mode",
		title: "Dyslexia-friendly reading mode (on by default)",
		style: {
			display: "inline-flex",
			alignItems: "center",
			gap: compact ? 6 : 8,
			padding: compact ? "6px 10px" : "8px 14px",
			borderRadius: "var(--radius-pill, 100px)",
			border: "1px solid var(--border-subtle, rgba(244,239,230,.12))",
			background: "var(--surface, #16161d)",
			color: "var(--fg2, #adb0bd)",
			fontFamily: "var(--font-mono, ui-monospace, monospace)",
			fontSize: compact ? 10 : 11,
			letterSpacing: "0.08em",
			textTransform: "uppercase",
			cursor: "pointer",
			transition: "background var(--dur-fast,.12s), color var(--dur-fast,.12s)"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			style: {
				width: 8,
				height: 8,
				borderRadius: "50%",
				background: on ? "var(--cyan, #33cbd2)" : "var(--ink-600, #2a2a36)",
				boxShadow: on ? "0 0 6px var(--cyan, #33cbd2)" : "none"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"data-reading-label": true,
			children: on ? "Reading mode: on" : "Reading mode: off"
		})]
	});
}
//#endregion
export { ReadingModeToggle as t };
