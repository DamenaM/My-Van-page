import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    return (
        <header>
            <Link className="site-logo" to="/">Graduate employees list </Link>
            <nav>
                <NavLink 
                    to="/host"
                    style={({isActive}) => isActive ? activeStyles : null}   >
                    Host
                </NavLink>
                <NavLink 
                    to="/about"
                    style={({isActive}) => isActive ? activeStyles : null}  >
                    About
                </NavLink>
                <NavLink 
                    to="/Graduats"
                    style={({isActive}) => isActive ? activeStyles : null}   >
                    Graduates 
                </NavLink>
                <NavLink 
                    to="/GraduatsFilter"
                    style={({isActive}) => isActive ? activeStyles : null}   >
                    GraduatesFilter 
                </NavLink>
                <NavLink 
                    to="/SearchBarFilter"
                    style={({isActive}) => isActive ? activeStyles : null}   >
                    SearchBarFilter 
                </NavLink>
            </nav>
        </header>
    )
}