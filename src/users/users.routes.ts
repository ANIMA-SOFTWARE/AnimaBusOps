import { Hono } from "hono";
import * as usersHandlers from "./users.handlers";

export const usersRoutes = new Hono();

usersRoutes.post("/", usersHandlers.insert);
usersRoutes.get("/", usersHandlers.getAll);
usersRoutes.get("/:id", usersHandlers.getById);
usersRoutes.delete("/:id", usersHandlers.destroy);
usersRoutes.put("/:id", usersHandlers.append);

