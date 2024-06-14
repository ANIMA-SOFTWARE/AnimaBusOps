import { Hono, Context } from "hono";
import { serveStatic } from "hono/bun";
import { logger } from "hono/logger";

export const middleware = new Hono();

//this is where we'll put our middleware

//logger middleware
const customLogger = (message: string, ...rest: string[]) => {
  console.log(message, ...rest);
};

middleware.use(logger(customLogger));

//example middleware
middleware.use("*", async (c: Context, next) => {
  console.log("Example middleware");
  await next();
});

//middleware to serve static files such as css, js, and images
middleware.use("/src/static/*", serveStatic({ root: "./" }));
