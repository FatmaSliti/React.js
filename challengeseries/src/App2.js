import React from "react"
import './App.css';
import boxesData from "./boxes";
import Box2 from "./components/Box2";

function App(props) {
    const [squares, setSquares] = React.useState(boxesData);

    console.log(squares[0].id)

    function toggle(id) {
        setSquares(squares.map(e => e.id === id ? {...e, on: !e.on} : e))
    }


    // setSquares(prevState => {
    //     return prevState.map(e => {
    //         return e.id === id ? {...e, on: !e.on} : e
    // })
    // })


    // setSquares(squares.map(e => {
    //         if(e.id === id) {
    //             return {
    //                 ...e,
    //                 on: !e.on
    //             }
    //         }
    //         return e;
    //     })
    // );



    // setSquares(prevState => {
    //     const newSquares = []
    //     for (let i = 0; i < prevState.length; i++) {
    //         const currentSquare = prevState[i]
    //             if (currentSquare.id === id) {
    //                 const updateSquare = {
    //                     ...currentSquare,
    //                     on: !currentSquare.on
    //                 }
    //                 newSquares.push(updateSquare)
    //             } else {
    //                 newSquares.push(currentSquare)
    //             }
    //         }
    //         return newSquares
    //     })


    const boxeElts = squares.map(function (e) {
        return (
            // <Box2 key={e.id} id={e.id} on={e.on} handleClick={toggle} />
            <Box2 key={e.id} on={e.on} handleClick={() => toggle(e.id)} />
        )
    });

    return (
        <main>
            <h1>{boxeElts}</h1>
        </main>
    );
}

export default App;
