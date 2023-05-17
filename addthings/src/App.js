import './App.css';
import React, { useState } from "react"

function App() {

  const [thingsArray, setThingsArray] = useState(["Thing1", "Thing2"]);

  function addItem() {
    setThingsArray(prevState => [...thingsArray, `Thing ${thingsArray.length + 1}`])
  }

  const thingsElements = thingsArray.map(e => <p>{e}</p>)

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  )
}

export default App;
