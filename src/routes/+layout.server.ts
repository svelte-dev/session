import type { LayoutServerLoad } from './$types.js';

export const load: LayoutServerLoad = ({ locals }) => {
	return {
		session: locals.session.data
	};
};
