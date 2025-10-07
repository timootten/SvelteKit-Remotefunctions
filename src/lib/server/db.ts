import { v4 } from "uuid";
import z from "zod";



export const todoSchema = z.object({
  id: z.uuid().default(v4()),
  title: z.string().min(1).max(100),
  checked: z.boolean().default(false),
})

export type Todo = z.infer<typeof todoSchema>;

let todos: Todo[] = [];

export const db = {
  todos
};