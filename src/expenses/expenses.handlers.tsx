import { Context } from "hono";
import { Page } from "./expenses.page";
import { NavBar } from "../components/navbar.component";
import { Fragment } from "hono/jsx/jsx-runtime";

export async function getPage(c: Context) {
  return c.html(
    <Fragment>
      <NavBar selectedIndex={2} oobSwap={true} />
      <Page />
    </Fragment>
  );
}
