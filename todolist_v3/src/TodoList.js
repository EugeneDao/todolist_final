import { useContext } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { Context } from "./Context";

const TodoList = () => {
  const {entry} =useContext(Context)
  return (
    <div className="todo-list-container">
      {entry.map((entry)=><div className="todo-item-container">
        <FaRegCircle className="item-done-button" color="#9a9a9a" />
        <div className="item-title">{entry}</div>
      </div>)}
      
     
    </div>
  );
};

export default TodoList;
