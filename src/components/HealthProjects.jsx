import { useState, useEffect } from "react";
import '../styles/healthProjects.css'
const HealthProjects = () => {
    let [health, setHealth] = useState([])
    useEffect(() => {
        let fectchData = async () => {
            let response = await fetch(' http://localhost:5000/health')
            let data = await response.json()
            setHealth(data)
        }
        fectchData()
    }, [health])
    let remove = (id, Title) => {
        fetch(`http://localhost:5000/health/${id}`,{
         method:'DELETE'
        } )
        alert(`${Title} will be deleted permanently`)
       };

    return (
        <div className="healthprojects">
            <br /><br /><br />
            {health.map((data) => (
                <div className="infoproject">
                    <div className="hproject">
                        <div className="image">
                            <img height="250" width="200"  src={data.Images} alt="" />
                        </div>
                        <div className="infohealth">
                            <h1>Title: {data.Title}</h1>
                            <h3>Technology needed: {data.Technology}</h3>
                            <h3>Short Explanation: {data.shortExp}</h3>
                        </div>
                        <div className="btn1">
                            <button className="btn" onClick={()=>remove(data.id,data.Title)} >Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HealthProjects;