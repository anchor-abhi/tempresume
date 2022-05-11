import {Route, Routes} from "react-router-dom";
import UserAuth from "../components/userAuth"
import SignIn from "../components/signin"
import SignUp from "../components/signup";
import DownloadResume from "./downloadResume";
import Form from "./Form/Form.jsx";
import Temp4 from "./newTemplates/template4/temp4"
import {Template} from "./newTemplates/template3/components/Template-II/Template"

export default function AddRoute(){

    return (
        <>
            <Routes>
                <Route path="/" element={<UserAuth/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/downloadresume" element={<DownloadResume/>}/>
                <Route path="/createform" element={<Form/>}/>
                <Route path="/temp4" element={<Temp4/>}/>
                <Route path="/temp3" element={<Template/>}/>
            </Routes>
        </>
    )

}

