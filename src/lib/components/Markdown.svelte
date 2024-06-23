<script lang="ts">
	interface Props {
		meta: Record<string, string>;
		content: any;
	}
  
  	export let data: Props;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description}>
	<meta property="og:description" content={data.meta.description}>
	<meta property="og:type" content="article" />
</svelte:head>

<div class="style-wrapper">
	<svelte:component this={data.content}/>
</div>

<style lang="scss">
	.style-wrapper {
		display: contents;
	}

	.style-wrapper :global(a) {
		color: var(--color-link);
	}


	.style-wrapper :global(h1) {
		--font-size: 2.5rem;

		font-weight: bold;
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	.style-wrapper :global(h2) {
		--font-size: 2.5rem;

		font-size: var(--font-size);
		font-weight: 600;
		margin-top: 1.75rem;
		margin-bottom: 1.25rem;
	}

	.style-wrapper :global(h3) {
		--font-size: 1.75rem;

		font-size: var(--font-size);
		font-weight: 500;
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
	}

	.style-wrapper :global(h4) {
		--font-size: 1.4rem;

		font-size: var(--font-size);
		font-weight: 500;
		margin-top: 1.25rem;
		margin-bottom: 0.75rem;
	}

	.style-wrapper :global(strong) {
		font-weight: bold;
	}

	.style-wrapper :global(code) {
		font-family: "JetBrains Mono", monospace;
	}

	.style-wrapper :global(ol) {
		list-style-type: decimal;
		list-style-position: inside;

		--font-size: 1rem;

		font-size: var(--font-size);
		color: var(--color-text-darker);
		font-weight: 300;
		line-height: 1.3;
	}

	.style-wrapper :global(ul) {
		list-style-type: circle;
		list-style-position: inside;

		--font-size: 1rem;

		font-size: var(--font-size);
		color: var(--color-text-darker);
		font-weight: 300;
		line-height: 1.3;
	}

	.style-wrapper :global(p) {
		--font-size: 1rem;

		font-size: var(--font-size);
		color: var(--color-text-darker);
		font-weight: 300;
		line-height: 1.3;
		margin-bottom: 1rem;
	}

	.style-wrapper :global(img) {
		width: 100%;
		object-fit: cover;
		aspect-ratio: 16 / 9;

		border: 5px solid var(--color-text);
	}
</style>