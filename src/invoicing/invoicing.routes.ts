import { Hono } from "hono";
import * as invoicingHandlers from "./invoicing.handlers";

export const invoicingRoutes = new Hono();

//this is where we'll put our invoicing routes

invoicingRoutes.get("/", invoicingHandlers.getInvoicingPage);
