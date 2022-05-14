import React from "react"
import GitHubIcon from '@mui/icons-material/GitHub';

export const SingleProject = (props)=>{
    return (
          <div className='all-about-projects'>
                {props?.projects?.map((el)=>{
                  return (
                    <div className='project-desc'>
                      <div className='project-name'>
                        <div>
                          <a href={el.liveLink}><span>{el.name}</span></a><a href={el.gitLink}><span><GitHubIcon style={{
                            width: "15px",
                            height: "15px",
                          }}/></span></a>
                        </div>
                        <p>{el.description}</p>
                      </div>
                      <div className='features'>
                        <div>
                          <p>Features:</p>
                        </div>
                        <div>
                          <ul>
                            {el.features.map((elm)=>{
                              return (<li>{elm}</li>)
                            })}
                          </ul>
                        </div>
                        <div className='tech-stacks'>
                          <p>Tech-stacks - </p>
                          {el.techStack.map((elem)=>{
                            return (
                              <span>{elem} </span>
                            )
                          })}
                        </div>
                      </div>
                      <div className='roles'>
                        <p>Areas Of Responsibility:</p>
                        <ul>
                          {el.areasOfResp.map((elmt)=>{
                              return (<li>{elmt}</li>)
                            })}
                        </ul>
                        <p>{`This is a team project collaboratively done by ${el.team} members in 6 days.`}</p>
                      </div>
                    </div>
                  )
                })}
          </div>
    )
}