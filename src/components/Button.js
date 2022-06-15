import "../styles/Button.css"
import { useLocation } from "react-router-dom";

const Button = ({click}) =>{
    const location = useLocation();
    return location.pathname == "/download" ? null :(
       <>
        <div id="mainBtn">
            <a onClick={click} className="myBtn" download><span>Download</span><span>PDF</span></a>
        </div>
       </>
    )
}

export default Button;