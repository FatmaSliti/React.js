import React from "react";

function Count(props) {
    return (
        <div>
            <div className='counter--count'>
                <h1>{props.number}</h1>
            </div>
        </div>
    )
}

export default Count
