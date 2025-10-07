<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Boundary from '../components/Boundary.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div>
	<a href="/">Home</a> | <a href="/todos">Todos</a> | <a href="/time">Time</a> |
	<a href="/time2">Time 2</a> | <a href="/queries">Queries</a> | <a href="/like">Like</a> |
	<a href="/like2">Like 2</a>
</div>

<Boundary>
	{#snippet pending()}
		<p>Loading...</p>
	{/snippet}
	{@render children?.()}
</Boundary>
