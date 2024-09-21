import React, { createContext, useEffect, useState } from 'react';
// Create a Context
export const MyContext = createContext();

import axios from 'axios';
const MyProvider = ({ children }) => {

    const [name, setName] = useState('Kuldeep');
    const [currUser, setcurrUser] = useState(null);

    async function fetchCurrUser() {
        try {
            let res = await axios.get(`${import.meta.env.VITE_BURL}/api/auth/getuser`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });
            console.log(res);
            setcurrUser(res.data.user);
        } catch (error) {
            alert(error.response.data.message);
        }
    }
    useEffect(() => {
        if (localStorage.getItem('authToken')) {
            fetchCurrUser();
        }
    }, []);

    return (
        <MyContext.Provider value={{ name, setName, currUser, setcurrUser }}>
            {children}
        </MyContext.Provider>
    );
};
export default MyProvider;