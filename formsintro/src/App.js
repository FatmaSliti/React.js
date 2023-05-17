import './App.css';
import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");

  console.log(firstName, lastname);
  // console.log(lastname);
  function handleFirstNameChange(event) {
    // console.log("changed") 
    // console.log(event.target) returns the dom object that triggered that event (It looks like html)
    let keystroke = event.target.value;
    // console.log(keystroke)
    setFirstName(keystroke)
  }

  function handleLastNameChange(event) {
    setLastname(event.target.value)
  }

  return (
    <form>
      <input type='text' placeholder='First Name' onChange={handleFirstNameChange} />
      <input type='text' placeholder='Last Name' onChange={handleLastNameChange} />
    </form>
  );
}

export default App;
