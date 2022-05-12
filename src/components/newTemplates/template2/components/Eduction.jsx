import "./education.css"
function Eduction ({edu}){
    return <div className="eduction">
        <div>
            <h5>{edu.course}</h5>
            <p className="institut">{edu.institute}</p>
            <div>
                <div><p className="date">{edu.start} - {edu.end}</p></div>
            </div>
        </div>        
    </div>
}

export default Eduction;