import { Table } from "../components/table/table.component";
import { TableRow } from "../components/table/tableRow.component";

export const Page = (props: {data: any, pageNo: number, search?: string}) => {

  //construct rows for table
  const rows = props.data.map((record : any) => {
    return <TableRow record={record} />
  })

    return (
      <div class="flex-col">
        <Table columnNames={["ID", "Name", "Quantity", "Price", "Description", "Category"]} tableRows={rows} pageNo={props.pageNo} search={props.search}/>
      </div>
    );
  };
  