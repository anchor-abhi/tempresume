import "./project.css"

import GitHubIcon from '@mui/icons-material/GitHub';
function Projects({name,dis,features,techStack,areasOfResp,deploy,git}){
    return <div className="proj">
        <div className="pro">
            <div><a href={deploy} target="_blank"><h5>{name}</h5></a></div>
            <div className="icon"><a href={git} target="_blank"><GitHubIcon></GitHubIcon></a></div>
        </div>
        <div>
            <p className="dis">{dis}</p>
            <h6 className="features">{"Features:"}</h6>
            <div className="list">
                <ul>
                    {features.map(el=><li>{el}</li>)}
                </ul>
            </div>
            <p className="techstack"><span>Tech Stack: </span>{techStack.join(" | ")}</p>
            <h6 className="features">{"Areas of responsibility:"}</h6>
            <div className="list">
                <ul>
                    {areasOfResp.map(el=><li>{el}</li>)}
                </ul>
            </div>
        </div>
    </div>
}

export default Projects;