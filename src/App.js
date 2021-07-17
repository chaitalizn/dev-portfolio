import React, {useState} from 'react';
import './App.css';
import About from './component/About';
import Header from './component/Header'

function App() {

  const [menu] = useState([
    "About Me", "Projects", "Contact", "Resume"
  ])
  const [currentMenu, setCurrentMenu] = useState(menu[0]);
 

  return (
    <div>
      <Header
          menu={menu}
          setCurrentMenu={setCurrentMenu}
          currentMenu={currentMenu}
          >
      </Header>
      <main>
        <About></About>
      </main>
    </div>
  )
}

export default App;