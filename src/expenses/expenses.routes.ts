import { Hono } from "hono";
import * as expensesHandlers from "./expenses.handlers";

export const expensesRoutes = new Hono();

//this is where we'll put our expenses routes

expensesRoutes.get("/", expensesHandlers.getExpensesPage);
