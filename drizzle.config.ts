import type { Config } from "drizzle-kit";

export default {
  schema: "./schema.ts",
  out: "migrations",
  dialect: "sqlite",
  dbCredentials: {
    url: "./sqlite.db",
  },
  verbose: true,
  strict: true,
} satisfies Config;