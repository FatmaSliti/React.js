import './App.css';
import React from 'react';
import Count from "./components/Count"

function App() {

  const [count, setCount] = React.useState(0);

  function addCount() {
    setCount(count + 1);
  }

  // function subtractCount() {
  //   setCount(function(prevCount) {
  //     return prevCount - 1;
  //   })
  // }

  function subtractCount() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div className='counter'>
      <button className='counter--minus' onClick={subtractCount}>-</button>
      <Count number={count} />
      <button className='counter--plus' onClick={addCount}>+</button>
    </div>
  );
}

export default App;
