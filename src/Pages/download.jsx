import { useEffect } from "react";
import { Template6 } from "../components/newTemplates/template6/Template";

function Download() {
  useEffect(()=>{
   setTimeout(()=>{
    window.print();
   },5000)
  },[])
  return <Template6 />;
}
export default Download;
