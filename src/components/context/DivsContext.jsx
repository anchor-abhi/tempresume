import {createContext, useState} from "react";

export const DivsContext = createContext();

const { Provider } = DivsContext;

export const DivsProvider = ({children}) => {
   const [selectDiv, setSelectDiv] = useState(true);

   const handleDiv = () => {
      setSelectDiv(p => !p);
   }
   return (
      <Provider value={{selectDiv, handleDiv}}>{children}</Provider>
   )
}
