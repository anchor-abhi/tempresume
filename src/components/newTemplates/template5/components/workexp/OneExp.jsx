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
                        {props?.work_ex?.map((elm)=>{
                          return (
                            <li>{el.description}</li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                )
            })}
          </div>
      )
}