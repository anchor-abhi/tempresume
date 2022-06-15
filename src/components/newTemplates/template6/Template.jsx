import { Left } from "./Left/Left";
import { Right } from "./Right/Right";
import "./Template.css";
import { useEffect, useState } from "react";
import axios from "axios";
import MyButton from "../../../components/Button";
import Loader from "../../loader";
import { useNavigate } from "react-router";

export const Template6 = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("loggedinUser"));
    axios
      .get(`https://masairesumebuilder.herokuapp.com/resume/${userId}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLoad(true);

        if(res.data.length==0){
          alert("Please fill the form");
          navigate("/createform");
        }
      })
      .catch((e) => console.log(e.message));
  }, []);
  const save = () => {
    navigate("/download");
  };

  


  return load ? (
    <>
      <MyButton click={save}></MyButton>
      <div className="n-container">
        <Left data={data[data.length - 1]} />
        <Right data={data[data.length - 1]} />
      </div>
    </>
  ) : (
    <Loader />
  );
};
