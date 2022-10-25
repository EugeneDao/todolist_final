import React, {useEffect,useState, useContext} from "react";
import { Context } from "./Context";

const Header = () => {
  const {entry} =useContext(Context)
  const [count, setCount] = useState(0);
  useEffect(() =>{
    const incrementCount = (entry) => {
      setCount(count = entry.length);
    };
      
    })
    return <div className="header">You have {entry.length} tasks left!</div>;
  }
  
  export default Header;