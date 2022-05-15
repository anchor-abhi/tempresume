import React from "react";

export const Heading1 = (props)=>{
    return (
        <div className='heading'>
            <div>
                {props.Icon}
                <p>{props?.Title}</p>
            </div>
            <div className='underline'>
                <div className='slash'></div>
                <hr/>
                <div></div>
            </div>
        </div>
    )
}