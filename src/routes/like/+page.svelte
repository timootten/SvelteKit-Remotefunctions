<script lang="ts">
	import { getLikes, like } from './like.remote';
</script>

<h1>Like</h1>

<form
	{...like.enhance(async ({ form, data, submit }) => {
		try {
			form.reset();
			await submit().updates(getLikes().withOverride((likes) => likes + 1));

			console.log('Like added');
		} catch (error) {
			console.error('Failed to add like', error);
		}
	})}
>
	<button type="submit" class="cursor-pointer rounded bg-gray-400 p-2">{await getLikes()}</button>
</form>
