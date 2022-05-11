import {Drawer, FormControlLabel, FormGroup, Switch} from "@mui/material";
import {Box, flexbox} from "@mui/system";
import {useContext, useState} from "react";
import {ColorContext} from "../../../../context/ColorContext";
import SideDrawer from "../SideDrawer";
import ColorChanger from "./ColorChanger";
import ColorDivsChecker from "./DivsChecker";
import MarginSelectors from "./MarginSelectors";
import Button from "@mui/material/Button"
import {SliderContext} from "../../../../context/SliderContext";

function MainColorComp() {
   const [open, setOpen] = useState(false); 
   const {handleReset} = useContext(SliderContext);
   const {leftDivColor, handleLeftDivColor, textColor, handleTextColor, sColor, handleSColor, lColor, handleLColor, headingColor, handleHeadingColor} = useContext(ColorContext);
   return (
      <Box style={{width: '100%' ,display: 'flex', flexDirection: "column" ,justifyContent: 'center', alignItems: "center" ,height: '100vh', flex: 1}}>
         <Box style={{overflow: 'scroll', scrollBarWidth: 'none',display: 'flex', flexDirection: 'column', gap: '10px'}} id="colorChangers">
            <ColorChanger defaultColor="#3b4358" handler={handleSColor} color={sColor} heading="Small Color Div" />
            <ColorChanger defaultColor="#d0826f" handler={handleLColor} color={lColor} heading="Large Color Div" />
            <ColorChanger defaultcolor="#000000" handler={handleHeadingColor} color={headingColor} heading="Heading Color" />
            <ColorChanger defaultcolor="#000000" handler={handleTextColor} color={textColor} heading="Text Color" />
            <ColorChanger defaultcolor="#dfe0e0" handler={handleLeftDivColor} color={leftDivColor} heading="Left Side Color" />
         </Box>
         <ColorDivsChecker />
         <Button onClick={() => setOpen(true)}>Select Sliders</Button>
         <Drawer open={open} BackdropProps={{invisible: true}} PageProps={{sx: {width: '390', backgroundColor: 'red'}}} anchor="right" onClose={() => setOpen(false)}>
            <h1 style={{textAlign: 'center', margin: '10px 0'}}>Sliders</h1>
            <MarginSelectors />
            <Button onClick={handleReset}>Reset All</Button>
         </Drawer>
      </Box>
   )
}

export default MainColorComp;
