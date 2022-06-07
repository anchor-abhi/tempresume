import { Left } from "./Left/Left";
import { Right } from "./Right/Right";
import "./Template.css";
import { useEffect, useState } from "react";
import axios from "axios";

export const Template6 = () => {
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
  return (
    <div className="n-container">
      <Left data={data[data.length - 1]}/>
      <Right data={data[data.length - 1]} />
    </div>
  );
};
