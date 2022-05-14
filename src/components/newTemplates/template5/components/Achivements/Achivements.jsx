import React from "react";
import { Heading1 } from "../Headings/Left-side-Heading";
import DoubleArrowOutlinedIcon from '@mui/icons-material/DoubleArrowOutlined';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

export const Acheivements = (props)=>{
    return (
        <div className='achivements'>
            <Heading1 Icon={<MilitaryTechIcon style={{
                color: "#06aedb",
                width: "25px",
                height: "25px"
                }}/>} Title={"Achivements"}/>
            <div className='acheivment-pointers'>
                {props?.acheivement?.map((el)=>{
                    return (
                        <div>
                            <div>
                                <DoubleArrowOutlinedIcon style={{
                                    width: "15px",
                                    height: "15px",
                                    color: "white",
                                }}/>
                            </div>
                            <div>
                                <p>{el}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}