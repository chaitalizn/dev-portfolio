import React, { useEffect } from 'react';
import Logo from '../../assets/logo.png';


function Nav({menu, setCurrentMenu, currentMenu}) {
    const name = "Chaitali Patel"
    useEffect(() => {
        document.title = `Chaitali Patel - ${currentMenu}`
      }, [currentMenu]);

    return(
        <nav>
            <ul className="flex-row">

                {menu.map(menuItem => (
                    
                <li className={`navItem ${currentMenu === menuItem && 'navActive'}`} key={menuItem}>

                    <span onClick={() => {setCurrentMenu(menuItem)}}>
                        {menuItem}
                    </span>

                </li>
                ))}
            </ul>
        </nav>
    )
};

export default Nav;