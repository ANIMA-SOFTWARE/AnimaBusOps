import { Hono } from "hono";
import * as loginHandlers from "./login.handlers";

export const loginRoutes = new Hono();

//this is where we'll put our login routes

loginRoutes.post("/login", loginHandlers.login);
loginRoutes.get("/", loginHandlers.getLoginPage);
