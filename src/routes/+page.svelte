<script>
	import Logo from '$lib/Logo.svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let ready = $state(false);
	onMount(() => (ready = true));
</script>

<svelte:head>
	<title>Buckley.ca - Home</title>
	<meta name="description" content="Buckley.ca - Home" />
</svelte:head>

<section class="center">
	{#if ready}
		<div class="logo-container" in:fade={{ delay: 5, duration: 1500 }}>
			<Logo />
			<h1>buckley<span>.ca</span></h1>
		</div>
	{/if}
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
	}

	h1 {
		color: #f2f2f2;
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 600;
		margin: 0;
		text-shadow: 0.4px 0.8px 0.8px hsl(0deg 0% 0% / 0.15);
	}

	h1 span {
		font-size: 1.5rem;
		right: 0.5rem;
	}

	@media (min-width: 640px) {
		section {
			max-width: none;
		}
	}
</style>
