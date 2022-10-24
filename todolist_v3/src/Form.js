import { useContext } from "react";
import { Context } from "./Context";

const Form = () => {
  const {value,setValue,entry,setEntry} =useContext(Context)
  console.log(value)
  const handleOnClick=(e)=>{
    e.preventDefault()
setEntry([...entry,value])
setValue('')
}
   

  
    return (
      <form className="form">
        <input placeholder="Enter task ..." value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button onClick={handleOnClick}>Submit</button>
      </form>
    );
  };
  
  export default Form;
  