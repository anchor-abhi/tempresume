import { Left } from "./Left/Left";
import { Right } from "./Right/Right";
import "./Template.css";
import { useEffect, useState } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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

  const save = () => {
    const input = document.querySelector(".n-container");
    // html2canvas(input).then((canvas) => {
    //   const imgData = canvas.toDataURL("image/png");
    // });

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("download.pdf");
    });
  };

  return (
    <>
      {/* <button onClick={save}>save</button> */}
      <div className="n-container">
        <Left data={data[data.length - 1]} />
        <Right data={data[data.length - 1]} />
      </div>
    </>
  );
};
