import React from 'react';
import Logo from '../../assets/logo.png';
import Nav from '../Nav';


function Header({menu, setCurrentMenu, currentMenu}) {

    return(
        <header className="container-fluid row align-items-center">
            <div className="col-8">
                
                    <a href="/">
                        <img src={Logo} alt="Logo"/>
                    </a>

            </div>
            <div className="col-4">
                <Nav
                    menu={menu}
                    setCurrentMenu={setCurrentMenu}
                    currentMenu={currentMenu}
                ></Nav>
            </div>
        </header>
    )
};

export default Header;