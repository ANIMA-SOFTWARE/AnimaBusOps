import { db } from "../db";
import { inventory } from "../../schema";
import { eq, like, sql } from "drizzle-orm/sql";
import { SQLiteColumn } from "drizzle-orm/sqlite-core";

/**
 * Retrieves a paginated set of records from the inventory table.
 *
 * @param {number | undefined} pageNo - The page number of the records to retrieve.
 * @return {Promise<Array<Record>>} A Promise that resolves to an array of records.
 */
export async function getRecords(pageNo : number, search : string | undefined = undefined)  {

    if (search !== undefined) {
        
        let concatcolumns : String = "";


        for (const [key, value] of Object.entries(inventory)) {
            if (key !== "$inferInsert" && key !== "$inferSelect" && key !== "_" && key !== "getSQL" ) {
                 concatcolumns = concatcolumns + key + " || "
            }
        }
    
        concatcolumns = concatcolumns.slice(0, -4)
        const result = await db.select().from(inventory).where(sql.raw(`${concatcolumns} LIKE '%${search}%'`)).limit(50).offset((pageNo - 1) * 50)


        return result
    } else { 


        const result = await db.select().from(inventory).limit(50).offset((pageNo - 1) * 50)

        return result
    }

  
}
export async function deleteRecord(id : number) {
    return db.delete(inventory).where(eq(inventory.id, id)).run();
}
  