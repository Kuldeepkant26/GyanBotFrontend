import React, { useContext } from 'react'
import { MyContext } from '../Context/MyProvider'


function About() {

    const { currUser } = useContext(MyContext);
    return (
        <div className='pages bg-black text-white'>
            {currUser ? <>
                <p>{currUser.name}</p>
                <p>{currUser.email}</p>
                <p>{currUser.grade}</p>
            </> :
                //if curr user not exist
                <>
                    <h1>Please login to see your information</h1>
                </>}
        </div>
    )
}

export default About
