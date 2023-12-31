import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';
import "./Navbar.css"

const Navbar = () => {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"
    const handleLogout = () => { dispatch({ type: "LOGOUT" }); };

    return (
        <div className='top'>
            <div className="topleft">
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-linkedin"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
            </div>
            <div className="topcenter"><ul className="topList">
                <li className="topListItem">
                    <Link className='link' to='/'>HOME</Link>
                </li>
                <li className="topListItem">
                    <Link className='link' to='/'>ABOUT</Link>
                </li>
                <li className="topListItem">
                    <Link className='link' to='/'>CONTACT</Link>
                </li>
                <li className="topListItem">
                    <Link className='link' to='/write'>WRITE</Link>
                </li>
                <li className="topListItem" onClick={handleLogout}>
                    {user && "LOGOUT"}
                </li>
            </ul>
            </div>
            <div className="topright">{user ? (<Link to="/settings">
                <img className='topImg' src={PF + user.profilePic} alt="img" /></Link>) : (
                <ul className='topList'><li className="topListItem">
                    <Link className='link' to='/login'>LOGIN</Link></li>
                    <li className="topListItem"><Link className='link' to='/register'>REGISTER</Link></li></ul>)}
                <i className="searchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
export default Navbar