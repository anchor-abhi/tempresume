// import { DrawerHeader } from "@chakra-ui/react";
import { Drawer, Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router";
import Temp4 from "../components/newTemplates/template4/temp4";
import Temp2 from "../components/newTemplates/template2/Temp2";
import { Template } from "../components/newTemplates/template3/components/Template-II/Template";
import Temp5 from "../components/newTemplates/template5/Temp5";
import MyButton from "../components/Button";
import jspdf from "jspdf";
import Alert from "./alert";
import "./templatess.css";
import Resume from "../components/newTemplates/template1/resume";
import { Template6 } from "../components/newTemplates/template6/Template";



const imageArr = [
  { img: "downloadresume", component: 1 },
  { img: "temp2", component: 2 },
  { img: "temp3", component: 3 },
  { img: "temp4", component: 4 },
  { img: "temp5", component: 5 },
];

const handleChange = () => {
  var doc = new jspdf("p", "pt", "a4");

  doc.html(document.querySelector(".container"), {
  	callback: function (pdf) {
  		var pageCount = doc.internal.getNumberOfPages();
  		doc.deletePage(pageCount);
  		pdf.save("Resume.pdf");
  	},
  });

};

function TemplateSelector() {
  let userId = JSON.parse(localStorage.getItem("loggedinUser"));
  const [open, setOpen] = useState(false);
  const [currentTemplate, setCurrentTemplate] = useState(1);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  return userId ? (
    <>
      {/* <MyButton click={handleChange} /> */}
      <Box style={{ marginTop: 0 }}>
        {currentTemplate === 1 ? (
          <Resume />
        ) : currentTemplate === 2 ? (
          <Temp2 />
        ) : currentTemplate === 3 ? (
          <Template />
        ) : currentTemplate === 4 ? (
          <Temp4 />
        ) : currentTemplate === 5 ? (
          <Temp5 />
        ) : (
          <></>
        )}

        <Button
          variant="outlined"
          onClick={() => setOpen(true)}
          style={{ position: "fixed", bottom: 10, left: 10 }}
        >
          See Templates
        </Button>
        <Drawer
          BackdropProps={{ invisible: true }}
          open={open}
          PaperProps={{
            sx: {
              width: "350px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "20px",
            },
          }}
          onClose={() => setOpen(false)}
        >
          {imageArr.map((oneimg) => {
            return (
              <img
                key={oneimg.img}
                className="templateImages"
                style={{ cursor: "pointer", margin: "10px 0" }}
                src={`/images/templatess/${oneimg.img}.png`}
                onClick={() => setCurrentTemplate(oneimg.component)}
                alt="template image"
                width="50%"
                height="auto"
              />
            );
          })}
        </Drawer>
      </Box>
    </>
  ) : (
    <Alert />
  );
}

export default TemplateSelector;
