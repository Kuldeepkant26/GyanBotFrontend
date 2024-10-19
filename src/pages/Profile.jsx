import React from 'react'
import '../css/Userprofile.css'
import { useParams } from 'react-router-dom'

function Profile() {
    const { id } = useParams();
    
    return (
        <div className='user-profile'>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
        </div>
    )
}

export default Profile
