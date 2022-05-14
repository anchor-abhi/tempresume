import React from "react";

export const Introduction = (props)=>{
  var words = props?.name?.split(" ");
    return (
        <div className='left-top'>
            <div className='pic-section'>
              <div className='pic-top'></div>
              <div className="pic" style={{
                backgroundImage: `url(${props?.pic})`         
              }}></div>
              <div className='pic-bottom'></div>
            </div>
            <div className='about-section'>
              <div className='Name-title'>
                {words?.length >= 3 ? <><p style={{
                  fontSize: "0.9em",
                }}>{props?.name}</p></> : <><p>{props?.name}</p></>}
                <p>{props?.title}</p>
              </div>
              <div className='about'>
                <div>
                  <p>Profile</p>
                  <hr/>
                  <div></div>
                </div>
                <div className='prof-summ'>
                  <p>{props?.summary} </p>
                </div>
              </div>
            </div>
        </div>
    )
}