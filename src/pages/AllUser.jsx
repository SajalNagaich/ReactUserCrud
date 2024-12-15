import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import style from '../pages/all.module.css';

const AllUser = () => {

    let [allUsers, setAllUsers] = useState([]);
    let navigate = useNavigate();
    let[toggle,setToggle] = useState(false);

    useEffect(() => {

        async function fatchAllUsers() {
            try{
            let { data } = await axios.get("http://localhost:5001/users")
            setAllUsers(data);
            } catch(error){
                console.log("Error fetching users:",error);
                toast.error("Failed to fetch users")
            }
        }

        fatchAllUsers();
    }, [toggle])

    let handleDelete = (id)=>{
        axios.delete(`http://localhost:5001/users/${id}`).then(()=>{
            toast.success("user Deleted")
            setToggle(!toggle);
        }).catch(()=>{
            toast.error("Unable to delete")
        })
    }
    let handleEdit = (id)=>{
        localStorage.setItem("userID",id);
        
        navigate("/edituser");
    };

        if(allUsers.length === 0){
            return <p className="no-users">No users available</p> 
        }
    return (
        <div>
            <h1>All Users </h1>

        <table className={style.table}>

             <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Country</th>
                        <th>DOB</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers.map(({ id, username, useremail, userphone, usercountry, userdob }) => {
                        return (
                            <tr key={id}>
                                <td>{username}</td>
                                <td>{useremail}</td>
                                <td>{userphone}</td>
                                <td>{usercountry}</td>
                                <td>{userdob}</td>
                                <td>
                                    <button onClick={() => handleDelete(id)} className={style.deleteBtn}>
                                        Delete
                                    </button>
                                    <button onClick={() => handleEdit(id)} className={style.editBtn}>
                                        Edit
                                    </button>
                                </td>
                             </tr>
                         );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AllUser