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
	<a href="/time2">Time 2</a>
</div>

{#snippet pending()}
	<p>Loading...</p>
{/snippet}

<svelte:boundary {pending}>{@render children?.()}</svelte:boundary>
