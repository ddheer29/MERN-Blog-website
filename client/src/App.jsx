import React, { useContext } from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Settings from './components/Settings'
import Single from './components/Single'
import Write from './components/Write'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Context } from './context/Context'

const App = () => {
    const { user } = useContext(Context);
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/register' element={user ? <Home /> : <Register />} />
                <Route path='/login' element={user ? <Home /> : <Login />} />
                <Route path='/write' element={user ? <Write /> : <Register />} />
                <Route path='/settings' element={user ? <Settings /> : <Register />} />
                <Route path='/post/:postId' element={<Single />} />
            </Routes>
        </Router>
    )
}

export default App