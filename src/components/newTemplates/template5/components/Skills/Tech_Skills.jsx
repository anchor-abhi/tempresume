import React from "react";
import PsychologyIcon from '@mui/icons-material/Psychology';
import { Heading1 } from "../Headings/Left-side-Heading"; 

export const Tech_Skills = (props)=>{
    const skills = props.skills
    return (
        <div className='Skills'>
            <Heading1 Icon={<PsychologyIcon style={{
            color: "#06aedb",
            width: "25px",
            height: "25px"
            }}/>} Title={"Technical Skills"}/>
            <div className='Skill-info'>
                <div>
                    {skills?.map((el,ind)=>{
                        return (
                            <>
                                {ind === skills.length-1 ? (
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