import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/classic-CJP0Y1lo.js
var import_jsx_runtime = require_jsx_runtime();
function Classic() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-[var(--color-void)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between px-4 py-2 text-[var(--color-bone)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-xs uppercase tracking-wider",
				children: "Classic static page (preserved intact)"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "font-mono text-xs underline",
				children: "← all versions"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
			src: "/classic/index.html",
			title: "Classic Pocket Studio booking page",
			className: "w-full flex-1 border-0 bg-white",
			style: { minHeight: "90vh" }
		})]
	});
}
//#endregion
export { Classic as component };
