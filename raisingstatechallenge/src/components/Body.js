import React from "react"

function Body(props) {
    return (
        <section>
        <h1>Welcome back, {props.user}!</h1>
        </section>
    )
}

export default Body