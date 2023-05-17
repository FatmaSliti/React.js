//Here we're using the derieved state which means passing props value as an initial value for the state
//in the App2 we're trying the second method

import React from "react"
import './App.css';
import boxesData from "./boxes";
import Box from "./components/Box";

function App(props) {
  const [squares, setSquares] = React.useState(boxesData);

  const styles = {
    // backgroundColor: "black",
    backgroundColor: props.darkMode ? "#222222" : "#cccccc"
  }

  const boxeElts = squares.map(function (e) {
    return (
      <Box style={styles} key={e.id} on={e.on} />
      // <div style={styles} className="boxe" key={e.id}></div>
    )
  });

  // {/* <h3>{e.id}</h3>
  //       <h3>{e.on}</h3> */}

  return (
    <main>
      <h1>{boxeElts}</h1>
    </main>
  );
}

export default App;
