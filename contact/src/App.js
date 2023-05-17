import './App.css';
import React from "react"
import Contact from "./components/contact"


function App() {
  return (
    <div className="contacts">
      <div className="contacts">
        <Contact
          img="fatoma.jpg"
          name="Fatma Sliti"
          phone="95017336"
          email="fatmasliti289@gmail.com"
        />
        <Contact img="jamilaa.jpg" name="Safia Kamala" phone="95017336" email="safiakamala@gmail.com" />
        <Contact img="fatoma.jpg" name="Leila Taib" phone="95017336" email="leilataib@gmail.com" />
        <Contact img="jamilaa.jpg" name="Jamila Khedri" phone="95017336" email="jamilakhedhri@gmail.com" />
      </div>
    </div>
  )
}

export default App;
// <div className="contact-card">
//   <img src="fatoma.jpg" alt='pic' />
//   <h3>Mr. Whiskerson</h3>
//   <div className="info-group">
//   <img src="fatoma.jpg" alt='pic' />
//     <p>(212) 555-1234</p>
//   </div>
//   <div className="info-group">
//   <img src="fatoma.jpg" alt='pic' />
//     <p>mr.whiskaz@catnap.meow</p>
//   </div>
// </div>

// <div className="contact-card">
// <img src="Fatmaa.png" alt='pic' />
//   <h3>Fluffykins</h3>
//   <div className="info-group">
//   <img src="fatoma.jpg" alt='pic' />
//     <p>(212) 555-2345</p>
//   </div>
//   <div className="info-group">
//   <img src="fatoma.jpg" alt='pic' />
//     <p>fluff@me.com</p>
//   </div>
// </div>

// <div className="contact-card">
// <img src="fatoma.jpg" alt='pic' />
//   <h3>Felix</h3>
//   <div className="info-group">
//   <img src="fatoma.jpg" alt='pic' />
//     <p>(212) 555-4567</p>
//   </div>
//   <div className="info-group">
//   <img src="fatoma.jpg" alt='pic' />
//     <p>thecat@hotmail.com</p>
//   </div>
// </div>

// <div className="contact-card">
// <img src="Fatmaa.png" alt='pic' />
//   <h3>Pumpkin</h3>
//   <div className="info-group">
//   <img src="fatoma.jpg" alt='pic' />
//     <p>(0800) CAT KING</p>
//   </div>
//   <div className="info-group">
//   <img src="fatoma.jpg" alt='pic' />
//     <p>pumpkin@scrimba.com</p>
//   </div>
// </div>

