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
    )
};

export default Nav;