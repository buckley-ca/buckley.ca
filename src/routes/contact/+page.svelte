<script>
	import ContactForm from '$lib/ContactForm.svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	let ready = $state(false);
	onMount(() => (ready = true));
</script>

<section class="center">
	{#if ready}
		<div class="contact" in:fade={{ delay: 5, duration: 500 }}>
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
		height: 95vh;
	}
	h1 {
		font-size: 3rem;
		margin: 0 0 1rem 0;
	}
	.contact {
		background-color: rgba(255, 255, 255, 0.75);
		padding: 1rem;
		-moz-border-radius: 10px;
		-webkit-border-radius: 10px;
		border-radius: 10px;
	}
</style>
