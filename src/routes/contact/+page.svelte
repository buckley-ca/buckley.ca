<script>
	import ContactForm from '$lib/ContactForm.svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => (ready = true));
</script>

<section class="center background">
	{#if ready}
		<div class="contact" in:fade={{ delay: 20, duration: 500 }}>
			<h1>Contact</h1>
			<ContactForm />
		</div>
	{/if}
</section>

<style>
	.center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
	h1 {
		font-size: 3rem;
		margin: 0 0 1rem 0;
	}
	.contact {
		background-color: rgba(255, 255, 255, 0.5);
		padding: 1rem;
		-moz-border-radius: 10px;
		-webkit-border-radius: 10px;
		border-radius: 10px;
	}
	.background {
		background: url(https://res.cloudinary.com/buckey-ca/image/upload/v1634141535/background-1600_ovnjor.jpg)
			fixed no-repeat center center;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		/* filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../img/bg-small.jpg', sizingMethod='scale'); */
		/* -ms-filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../img/bg-small.jpg', sizingMethod='scale')"; */
	}
</style>
