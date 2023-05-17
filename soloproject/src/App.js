import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      <Info />
      <div className="main-wrapper">
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  )
}
export default App
