import React, { useEffect, useState } from 'react'
import style from "../pages/createuser.module.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const EditUser = () => {



    let navigate = useNavigate();

    
    let [user, setUser] = useState({
        username: "",
        useremail: "",
        userphone: "",
        usercountry: "",
        password: "",
        userdob: "",

    })

    let userID = localStorage.getItem("userID");
    console.log(userID);
    useEffect(() => {

        async function fatch() {
            
         let {data} = await axios.get(`http://localhost:5000/users/${userID}`)
         console.log(data);
         
        setUser(data);
        }
        
       
        
        fatch()

    }, [])




    let handleChange = (e)=>{
        let {name,value} = e.target;
        
        console.log(name,value);
        setUser({...user,[name]:value})
    }
    let handleSubmit = (e) => {
        axios.put(`http://localhost:5001/users/${userID}`,user);
        navigate("/alluser")
    }
    return (
        <div>

            <div className={style.container}>

                <form action="" onSubmit={handleSubmit}>
                    <h1>Edit User</h1>
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
                        readOnly

                    />
                    <input
                        type="text"
                        placeholder='Enter Phone'
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

                        type="text"
                        placeholder='Enter password'
                        onChange={handleChange}
                        name="password"
                        value={user.password}
                    />


                    <button type='submit' className={style.submitbtn}>Update</button>


                </form>
            </div>
        </div>
    )
}

export default EditUser