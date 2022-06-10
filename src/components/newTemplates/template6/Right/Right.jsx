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
        <h2>Personal Profile</h2>
        <p className="n-summary">{data?.summary}</p>
      </div>

      {/* optional work experience */}
      {data?.workEx?.length !== 0 ?<h2 className="h2" style={{ marginTop: "7px" }}>Work Experience</h2>:""}
      {data?.workEx?.length !== 0 ? (
        <section className="n-work-exp">
          {data?.workEx?.map((ele) => {
            return (
              <div className="n-sub-work-div">
                <p>
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
        <h2 style={{ marginBottom: "25px", marginTop: data?.workExp?.length == 0 ?  "15px" : "9px" }}>Projects</h2>
        {data?.projects?.map((ele) => {
          return (
            <div className="n-project-div">
              {/* deplye link and github link */}
              <div className="n-icons-div">
                <h4
                  style={{ cursor: "pointer", marginBottom: "11px" }}
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
              <div className="n-proj-div">
                <p className="n-project-description">{ele.description}</p>
                <h4 className="n-sub-title-02">Features</h4>
                <ul className="ul">
                {ele.features.map((list) => {
                  return (
                    <li
                      id="n-li"
                      style={{
                        lineHeight: data?.workEx?.length == 0 ? "22px" : "22px",
                        marginLeft:"15px"
                      }}
                    >
                      {list}
                    </li>
                  );
                })}
                </ul>
                <div className="n-tech-stack">
                  <h3
                    style={{ fontSize: "12px", color: "black" }}
                    className="n-universal"
                  >
                    Tech-Stack
                  </h3>
                  <p style={{ fontSize: "14px" }} className="n-universal">
                    {ele.techStack.join(" | ")}
                  </p>
                </div>
                <h3
                  style={{ fontSize: "12px", color: "black" }}
                  className="n-area-of-response"
                >
                  Area of responsibility
                </h3>
                <ul className="n-area">
                {data?.projects[0].areasOfResp.map((res) => {
                  return (

                    <li
                      className="n-universal"
                      style={{
                        lineHeight: data?.workEx?.length == 0 ? "22px" : "22px",
                        fontSize: "14px",
                        marginLeft:"15px"
                      }}
                    >
                      {res}
                    </li>
                    
                  );
                })}
                </ul>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
