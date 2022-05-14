import React from "react";

export const OneExp = (props)=>{
    return (
          <div className='all-about-work'>
            {props?.work_ex?.map((el)=>{
                return (
                  <div className='work-desc'>
                  <div className='designation'>
                    <p>{el.position}</p>
                  </div>
                  <div className='company'>
                    <div>
                      <span>{el.organization} / </span><span>{el.start} - {el.end}</span>
                    </div>
                    <div className='job-profile'>
                      <ul>
                        <li>{"Developed and extensive experience in Integration testing & programming"}</li>
                        <li>{"Add Your Text here"}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                )
            })}
          </div>
      )
}