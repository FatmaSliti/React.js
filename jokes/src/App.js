import React from "react"
import './App.css';
import Jokes from "./components/jokes";
import jokesData from "./components/jokesData";


function App() {
  const jokesElts = jokesData.map((joke) => {
    return <Jokes setup={joke.setup} punchline={joke.punchline} />
  })


  return (
    <div>
      {jokesElts}
    </div>
  )
}

export default App;

