<script lang="ts">
	import { browser } from '$app/environment';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet<[]>;
		pending?: Snippet<[]>;
		failed?: Snippet<[error: unknown, reset: () => void]>;
	}

	const { children, pending, failed }: Props = $props();
</script>

<svelte:boundary {failed} pending={browser ? pending : undefined}>
	{@render children?.()}
</svelte:boundary>
