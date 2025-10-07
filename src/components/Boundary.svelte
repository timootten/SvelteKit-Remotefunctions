<script lang="ts">
	import { browser } from '$app/environment';
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet<[]>;
		pending?: Snippet<[]>;
		failed?: Snippet<[error: unknown, reset: () => void]>;
	}

	const { children, pending, failed }: Props = $props();
</script>

<svelte:boundary {failed} pending={browser ? pending : undefined}>
	{#if $effect.pending()}
		{@render pending?.()}
	{/if}
	<div
		class={cn({
			hidden: $effect.pending()
		})}
	>
		{@render children?.()}
	</div>
</svelte:boundary>
