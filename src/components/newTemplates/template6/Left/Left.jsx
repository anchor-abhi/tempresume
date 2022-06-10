import "./Left.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { Link } from "@mui/material";

export const Left = ({ data }) => {
  return (
    <div className="n-left-container">
      {/* profile-div */}
      <section className="n-profile-div">
        <img src={data?.personal?.profilePic} alt="" />
      </section>

      {/* total-details-section */}
      <section className="n-total-details-div">
        {/* contact-section */}
        <section className="n-contact-section">
          <h3  className="heading03">Contact me at</h3>
          <div>
          <div >
          <div className="n-icons-div">
           <LocationOnOutlinedIcon/> 
          </div>
            <span className="n-info" >{data?.personal?.address}</span>
          </div>

          <div >
        <div className="n-icons-div">
                <DraftsOutlinedIcon/>
        </div>
            <a
              className="n-info"
              href={"mailto:" + data?.personal?.email}
            >
              {data?.personal?.email}
            </a>
          </div>

          <div >
          <div className="n-icons-div">
          
            <GitHubIcon />
          </div>
            <a
              className="n-info"
              href={data?.personal?.github}
              target="_blank"
            >
              {data?.personal?.name}
            </a>
          </div>

          <div >
          <div className="n-icons-div">
          
            <LinkedInIcon />
          </div>
            <a
              className="n-info"
              href={data?.personal?.linkedin}
              target="_blank"
            >
              {data?.personal?.name}
            </a>
          </div>

          <div  >
          <div className="n-icons-div">
          
            <CallOutlinedIcon />
          </div>
            <a
              className="n-info"
              href={"tel:" + data?.personal?.mob}
            >
              {"+91" + data?.personal?.mob}
            </a>
          </div>
          </div>
        </section>

      {/* education section */}
      <section className="n-education-div">
      <h3 className="heading03">Education</h3>
<div>
{data?.education?.map((ele) => {
  return (
    <div>
      <SchoolOutlinedIcon />
      <div>
      <p className="s-n-info">
        {ele.course + ", "}
        {ele.institute + ", "}
        </p>
        <p className="s-n-info" >
        {ele.start + "-"}
        {ele.end}
        </p>
        </div>
    </div>
  );
})}
</div>
      </section>

      {/* technical skills */}
      <div className="techi" >
      <section className="n-technical-section">
        <h3 className="heading03" >Technical Skills</h3>
        <p className="n-info" >
          {data?.techSkills?.join(" | ")}
        </p>
      </section>

      {/* soft skills */}
      <section className="n-softskills-section">
        <h3 className="heading03">Soft Skills</h3>
        <div>
          <p className="n-info" >{data?.softSkills.join(" | ")}</p>
        </div>
      </section>

       {/* interest section */}
       <section className="n-interest-section">
        <h3 className="heading03">Interests</h3>
        <p className="n-info">
          {data?.interests?.join(" | ")}
        </p>
      </section>
      </div>

{/* achievements section */}
<section className="n-achievements-section">
        <h3 className="heading03">Accomplishments</h3>
        <ul className="ul-n">
        {data?.accomplishments?.map((ele) => {
          return (
            <li
              className="n-list">
              {ele}
            </li>
          );
        })}
        </ul>
      </section>


      </section>

    </div>
  );
};
