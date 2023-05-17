import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// const nums = [1, 2, 3, 4, 5];
// const squaredArray = nums.map((e) => {
//     return e * e;
// })
// console.log(squaredArray)

// chal2

// const names = ["fatma", "safia", "leila", "jamila"];
// const capitalizedNames = names.map(function(e) {
//     const firstLetter = e.slice(0,1).toUpperCase();
//     const restOfLetters = e.slice(1);
//     return `${firstLetter}${restOfLetters}`
// })

// const capitalizedNames = names.map((e) => {
//     return e[0].toUpperCase() +  e.slice(1);
// })
// console.log(capitalizedNames)


//chal3

const names = ["fatma", "safia", "leila"];

const namesWithTag = names.map( e => `<p> ${e} } </p>`)

console.log(namesWithTag)

ReactDOM.render(<App />, document.getElementById("root"));




















// function App() {
//     const date = new Date();
//     const hours = date.getHours();
//     let timeOfDay;

//     if(hours < 12) {
//         timeOfDay = "morning";
//     }else if (hours >=12 && hours < 17) {
//         timeOfDay = "afternoon";
//     }else {
//         timeOfDay = "night";
//     }

//     return (
//         // <h1>Hello it's currently about {hours} o'clock!</h1>
//         <h1>Good {timeOfDay}</h1>
//         )
// }
