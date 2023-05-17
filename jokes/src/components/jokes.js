import React from "react"

function Jokes(props) {
    // console.log(props.comments[0].author)
    console.log(props.isPun)

    const [isShown, setIsShown] = React.useState(false)

    function toggle() {
        setIsShown(prevShown => !prevShown)
    }
    

    return (
        <div>
            {props.setup && <h3> setup: {props.setup}</h3>}
            {isShown && <p> Punchline: {props.punchline}</p>}
            {isShown && <button onClick={toggle} >Hide Punchline</button>}
            {!isShown && <button onClick={toggle} >Show Punchline</button>}
            <hr />
        </div>
    )
}

// const cond1 = true
// const cond2 = false

// if (cond1 && console.log("hello")) {
//     //this code will run

// }

export default Jokes
