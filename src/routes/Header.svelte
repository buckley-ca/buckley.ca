<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<a href="/">Home</a>
			</li>
			<li class:active={$page.url.pathname === '/contact'}>
				<a href="/contact">Contact</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		height: 5vh;
	}
	nav {
		background-color: rgba(255, 255, 255, 0.5);
		padding: 0.15rem;
	}
	ul {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: left;
		align-items: baseline;
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
