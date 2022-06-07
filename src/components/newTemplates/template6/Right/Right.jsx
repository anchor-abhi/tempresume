import "./Right.css";
import GitHubIcon from "@mui/icons-material/GitHub";
export const Right = ({ data }) => {
  return (
    <div className="n-right-container">
      <h1 className="n-universal">{data?.personal?.name}</h1>
      <h3 className="n-universal">Full Stack Web Developer</h3>
      <hr className="n-hr" />
      {/*  */}
      <div className="n-profile-desc">
        <h2 >
          Personal Profile
        </h2>
        <p className="n-summary">
          {data?.summary}
        </p>
      </div>

      {/* optional work experience */}
      {data?.workEx?.length !== 0 ? (
        <section className="n-work-exp">
          <h2>Work Experience</h2>
          {data?.workEx?.map((ele) => {
            return (
              <div className="n-sub-work-div" >
                <p >
                  <span className="n-workDetails">Organisation: </span>
                  {ele.organisation}
                </p>
                <p className="n-universal">
                  {" "}
                  <span className="n-workDetails">Position: </span>
                  {ele.position}
                </p>
                <p className="n-universal">
                  {" "}
                  <span className="n-workDetails">Duration: </span>{" "}
                  {ele.start + " to " + ele.end}
                </p>
                <div style={{ marginBottom: "3px" }} className="n-job-profile">
                  {" "}
                  <span className="n-workDetails">ROLES: </span>{" "}
                  {ele.description.join(" | ")}
                </div>
              </div>
            );
          })}
        </section>
      ) : (
        ""
      )}

      {/* project section */}

      <section className="n-project-section">
        <h2 style={{marginBottom:"15px"}}>
          Projects
        </h2>
            <div>
              {/* deplye link and github link */}
              <div className="n-icons-div">
                <h4 
                  style={{ cursor: "pointer" ,marginBottom:"11px"}}
                  onClick={() => {
                    window.open(data?.projects[0].liveLink);
                  }}
                >
                  {data?.projects[0].name}
                </h4>
                <GitHubIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.open(data?.projects[0].gitLink);
                  }}
                />
              </div>
              {/* aboutproject */}
              <div className="n-proj-div">
                <p className="n-project-description">{data?.projects[0].description}</p>
                <h4  className="sub-title-02">
                  Features
                </h4>
                {data?.projects[0].features.map((list) => {
                  return (
                    <li id="n-li"
                      style={{
                        lineHeight: data?.workEx?.length == 0 ? "20px" : "20px",
}}
                    >
                      {list}
                    </li>
                  );
                })}
                <div className="n-tech-stack">
                  <h3 style={{fontSize:"13.5px",
  color:"#4b4bda"}} className="n-universal">Tech-Stack</h3>
                  <p style={{fontSize:"12px"}} className="n-universal">{data?.projects[0].techStack.join(" | ")}</p>
                </div>
                <h3 style={{fontSize:"13.5px",
  color:"#4b4bda"}}className="n-area-of-response">Area of responsibility</h3>
                {data?.projects[0].areasOfResp.map((res) => {
                  return (
                    <li
                      className="n-universal"
                      style={{
                        lineHeight: data?.workEx?.length == 0 ? "20px" : "20px",
                        fontSize: "12px",
                      }}
                    >
                      {res}
                    </li>
                  );
                })}
              </div>
            </div>


        
      </section>
    </div>
  );
};
