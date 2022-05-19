import Resume from "./resume";
import Button from "./Button";
import jspdf from "jspdf";
import { TokenContext } from "./context/context";
import { useContext,useEffect, useState } from "react";


const DownloadResume = () => {
  const { token } = useContext(TokenContext);
  console.log("token = ", token);
  const handleChange = () => {
    var doc = new jspdf("p", "pt", "a4");
    doc.html(document.querySelector("#mainDiv"), {
      callback: function (pdf) {
        var pageCount = doc.internal.getNumberOfPages();
		    doc.deletePage(pageCount);
        pdf.save("Resume.pdf");
      },
    });
  };
    
  return (
    <>
      <Button click={handleChange} />
      <Resume />
    </>
  );
  
};

export default DownloadResume;
