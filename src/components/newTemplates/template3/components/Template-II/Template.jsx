import { Left } from "./Left/Left";
import { Right } from "./Right/Right";
import "./Template.css";
import { useEffect, useState } from "react";
import axios from "axios"
import { duplicateData } from "../../store/Data";

export const Template = ()=>{


    let [state,setState] = useState("white")
    let [color,setColor] = useState("black")
    const grayColor = ()=>{
        setState("rgb(243, 234, 234)")
        setColor("black")
    }

    const blueColor = ()=>{
        setState("#548ee6")
        setColor("black")
    }

    const blackColor = ()=>{
        setState("#202020")
        setColor("white")
    }

    const maroonColor = ()=>{
        setState("maroon")
        setColor("white")
    }

    const [data, setData] = useState([]);
    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem("loggedinUser"));
        axios
          .get(`https://masairesumebuilder.herokuapp.com/resume/${userId}`)
          .then((res) => {
            console.log(res.data);
            setData(res.data);
          })
          .catch((e) => console.log(e.message));
      }, []);
      console.log("data=",data[data.length-1])
    return(
        <div className="container">
            <Left data={duplicateData} state={state} color={color} />
            <Right data={duplicateData} />
            <div className="colors">
                <div onClick={grayColor} className="gray" >
                </div>

                <div onClick={blueColor} className="blue" >
                </div>

                <div onClick={blackColor} className="black" >
                </div>

                <div onClick={maroonColor} className="maroon" >
                </div>

            </div>
        </div>
    )
}
