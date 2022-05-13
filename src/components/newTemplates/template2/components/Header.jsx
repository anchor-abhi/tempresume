import "./header.css"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
function Header({name,summary,pic,email,mobile,linkedin,github,add}){
    console.log()
    return <div className="cont">
          
            <div className="topHead" style={{color:"#2F3B44",}}>
                <div className="inner">
                <div className="">
                    <h3 className="name">{name}</h3>
                    <p className="summary">{summary}</p>
                </div>
                <div className="">
                    <img className="pic" src={pic} alt="" />
                </div>
            </div>
            </div>
            <div className="bottomHead">
               <div className="bottomHead2">
                    <div>
                    
                        
                        <div className="ico">
                            <div className="isize"><LinkedInIcon></LinkedInIcon></div>
                            <div><p className="p">{linkedin}</p></div>
                        </div>
                        <div className="ico">
                            <div className="isize"><GitHubIcon></GitHubIcon></div>
                            <div><p className="p">{github}</p></div>
                        </div>
                    </div>                
                    <div>
                    <div className="ico">
                            <div className="isize"><MailOutlineIcon></MailOutlineIcon></div>
                            <div><p className="p">{email}</p></div>
                        </div>
                        <div className="ico">
                            <div className="isize"><PhoneAndroidIcon></PhoneAndroidIcon></div>
                            <div><p className="p">{mobile}</p></div>
                        </div>
                        <div className="ico">
                            <div className="isize"><LocationOnIcon></LocationOnIcon></div>
                            <div><p className="p">{add}</p></div>
                        </div>
                    </div>                
                           
                    
                </div>            
            </div>
                
    </div>
}

export default Header;