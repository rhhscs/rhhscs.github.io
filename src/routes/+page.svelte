<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte';
  	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Markdown data={data}/>
