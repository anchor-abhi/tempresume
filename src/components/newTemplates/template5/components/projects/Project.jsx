import React from "react";

import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

import { SingleProject } from "./SingleProject";
import { Heading2 } from "../Headings/Right-side-Headings";
export const Projects = (props)=>{
    return (
        <div className='Projects-sec'>
            <Heading2 Icon={<LibraryBooksIcon style={{
                width: "20px",
                height: "20px",
                color: "white",
            }}/>} title={"Projects"}/>
            <SingleProject projects={props?.projects}/>
        </div>
    )
}