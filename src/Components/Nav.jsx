import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/nav.css';

function Nav() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const closeMenu = () => {
        setMenuOpen(false);
    }
    function handelLogout() {
        localStorage.removeItem('authToken');
        navigate('/login')
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
                    {localStorage.getItem('authToken') ?
                        <> <button className="options" onClick={() => { toggleMenu(), handelLogout() }}>
                            Logout
                        </button>
                            <Link className="options" to={'/about'} onClick={toggleMenu}>
                                About
                            </Link></> :
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


        </>
    );
}

export default Nav;
