import {text,integer,sqliteTable} from "drizzle-orm/sqlite-core"

export const inventory = sqliteTable("inventory",{
    id: integer("id").notNull().primaryKey(),
    name: text("name").notNull(),
    quantity: integer("quantity").notNull(),
    price: integer("price").notNull(),
    description: text("description").notNull(),
    category: text("category").notNull(),
})

export const users = sqliteTable("users",{
    id: text("id").notNull().primaryKey(),
    username: text("username").notNull(),
    password: text("password").notNull(),
    email: text("email").notNull(),
})

export const sessions = sqliteTable("sessions", {
	id: text("id", {
		length: 255
	}).primaryKey(),
	userId: text("userId", {
		length: 255
	})
		.notNull()
		.references(() => users.id),
	expiresAt: integer("expiresAt").notNull()
});

// export const userPermissions = sqliteTable("userPermissions",{
//     id: integer("id").notNull().primaryKey(),
//     permission: text("permission").notNull(),
//     userId: integer("userId").notNull().references(() => users.id),
// })

// export const userOptions = sqliteTable("userOptions",{
//     id: integer("id").notNull().primaryKey(),
//     option: text("option").notNull(),
//     value: text("value").notNull(),
//     userId: integer("userId").notNull().references(() => users.id),
// })

