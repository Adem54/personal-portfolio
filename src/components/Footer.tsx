import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="h-screen-10 bg-slate-200 flex">
    <div
    className="container mx-auto  flex justify-around items-center"
    >

<p>2022 Adem Erbas</p>


<nav className={` w-1/3   items-center hidden md:flex
       transition-all ease-in-out  duration-1000 rounded-b-lg text-gray-600 font-bold text-md capitalize`}>
       
    {/* <div  className="absolute top-3 right-3 cursor-pointer text-2xl text-white z-32 "> <MdCancel onClick={handleToggle}/></div> */}
         <Link  to="/"  
            className="link border-b-2 w-screen text-center p-4 hover:text-indigo-500"
            
           
         >Home</Link>
         <Link  to="/about"
            className="link border-b-2 w-screen text-center p-4 hover:text-indigo-500"
          
         >About</Link>
         <Link  to="/experience"
           className="link border-b-2 w-screen text-center p-4 hover:text-indigo-500"
           
         >Experience</Link>

        <Link  to="/works"
            className="link border-b-2 w-screen text-center p-4 hover:text-indigo-500"
           
         >Work</Link>       
        </nav>
    </div>
    </footer>
  )
}

export default Footer