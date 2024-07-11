import { Context } from "hono";
import { Page } from "./dashboard.page";
import { NavBar } from "../components/navbar.component";
import { Layout } from "../components/layout.component";

export async function getDashboardPage(c: Context) {
const user = c.get("user");
  if (!user) {
    return c.redirect("/login");
}


  return c.html(

  <Layout>
      <NavBar selectedIndex={0} oobSwap={true} />
      <Page><h1>Dashboard</h1></Page>
  </Layout>
  );
}
