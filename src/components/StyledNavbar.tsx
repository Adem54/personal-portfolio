import React from 'react'
import { NavLink } from 'react-router-dom'

const StyledNavbar = () => {
  return (
    <nav className="hidden sm:flex gap-x-12 ">
         <NavLink  to="/home"  
            className={({isActive})=>(isActive ? "link active" : "link")}
         >Home</NavLink>
         <NavLink  to="/about"
           className={({isActive})=>(isActive ? "link active" : "link")}
         >About</NavLink>
         <NavLink  to="/experience"
           className={({isActive})=>(isActive ? "link active" : "link")}
         >Experience</NavLink>

        <NavLink  to="/works"
           className={({isActive})=>(isActive ? "link active" : "link")}
         >Work</NavLink>       
        </nav>
  )
}

export default StyledNavbar