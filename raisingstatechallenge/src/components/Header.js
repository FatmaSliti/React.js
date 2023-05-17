import React from "react"

function Header(props) {
    // const [user, setUser] = React.useState("Fatma");
    return (
        <header>
        <p>current user :{props.user}</p>
        </header>
    )
}
export default Header
