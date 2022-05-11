import {createContext, useState} from "react";

export const ColorContext = createContext();

const { Provider } = ColorContext;

export const ColorProvider = ({children}) => {
   const [sColor, setSColor] = useState('#3b4358');
   const [lColor, setLColor] = useState('#d0826f');
   const [headingColor, setHeadingColor] = useState("#000000");
   const [textColor, setTextColor] = useState("#000000");
   const [leftDivColor, setLeftDivColor] = useState("#dfe0e0");
   const [rightDivColor, setRightDivColor] = useState("#ffffff");

   const handleSColor = (value) => {
      setSColor(value);
   }

   const handleLColor = (value) => {
      setLColor(value);
   }

   const handleHeadingColor = (value) => {
      setHeadingColor(value);
   }

   const handleTextColor = (value) => {
      setTextColor(value);
   }

   const handleLeftDivColor = (value) => {
      setLeftDivColor(value);
   }

   const handleRightDivColor = (value) => {
      setRightDivColor(value);
   }

   return (
      <Provider value={ {leftDivColor, handleLeftDivColor, rightDivColor, handleRightDivColor ,textColor, handleTextColor, headingColor, handleHeadingColor, sColor, handleSColor, lColor, handleLColor } }>{children}</Provider>
   )
}
