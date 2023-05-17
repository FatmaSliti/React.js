import React from "react";


function Star(props) {
    const starIcon = props.isFilled ? "starFilled.png" : "starEmpty.png"
    return (
        <img src={starIcon}
            className="card--favorite"
            alt="pic"
            onClick={props.onClick}
        />
    )
}
export default Star
