import { Context } from "hono";
import { Page } from "./inventory.page";
import { TableRow } from "../components/table/tableRow.component";
import { NavBar } from "../components/navbar.component";
import { Fragment } from "hono/jsx/jsx-runtime";
import { db } from "../db";
import { inventory } from "../../schema" 
import { getRecords, deleteRecord, getRecord } from "./inventory.service";
import { EditRecord } from "../components/table/editRecord.component";

export async function get(c: Context) {

  const pageNo = c.req.param("page") === undefined ? undefined : Number(c.req.param("page"));
  const body = await c.req.parseBody();
  const searchStr = body["search"] === undefined ? c.req.query("search") : String(body["search"]);

  if (pageNo === undefined && searchStr === undefined) {

    const inventoryData = await getRecords(pageNo ?? 1);

    return c.html(
      <Fragment>
        <NavBar selectedIndex={3} oobSwap={true} />
        <Page data={inventoryData} pageNo={2} search={searchStr}/>
      </Fragment>
    );

  }


    const inventoryData = await getRecords(pageNo ?? 1, searchStr);

    const rows = inventoryData.map((record : any) => {
      return <TableRow record={record} />
    })

    const newPageNo = pageNo ?? 1 + 1;
    return c.html(
      <Fragment>
        {rows}
        {rows.length == 50 &&
        <tr hx-get={'/inventory/pages/' + newPageNo} hx-trigger="revealed"
       hx-swap="afterend" hx-include="[name='search']"></tr>}
      </Fragment>
    )

}

export async function edit(c: Context) {
const id = c.req.param("id");

const record = await getRecord(Number(id));
return c.html(
  <Fragment>
    <EditRecord record={record}/>
  </Fragment>
);
}



