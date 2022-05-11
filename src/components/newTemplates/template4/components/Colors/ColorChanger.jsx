import {Button} from "@mui/material";
import {SketchPicker} from "react-color";
import "./colorStyles.css";

function ColorChanger({heading, handler, color, defaultColor}) {
   return (
      <div id="colorChanger">
         <h2>{heading}</h2>
         <SketchPicker color={color} onChange={(e) => handler(e.hex)} />
         <Button variant="outlined" style={{width: "50%", margin: "10px auto"}} onClick={() => handler(defaultColor)}>Reset</Button>
      </div>
   )
}

export default ColorChanger;
