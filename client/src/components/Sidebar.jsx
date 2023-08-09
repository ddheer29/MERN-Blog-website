import React, { useState, useEffect } from 'react'
import pro1 from "../assets/tomioka.png"
import "./Sidebar.css"
import axios from 'axios'
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCat = async () => {
            const res = await axios.get("/categories/");
            setCats(res.data);
        }
        getCat();
    }, [])

    return (
        <div className='sidebar'>
            <div className="sideBarItem">
                <span className="sideBarTitle">ABOUT ME</span>
                <img className='topImg' src={pro1} alt="img" />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Libero aliquid numquam similique vel ipsam corrupti officia optio?
                    Sit animi laborum ab, alias dicta at labore consequuntur quaerat facere
                    voluptate impedit dolores suscipit, debitis dignissimos modi saepe.
                </p>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">CATEGORIES</span>
                <ul className="sideBarList">
                    {
                        cats.map((c) => (
                            <Link to={`/?cat=${c.name}`} className="link">
                                <li className="sideBarListItem">{c.name}</li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">FOLLOW US</span>
                <div className="sideBarSocial">
                    <i className="sideBarIcon fa-brands fa-facebook"></i>
                    <i className="sideBarIcon fa-brands fa-twitter"></i>
                    <i className="sideBarIcon fa-brands fa-linkedin"></i>
                    <i className="sideBarIcon fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar