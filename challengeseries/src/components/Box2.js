import React from "react"

function Box(props) {
    // console.log(props.id);
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }

    return (
        <div>
            {/* <div style={styles} className="box" onClick={()=>props.handleClick(props.id)}></div> */}
            <div style={styles} className="box" onClick={props.handleClick}></div>
        </div>
    )
}

export default Box