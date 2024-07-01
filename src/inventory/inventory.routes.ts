import { Hono } from "hono";
import * as inventoryHandlers from "./inventory.handlers";

export const inventoryRoutes = new Hono();

inventoryRoutes.get("/", inventoryHandlers.getPage);
inventoryRoutes.get("/pages/:page", inventoryHandlers.getNextPageRows);
inventoryRoutes.post("/search", inventoryHandlers.getNextPageRows);
