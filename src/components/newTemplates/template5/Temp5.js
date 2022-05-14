import './Temp5.css';
import { Work_Exp } from './components/workexp/Workex';
import { Projects } from './components/projects/Project';
import { Introduction } from './components/Intro';
import { Education } from './components/Education/Education';
import { Tech_Skills } from './components/Skills/Tech_Skills';
import { Soft_Skills } from './components/Skills/Soft_Skills';
import { Acheivements } from './components/Achivements/Achivements';
import { Contact } from './components/Contact';
import {useEffect, useState} from "react";
import axios from "axios";

function Temp5() {
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
      console.log("data=",data);
  
  return (
    <div className="Temp5">
      <div className='template-container'>
        <div className='left-side'>
          <Introduction pic={data?.personal?.profilePic} name={data?.personal?.name} title={data?.personal?.tagLine} summary={data?.summary}/>
          <div className='left-bottom'>
            <Education education={data?.education}/>
            <Tech_Skills skills={data?.techSkills}/>
            <Soft_Skills skills={data?.softSkills}/>
            <Acheivements acheivement={data?.accomplishments}/>
          </div>
        </div>
        <div className='right-side'>
          {data?.work_ex !== undefined ? (
            <Work_Exp work_ex={data?.work_ex}/>
          ): <></>}
          <Projects projects={data?.projects}/>
          <Contact Data={data?.personal}/>
        </div>
      </div>
    </div>
  );
}

export default Temp5;
