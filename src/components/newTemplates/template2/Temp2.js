import Accomplishments from './components/Accomplishments';
import './Temp2.css';
import Eduction from './components/Eduction';
import Header from './components/Header';
import SkillsAndFrameworks from './components/SkillsAndFrameworks';
import Title from './components/Title';
import Projects from './components/Project';
import WorkEx from './components/WorkEx';
import axios from "axios";
import { useEffect , useState} from 'react';
function Temp2() {
    const [data, setData] = useState({});
    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem("loggedinUser"));
        axios
          .get(`https://masairesumebuilder.herokuapp.com/resume/${userId}`)
          .then((res) => {
            console.log(res.data);
            setData(res.data[res.data.length-1]);
          })
          .catch((e) => console.log(e.message));
      }, []);
      console.log("data=",data)
  return (
    <div className="Temp2">
        <Header add={data?.personal?.address} name={data?.personal?.name} pic={data?.personal?.profilePic} tagLine={data?.personal?.tagLine} email={data?.personal?.email} mobile={data?.personal?.mob}  linkedin={data?.personal?.linkedin} address={data?.personal?.address} github={data?.personal?.github} summary={data?.summary}></Header>
        <div className="section">
            <div className="">
                   {data?.workEx?.length!=0? <div className='edu'>
                          <Title cont="PROFESSIONAL EXPERIENCE"></Title>
                          {data?.workEx?.map(el=><WorkEx name={el.organisation} start={el.start} end={el.end} pos={el.position} description={el.description}></WorkEx>)}
                    </div>:""}
                    <div className='edu'>
                          <Title cont="EDUCATION"></Title>
                        {data?.education?.map((x) => <Eduction edu={x}></Eduction>)}
                    </div>
                    <div >
                        <Title cont="SOFT SKILLS"></Title>
                        <div className='sskills'><p >{data?.softSkills?.join("  |  ")}</p></div>
                    </div>
                    <div>
                        <Title cont="ACCOMPLISHMENTS "></Title>
                        <div className='accom'>
                            {data?.accomplishments?.map(el=><Accomplishments accom={el} ></Accomplishments>)}
                        </div>
                    </div>
                    <div>
                        <Title cont="INTERESTS"></Title>
                        <div className='sskills'><p >{data?.interests?.join("  |  ")}</p></div>
                    </div>
            </div>
            <div className="">
                      <div>
                            <Title cont="SKILLS AND FRAMEWORKS"></Title>
                            <div className="skills"> {data?.techSkills?.map(el=><SkillsAndFrameworks skill={el}></SkillsAndFrameworks>)}</div>
                      </div>
                      <div>
                            <Title cont="PROJECTS"></Title>
                            <div>
                                 {data?.projects?.map(el=> <Projects git={el.gitLink} deploy={el.liveLink} areasOfResp={el.areasOfResp} techStack={el.techStack} name={el.name} dis={el.description} features={el.features}></Projects>)}
                            </div>
                      </div>
            </div>
        </div>
    </div>
  );
}

export default Temp2;
