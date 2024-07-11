import { db } from "../db";
import { inventory } from "../../schema";
import { eq, sql } from "drizzle-orm/sql";

/**
 * Retrieves a paginated set of records from the inventory table.
 *
 * @param {number | undefined} pageNo - The page number of the records to retrieve.
 * @return {Promise<Array<Record>>} A Promise that resolves to an array of records.
 */
export async function getInventoryByPageNo(pageNo : number)  {

    const result = await db.select().from(inventory).limit(50).offset((pageNo - 1) * 50)

    return result

}

export async function getInventoryByPageNoAndBySearch(pageNo : number, searchStr : string | undefined = undefined)  {
    let concatcolumns : String = "";

    //concat all columns to be searched
    for (const [key] of Object.entries(inventory)) {
        if (key !== "$inferInsert" && key !== "$inferSelect" && key !== "_" && key !== "getSQL" ) {
             concatcolumns = concatcolumns + key + " || "
        }
    }

    //remove trailing " || "
    concatcolumns = concatcolumns.slice(0, -4)

    //search all columns in database
    const result = await db.select().from(inventory).where(sql.raw(`${concatcolumns} LIKE '%${searchStr}%'`)).limit(50).offset((pageNo - 1) * 50)


    return result
}

export async function getInventoryById(id : number) {
    const result =  await db.select().from(inventory).where(eq(inventory.id, id)).limit(1)
    return result
}
export async function destroyInventoryById(id : number) {
    return db.delete(inventory).where(eq(inventory.id, id));
}
  
export async function getInventoryAll() {
    const result = await db.select().from(inventory)
    return result
}

export async function insertInventory(record : any) {
    return db.insert(inventory).values(record).returning()
}

export async function updateInventory(record : any) {
    return db.update(inventory).set(record).where(eq(inventory.id, record.id)).returning()
}