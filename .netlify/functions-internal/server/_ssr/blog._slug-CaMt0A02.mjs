import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-CaMt0A02.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "grid min-h-screen place-items-center px-6 text-center",
	style: {
		background: "var(--color-bone)",
		color: "var(--color-void)"
	},
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "text-4xl font-black",
		style: { fontFamily: "var(--font-display)" },
		children: "that dispatch doesn't exist"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/blog",
		className: "mt-6 inline-block border-2 px-6 py-3 font-black",
		style: {
			background: "var(--color-lime)",
			borderColor: "var(--color-void)",
			boxShadow: "4px 4px 0 var(--color-void)",
			color: "var(--color-void)"
		},
		children: "← all dispatches"
	})] })
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
