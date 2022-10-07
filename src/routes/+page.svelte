<script>
	import Logo from '../lib/Logo.svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	export const prerender = true;

	let ready = false;
	onMount(() => (ready = true));
</script>

<svelte:head>
	<title>Buckley.ca - Home</title>
	<meta name="description" content="Buckley.ca - Home" />
</svelte:head>

<section class="background center">
	{#if ready}
		<div class="logo-container" in:fade={{ delay: 20, duration: 1500 }}>
			<Logo />
			<h1>buckley<span>.ca</span></h1>
		</div>
	{/if}
</section>

<style>
	.background {
		background: url(https://res.cloudinary.com/buckey-ca/image/upload/v1634141535/background-1600_ovnjor.jpg)
			fixed no-repeat center center;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		/* filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../img/bg-small.jpg', sizingMethod='scale'); */
		/* -ms-filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../img/bg-small.jpg', sizingMethod='scale')"; */
		height: 100vh;
	}

	.center {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.logo-container {
		text-align: center;
	}

	h1 {
		color: #f2f2f2;
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 600;
		position: relative;
		margin: 0;
		text-shadow: 0.4px 0.8px 0.8px hsl(0deg 0% 0% / 0.15);
	}

	h1 span {
		font-size: 1.5rem;
		position: relative;
		right: 0.5rem;
	}
	@media (min-width: 640px) {
		section {
			max-width: none;
		}
	}
</style>
