import { insertUser, getUsersAll, destroyUserById, getUserById, appendUserById } from "./users.service";
import { Context } from "hono";

export async function insert(c: Context) {
  const body = await c.req.json();
  console.log(body)
  const record = await insertUser(body);
  return c.json(record);
}

export async function append(c: Context) {
  const body = await c.req.parseBody();
  const record = await appendUserById(body);
  return c.json(record);
}

export async function getAll(c: Context) {
  const results = await getUsersAll();
  return c.json(results);
}

export async function destroy(c: Context) {
  const id = c.req.param("id");
  await destroyUserById(id);
  return c.text("destroyed");
}

export async function getById(c: Context) {
  const id = c.req.param("id");
  const record = await getUserById(id);
  return c.json(record);
}
