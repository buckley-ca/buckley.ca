<form action="https://formspree.io/f/xdojdnkk" method="POST">
	<label>
		Your email:
		<input type="email" name="email" />
	</label>
	<label>
		Your message:
		<textarea name="message" />
	</label>
	<button type="submit">Send</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		width: 300px;
		margin: 0 auto;
	}
	label {
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
	}
	input,
	textarea {
		margin-top: 0.5rem;
	}
	button {
		align-self: flex-end;
	}
</style>
