import {Slider, Stack} from "@mui/material";
import {Box} from "@mui/system";
import {useContext} from 'react';
import {SliderContext} from "../../../../context/SliderContext";
import "./marginSelectors.css";

function MarginSelectors() {

   const {imgSlider, handleImgSlider, contactSlider, handleContactSlider ,leftSlider, handleLeftSlider, rightSlider, handleRightSlider} = useContext(SliderContext);
   return (
      <Stack sx={{width: "300px", display: 'flex', justifyContent: "center", alignItems: 'center', margin: '25px auto'}} spacing="2" direction="column">
         <Box className="sliderBox" >
            <p>Left Section</p>
            <Slider aria-label="Top Margin" valueLabelDisplay="auto" value={leftSlider} min={0} max={400} onChange={handleLeftSlider}/>
         </Box>
         <Box className="sliderBox">
            <p>Right Section</p>
            <Slider aria-label="Top Margin" valueLabelDisplay="auto" value={rightSlider} min={0} max={300} onChange={handleRightSlider}/>
         </Box>
         <Box className="sliderBox">
            <p>Image Section</p>
            <Slider aria-label="Top Margin" valueLabelDisplay="auto" min={0} max={200} value={imgSlider} onChange={handleImgSlider}/>
         </Box>
         <Box className="sliderBox">
            <p>Contact Section</p>
            <Slider aria-label="Top Margin" value={contactSlider} valueLabelDisplay="auto" min={0} max={100} onChange={handleContactSlider}/>
         </Box>
      </Stack>
   )
}

export default MarginSelectors;
