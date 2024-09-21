import React, { useContext, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import '../css/Signup.css'
import { MyContext } from '../Context/MyProvider';

function Signup() {
    const { setcurrUser } = useContext(MyContext);
    const navigate = useNavigate();
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [grade, setGrade] = useState("grade1-5")

    //function to empty the form
    function emptyform() {
        setName('')
        setEmail('')
        setGrade('grade1-5')
        setPassword('')
    }

    async function handelSubmit(e) {
        e.preventDefault();
        try {
            let res = await axios.post(`${import.meta.env.VITE_BURL}/api/auth/signup`, {
                name, email, password, grade
            });
            console.log(res);
            localStorage.setItem('authToken', res.data.token);
            setcurrUser(res.data.newUser)
            alert(res.data.message);
            emptyform();
            navigate('/');
        } catch (error) {
            console.log(error)
            alert(error.response.data.message);
        }
    }

    return (

        <div className='signup-page'>
            <img src="https://i.pinimg.com/originals/e5/d6/8b/e5d68b4c0923839b89fefb727afb9742.gif" alt="Gyanbot" />
            <form className='sform' onSubmit={handelSubmit}>
                <h1>Welcome to Gyanbot</h1>
                <input required type="text" placeholder='Enter Full Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input required type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input required type="password" placeholder='Set Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <div className='grade'>
                    <label htmlFor="grade">Choose your grade:</label>
                    <select name="grade" id="grade" value={grade} onChange={(e) => setGrade(e.target.value)}>
                        <option value="grade1-5">Below 6th</option>
                        <option value="grade6">Grade 6</option>
                        <option value="grade7">Grade 7</option>
                        <option value="grade8">Grade 8</option>
                        <option value="grade9">Grade 9</option>
                        <option value="grade10">Grade 10</option>
                        <option value="grade11">Grade 11</option>
                        <option value="grade12">Grade 12</option>
                        <option value="12th pass">Above 12th</option>
                    </select>
                </div>
                <button className='btn' type='submit'>Signup</button>
                <p onClick={() => navigate('/login')}>Already a user ? </p>
            </form>
        </div>



    )
}

export default Signup
