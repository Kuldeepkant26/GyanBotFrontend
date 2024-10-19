import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../css/nav.css';
import { MyContext } from '../Context/MyProvider';

function Nav() {
    const { currUser, logout } = useContext(MyContext)
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const closeMenu = () => {
        setMenuOpen(false);
    }
    function handelLogout() {
        logout();
    }
    return (
        <>
            <nav>
                <h3>GYANBOT</h3>
                <div className={`menu ${menuOpen ? 'slidemenu' : ''}`}>
                    <i
                        id="mnuclose"
                        className={`ri-arrow-right-line ${menuOpen ? '' : 'rotate180'}`}
                        onClick={toggleMenu}
                    ></i>
                    <Link className="options" to={'/'} onClick={closeMenu}>
                        Home
                    </Link>
                    <Link className="options" to={'/allposts'} onClick={closeMenu}>
                        Explore
                    </Link>

                    {localStorage.getItem('authToken') && currUser ?

                        <>
                            <Link className="options" to={'/addpost'} onClick={closeMenu}>
                                Add post
                            </Link>
                            <Link className="options" to={`/profile/${currUser._id}`} onClick={toggleMenu}>
                                Profile
                            </Link>
                            <button className="options" onClick={() => { toggleMenu(), handelLogout() }}>
                                Logout
                            </button>
                        </> :
                        <>
                            <Link className="options" to={'/signup'} onClick={toggleMenu}>
                                Signup
                            </Link>
                            <Link className="options" to={'/login'} onClick={toggleMenu}>
                                Login
                            </Link>
                        </>}
                </div>

                <i id="mnubtn" className="ri-menu-line" onClick={toggleMenu}></i>

            </nav>

            <ToastContainer></ToastContainer>
        </>
    );
}

export default Nav;
