import { JSX } from "hono/jsx/jsx-runtime";

export const EditRecord = (props: { record: any }) => {

    const inputs = props.record.map((prop : any) => {
      return <Input Value={prop}/>
    })

return (
    <div id="modal flex-col">
        {inputs}
    </div>   
    )

}

const Input = (props: { Value: any }) => {



  return (
    <label for={props.Value}>{props.Value}
    <input type="text" name={props.Value}/>
    </label>
  );
};
