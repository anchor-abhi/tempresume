import {createContext, useState} from "react";

export const SliderContext = createContext();

const { Provider } = SliderContext;

export const SliderProvider = ({children}) => {
   const [leftSlider, setLeftSlider] = useState(150);
   const [rightSlider, setRightSlider] = useState(120);
   const [imgSlider, setImgSlider] = useState(35);
   const [contactSlider, setContactSlider] = useState(10);
   const [leftTSlider, setLeftTSlider] = useState(-19);
   const [rightTSlider, setRightTSlider] = useState(12);
   const [hasWork, setHasWork] = useState(false);

   const handleLeftSlider = (event, value) => {
      setLeftSlider(value);
   }
   const handleRightSlider = (event, value) => {
      setRightSlider(value);
   }

   const handleImgSlider = (event, value) => {
      setImgSlider(value);
   }

   const handleContactSlider = (event, value) => {
      setContactSlider(value);
   }

   const handleLeftTSlider = (event, value) => {
      setLeftTSlider(value);
   }

   const handleRightTSlider = (event, value) => {
      setRightTSlider(value);
   }


   const handleReset = () => {
      setLeftSlider(150);
      setRightSlider(hasWork ? 90 : 120);
      setImgSlider(35);
      setContactSlider(10);
      setRightTSlider(12);
      setLeftTSlider(-19);
   }

   return (
      <Provider value={{handleRightTSlider, rightTSlider, leftTSlider, handleLeftTSlider, handleReset, hasWork, setHasWork, setRightSlider,leftSlider, rightSlider, imgSlider, contactSlider, handleContactSlider, handleLeftSlider, handleRightSlider, handleImgSlider}}>{children}</Provider>
   )
}
