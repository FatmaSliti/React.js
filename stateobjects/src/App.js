//card with blue man

import './App.css';
import React from "react"
import Star from "./components/Star"

function App() {
  const [contact, setContact] = React.useState({
    firstName: "Fatma",
    lastName: "Sliti",
    phone: "+ (216) 95-017-336",
    email: "fatmasliti289@gmail.com",
    isFavorite: true
  })


  // let starIcon = contact.isFavorite ? "starFilled.png" : "starEmpty.png"

  //personal essay
  //   function toggleFavorite() {
  //     setContact(prevState => {
  //       const newObj = { ...prevState };
  //       newObj.isFavorite=  !newObj.isFavorite 
  //       return newObj
  //     })
  // }

  //teacher answer
  function toggleFavorite() {
    setContact(prevState => {
      return {
        ...prevState,
        isFavorite: !prevState.isFavorite
      }
    })
  }

  return (
    <main>
      <article className="card">
        <img src="useStateObjects.png" className="card--image" alt="pic" />
        <div className="card--info">
          {/* the onClick event don't work here coz Star is not a real dom element unless we use it in the cunstom component */}
          <Star isFilled={contact.isFavorite} onClick={toggleFavorite} />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}

export default App;

