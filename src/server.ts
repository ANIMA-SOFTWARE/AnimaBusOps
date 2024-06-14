import { Hono } from "hono";
import { routes } from "./routes";
import { middleware } from "./middleware";
import { showRoutes } from "hono/dev";
import { getIndexPage } from "./index/index.handlers";

//this is the main app instance
const app = new Hono();

//this routes everything together to the main app hono instance
app.get("/", getIndexPage);
app.route("/", routes); //routes
app.route("/", middleware); //middleware

showRoutes(app);

export default app;
