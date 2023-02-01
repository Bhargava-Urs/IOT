import '../styles/addMember.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AddMember = () => {
    let [name,setName]=useState("")
    let [age,setAge]=useState("")
    let [Email,setEmail]=useState("")
    let [PhNo,setPhNo]=useState("")
    let navigate = useNavigate()
    let handleUserSubmit = (e) =>{
        e.preventDefault()
        let data = {name,age,Email,PhNo}
        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{ "Content-Type": "application/json" },
            body:JSON.stringify(data)
        })
        alert('Member Details added sucessfully....!')
        navigate('/healthcare/Community')
    }
    return ( 
        <div className="addUser">
            <h1 style={{color:'black'}} >Add a New Community Member</h1>
            <div className="information">
            <form action="" onSubmit={handleUserSubmit}>
               
               <div className="name">
                <input required value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" type="text" />
               </div>
               <div className="age">
                <input required value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Enter Age" min='1' type="number" />
               </div>
               <div className="emailid">
                <input required value={Email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter E-mail ID" type="email" />
               </div>
               <div className="phno">
                <input required value={PhNo} onChange={(e)=>setPhNo(e.target.value)} placeholder="Enter Contact Number" type="tel" minLength='10' maxLength='10' />
               </div>
               <div className="add">
                <button>Add Member</button>
               </div>
            </form>
            </div>
        </div>
     );
}
 
export default AddMember;