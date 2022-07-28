import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import '../../App.css'

export default function SignUpPage() {

    useEffect(()=>{
        if(localStorage.getItem("allUser") != null){
            const tempArr = JSON.parse(localStorage.getItem("allUser"));
            setUserArr(tempArr)
        }
    },[])
    const[form,setForm] = useState({
        name:'',address:'',email:'',password:'',contact:''
    })
    const[userArr,setUserArr]= useState([]);

     const handleChange =(event)=>{
        setForm({...form,[event.target.name] : event.target.value})
          
     }
     const handleSubmit = (event) =>{
        event.preventDefault()
            userArr.push(form);
          localStorage.setItem("allUser",JSON.stringify(userArr))  
          let blankForm = {
            name:'',address:'',email:'',contact:''
            }
         setForm(blankForm)
          alert("Record add successfully")
      }
    return (
        <div className="text-center m-5-auto">
            <h5>Create SignUp account</h5>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Name</label><br/>
                    <input type="text" value={form.name} onChange={handleChange} name="name" required />
                </p>
                <p>
                    <label>Address</label><br/>
                    <input type="text" value={form.address} onChange={handleChange} name="address" required />
                </p>
                <p>
                    <label>Email</label><br/>
                    <input type="emai" value={form.email} onChange={handleChange} name="email" required />
                </p>
                <p>
                    <label>Pasword</label><br/>
                    <input type="password" value={form.password} onChange={handleChange} name="password" required />
                </p>
                <p>
                    <label>Conatct No.</label><br/>
                    <input type="number" value={form.contact} onChange={handleChange} name="contact" required />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit" >Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back To Login</Link></p>
            </footer>

            <Table>
                <thead>
                    <tr>
                        <th width="20%">Name</th>
                        <th width="20%">Address</th>
                        <th width="20%">Email</th>
                        <th width="20%">Password</th>
                        <th width="20%">Contact</th>
                    </tr>
                </thead>
                <tbody>
               
                    {userArr.map((ele) =>{
                       return (
                        <tr>
                       <td width="20%">{ele.name}</td>
                       <td width="20%">{ele.address}</td>
                       <td width="20%">{ele.email}</td>
                       <td width="20%">{ele.password}</td>
                       <td width="20%">{ele.contact}</td>
                       </tr>
                       )
                    })}                 
                        
                    
                </tbody>
            </Table>
        </div>
    )

}


