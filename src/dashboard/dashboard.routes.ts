import { Hono } from "hono";
import * as dashboardHandlers from "./dashboard.handlers";

export const dashboardRoutes = new Hono();

//this is where we'll put our dashboard routes

dashboardRoutes.get("/", dashboardHandlers.getDashboardPage);
