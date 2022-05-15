import { useContext, useEffect, useState } from "react";
import "./resume.css";
import { v4 as uuid } from "uuid";
import { ColorContext } from "../../../context/ColorContext";
import { DivsContext } from "../../../context/DivsContext";
import { SliderContext } from "../../../context/SliderContext";
import Education from "../components/ResumeComponents/Education.jsx";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Resume() {
	const [data, setData] = useState([]);
	const { sColor, lColor, headingColor, textColor, leftDivColor } =
		useContext(ColorContext);
	const [gitUserName, setGitUserName] = useState("");
	const [linkedUserName, setLinkedUserName] = useState("");
	const {
		rightTSlider,
		leftTSlider,
		leftSlider,
		rightSlider,
		hasWork,
		setHasWork,
		imgSlider,
		contactSlider,
		setRightSlider,
	} = useContext(SliderContext);
	const { selectDiv } = useContext(DivsContext);

	useEffect(() => {
		const userId = JSON.parse(localStorage.getItem("loggedinUser"));
		fetch(`https://masairesumebuilder.herokuapp.com/resume/${userId}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setData([data[data.length - 1]]);
				const gitArr = data[data.length - 1].personal?.github.split("/");

				// Removing empty last element if present
				if (!gitArr[gitArr.length - 1]) gitArr.pop();

				const linkedArr = data[data.length - 1].personal?.linkedin.split("/");
				// Removing empty last element if present
				//
				if (!linkedArr[linkedArr.length - 1]) linkedArr.pop();
				setLinkedUserName(linkedArr[linkedArr.length - 1]);
				setGitUserName(gitArr[gitArr.length - 1]);
				console.log(data[data.length - 1]);
				if (data[data.length - 1].workEx) {
					setHasWork(true);
					setRightSlider(90);
				}
			});
	}, []);

	return (
		<div style={{ flex: 1.5 }}>
			<div id="template">
				{selectDiv && (
					<div
						style={{
							backgroundColor: sColor,
							width: "40vw",
							transformOrigin: "0%",
							transform: `translateX(-100px) translateY(-30px) rotate(${leftTSlider}deg)`,
						}}
						id="blueDiv"
					></div>
				)}
				{selectDiv && (
					<div
						style={{
							backgroundColor: lColor,
							width: "40vw",
							transformOrigin: "0% 100%",
							transform: `translateX(165px) translateY(-300px) rotate(${
								rightTSlider + 0.5
							}deg)`,
						}}
						id="orangeDiv"
					></div>
				)}
				{data.map((one) => {
					return (
						<>
							<div key={uuid()} id="left" style={{ background: leftDivColor }}>
								<div id="nameAndDesignation" style={{ marginTop: leftSlider }}>
									<h2 style={{ color: headingColor }} id="nameH1">
										{one?.personal?.name}
									</h2>
									<h5 style={{ color: headingColor }} id="designation">
										{one?.personal?.tagLine}
									</h5>
								</div>
								<div id="aboutMePara">
									<h4 style={{ color: headingColor }}>About</h4>
									<p style={{ color: textColor }}>{one?.summary}</p>
								</div>
								{console.log(hasWork)}
								{hasWork && (
									<Education
										headingColor={headingColor}
										textColor={textColor}
										one={one}
									/>
								)}

								<div id="accomplishments">
									<h4 style={{ color: headingColor }}>Accomplishments</h4>
									{one?.accomplishments?.map((oneacc) => {
										return (
											<p
												key={uuid()}
												style={{ color: textColor }}
												className="singleAcc"
											>
												{oneacc}
											</p>
										);
									})}
								</div>
								<img
									id="profileImg"
									src={one?.personal?.profilePic}
									style={{ top: imgSlider }}
									alt="image"
								/>
								<div id="skillsAndFramework">
									<h4 style={{ color: headingColor }}>Skills and Frameworks</h4>
									<span style={{ color: textColor }}>
										{one?.techSkills.join(" | ")}
									</span>
								</div>
								<div id="softSkills">
									<h4 style={{ color: headingColor }}>Soft Skills</h4>
									<span style={{ color: textColor }}>
										{one?.softSkills?.join(" | ")}
									</span>
								</div>

								<div id="interests">
									<h4 style={{ color: headingColor }}>Interests</h4>
									<p style={{ color: textColor }}>
										{one?.interests?.join(" | ")}
									</p>
								</div>
							</div>
							<div id="right">
								<div
									id="contact"
									style={{
										position: "absolute",
										top: contactSlider,
										right: 20,
									}}
								>
									<p style={{ color: textColor }} className="contactP">
										<span className="material-icons">call</span>{" "}
										{one?.personal?.mob}
									</p>
									<p style={{ color: textColor }} className="contactP">
										<span className="material-icons">home</span>{" "}
										{one?.personal?.address}
									</p>
									<p style={{ color: textColor }} className="contactP">
										<span className="material-icons">mail</span>
										<a
											style={{ color: textColor }}
											href={`mailto:${one?.personal?.email}`}
										>
											{one?.personal?.email}
										</a>
									</p>
									<p style={{ color: textColor }} className="contactP">
										<GithubIcon />
										<a
											style={{ color: textColor }}
											href={one?.personal?.github}
										>
											{gitUserName ? gitUserName : one?.personal?.github}
										</a>
									</p>
									<p style={{ color: textColor }} className="contactP">
										<LinkedInIcon />
										<a
											href={one?.personal?.linkedin}
											style={{ color: textColor }}
											target="_blank"
										>
											{linkedUserName
												? linkedUserName
												: one?.personal?.linkedin}
										</a>
									</p>
								</div>

								<div id="projects" style={{ marginTop: rightSlider }}>
									<h2 style={{ color: headingColor }}>Projects</h2>
									{one?.projects?.map((sproject) => {
										return (
											<div key={uuid()} className="singleProject">
												<div className="pNameAndLink">
													<a
														style={{ color: headingColor, fontWeight: 500 }}
														href={
															sproject?.liveLink.startsWith("www")
																? `https://${sproject?.liveLink}`
																: sproject?.liveLink
														}
														target="_blank"
													>
														{sproject?.name}
													</a>
													<a
														href={
															sproject?.gitLink.startsWith("www")
																? `https://${sproject?.gitLink}`
																: sproject?.gitLink
														}
														target="_blank"
													>
														<GithubIcon />
													</a>
												</div>
												<p style={{ color: textColor }} className="projectDesc">
													{sproject?.description}
												</p>
												<div className="projectFeatures">
													<h5 style={{ color: headingColor }}>Features: </h5>
													<ul>
														{sproject?.features?.map((sfeature) => {
															return (
																<li style={{ color: textColor }} key={uuid()}>
																	{sfeature}
																</li>
															);
														})}
													</ul>
												</div>
												<p style={{ color: textColor }} className="techStack">
													<span
														style={{ color: headingColor }}
														className="heading"
													>
														Tech Stack:
													</span>{" "}
													{sproject?.techStack?.join(" | ")}
												</p>
												<div className="areasOfResp">
													<h5 style={{ color: headingColor }}>
														Areas of Responsibilities
													</h5>
													<ul>
														{sproject?.areasOfResp?.map((onearea) => {
															return (
																<li style={{ color: textColor }} key={uuid()}>
																	{onearea}
																</li>
															);
														})}
													</ul>
												</div>
												<p style={{ color: textColor }} className="lastLine">
													{sproject?.solo
														? "A solo project built in 7 days"
														: `A collaborative project built by team of ${sproject?.team}`}
												</p>
											</div>
										);
									})}
								</div>
								{one?.workEx ? (
									<div id="workEx">
										<h4>Work Experience</h4>
										{one?.workEx?.map((onework) => {
											return (
												<>
													<p className="orgAndPos">
														{onework?.organisation} -{" "}
														<span>{onework?.position}</span>
													</p>
													<p className="workDuration">
														{onework?.start} - {onework?.end}
													</p>
													<ul className="jobDesc">
														{onework?.description?.map((onedesc) => {
															return <li>{onedesc}</li>;
														})}
													</ul>
												</>
											);
										})}
									</div>
								) : (
									<Education
										headingColor={headingColor}
										textColor={textColor}
										one={one}
									/>
								)}
							</div>
						</>
					);
				})}
			</div>
		</div>
	);
}

export default Resume;
