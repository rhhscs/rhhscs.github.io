export interface Route {
	title: string;
	url: string;
}

const routes: Route[] = [
	{
		title: "Home",
		url: "/",
	},
	{
		title: "FAQ",
		url: "/faq",
	},
	{
		title: "Groups",
		url: "/groups",
	},
	{
		title: "Contest",
		url: "/contest",
	},
	{
		title: "Web",
		url: "/web",
	},
	{
		title: "Workshops",
		url: "/workshops",
	},
	{
		title: "Events",
		url: "/events",
	},
];

export default routes;