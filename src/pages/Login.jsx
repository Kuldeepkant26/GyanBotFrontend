import React, { useContext, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import '../css/Login.css'
import { MyContext } from '../Context/MyProvider';

function Login() {
    const { setcurrUser } = useContext(MyContext);
    const navigate = useNavigate()
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    //function to empty the form
    function emptyform() {
        setEmail('')
        setPassword('')
    }

    async function handelSubmit(e) {
        e.preventDefault();
        try {
            let res = await axios.post(`${import.meta.env.VITE_BURL}/api/auth/login`, {
                email, password
            });
            console.log(res);
            localStorage.setItem('authToken', res.data.token);
            setcurrUser(res.data.user)
            alert(res.data.message);
            emptyform();
            navigate('/');
        } catch (error) {
            alert(error.response.data.message);
        }
    }
    return (
        <div className='signup-page'>
            <img src="https://i.pinimg.com/originals/e5/d6/8b/e5d68b4c0923839b89fefb727afb9742.gif" alt="" />
            <form className="sform" onSubmit={handelSubmit}>
                <div className="top">
                    <h1>Welcome back!</h1>
                </div>

                <input required type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input required type="password" placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className='btn lbtn' type='submit'>Login</button>
                <p onClick={() => navigate('/signup')}>New user?</p>
            </form>
        </div>
    )
}

export default Login
