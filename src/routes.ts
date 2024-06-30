import { Hono } from "hono";
import { dashboardRoutes } from "./dashboard/dashboard.routes";
import { expensesRoutes } from "./expenses/expenses.routes";
import { invoicingRoutes } from "./invoicing/invoicing.routes";
import { inventoryRoutes } from "./inventory/inventory.routes";
import { loginRoutes } from "./login/login.routes";

export const routes = new Hono();

//this is where we route our individual route files together

routes.route("/app/dashboard", dashboardRoutes);
routes.route("/app/expenses", expensesRoutes);
routes.route("/app/invoicing", invoicingRoutes);
routes.route("/app/inventory", inventoryRoutes);
routes.route("/", loginRoutes);

