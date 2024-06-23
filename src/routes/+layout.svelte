<script lang="ts">
	import "remixicon/fonts/remixicon.css";
	import "../theme.scss";
	import "../fonts.scss";
	import "../app.scss";
	import Navbar from "$lib/components/Navbar.svelte";
	import routes from "$lib/routes/routes";
  	import Footer from "$lib/components/Footer.svelte";
	// @ts-ignore
	import Logo from "$lib/images/logo_white.png?enhanced&w=1280;640;400";
</script>

<svelte:head>
	<meta property="og:image" content={Logo.img.src}>
</svelte:head>

<header>
	<enhanced:img
		src={Logo}
		alt="RHHS Computer Science Club"
		sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
	/>
	<Navbar routes={routes}/>
</header>
<main>
	<slot/>
</main>
<Footer/>

<style>
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	main {
		max-width: 54rem;
		margin: 0 auto;
	}
</style>