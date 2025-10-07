import { form, query } from "$app/server";
import { db, todoSchema } from "../../lib/server/db";


export const getTodos = query(() => {
  return db.todos;
});

export const createTodo = form(todoSchema, async (data) => {
  db.todos.push(data);
});

export const deleteTodo = form(todoSchema, async (data) => {
  db.todos = db.todos.filter(todo => todo.id !== data.id);
  await getTodos().refresh();
});