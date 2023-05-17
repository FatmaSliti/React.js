import React from "react";

function Section(props) {
    return (
        <div>
            <div className="section">
                
                    <img src={props.img} alt="pic" />
                
                <div className="info">
                    <div className="info--country">
                        <i class="fa-solid fa-location-dot"></i>
                        <p className="land">{props.land}</p>
                        <a href={props.a.link} className="anchor">{props.a.content}</a>
                    </div>
                    <h1 className="country-noun">{props.governorate}</h1>
                    <p className="duration">{props.duration}</p>
                    <p>{props.discription}</p>
                </div>
            </div>
            <hr />
        </div>
    )
}
export default Section
