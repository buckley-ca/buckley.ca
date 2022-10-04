<script>
	export const prerender = true;
	import { page } from '$app/stores';
</script>

// @ts-nocheck
<svelte:head>
	<title>Buckley.ca - Error</title>
	<meta name="description" content="Buckley.ca - Error" />
</svelte:head>

<section>
	<h1>Error - {$page.status}: {$page.error.message}</h1>
	<p>Uh oh, you've encoutered an error. Please go back <a href="/">home</a>.</p>
</section>

<style>
	section {
		display: grid;
		place-content: center;
	}
</style>
