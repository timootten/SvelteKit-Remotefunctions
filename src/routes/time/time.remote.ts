import { query } from "$app/server";
import { sleep } from "$lib/utils";


export const getTime = query(async () => {
  await sleep(1000);
  return new Date().toLocaleTimeString('de-DE');
});