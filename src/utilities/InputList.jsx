import { Card } from "./Cards";

const InputList = (props) => {

   return (
      <Card className={`flex gap-2 py-0.7`}>
       <label htmlFor={props.label} className="font-dosis font-medium text-xl ">
         {props.img && <img className="pt-1" src={props.label}/>}
         {!props.img && props.label}
       </label>
       {/* <input id={props.label} className={props.className}/> */}
       <select  className="bg-gray-200 rounded-md w-20 text-md text-center" id={props.label}>
            {props.listOptions.map((el,i) => <option className="bg-gray-200 w-1/2 text-sm" key={i} value={el}>{el}</option>)}
       </select>
      </Card>
   )
}

export default InputList;