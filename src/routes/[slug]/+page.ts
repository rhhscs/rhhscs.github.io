import routes from '$lib/routes/routes';
import type { EntryGenerator, PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const entries: EntryGenerator = () => {
	return routes.map(route => ({ slug: route.url.substring(1) })).filter(slug => slug.slug.length > 0);
};

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`$lib/pages/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata,
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}