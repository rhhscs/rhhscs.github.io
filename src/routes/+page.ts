import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import type { EntryGenerator } from "./[slug]/$types";
import routes from "$lib/routes/routes";

export const entries: EntryGenerator = () => {
	return routes.map(route => ({ slug: route.url.substring(1) })).filter(slug => slug.slug.length > 0);
};

export const load: PageLoad = async () => {
	try {
		// @ts-ignore
		const post = await import('$lib/pages/home.md');

		return {
			content: post.default,
			meta: post.metadata,
		};
	} catch (e) {
		error(404, `Could not find home`);
	}
}