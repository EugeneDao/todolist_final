import { useContext, useEffect, useRef, React } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { Context } from "./Context";

const TodoList = () => {
  const {entry,setEntry} =useContext(Context)
  // Use Effect call data
  // const hasUpated = React.useRef(false);
  // useEffect(() => {
  //   const data = window.localStorage.getItem('entry');
  //   if ( data !== null && !hasUpated.current ) setEntry(JSON.parse(data));
  // },[]);

  // let todos = JSON.parse(localStorage.getItem('entry'));
  // setEntry([...entry,todos])
  const handleOnClick= () => {
    const newList = entry.map((el) => {
      if (el.id === entry.id) {
        return {
          ...el,
          isDeleted: !el.isDeleted,
        };
      }
      return el;
    });
    setEntry(newList);
    console.log(newList);
  }
  return (
    <div className="todo-list-container">
      {entry.map((entry)=><div className="todo-item-container">
        <FaRegCircle className="item-done-button" type="checkbox" color="#9a9a9a" onclick={handleOnClick} />
        <div className="item-title">{entry}</div>
      </div>)}
    </div>
  );
}; 

export default TodoList;
