import {createContext, useState} from "react";

export const SliderContext = createContext();

const { Provider } = SliderContext;

export const SliderProvider = ({children}) => {
   const [leftSlider, setLeftSlider] = useState(150);
   const [rightSlider, setRightSlider] = useState(120);
   const [imgSlider, setImgSlider] = useState(35);
   const [contactSlider, setContactSlider] = useState(10);
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

   const handleReset = () => {
      setLeftSlider(150);
      setRightSlider(hasWork ? 90 : 120);
      setImgSlider(35);
      setContactSlider(0);
   }

   return (
      <Provider value={{handleReset, hasWork, setHasWork, setRightSlider,leftSlider, rightSlider, imgSlider, contactSlider, handleContactSlider, handleLeftSlider, handleRightSlider, handleImgSlider}}>{children}</Provider>
   )
}
