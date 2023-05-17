// const root = document.getElementById("root").append(JSON.stringify(page)); //[object Object] : string representation of a regular js object
import React from "react"
import ReactDOM from "react-dom"
import App from "./App2"
// import "./App.css"
// import Header from "./Components/Header"
// import MainContent from "./Components/MainContent"
// import Footer from "./Components/Footer"
// import Main from "./Components/Main"
// import Navbar from "./Components/Navbar"

// function App() {
//     return (
//         <div>
//             <Main />
//             <Navbar />
//             {/* <Header />
//             <MainContent />
//             <Footer /> */}
//         </div>
//     )
// }

ReactDOM.render(<App />, document.getElementById("root"));

