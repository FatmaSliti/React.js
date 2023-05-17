import React from "react";

export default function WindowTracker() {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    // React.useEffect(() => {
    //     window.addEventListener("resize", function() {
    //         // console.log("resized");
    //         setWindowWidth(this.window.innerWidth)
    //     })
    // }, [])


    React.useEffect(() => {

        function watchWidth() {
            setWindowWidth(this.window.innerWidth)
        }

        window.addEventListener("resize", watchWidth)

        // this returned function acts as a cleanup function
        return function() {
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    return (
        <h1>window width: {windowWidth} </h1>
    )
}
