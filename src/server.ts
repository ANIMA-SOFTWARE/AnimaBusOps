import { Hono } from "hono";
import { routes } from "./routes";
import { middleware } from "./middleware";
import { showRoutes } from "hono/dev";
import { getDashboardPage } from "./dashboard/dashboard.handlers";

//this is the main app instance
const app = new Hono();

//this routes everything together to the main app hono instance
app.route("/", middleware); //middleware
app.get("/", getDashboardPage); //index
app.route("/", routes); //routes


showRoutes(app);

export default app;
