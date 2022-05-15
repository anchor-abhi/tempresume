import { useEffect, useState } from "react";

export default function BasicResume() {
	const [details, setDetails] = useState({});
	useEffect(() => {
		const userId = JSON.parse(localStorage.getItem("loggedinUser"));
		fetch(`https://masairesumebuilder.herokuapp.com/resume/${userId}`)
			.then((api) => api.json())
			.then((data) => setDetails(data[data.length - 1]));
	}, []);
	return (
		<div id="outerDiv">
			<div id="mainDiv">
				<div>
					<img
						id="img1"
						alt=""
						src="images/image1.png"
						title="horizontal line"
					/>
				</div>
				<a id="t.ad38166889113761e092799fa453e42f4838cb34"></a>
				<a id="t.0"></a>
				<table className="c33">
					<tbody>
						<tr className="c32">
							<td className="c43" colSpan={1} rowSpan={1}>
								<div style={{ display: "flex" }}>
									<p className="c44  c46">
										<span id="span2">
											<img
												id="img2"
												alt=""
												src={details?.personal?.profilePic}
												title=""
											/>
										</span>
									</p>
									<div>
										<div className="c30 title" id="h.x8fm1uorkbaw">
											{details?.personal?.name?.length >= 18 ? (
												<p className="c40" style={{ fontSize: "0.6em" }}>
													{details?.personal?.name?.toUpperCase()}
												</p>
											) : (
												<p className="c40" style={{ fontSize: "0.8em" }}>
													{details?.personal?.name?.toUpperCase()}
												</p>
											)}
										</div>
										<p className="c7 subtitle">
											<span className="c31">{details?.personal?.tagLine}</span>
										</p>
									</div>
								</div>
							</td>
							<td className="c23" colSpan={1} rowSpan={1}>
								<div id="userDet">
									<p className="c2">
										<span className="c10">{details?.personal?.email}</span>
									</p>
									<p className="c2">
										<span className="c10">
											{details?.personal?.mob}
											<br />
											LinkedIn-{" "}
										</span>
										<span className="c8 c19 c26">
											<a
												className="c27"
												target="_blank"
												href={details?.personal?.linkedin}
											>
												{details?.personal?.name}
											</a>
										</span>
										<span className="c12 c10">&nbsp;</span>
									</p>
									<p className="c2">
										<span className="c10">{details?.personal?.address}</span>
									</p>
									<p className="c2">
										<span className="c10">Github</span>
										<span className="c10">- </span>
										<span className="c8 c19 c26">
											<a
												className="c27"
												target="_blank"
												href={details?.personal?.github}
											>
												{details?.personal?.name}
											</a>
										</span>
										<span className="c10">&nbsp;</span>
									</p>
								</div>
							</td>
						</tr>
						<tr className="c29">
							<td className="c41" colSpan={1} rowSpan={1}>
								<div>
									<p className="c5">
										<span className="c17 c18">PROFESSIONAL </span>
										<span className="c17 c18">SUMMARY</span>
										<span className="c14">&nbsp;</span>
									</p>
									<p className="c5">
										<span className="c1">
											{details?.summary}
											<br />
										</span>
									</p>
									<p className="c5">
										<span className="c14">PROJECTS </span>
									</p>
									{details?.projects?.map((element) => {
										return (
											<>
												<p className="c5">
													<span className="c8 c3 ">
														<a
															className="link"
															target="_blank"
															href={element.liveLink}
														>
															{element.name}
														</a>
													</span>
													<span className="c3">&nbsp;</span>
													<span className="c3">|</span>
													<span className="c3">&nbsp;</span>
													<span id="span3">
														<a target="_blank" href={element.gitLink}>
															<img
																id="img3"
																alt=""
																src="images/image2.png"
																href="www.youtube.com"
															/>
														</a>
													</span>
												</p>
												<p className="c5">
													<span>{element.description}</span>
												</p>
												<p className="c5">
													<span className="c3">Features</span>
													<span className="c1">:</span>
												</p>
												<ul className="c21">
													{element.features.map((elem) => {
														return (
															<>
																<li className="c0">
																	<span className="c1">{elem}</span>
																</li>
															</>
														);
													})}
												</ul>
												<p className="c5">
													<span className="c3">Tech Stack:</span>

													<span className="c1">
														&nbsp;
														{element.techStack
															.map((c) => c.toUpperCase())
															.join(" | ")}
													</span>
												</p>
												<p className="c5">
													<span className="c3 c6">
														Areas of responsibility:
													</span>
												</p>
												<ul className="c21">
													{element.areasOfResp.map((resp) => {
														return (
															<li className="c0 ">
																<span className="c1">{resp}</span>
															</li>
														);
													})}
												</ul>
												<p className="c5">
													<span className="c1">
														{`A collaborative project built by a team of ${element.team} executed
                            in 5 days.`}
													</span>
												</p>
											</>
										);
									})}
								</div>
							</td>
							<td className="c45" colSpan={1} rowSpan={1}>
								<p className="c38">
									<span className="c14">EDUCATION</span>
								</p>
								<p className="c20"></p>
								{details?.education?.map((education) => {
									return (
										<>
											<p className="c25">
												<span className="c17">{education.course}</span>
												<span>
													<br />
													{education.institute}
													<br />
												</span>
												<span className="c12 c35">
													{education.start} - {education.end}
												</span>
											</p>
											<p className="c20"></p>
										</>
									);
								})}

								<p className="c22 c25">
									<span className="c12 c35"></span>
								</p>
								<div className="c38" id="h.a9l5z4y9rnz4">
									<span className="c14">SKILLS AND FRAMEWORKS</span>
								</div>
								<p className="c5">
									<span className="c1">{details?.techSkills?.join(" | ")}</span>
								</p>
								<p className="c5 c22">
									<span className="c1"></span>
								</p>
								<div className="c38" id="h.lmqf9yx68b7c">
									<span className="c14">SOFT SKILLS</span>
								</div>
								<p className="c5">
									<span className="c1">{details?.softSkills?.join(" | ")}</span>
								</p>
								<p className="c5 c22">
									<span className="c1"></span>
								</p>
								<div className="c38" id="h.tuxh7mwdaxox">
									<span className="c14">ACCOMPLISHMENTS </span>
								</div>
								{details?.accomplishments?.map((accomp) => {
									return (
										<p className="c20 c5">
											<span>{accomp}</span>
										</p>
									);
								})}

								<div className="c38" id="h59kk2i3ikr6k">
									<span className="c14">INTERESTS</span>
								</div>
								<p className="c28 c5">
									<span>{details?.interests?.join(" | ")}</span>
								</p>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
