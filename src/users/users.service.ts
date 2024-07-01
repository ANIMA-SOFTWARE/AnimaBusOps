import { db } from "../db";
import { users } from "../../schema";
import { eq } from "drizzle-orm/sql";
import * as bcrypt from "bcrypt-ts";
import { generateIdFromEntropySize } from "lucia";

export async function getUsersAll() {
    return db.select().from(users)
}

export async function getUserById(id : string) {
    return (await db.select().from(users).where(eq(users.id, id)).limit(1)).at(0)
}

export async function userExists(username : string) {
    return db.select().from(users).where(eq(users.username, username)).limit(1).then((result) => result.length > 0)
}

export async function getUserByUsername(username : string) {
    return (await db.select().from(users).where(eq(users.username, username)).limit(1)).at(0)
}

export async function validateUserLogin(username : string, password : string) {
    if (!username && !password) {
        return false
    }

    const user = await getUserByUsername(username);

    if (!user) {
        return false
    }


    const validPassword = bcrypt.compare(password, user.password);


    return validPassword
}

export async function insertUser(record : any) {

    console.log(record.password)

    record.password = bcrypt.hashSync(record.password);
    record.id = generateIdFromEntropySize(10)

    return db.insert(users).values(record).returning({insertedId: users.id})
}

export async function destroyUserById(id : string) {
    return db.delete(users).where(eq(users.id, id));
}

export async function appendUserById(user: any) {
    return db.update(users).set(user).where(eq(users.id, user.id)).returning({insertedId: users.id});
}
