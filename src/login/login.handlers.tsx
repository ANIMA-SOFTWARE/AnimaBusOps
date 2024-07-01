import { Context } from "hono";
import { Page } from "./login.page";
import { Layout } from "../components/layout.component";
import { getUserByUsername, validateUserLogin } from "../users/users.service";
import { _lucia } from "../auth";


export async function getLoginPage(c: Context) {
  const session = c.get("session");
  if (session) {
    return c.redirect("/");
  }

  return c.html("<!DOCTYPE html>" + <Layout children={<Page />} />);
}


export async function login(c: Context) {


  const body = await c.req.parseBody();
  const { username, password } = body;

  const valid = await validateUserLogin(String(username), String(password));

  if (!valid) { 
    return c.html(<Page error="Invalid credentials" />);
  }

  const existingUser = await getUserByUsername(String(username));

  if (!existingUser) {
    return c.html(<Page error="Invalid credentials" />);
  }

  const session = await _lucia.createSession(existingUser.id, {});
	c.header("Set-Cookie", _lucia.createSessionCookie(session.id).serialize(), { append: true });
	c.header("Location", "/", { append: true });

  return c.redirect("/");

}

export async function logout(c: Context) {

  const session = c.get("session");
  if (!session) {
    return c.body(null, 401);
  }
  await _lucia.invalidateSession(session.id);
  c.header("Set-Cookie", _lucia.createBlankSessionCookie().serialize());
  return c.redirect("/login");
}

