import React from "react";

export default function App() {

    const [isGoingOut, setIsGoingOout] = React.useState(true);

    function changeMind() {
        // setIsGoingOout(prevState => !prevState)
        setIsGoingOout(prevState => !prevState) 
        // {
            // if (prevState === true) {
            //     prevState = false;
            // }else {
            //     prevState = true;
            // }
            // prevState = prevState ? true : false;
        // })
    }


    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            {/* <div className="state--value" onClick={()=> setIsGoingOout(prevState => !prevState)}> */}
            <div className="state--value" onClick={changeMind}>
                {/* <h1>{isGoingOut.toString()}</h1> */}
                <h1>{isGoingOut ? "true" : "false"}</h1>
            </div>
        </div>
    )
}
