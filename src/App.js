import React, {useState} from 'react';
import './App.css';
import About from './component/About';
import ContactForm from './component/Contact';
import Header from './component/Header';
import Projects from './component/Projects';

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
        <ContactForm></ContactForm>
        <Projects></Projects>
      </main>
    </div>
  )
}

export default App;
