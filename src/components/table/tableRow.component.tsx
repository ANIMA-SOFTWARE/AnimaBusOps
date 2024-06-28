import { JSX } from "hono/jsx/jsx-runtime";
import { TableCell } from "./tableCell.component";

export const TableRow = (props: { record: any }) => {

    //create table cells

    let cells : JSX.Element[] = [];

    //iterate over record object props
    for (const [key, value] of Object.entries(props.record)) {
        cells.push(<TableCell Value={String(value)}/>)
    }
    return (
      <tr>
        {cells}
        <td><a>Edit</a></td>
      </tr>
    );
  };
  