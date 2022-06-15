import "./Temp5.css";
import { Work_Exp } from "./components/workexp/Workex";
import { Projects } from "./components/projects/Project";
import { Introduction } from "./components/Intro";
import { Education } from "./components/Education/Education";
import { Tech_Skills } from "./components/Skills/Tech_Skills";
import { Soft_Skills } from "./components/Skills/Soft_Skills";
import { Acheivements } from "./components/Achivements/Achivements";
import { Contact } from "./components/Contact";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../loader"

function Temp5() {
	const [data, setData] = useState({});
	const [load, setLoad] = useState(false);
	useEffect(() => {
		const userId = JSON.parse(localStorage.getItem("loggedinUser"));
		axios
			.get(`https://resume-api.masaischool.com/resume/${userId}`)
			.then((res) => {
				console.log(res.data);
				setData(res.data[res.data.length - 1]);
				setLoad(true);
			})
			.catch((e) => console.log(e.message));
	}, []);
	console.log("data=", data);

	return load ? (
		<div className="Temp5">
			<div className="template-container">
				<div className="left-side">
					<Introduction
						pic={data?.personal?.profilePic}
						name={data?.personal?.name}
						title={data?.personal?.tagLine}
						summary={data?.summary}
					/>
					<div className="left-bottom">
						<Education education={data?.education} />
						<Tech_Skills skills={data?.techSkills} />
						<Soft_Skills skills={data?.softSkills} />
						<Acheivements acheivement={data?.accomplishments} />
					</div>
				</div>
				<div className="right-side">
					{data?.workEx !== undefined ? (
						<Work_Exp work_ex={data?.workEx} />
					) : (
						<></>
					)}
					<Projects projects={data?.projects} />
					<Contact Data={data?.personal} />
				</div>
			</div>
		</div>
	) : <Loader/>
}

export default Temp5;
