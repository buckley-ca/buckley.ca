<script>
	import '../app.css';
	import Header from './Header.svelte';
</script>

<main class="background">
	<Header />
	<slot />
</main>

<style>
	.background {
		background: url(https://res.cloudinary.com/buckey-ca/image/upload/f_auto,q_auto,dpr_auto/background-1600_ovnjor.jpg)
			fixed no-repeat center center;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
	}

	@media (max-width: 640px) {
		.background {
			background: url(https://res.cloudinary.com/buckey-ca/image/upload/f_auto,q_auto,c_fill,w_800,dpr_auto/background-1600_ovnjor.jpg)
				fixed no-repeat center center;
			-webkit-background-size: cover;
			-moz-background-size: cover;
			-o-background-size: cover;
			background-size: cover;
		}
	}
</style>
