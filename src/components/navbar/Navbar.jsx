import React from 'react'
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="nav">
            <ul>
                <li><a href="/" className="nav-link">Home</a></li>
                <li><a href="/about" className="nav-link">About</a></li>
            </ul>
        </div>
    )
}
