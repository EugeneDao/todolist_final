import { useContext } from "react";
import { Context } from "./Context";

const Form = () => {
  const {value,setValue,entry,setEntry} =useContext(Context)
  const handleOnClick=(e)=>{
    e.preventDefault()
setEntry([...entry,value])
setValue('')
window.localStorage.setItem("entry", JSON.stringify(entry));
let todos = [];
const todosJson = localStorage.getItem('entry');
todos = JSON.parse(todosJson);
console.log (entry);
}
    return (
      <form className="form">
        <input placeholder="Enter task ..." value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button onClick={handleOnClick}>Submit</button>
      </form>
    );
  };
  
  export default Form;
  