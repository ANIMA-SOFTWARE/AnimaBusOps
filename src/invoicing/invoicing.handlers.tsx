import { Context } from "hono";
import { Page } from "./invoicing.page";
import { Fragment } from "hono/jsx/jsx-runtime";
import { NavBar } from "../components/navbar.component";

export async function getInvoicingPage(c: Context) {
  return c.html(
    <Fragment>
      <NavBar selectedIndex={1} oobSwap={true} />
      <Page />
    </Fragment>
  );
}
