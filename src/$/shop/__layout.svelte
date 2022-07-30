<script>
	import { onMount } from 'svelte';

	export let shopId;

	let timer = 0;

	onMount(() => {
		const interval = setInterval(() => {
			timer++;
		}, 1000);
		return () => clearInterval(interval);
	});
</script>

<nav>This is navigation bar {timer}</nav>

<slot />

<footer>This is footer {shopId}</footer>
