import React from 'react'
import { NavLink } from 'react-router-dom'



const StyledNavbar = () => {
  return (
    <nav className="hidden sm:flex sm:gap-x-6 md:gap-x-12 relative text-gray-600 font-bold text-sm uppercase ">
         <NavLink  to="/"  
            className="
            capitalize
                inline-block
                text-xl
                relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-1.5
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-gray-600
                before:via-slate-400
                before:to-zinc-500
                hover:before:w-full
                hover:before:opacity-100
            "
         >Home</NavLink>
         <NavLink  to="/about"
           className="
           capitalize
           inline-block
           text-xl
           relative
           cursor-pointer
           transition-all
           duration-500
           before:content-['']
           before:absolute
           before:-bottom-2
           before:left-1/2
           before:-translate-x-1/2
           before:w-0
           before:h-1.5
           before:rounded-full
           before:opacity-0
           before:transition-all
           before:duration-500
           before:bg-gradient-to-r
           before:from-gray-600
           before:via-slate-400
           before:to-zinc-500
           hover:before:w-full
           hover:before:opacity-100
           "
         >About</NavLink>
         <NavLink  to="/experience"
           className="
           capitalize
           inline-block
           text-xl
           relative
           cursor-pointer
           transition-all
           duration-500
           before:content-['']
           before:absolute
           before:-bottom-2
           before:left-1/2
           before:-translate-x-1/2
           before:w-0
           before:h-1.5
           before:rounded-full
           before:opacity-0
           before:transition-all
           before:duration-500
           before:bg-gradient-to-r
           before:from-gray-600
           before:via-slate-400
           before:to-zinc-500
           hover:before:w-full
           hover:before:opacity-100
           "
         >Experience</NavLink>

        <NavLink  to="/works"
           className="
           capitalize
           inline-block
           text-xl
           relative
           cursor-pointer
           transition-all
           duration-500
           before:content-['']
           before:absolute
           before:-bottom-2
           before:left-1/2
           before:-translate-x-1/2
           before:w-0
           before:h-1.5
           before:rounded-full
           before:opacity-0
           before:transition-all
           before:duration-500
           before:bg-gradient-to-r
           before:from-gray-600
           before:via-slate-400
           before:to-zinc-500
           hover:before:w-full
           hover:before:opacity-100
           "
         >Work</NavLink>      

        </nav>
  )
}

export default StyledNavbar