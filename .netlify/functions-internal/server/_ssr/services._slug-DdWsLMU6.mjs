import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SERVICES } from "./services-CC8WogQK.mjs";
import { t as headFor } from "./seo-BWfvIjKe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-DdWsLMU6.js
var $$splitComponentImporter = () => import("./services._slug-CtXjFfId.mjs");
var Route = createFileRoute("/services/$slug")({
	loader: ({ params }) => {
		const svc = SERVICES.find((s) => s.slug === params.slug);
		if (!svc) throw notFound();
		return svc;
	},
	head: ({ loaderData }) => headFor(`/services/${loaderData?.slug ?? ""}`),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
