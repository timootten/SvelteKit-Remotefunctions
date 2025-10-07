import { form, query } from "$app/server";
import { sleep } from "$lib/utils";
import { db, todoSchema } from "../../lib/server/db";



export const getTodos = query(async () => {
  await sleep(1000); // simulate network delay
  return db.todos;
});

export const createTodo = form(todoSchema, async (data) => {
  db.todos.push(data);
  await getTodos().refresh();
});

export const deleteTodo = form(todoSchema.pick({ id: true }), async (data) => {
  db.todos = db.todos.filter(todo => todo.id !== data.id);
  await getTodos().refresh();
});