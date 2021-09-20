import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import './NavBar.css';


export default function NavBar() {
    return (
        <header className="navbar">
            <div>
            <Link exact to="/home" className='homeLink' ><IoHome /></Link>
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink className='link2' to="/favs" >Favorites</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}