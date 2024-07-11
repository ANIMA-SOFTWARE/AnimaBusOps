import { Context } from "hono";
import { Page } from "./inventory.page";
import { TableRow } from "../components/table/tableRow.component";
import { NavBar } from "../components/navbar.component";
import { Fragment } from "hono/jsx/jsx-runtime";
import { getInventoryByPageNo, destroyInventoryById, getInventoryById, getInventoryByPageNoAndBySearch, insertInventory, updateInventory } from "./inventory.service";
import { EditRecord } from "../components/table/editRecord.component";

export async function getPage(c: Context) {

  //get page no param from request (if it exists)
  const pageNo = c.req.param("page") === undefined ? undefined : Number(c.req.param("page"));

  //get body from request
  const body = await c.req.parseBody();

  //get search param from request (if it exists)
  const searchStr = body["search"] === undefined ? c.req.query("search") : String(body["search"]);

  //get inventory by page no
  const inventoryData = await getInventoryByPageNo(pageNo ?? 1);

    return c.html(
      <Fragment>
        <NavBar selectedIndex={3} oobSwap={true} />
        <Page data={inventoryData} pageNo={2} search={searchStr}/>
      </Fragment>
    );

}

export async function getNextPageRows(c: Context) {

  //get page no param from request (if it exists)
  const pageNo = c.req.param("page") === undefined ? undefined : Number(c.req.param("page"));

  //get body from request
  const body = await c.req.parseBody();

  //get search param from request (if it exists)
  const searchStr = body["search"] === undefined ? c.req.query("search") : String(body["search"]);

  //get inventory by page no and/or/neither search
  const inventoryData = await getInventoryByPageNoAndBySearch(pageNo ?? 1, searchStr);

  //construct rows for table
    const rows = inventoryData.map((record : any) => {
      return <TableRow record={record} />
    })

    //increment page no by 1 so next page can be loaded when page is scrolled to the end
    const newPageNo = pageNo ?? 1 + 1;

    //return next pages rows
    return c.html(
      <Fragment>
        {rows}
        {rows.length == 50 &&
        <tr hx-get={'/inventory/pages/' + newPageNo} hx-trigger="revealed"
       hx-swap="afterend" hx-include="[name='search']"></tr>}
      </Fragment>
    )

}

export async function getEditPage(c: Context) {

//get id param from request
const id = c.req.param("id");

//get record by id from database
const record = (await getInventoryById(Number(id))).at(0);

//return edit page
return c.html(
  <Fragment>
    <EditRecord record={record}/>
  </Fragment>
);
}

export async function getByPageNoAndBySearch(c: Context) {

  //get page no param from request (if it exists)
  const pageNo = c.req.param("page") === undefined ? undefined : Number(c.req.param("page"));

  //get body from request
  const body = await c.req.parseBody();

  //get search param from request (if it exists)
  const searchStr = body["search"] === undefined ? c.req.query("search") : String(body["search"]);

  //get inventory by page no and/or/neither search
  const results = await getInventoryByPageNoAndBySearch(pageNo ?? 1, searchStr);

  //return results
  return c.json(results);
}


export async function destroyById(c: Context) {
  
  //get id param from request
  const id = c.req.param("id");

  //destroy (delete) record from database
  await destroyInventoryById(Number(id));

  // return user to inventory overview page
  return getPage(c);
}

export async function insertRecord(c: Context) {

  //get body from request
  const body = await c.req.parseBody();

  //insert new record into database
  const record = await insertInventory(body);

  //return record
  return c.json(record);
}

export async function updateById(c: Context) {

  //get body from request
  const body = await c.req.parseBody();
  
  //perform update in database
  const record = await updateInventory(body);

  // return user to inventory overview page
  return getPage(c);
}


