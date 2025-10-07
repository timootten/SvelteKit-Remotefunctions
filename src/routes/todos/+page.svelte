<script lang="ts">
	import { createTodo, getTodos } from './todos.remote';
</script>

<h1>Todos</h1>

<form {...createTodo}>
	<input {...createTodo.fields.title.as('text')} placeholder="Todo" required />
	<button type="submit">Add Todo</button>
</form>
<ul>
	{#each await getTodos() as todo}
		<li>{todo.title}</li>
	{/each}
</ul>

<button onclick={() => getTodos().refresh()}> Check for new Todos </button>
