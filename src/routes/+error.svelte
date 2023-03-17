<script>
	// @ts-nocheck
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Buckley.ca - Error</title>
	<meta name="description" content="Buckley.ca - Error" />
</svelte:head>

<section class="center">
	<div class="logo-container">
		<h1>{$page.status} | {$page.error.message}</h1>
		<p>Uh oh, you've encountered an error. Please go back <a href="/">home</a>.</p>
	</div>
</section>

<style>
	.center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 95vh;
	}

	.logo-container {
		text-align: center;
		background-color: rgba(255, 255, 255, 0.75);
		padding: 1rem;
		-moz-border-radius: 10px;
		-webkit-border-radius: 10px;
		border-radius: 10px;
	}

	h1 {
		font-size: 3rem;
		font-weight: 600;
		margin: 0;
		text-shadow: 0.4px 0.8px 0.8px hsl(0deg 0% 0% / 0.15);
	}

	@media (min-width: 640px) {
		section {
			max-width: none;
		}
	}
</style>
