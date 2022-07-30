<script>
	import { page, navigation } from '../../lib/routing/store';
</script>

<ul>
	<li>params: {JSON.stringify($page.params)}</li>
	<li>url: {$page.url}</li>
	<li>routeId: {$page.routeId}</li>
	<li>from: {JSON.stringify($navigation?.from)}</li>
	<li>to: {JSON.stringify($navigation?.to)}</li>
</ul>
