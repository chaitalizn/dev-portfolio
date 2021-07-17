import React from 'react';
import Logo from '../../assets/logo.png';
import Nav from '../Nav';


function Header({menu, setCurrentMenu, currentMenu}) {

    return(
        <header className="container">
            <h2>
                <a href="/">
                    <img src={Logo} alt="Logo"/>
                </a>
            </h2>
            <Nav
                menu={menu}
                setCurrentMenu={setCurrentMenu}
                currentMenu={currentMenu}
            ></Nav>
        </header>
    )
};

export default Header;