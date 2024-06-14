import { Context } from "hono";
import { Page } from "./dashboard.page";
import { Fragment } from "hono/jsx/jsx-runtime";
import { NavBar } from "../components/navbar.component";

export async function getDashboardPage(c: Context) {
  return c.html(
    <Fragment>
      <NavBar selectedIndex={0} oobSwap={true} />
      <Page />
    </Fragment>
  );
}
