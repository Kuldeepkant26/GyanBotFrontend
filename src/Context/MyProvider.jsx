import React, { createContext, useEffect, useState } from 'react';
// Create a Context
export const MyContext = createContext();

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const MyProvider = ({ children }) => {

    const navigate = useNavigate()
    const [currUser, setcurrUser] = useState(null);

    function logout() {
        setcurrUser(null);
        localStorage.removeItem('authToken');
        navigate('/');

    }

    async function fetchCurrUser() {
        if (!localStorage.getItem('authToken')) {
            setcurrUser(null);
        }
        try {
            let res = await axios.get(`${import.meta.env.VITE_BURL}/api/auth/getuser`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });
            console.log(res);
            setcurrUser(res.data.user);
        } catch (error) {
            setcurrUser(null)
            localStorage.removeItem('authToken')
            alert(error.response.data.message);

        }
    }
    useEffect(() => {

        fetchCurrUser();

    }, []);

    return (
        <MyContext.Provider value={{ currUser, setcurrUser,logout }}>
            {children}
        </MyContext.Provider>
    );
};
export default MyProvider;