import { Context } from "hono";
import { Page } from "./login.page";
import { Layout } from "../components/layout.component";

export async function getLoginPage(c: Context) {
	const user = c.get("user");
	if (!user) {

    return c.html("<!DOCTYPE html>" + <Layout children={<Page />} />);
  }



}

//example login handler - obviously you would add db integration and auth
export async function login(c: Context) {
  const body = await c.req.parseBody();
  const { username, password } = body;
  if (username === "admin" && password === "admin") {
    return c.json({ success: true });
  } else {
    return c.json({ success: false });
  }
}
