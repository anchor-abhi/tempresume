import { Route, Routes } from "react-router-dom";
import UserAuth from "../components/userAuth";
import SignIn from "../components/signin";
import SignUp from "../components/signup";
import DownloadResume from "./downloadResume";
import Form from "./Form/Form.jsx";
import Temp4 from "./newTemplates/template4/temp4";
import { Template } from "./newTemplates/template3/components/Template-II/Template";
import TemplateSelector from "../Pages/TemplateSelector";
import { Demo } from "./Form/Demo";
import Temp2 from "./newTemplates/template2/Temp2";
<<<<<<< HEAD
import Temp5 from "./newTemplates/template5/Temp5";
import TemplateSelector from "../Pages/TemplateSelector";

export default function AddRoute() {
	return (
		<>
			<Routes>
				<Route path="/" element={<UserAuth />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/downloadresume" element={<DownloadResume />} />
				<Route path="/createform" element={<Form />} />
				<Route path="/temp4" element={<Temp4 />} />
				<Route path="/temp3" element={<Template />} />
				<Route path="/image" element={<Demo />} />
				<Route path="/temp2" element={<Temp2 />} />
				<Route path="/temp5" element={<Temp5 />} />
				<Route path="/selecttemplate" element={<TemplateSelector />} />
			</Routes>
		</>
	);
=======
import Temp5 from "./newTemplates/template5/Temp5"

export default function AddRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserAuth />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/downloadresume" element={<DownloadResume />} />
        <Route path="/createform" element={<Form />} />
        <Route path="/temp4" element={<Temp4 />} />
        <Route path="/temp3" element={<Template />} />
        <Route path="/image" element={<Demo />} />
        <Route path="/temp2" element={<Temp2 />} />
        <Route path="/temp5" element={<Temp5 />} />
        <Route path="/selecttemplate" element={<TemplateSelector />} />
      </Routes>
    </>
  );
>>>>>>> 0e379985396ba2c71130da7de52cf3ee4ad21d10
}
