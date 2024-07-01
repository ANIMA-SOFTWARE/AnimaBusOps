import { Hono } from "hono";
import { expensesRoutes } from "./expenses/expenses.routes";
import { invoicingRoutes } from "./invoicing/invoicing.routes";
import { inventoryRoutes } from "./inventory/inventory.routes";
import { loginRoutes } from "./login/login.routes";
import { usersRoutes } from "./users/users.routes";


export const routes = new Hono();

//this is where we route our individual route files together

routes.route("/expenses", expensesRoutes);
routes.route("/invoicing", invoicingRoutes);
routes.route("/inventory", inventoryRoutes);
routes.route("/users", usersRoutes);
routes.route("/", loginRoutes);

