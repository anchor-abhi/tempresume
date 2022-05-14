import "./workEx.css"
function WorkEx({name,start,end,pos,description}){
    return <div>
        <div className="dis">
        <h5>{name}</h5>
        <p className="date">{start} - {end}</p>
        </div>            
            <p className="institut">{pos}</p>
            <div className="list">
                <ul>
                    {description.map(el=><li>{el}</li>)}
                </ul>
            </div>
    </div>
}
export default WorkEx;