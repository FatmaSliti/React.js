import './App.css';
import React from 'react';

function App() {

  // const isGoingOut = true
  //   let answer  // Use ternary here
  //   if(isGoingOut === true) {
  //       answer = "Yes"
  //   } else {
  //       answer = "No"
  //   }


  const isGoingOut = false
  // let answer = isGoingOut? "Yes" : "No";  // Use ternary here

  return (
    <div className="state">
      <h1 className="state--title">Do I feel like going out tonight?</h1>
      <div className="state--value">
        <h1>{isGoingOut? "Yes" : "No"}</h1>
      </div>
    </div>
  )
}

export default App;
