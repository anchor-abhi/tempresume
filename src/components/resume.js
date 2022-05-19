import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./loader";
import BasicResume from "./newTemplates/template1/basic";

const Resume = () => {
	const [details, adddetails] = useState([]);
	const [load, setLoad] = useState(false);
	useEffect(() => {
		const userId = JSON.parse(localStorage.getItem("loggedinUser"));
		axios
			.get(`https://masairesumebuilder.herokuapp.com/resume/${userId}`)
			.then((res) => {
				console.log(res.data);
				adddetails(res.data[res.data.length - 1]);
				setLoad(true);
			})
			.catch((e) => console.log(e.message));
	}, []);

	return load ? <BasicResume details={details} /> : <Loader />;
};

export default Resume;
