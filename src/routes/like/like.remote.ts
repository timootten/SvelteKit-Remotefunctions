import { form, query } from "$app/server";
import { db } from "$lib/server/db";
import { sleep } from "$lib/utils";

export const getLikes = query(() => {
  return db.likes;
});

export const like = form(async () => {
  await sleep(1000);
  db.likes++;
  await getLikes().refresh();
});