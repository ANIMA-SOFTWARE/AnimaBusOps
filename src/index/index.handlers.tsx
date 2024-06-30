import { Context } from "hono";
import { Page } from "../login/login.page";
import { Layout } from "../components/layout.component";

export async function getIndexPage(c: Context) {
  return c.html("<!DOCTYPE html>" + <Layout children={<Page />} />);
}
