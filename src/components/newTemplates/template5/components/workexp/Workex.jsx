import React from "react";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { OneExp } from "./OneExp";
import { Heading2 } from "../Headings/Right-side-Headings";
export const Work_Exp = (props)=>{
    return (
        <div className='Work-ex'>
            <Heading2 Icon={<BusinessCenterIcon style={{
                width: "20px",
                height: "20px",
                color: "white",
            }}/>} title={"Work Experience"}/>
            <OneExp work_ex={props?.work_ex}/>
        </div>
    )
} 