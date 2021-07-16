import React from 'react';
import './App.css';
import About from './component/About';
import Nav from './component/Nav';
import Header from './component/Header'

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
      </main>
    </div>
  )
}

export default App;
