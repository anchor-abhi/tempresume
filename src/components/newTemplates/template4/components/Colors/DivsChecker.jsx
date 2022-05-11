import {Box, FormControlLabel, Switch} from "@mui/material";
import {useContext} from "react";
import {DivsContext} from "../../../../context/DivsContext";

function ColorDivsChecker() {

   const { handleDiv } = useContext(DivsContext);

   return (
      <div>
         <Box style={{marginTop: '20px'}} id="divsRemovers">
            <FormControlLabel control={<Switch defaultChecked onChange={handleDiv} />} label="Select Divs" />
         </Box>

      </div>
   )
}

export default ColorDivsChecker;
