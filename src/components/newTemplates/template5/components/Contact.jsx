import React from "react";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';

export const Contact = (props)=>{
    return (
        <div className='Contact'>
        <div>
            <ContactPhoneIcon/>
            <span>{'Contact'}</span>
        </div>
        <div className='contact-info'>
          <div>
            <div>
              <PhoneInTalkIcon style={{
                width: "15px",
                height: "15px",
                color: "white",
              }}/>
            </div>
            <p>{props?.Data?.mob}</p>
          </div>
          <div>
            <div>
              <LanguageIcon style={{
                width: "15px",
                height: "15px",
                color: "white",
              }}/>
            </div>
            <p><a href={props?.Data?.linkedin}>{props?.Data?.linkedin}</a></p>
          </div>
          <div>
            <div>
             <MailIcon style={{
                width: "15px",
                height: "15px",
                color: "white",
              }}/>
            </div>
            <p>{props?.Data?.email}</p>
          </div>
          <div>
            <div>
              <LocationOnIcon style={{
                width: "15px",
                height: "15px",
                color: "white",
              }}/>
            </div>
              <p>{props?.Data?.address}</p>
          </div>
        </div>
      </div> 
    )
}