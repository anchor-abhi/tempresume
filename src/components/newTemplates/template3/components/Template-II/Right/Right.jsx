import "./Right.css";
import GitHubIcon from "@mui/icons-material/GitHub";
export const Right = ({ data }) => {
  return (
    <div className="right-container">
      <h1 className="universal">{data?.personal?.name}</h1>
      <h3 className="universal" >Full Stack Web Developer</h3>
      <hr className="hr" />
      {/*  */}
      <div className="profile-desc">
        <h4 style={{marginBottom:"3px"}} className="universal">PERSONAL PROFILE</h4>
        <p className="universal" style={{fontSize:"11px",fontFamily:'Roboto'}}>{data?.summary}</p>
      </div>

    {/* optional work experience */}
    { data?.workEx?.length !== 0 ? <section className="work-exp" >
    <h4 className="universal" >WORK EXPERIENCE</h4>
    {
    data?.workEx?.map((ele)=>{
      return(
        <div className="universal" style={{fontSize:"11px"}}>
          <p className="universal" > <span className="workDetails">Organisation: </span> {ele.organisation}</p>
          <p className="universal" > <span className="workDetails">Position: </span>{ele.position}</p>
          <p className="universal" > <span className="workDetails" >Duration: </span> {ele.start +" to " + ele.end}</p>
          <div className="job-profile"> <span className="workDetails" >ROLES: </span> {ele.description.join(" | ")}</div>
        </div>
      )
    })
    
    }
    </section> : ""
    
  }
    

      {/* project section */}

      <section className="project-section">
        <h4 className="universal" style={{marginBottom:"-6px"}} >PROJECTS</h4>
        {/* first project */}
        {data?.projects?.map((ele) => {
          return (
            <div className="universal">
              {/* deplye link and github link */}
              <div className="icons-div" >
                <h4 className="universal"
                  style={{ cursor: "pointer" ,paddingTop:"6px",marginTop:"-10px"}}
                  onClick={() => {
                    window.open(ele.liveLink);
                  }}
                >
                  {ele.name}
                </h4>
                <GitHubIcon className="universal"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.open(ele.gitLink);
                  }}
                />
              </div>
              {/* aboutproject */}
              <div className="universal">
                <p className="project-description">{ele.description}</p>
                <h4 className="universal" style={{marginBottom:"0px"}}>Features</h4>
                {ele.features.map((list) => {
                  return (
                    <li className="universal"
                      style={{
                        lineHeight: data?.workEx?.length == 0 ? "12px" : "6px",
                        fontSize:"11px"
                      }}
                    >
                      {list}
                    </li>
                  );
                })}
                <div className="tech-stack">
                  <h4 className="universal">Tech-Stack</h4>
                  <p className="universal" >{ele.techStack.join(" | ")}</p>
                </div>
                <h4 className="area-of-response">Area of responsibility</h4>
                {ele.areasOfResp.map((res) => {
                  return <li className="universal"  style={{
                    lineHeight: data?.workEx?.length == 0 ? "12px" : "6px",
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

      <div className="universal"></div>
    </div>
  );
};
