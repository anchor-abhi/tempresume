import {v4 as uuid} from "uuid";
function Education({one, headingColor, textColor}) {
   console.log("one=",one.education)
   return (
      <div id="education">
         <h2 style={{color: headingColor}}>Education</h2>
         {
            one?.education?.map(oneEdu => {
               return (
                  <div className="oneEdu" key={uuid()}>
                     <h5 style={{color: headingColor}}>{oneEdu?.course}</h5>
                     <p style={{color: textColor}} className="instituteName">{oneEdu?.institute}</p>
                     <p style={{color: textColor}} className="startEndDate">{oneEdu?.start} - {oneEdu?.end}</p>
                  </div>
               )
            })
         }
      </div>

   )
}

export default Education;
