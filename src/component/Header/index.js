import React from 'react';
import Logo from '../../assets/logo.png';
import Nav from '../Nav';


function Header({menu, setCurrentMenu, currentMenu}) {

    return(
        <header className="container">
        <div className="row d-flex align-items-center justify-content-between p-3 my-2">
            <div className="col-md-6">
                
                    <a href="/">
                        <img className="logo" src={Logo} alt="Logo"/>
                    </a>

            </div>
            <div className="col-md-5">
                <Nav
                    menu={menu}
                    setCurrentMenu={setCurrentMenu}
                    currentMenu={currentMenu}
                ></Nav>
            </div>
        </div>
        </header>
    )
};

export default Header;