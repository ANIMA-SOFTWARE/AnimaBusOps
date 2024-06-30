import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';
import { migrate } from 'drizzle-orm/bun-sqlite/migrator';
import { sessions, users } from '../schema';
import { DrizzleSQLiteAdapter } from '@lucia-auth/adapter-drizzle';
// import { inventory } from '../schema';

const sqlite = new Database('sqlite.db');
export const db = drizzle(sqlite);
export const _adapter = new DrizzleSQLiteAdapter(db, sessions, users);
console.log("Database connected");

migrate(db, { migrationsFolder: "migrations" });
console.log("Migration ran");

// insertRows();

// async function insertRows() {
//     for (let i = 0; i < 5000; i++) {
//         await db.insert(inventory).values({name: "test", quantity: 1, price: 1, description: "test", category: "test"})
//     }

//     console.log("rows inserted");
// }