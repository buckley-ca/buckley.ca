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
</style>
