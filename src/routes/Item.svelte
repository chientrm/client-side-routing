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

<h1>Item {shopId} {itemId}</h1>

{timer}

<a href="/item/007/007">James Bond</a>
<a href="/item/008/008">James Bond</a>
<a href="/item/009/009">James Bond</a>
<a href="/shop/123">To shop</a>
