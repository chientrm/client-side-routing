<script>
	export let matchedComponents = [];
	export let matchedRouteParams;
</script>

{#if matchedComponents.length > 0}
	<svelte:component this={matchedComponents[0]} {...matchedRouteParams}>
		{#if matchedComponents.length > 1}
			<svelte:self
				matchedComponents={matchedComponents.slice(1)}
				{matchedRouteParams}
			/>
		{/if}
	</svelte:component>
{/if}
