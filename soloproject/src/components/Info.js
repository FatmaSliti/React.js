import React from "react";

function Info() {
    return (
        <div className="info">           
                <img src="./fatoma.jpg" alt="pic" className="image"  />
            <div className="text">
                <h3>Fatma Sliti</h3>
                <p>Frontend Developer</p>
                <p>fatmasliti.website</p>
            </div>
            <div className="button">
                <button className="email">Email</button>
                <button className="linkedin">LinkedIn</button>
            </div>
        </div>
    )
}

export default Info 
