import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import React from 'react';

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  // function changeBackgroundColor(color) {
  //   document.body.style.backgroundColor = color;
  // }

  function toggleDarkMode() {
    setDarkMode((prevState) => !prevState)
  }
  
  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;

