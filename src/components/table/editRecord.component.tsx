import { Fragment } from "hono/jsx/jsx-runtime";

export const EditRecord = (props: { record: any }) => {
  console.log(props.record)

    const inputs = Object.entries(props.record).map(([key,value]) => {
     return (
      <Fragment>
        <label for={key}>{key}</label>
        <input type="text" name={key} value={String(value)}/>
        </Fragment>
      );
    })

return (
    <form hx-target="main" class='flex-col'>
        {inputs}
        <div id='button-container' class="flex-row">
        <input type="button" value="Save" hx-put={"/inventory/" + props.record.id}/>
        <input type="button" value="Cancel" hx-get={"/inventory"} />
        <input type="reset" value="Reset" />
        <input type="button" value="Delete" hx-confirm="Are you sure?" hx-delete={"/inventory/" + props.record.id} />
        </div>
    </form>   
    )

}
