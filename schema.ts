import { sql } from "drizzle-orm"
import {text,integer,sqliteTable} from "drizzle-orm/sqlite-core"

export const inventory = sqliteTable("inventory",{
    id: integer("id").notNull().primaryKey(),
    name: text("name").notNull(),
    quantity: integer("quantity").notNull(),
    price: integer("price").notNull(),
    description: text("description").notNull(),
    category: text("category").notNull(),
})