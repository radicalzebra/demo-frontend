const Input = (props) => {
   
   return (
     <>
         {props.label && <label for="input" className="mr-1">{props.img ? <img src={props.src} alt="search"/> : props.labelText || ""}</label> }
         <input id="input" type={props.inputType} placeholder={props.placeholder} className={`${props.inputType==="search" ? "rounded-3xl w-4/5 h-10 px-4  focus-visible:border-red-700 focus-visible:border-4 border-black border-2 outline-none" : props.inputClasses}`}/>
     </>
   )
}

export default Input;