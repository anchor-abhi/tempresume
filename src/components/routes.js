import { Route, Routes } from "react-router-dom";
import UserAuth from "../components/userAuth";
import SignIn from "../components/signin";
import SignUp from "../components/signup";
import Form from "./Form/Form.jsx";
import TemplateSelector from "../Pages/TemplateSelector";
import { Demo } from "./Form/Demo";
import UpdatePass from "./updatePass";

export default function AddRoute() {
	return (
		<>
			<Routes>
				<Route path="/" element={<UserAuth />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/createform" element={<Form />} />
				<Route path="/image" element={<Demo />} />
				<Route path="/selecttemplate" element={<TemplateSelector />} />
				<Route path="/forgot-password/:token" element={<UpdatePass />} />
			</Routes>
		</>
	);
}
