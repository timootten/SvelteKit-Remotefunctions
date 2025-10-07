import { query } from "$app/server";
import { sleep } from "$lib/utils";


export const getQuery1 = query(async () => {
  await sleep(1000);
  return (Math.random() * 100).toFixed(0);
});

export const getQuery2 = query(async () => {
  await sleep(1000);
  return (Math.random() * 100).toFixed(0);
});

export const getQuery3 = query(async () => {
  await sleep(1000);
  return (Math.random() * 100).toFixed(0);
});