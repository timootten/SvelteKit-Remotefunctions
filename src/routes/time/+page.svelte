<script lang="ts">
	import Boundary from '../../components/Boundary.svelte';
	import { getTime } from './time.remote';
</script>

{#snippet pending()}
	<p>Loading... (Time)</p>
{/snippet}

<Boundary {pending}>
	<h1>Time</h1>
	<p>{await getTime()}</p>
</Boundary>
