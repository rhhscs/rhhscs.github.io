import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

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