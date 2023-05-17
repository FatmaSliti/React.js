import React from "react"
import '../index.css';

function Contact({ img, name, phone, email }) {
    return (
        <div className="contact-card">
            <img src={img} alt='pic' />
            <h3>{name}</h3>
            <div className="info-group">
                <img src={img} alt='pic' />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src="fatoma.jpg" alt='pic' />
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Contact

