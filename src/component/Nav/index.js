import React from 'react';
import Logo from '../../assets/logo.png';


function Nav() {

    const menu = [
        "About Me", "Projects", "Contact", "Resume"
    ]
    function menuSelected() {
        console.log("hi")
    }
    return(
        <header className="container">
            <h2>
                <a href="/">
                    <img src={Logo} alt="Logo"/>
                </a>
            </h2>
            <nav>
                <ul className="container">

                    {menu.map(menuItem => 
                        
                    <li className="" key={menuItem}>

                        <span onClick={menuSelected}>
                            {menuItem}
                        </span>

                    </li>
                    )}
                </ul>
            </nav>
        </header>
    )
};

export default Nav;