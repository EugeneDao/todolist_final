import { createContext, useEffect, useState } from "react";
export const Context = createContext();


export default function Provider({ children }) {
  const [value,setValue]=useState('')

  const [entry,setEntry]=useState([])
  
  

  return (
    <Context.Provider value={{ value,setValue,entry,setEntry}}>
      
        {children}
      
    </Context.Provider>
  );
}