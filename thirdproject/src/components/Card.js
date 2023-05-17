import React from "react";

function Card(props) {
    console.log(props)
    let badgeText
    if (props.e.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.e.location === "Online") {
        badgeText = "ONLINE";
    }
    return (
        <div className="card">
            {/* if the first condition is true then pass to the next one otherwise don't display anything */}
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.e.coverImg} alt="img" className="card--image" />
            <div className="card--stats">
                <img src="star.png" alt="starpic" className="card--star" />
                <span>{props.e.rating}</span>
                <span className="gray"> ({props.e.reviewCount}) . </span>
                <span className="gray"> {props.e.location} </span>
            </div>
            <p className="card--title">{props.e.title}</p>
            <p className="card--price"> <span className="bold">From ${props.e.price} </span> / person</p>
        </div>
    )
}

export default Card
