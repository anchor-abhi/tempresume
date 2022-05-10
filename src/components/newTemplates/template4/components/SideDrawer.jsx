import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import {useState} from "react";

function SideDrawer({children}) {
   const [open, setOpen] = useState(false);
   return (
      <>
         <Button sx={{position: 'fixed', top: '50px', left: '20px', color: "#3b4358", border: '1px solid #3b4358'}} variant="outlined" onClick={() => setOpen(p => !p)}>Select Colors</Button>
         <Drawer BackdropProps={{invisible: true}} open={open} PaperProps={{ sx: {width: "350px"}}} onClose={() => setOpen(false)}>
            {children}
         </Drawer>
      </> 
   )
}

export default SideDrawer;
