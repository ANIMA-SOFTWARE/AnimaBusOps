import { Hono } from "hono";
import * as loginHandlers from "./login.handlers";

export const loginRoutes = new Hono();

loginRoutes.post("/login", loginHandlers.login);
loginRoutes.get("/login", loginHandlers.getLoginPage);
loginRoutes.post("/logout", loginHandlers.logout);
