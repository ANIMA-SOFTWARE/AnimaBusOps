import { createUser } from "./users.service";
import { Context } from "hono";

async function _createUser(c: Context) {
  const { name, username, email, password } = await c.req.json();
  const user = await createUser(
    String(name),
    String(username),
    String(email),
    String(password)
  );
  return c.text("user created");
}

export { _createUser };
