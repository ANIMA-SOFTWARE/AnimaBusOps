import { Hono } from "hono";
import * as usersHandlers from "./users.handlers";

const users = new Hono();

users.post("/", usersHandlers._createUser);

export default users;
