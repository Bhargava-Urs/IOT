import { useState,useEffect } from "react";
import '../styles/Community.css'
const Community = () => {
    let [user,setUser]=useState([])
    useEffect( () =>{
        let fetchData = async () =>{
            let response = await fetch('http://localhost:5000/users')
            let data = await response.json()
            setUser(data)
        }
        fetchData() 
    } ,[])
    return ( 
        <div className="userList">
            <h1>Members List</h1>
            <div className="userInfo">
            {
                user.map( (data) =>(
                    <div className="user">
                      <h2>Name: {data.name}</h2>
                      <h3>Email-id: {data.Email}</h3>
                      <h3>Ph-No: {data.PhNo}</h3>
                      <h4>Age: {data.age}</h4>
                    </div>
                ) )
            }
        </div>
        </div>
     );
}
 
export default Community;