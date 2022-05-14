import React from "react";

export const Heading2 = (props)=>{
    return (
        <div>
            <div className='right-side-heading'>
            {props.Icon}
            <span>{props?.title}</span>
            </div>
            <div className='triangle'></div>
        </div>
    )
}