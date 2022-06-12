import { useState } from "react";
import { Template6 } from "../components/newTemplates/template6/Template";
import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";

function Download() {
  const [dialog, setDialog] = useState(true);

  const handleOpen = () => {
    setDialog(true);
  };
  const handleClose = () => {
    setDialog(false);
    
  };
  const handlePrint = () => {
    window.print();
  }
  return (
    <> 
      <Stack id="stackId" direction="row" spacing={2}>
      <Button id="btn1" variant="outlined" onClick={handleOpen}>Read Instructions</Button>
      <Button id="btn2" variant="contained" onClick={handlePrint}>Download</Button>
      </Stack>
      <Dialog open={dialog} onClose={handleClose}>
        <DialogTitle>
          <Typography variant="h4">Instructions to Download</Typography>
          <ul style={{color:"rgb(100,100,100)"}}>
            <li>Choose "Save as pdf" option</li>
            <li>In case of multiple pages, choose "Odd pages only"</li>
            <li>Set paper size to "A4"</li>
            <li>Set margin to "none"</li>
            <li>Turn "Background Graphics" on</li>
          </ul>
        </DialogTitle>
      </Dialog>
      <Template6 />
    </>
  );
}
export default Download;
