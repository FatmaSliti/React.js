import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import data from "./Data.js"

function App() {
  const sectionElements = data.map(e => {
    return <Section {...e}/>
  })
  return (
    <div>
      <Header />
      <div className="all-sections">
          {sectionElements}
      </div>
    </div>
  )
}

export default App
