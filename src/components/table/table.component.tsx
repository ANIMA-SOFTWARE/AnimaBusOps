import { TableRow } from "./tableRow.component";
import { TableCell } from "./tableCell.component";
import { Fragment, JSX } from "hono/jsx/jsx-runtime";

export const Table = (props: { columnNames: string[], tableRows: JSX.Element[], pageNo: number, search?: string }) => {

//construct headers

    const headers = props.columnNames.map((prop : any) => {
      return <TableCell Value={prop}/>;
    })


    return (
<Fragment>
      <input class="form-control" type="search" 
       name="search" placeholder="Search..." 
       hx-post="/inventory/search" 
       hx-trigger="input changed delay:500ms, search" 
       hx-target="#search-results" 
       hx-swap="innerHTML"
       >
       </input>

    <table>
      <thead>
        <tr>
          {headers}
          <td>Edit</td>
        </tr>
        </thead>
        <tbody id="search-results">
          {props.tableRows}
          <tr hx-get={'/inventory/pages/' + props.pageNo} hx-trigger="revealed"
    hx-swap="afterend" hx-include="[name='search']"></tr>
        </tbody>
      </table>
  </Fragment>
    );
  };
  