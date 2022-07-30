<script lang="ts">
	import { onMount } from 'svelte';

	export let shopId;
	export let itemId;

	let timer = 0;

	onMount(() => {
		const interval = setInterval(() => {
			timer++;
		}, 1000);
		return () => clearInterval(interval);
	});
</script>

<h1>Haha {shopId} {itemId}</h1>

{timer}

<a href="/item/007/007">James Bond</a>
