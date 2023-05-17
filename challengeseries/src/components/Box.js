import React from "react"

function Box(props) {
    const [res, setRes] = React.useState(props.on);
    console.log(setRes)
    const styles = {
        backgroundColor: res ? "#222222" : "transparent"
    }
    function toggleBox() {
        setRes(function(prevState) {
            return !prevState
        })
        // setRes(prevState => !prevState)
    }
    return (
        <div>
            <div style={styles} className="box" onClick={toggleBox} ></div>
        </div>
    )
}

export default Box
