import { Hono} from "hono";
import { serveStatic } from "hono/bun";
import { logger } from "hono/logger";
import { User,Session} from "lucia";
import { getCookie } from "hono/cookie";
import { cors } from "hono/cors";
import { csrf } from "hono/csrf";
import { _lucia } from "./auth";



export const middleware = new Hono<{
	Variables: {
		user: User | null;
		session: Session | null;
	};
}>();

//cors
var corsOptions = {
	origin: "http://localhost:3000",
  };
  
  middleware.use("*", cors(corsOptions));

//logger middleware
const customLogger = (message: string, ...rest: string[]) => {
  console.log(message, ...rest);
};

middleware.use(logger(customLogger));


//middleware to serve static files such as css, js, and images
middleware.use("/src/static/*", serveStatic({ root: "./" }));

// see https://hono.dev/middleware/builtin/csrf for more options
middleware.use(csrf());

middleware.use("*", async (c, next) => {
	const sessionId = getCookie(c, _lucia.sessionCookieName) ?? null;
	if (!sessionId) {
		c.set("user", null);
		c.set("session", null);
		return next();
	}
	const { session, user } = await _lucia.validateSession(sessionId);
	if (session && session.fresh) {
		// use `header()` instead of `setCookie()` to avoid TS errors
		c.header("Set-Cookie", _lucia.createSessionCookie(session.id).serialize(), {
			append: true
		});
	}
	if (!session) {
		c.header("Set-Cookie", _lucia.createBlankSessionCookie().serialize(), {
			append: true
		});
	}
	c.set("user", user);
	c.set("session", session);
	return next();
});