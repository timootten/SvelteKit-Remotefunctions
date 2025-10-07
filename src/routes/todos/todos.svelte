<script lang="ts">
	import { createTodo, deleteTodo, getTodos } from './todos.remote';

	const todos = $derived(await getTodos());
</script>

<form
	{...createTodo.enhance(async ({ form, data, submit }) => {
		try {
			form.reset();
			await submit().updates(
				getTodos().withOverride((todos) => [
					...todos,
					{
						id: Math.random().toString(36).substring(2, 9),
						title: data.title,
						checked: false
					}
				])
			);

			console.log('Todo created');
		} catch (error) {
			console.error('Failed to create todo', error);
		}
	})}
>
	<input {...createTodo.fields.title.as('text')} placeholder="Todo" required />
	<button type="submit">Add Todo</button>
</form>

<ul>
	{#each todos as todo}
		<li>
			{todo.title}
			<form {...deleteTodo.for(todo.id)}>
				<button type="submit">Delete</button>
			</form>
		</li>
	{/each}
</ul>
