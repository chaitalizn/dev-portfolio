import React, {useState} from 'react';
import './App.css';
import About from './component/About';
import ContactForm from './component/Contact';
import Header from './component/Header';
import Projects from './component/Projects';
import Resume from './component/Resume';

function App() {

  function displayContent(currentMenu) {
    switch(currentMenu) {
      case "Projects":
        return <Projects></Projects>
        break;
      case "Contact":
        return <ContactForm></ContactForm>
        break;
      case "Resume":
        return <Resume></Resume>
        break;
      default:
        return <About></About>
  }
  }

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
       {displayContent(currentMenu)}
      </main>
    </div>
  )
}

export default App;
