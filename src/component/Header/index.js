import React from 'react';
import Logo from '../../assets/logo.png';
import Nav from '../Nav';


function Header() {
    return(
        <header className="container">
            <h2>
                <a href="/">
                    <img src={Logo} alt="Logo"/>
                </a>
            </h2>
            <Nav></Nav>
        </header>
    )
};

export default Header;