import "./Right.css";
import GitHubIcon from "@mui/icons-material/GitHub";
export const Right = ({ data }) => {
  return (
    <div className="right-container">
      <h1>{data?.personal?.name}</h1>
      <h3>Full Stack Web Developer</h3>
      <hr className="hr" />
      {/*  */}
      <div className="profile-desc">
        <h4>PERSONAL PROFILE</h4>
        <p style={{fontSize:"11px"}}>{data?.summary}</p>
      </div>

    {/* optional work experience */}
    {/* { data?.workEx?.length !== 0 ? <section className="work-exp" >
    <h4>WORK EXPERIENCE</h4>
    {
    data?.workEx?.map((ele)=>{
      return(
        <div style={{fontSize:"11px"}}>
          <p>Organisation:{ele.organisation}</p>
          <p>Position:{ele.position}</p>
          <p>Duration:{ele.start +" to " + ele.end}</p>
          <div className="job-profile">Job Profile:{ele.description.map((task)=>{
            return(
              <li style={{listStyleType:"none", fontSize:"11px"}} >{task+" | "}</li>
            )
          })}</div>
        </div>
      )
    })
    
    }
    </section> : ""
    
  } */}
    

      {/* project section */}

      <section className="project-section">
        <h4 style={{marginBottom:"-1px"}} >PROJECTS</h4>
        {/* first project */}
        {data?.projects?.map((ele) => {
          return (
            <div>
              {/* deplye link and github link */}
              <div className="icons-div" >
                <h4
                  style={{ cursor: "pointer" ,paddingTop:"6px"}}
                  onClick={() => {
                    window.open(ele.liveLink);
                  }}
                >
                  {ele.name}
                </h4>
                <GitHubIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.open(ele.gitLink);
                  }}
                />
              </div>
              {/* aboutproject */}
              <div>
                <p className="project-desc">{ele.description}</p>
                <h4 style={{marginBottom:"0px"}}>Features</h4>
                {ele.features.map((list) => {
                  return (
                    <li
                      style={{
                        // lineHeight: data?.workEx?.length == 0 ? "12px" : "5px",
                        fontSize:"11px"
                      }}
                    >
                      {list}
                    </li>
                  );
                })}
                <div className="tech-stack">
                  <h4>Tech-Stack</h4>
                  <p>{ele.techStack.join(" | ")}</p>
                </div>
                <h4 className="area-of-response">Area of responsibility</h4>
                {ele.areasOfResp.map((res) => {
                  return <li  style={{
                    // lineHeight: data?.workEx?.length == 0 ? "12px" : "5px",
                    fontSize:"11px"
                  }} >{res}</li>;
                })}
                {ele.solo ? (
                  <p style={{fontSize:"11px"}} className="team-line">Solo Project </p>
                ) : (
                  <p style={{fontSize:"11px"}} className="team-line">
                    {"A collaborative project built by a team of " +
                      ele.team +
                      " members,executed in one week."}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </section>

      <div></div>
    </div>
  );
};
