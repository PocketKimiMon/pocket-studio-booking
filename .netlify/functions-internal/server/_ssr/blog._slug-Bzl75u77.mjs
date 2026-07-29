import { n as getPost } from "./posts-D9Z9S4v5.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as headFor } from "./seo-BWfvIjKe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-Bzl75u77.js
var $$splitNotFoundComponentImporter = () => import("./blog._slug-CaMt0A02.mjs");
var $$splitComponentImporter = () => import("./blog._slug-WLIRzjpI.mjs");
var Route = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const post = getPost(params.slug);
		if (!post) throw notFound();
		return post;
	},
	head: ({ loaderData }) => headFor(`/blog/${loaderData?.slug ?? ""}`),
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
