import React from 'react'
import style from '../component/navbar.module.css';
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav className={style.navcontroller}> 
                <ul>
                    <li><Link to="/createuser">👤Create User</Link></li>
                    <li><Link to="/alluser" >All Users</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar