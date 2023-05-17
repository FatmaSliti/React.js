import './App.css';
import React from "react"

function App() {
  const [starWarsdata, setStarWars] = React.useState({});

  // console.log("Component rendered")

  // 1.GET the data (fetsh)
  // 2.Save the data to state

  fetch("https://swapi.dev/api/people")
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setStarWars(data))

  return (
    <div>
      <pre>{JSON.stringify(starWarsdata, null, 2)}</pre>
    </div>
  );
}

export default App;