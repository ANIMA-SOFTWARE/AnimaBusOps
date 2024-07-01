import { Lucia, TimeSpan } from "lucia";
import { _adapter } from "./db";

export const _lucia = new Lucia(_adapter, {
	sessionExpiresIn: new TimeSpan(2, "w")
});