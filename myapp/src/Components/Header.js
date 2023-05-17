import React from "react"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img className = "image" src="logo512.png" alt=""/>
                <ul className="nav-items">
                    <li>pricing</li>
                    <li>about</li>
                    <li>contact</li>
                </ul>
            </nav>
        </header>
    )
}
