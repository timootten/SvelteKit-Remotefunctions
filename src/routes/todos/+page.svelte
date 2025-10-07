<script lang="ts">
	import Boundary from '../../components/Boundary.svelte';
	import Todos from './todos.svelte';
</script>

<h1>Todos</h1>
{#snippet pending()}
	<p>Loading...</p>
{/snippet}

<Boundary {pending}>
	<Todos />
</Boundary>
