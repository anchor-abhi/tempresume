import React from "react";
import SchoolIcon from '@mui/icons-material/School';
import DoubleArrowOutlinedIcon from '@mui/icons-material/DoubleArrowOutlined';
import { Heading1 } from "../Headings/Left-side-Heading";
export const Education = (props)=>{
    return (
        <div className='Education'>
            <Heading1 Icon={<SchoolIcon style={{
                color: "#06aedb",
                width: "25px",
                height: "25px"
              }}/>} Title={"Education"}/>
            {props?.education?.map((el)=>{
              return(
                <div className='Edu-info'>
                  <div>
                    <div>
                      <DoubleArrowOutlinedIcon style={{
                        width: "15px",
                        height: "15px",
                        color: "white",
                      }}/>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>{el.course}</p>
                      <div>
                        <p>{el.institute}</p>
                        <p>{el.start} - {el.end}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
    )
}