import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import airbnbData from "./data";


function App() {
  const CardElements = airbnbData.map(e => {
    // return <Card id={e.id} title={e.title} description={e.description} price={e.price} coverImg={e.coverImg} rating={e.stats.rating} reviewCount={e.stats.reviewCount} location={e.location} openSpots={e.openSpots} />;
    // return <Card id={e.id} {...e} />;
    return <Card id={e.id} e={e} />;
  })

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {CardElements}
      </section>
    </>
  )
}

export default App

