import React, { useState } from 'react'
import style from "../pages/createuser.module.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'



const CreateUser = () => {

    let navigate = useNavigate();

    let [user,setUser] = useState({
        username:"",
        useremail:"",
        userphone:"",
        usercountry:"",
        password:"",
        userdob:"",

    })

    let handleChange = (e)=>{
        let {name,value} = e.target;
        
        console.log(name,value);
        setUser({...user,[name]:value})
    }

    let handleSubmit = (e)=>{
        e.preventDefault();

        axios.post("http://localhost:5001/users",user).then(()=>{
            toast.success("User Created")
        })
        console.log(user);
        navigate('/alluser')
        
        setUser({
            username:"",
            useremail:"",
            userphone:"",
            usercountry:"",
            password:"",
            userdob:"",
        })
        
    }
    return (
        <div className={style.container}>

            <form action="" onSubmit={handleSubmit}>
                <h1>Register User</h1>
                <input 
                type="text" 
                placeholder='Enter Name'
                onChange={handleChange}
                name="username"
                value={user.username}
                />
                <input 
                type="text" 
                placeholder='Enter Email'
                onChange={handleChange}
                name="useremail"
                value={user.useremail}
                
                />
                <input 
                type="tel" 
                placeholder='+91 xxxxxxxxx'
                onChange={handleChange}
                name="userphone"
                value={user.userphone}
                
                />
                <input 
                type="text" 
                placeholder='country'
                onChange={handleChange}
                name="usercountry"
                value={user.usercountry}

                />
                <div className='style.dobContainer'>
                <label htmlFor="dob">DOB</label>
                <input 
                id='dob' 
                type="date"
                onChange={handleChange}
                name="userdob"
                value={user.userdob}
                  />
                </div>
                <input 
 
                type="password"
                placeholder='Enter password'
                onChange={handleChange}
                name="password"
                value={user.password}
                  />
                
                
                <button type='submit' className={style.submitbtn}>submit</button>

            </form>
        </div>
    )
}

export default CreateUser