import React from "react";
import PsychologyIcon from '@mui/icons-material/Psychology';
import { Heading1 } from "../Headings/Left-side-Heading"; 

export const Soft_Skills = (props)=>{
    return (
        <div className='Skills'>
            <Heading1 Icon={<PsychologyIcon style={{
            color: "#06aedb",
            width: "25px",
            height: "25px"
            }}/>} Title={"Soft Skills"}/>
            <div className='Skill-info'>
            <div>
                    {props?.skills?.map((el,ind)=>{
                        return (
                            <>
                                {ind === props.skills.length-1 ? (
                                    <span> {el} </span>
                                ) : (
                                    <span> {el} |</span>
                                )}
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}