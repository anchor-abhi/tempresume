import "./Left.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DraftsIcon from "@mui/icons-material/Drafts";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";
import SchoolIcon from '@mui/icons-material/School';
export const Left = ({data,state,color}) => {
  console.log(state)
  return (
    <div style={{background:state}}  className="left-container">
      <div className="profile-div">
        <img
          src={data?.personal?.profilePic}
          alt=""
        />
      </div>

      {/* contact information */}

      <section className="contact-section">
        <h4>CONTACT ME AT</h4>
        <div style={{color:color}}>
          <LocationOnIcon />
          <span>{data?.personal?.address}</span>
        </div>

        <div  style={{color:color}} >
          <DraftsIcon />
          <a style={{color:color}} href={"mailto:"+data?.personal?.email}>{data?.personal?.email}</a>
        </div>

        <div style={{color:color}} >
          <GitHubIcon />
          <a style={{color:color}} href={data?.personal?.github} target="_blank" >{data?.personal?.name}</a>
        </div>

        <div  style={{color:color}} >
          <LinkedInIcon />
          <a style={{color:color}} href={data?.personal?.linkedin} target="_blank">{data?.personal?.name}</a>
        </div>

        <div  style={{color:color}} >
          <CallIcon />
          <a style={{color:color}} href={"tel:"+data?.personal?.mob}>{"+91" + data?.personal?.mob}</a>
        </div>
      </section>
{/* education section */}
      <section className="education-section">
        <h4>EDUCATION</h4>

    {data?.education?.map((ele)=>{
      return(
        <div style={{color:color}} >
        <SchoolIcon/>
        <p>{ele.course+", "}{ele.institute+" "}{ele.start+"-"}{ele.end}</p>
      </div>
      )
    })}

      </section>

      {/* technical skills */}

      <section className="technical-section">
        <h4>TECHNICAL SKILLS</h4>
        <p style={{color:color}} className="tech">{data?.techSkills?.join(" | ")}</p>
      </section>

      <section className="softskills-section" >
      <h4>SOFT SKILLS</h4>
      <div style={{color:color}} >
        <span>{data?.softSkills?.join(" | ")}</span>
      </div>
      </section>
{/* interest section */}
    <section className="interest-section" >
    <h4>INTERESTS</h4>
    <p style={{color:color}} >{data?.interests?.join(" | ")}</p>
    </section>



{/* achievements section */}
      <section className="achievements-section">
        <h4>ACCOMPLISHMENTS</h4>
        {data?.accomplishments?.map((ele)=>{
          return (
            <li style={{color:color}} >{ele}</li>
          )
        })}
      </section>
    </div>
  );
};
