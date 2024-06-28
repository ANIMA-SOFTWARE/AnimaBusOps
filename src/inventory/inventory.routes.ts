import { Hono } from "hono";
import * as inventoryHandlers from "./inventory.handlers";

export const inventoryRoutes = new Hono();

inventoryRoutes.get("/", inventoryHandlers.get);
inventoryRoutes.get("/pages/:page", inventoryHandlers.get);
inventoryRoutes.post("/search", inventoryHandlers.get);
