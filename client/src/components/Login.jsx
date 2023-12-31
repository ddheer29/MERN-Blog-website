import axios from "axios";
import React, { useRef, useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';
import "./Login.css"
const Login = () => {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", {
                username: userRef.current.value, password: passwordRef.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) { dispatch({ type: "LOGIN_FAILURE" }); }
    }; return (<div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input className='loginInput' type="text" ref={userRef} />
            <label>Password</label>
            <input className='loginInput' type="password" ref={passwordRef} />
            <button className="loginButton" type='submit' disabled={isFetching}>LOGIN</button>
        </form>
        <button className="loginRegisterButton">
            <Link className='link' to='/register'>REGISTER</Link>
        </button>
    </div>)
}
export default Login;