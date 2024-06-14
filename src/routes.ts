import { Hono } from "hono";
import { dashboardRoutes } from "./dashboard/dashboard.routes";
import { expensesRoutes } from "./expenses/expenses.routes";
import { invoicingRoutes } from "./invoicing/invoicing.routes";

export const routes = new Hono();

//this is where we route our individual route files together

routes.route("/dashboard", dashboardRoutes);
routes.route("/expenses", expensesRoutes);
routes.route("/invoicing", invoicingRoutes);
