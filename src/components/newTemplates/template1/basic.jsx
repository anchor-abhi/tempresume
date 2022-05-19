import { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./basic.css";
export default function BasicResume({ details }) {
	// const [details, setDetails] = useState({});

	// useEffect(() => {
	// 	const userId = JSON.parse(localStorage.getItem("loggedinUser"));
	// 	fetch(`https://masairesumebuilder.herokuapp.com/resume/${userId}`)
	// 		.then((api) => api.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			setDetails(data[data.length - 1]);
	// 		});
	// }, []);
	return (
		<div id="outerDiv">
			<hr className="yellowHr" />
			<div id="topSection">
				<div id="nameAndImage">
					<img src={details?.personal?.profilePic} alt="profile image" />
					<div>
						<h1>{details?.personal?.name.toUpperCase()}</h1>
						<h4>{details?.personal?.tagLine}</h4>
					</div>
				</div>
				<div id="contact">
					<p>{details?.personal?.email}</p>
					<p>{details?.personal?.mob}</p>
					<p>
						LinkedIn:{" "}
						<a href={details?.personal?.email}>{details?.personal?.name}</a>
					</p>
					<p>
						Github:{" "}
						<a href={details?.personal?.address}>{details?.personal.name}</a>
					</p>
					<p>{details?.personal?.address}</p>
					{details?.personal?.portfolio && (
						<p>
							Portfolio:{" "}
							<a href={details?.personal?.portfolio} target="_blank">
								{details?.personal?.name}
							</a>
						</p>
					)}
				</div>
			</div>
			<div id="bottomSection">
				<div id="leftDivSection">
					<div id="professional__summary">
						<h5>PROFESSIONAL SUMMARY</h5>
						<p>{details?.summary}</p>
					</div>
					<div id="personal__projects">
						<h5 id="projects__heading">PROJECTS</h5>
						{details?.projects?.map((onepj) => {
							return (
								<div className="single__project">
									<span className="projectNameAndGit">
										<a href={onepj?.liveLink} target="_blank">
											{onepj?.name}
										</a>{" "}
										|{" "}
										<a href={onepj?.gitLink} target="_blank">
											<GitHubIcon />
										</a>
									</span>
									<p className="project__headline">{onepj?.description}</p>
									<h6>Features</h6>
									<ul className="features__ul">
										{onepj?.features?.map((onefeat) => {
											return <li>{onefeat}</li>;
										})}
									</ul>
									<p className="tech__stack">
										Tech Stack: <span>{onepj?.techStack?.join(" | ")}</span>
									</p>
									<h6>Areas of Responsibility:</h6>
									<ul className="areas__res-ul">
										{onepj?.areasOfResp?.map((oneresp) => {
											return <li>{oneresp}</li>;
										})}
									</ul>
									<p className="team__single-line">
										{onepj?.solo
											? "A solo project created executed in 1 week"
											: `A collaborative project built by team of ${onepj?.team} executed in 1 week`}
									</p>
								</div>
							);
						})}
					</div>
				</div>
				<div id="rightDivSection">
					<div id="education__div">
						<h5>EDUCATION</h5>
						{details?.education?.map((oneedu) => {
							return (
								<div className="single__edu-div">
									<h6 className="course__edu-heading">{oneedu?.course}</h6>
									<p className="course__edu-institute">{oneedu?.institute}</p>
									<p className="course__edu-duration">
										{oneedu?.start} | {oneedu?.end}
									</p>
								</div>
							);
						})}
					</div>
					{details?.workEx && (
						<div id="work__ex">
							<h5>WORK EXPERIENCE</h5>
							{details?.workEx?.map((onework) => {
								return (
									<div className="single__workex">
										<h6 className="single__workex-instanddesig">
											{onework?.organisation} | {onework?.position}
										</h6>
										<p className="single__workex-duration">
											{onework?.start} - {onework?.end}
										</p>
										<ul className="single__workex-description">
											{onework?.description?.map((onedesc) => {
												return <li>{onedesc}</li>;
											})}
										</ul>
									</div>
								);
							})}
						</div>
					)}
					<h5 id="skills__and__framework-heading">SKILLS AND FRAMEWORKS</h5>
					<p id="skills__and__framework-main">
						{details?.techSkills?.join(" | ")}
					</p>
					<h5 id="soft__skills-heading">SOFT SKILLS</h5>
					<p id="soft__skills-main">{details?.softSkills?.join(" | ")}</p>

					<div id="accomplishments__div">
						<h5>ACCOMPLISHMENTS</h5>
						{details?.accomplishments?.map((oneacc) => {
							return <p id="one__acc">{oneacc}</p>;
						})}
					</div>

					<h5 id="interests-heading">INTERESTS</h5>
					<p id="interests-main">{details?.interests?.join(" | ")}</p>
				</div>
			</div>
		</div>
	);
}
