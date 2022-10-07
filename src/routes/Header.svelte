<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<li class:active={$page.url.pathname === '/'}>
			<a href="/">Home</a>
		</li>
		<li class:active={$page.url.pathname === '/contact'}>
			<a href="/contact">Contact</a>
		</li>
	</nav>
</header>

<style>
	nav {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: left;
		align-items: baseline;

		background-color: rgba(255, 255, 255, 0.5);
		padding: 1rem;
	}
	li {
		list-style-type: none;
		margin: 0;
	}
	li a {
		margin: 1rem;
		color: black;
	}
	li.active {
		font-weight: bold;
	}
</style>
