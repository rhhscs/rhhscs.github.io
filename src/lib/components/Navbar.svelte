<script lang="ts">
	import { type Route } from "$lib/routes/routes";

	export let routes: Route[];
</script>

<nav class="nav">
	<ul class="nav__links">
		{#each routes as route}
			<li><a href={route.url}>{route.title}</a></li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	.nav {
		color: var(--color-nav-text);
		font-family: "JetBrains Mono", monospace;
		padding: 0.5rem 0rem;
	}

	.nav__links {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 1.75rem;
	}

	.nav__links li {
		transition: transform 200ms ease-in;
		&:hover {
			transform: translateY(-2px);
		}
	}

	.nav__links a {
		color: inherit;
		text-decoration: none;
	}

	@media (max-width: 756px) {
		.nav__links {
			gap: 1rem;
		}
	}

	@media (max-width: 600px) {
		.nav__links {
			font-size: 0.9rem;
		}
	}

	@media (max-width: 550px) {
		.nav__links {
			padding: 0;
			margin-top: 2rem;
			flex-direction: column;
			gap: 0.75rem;
			font-size: 1rem;
		}
	}
</style>