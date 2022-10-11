import React from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import {useContextData} from "../context/Context";
import { MdCancel } from "react-icons/md";
const MobileMenu = () => {
    const {isOpen,handleToggle}=useContextData();
  return (
    <>
    <div className="sm:hidden text-2xl cursor-pointer  mr-4">
  {isOpen ? <MdCancel onClick={handleToggle}/> : <FiAlignJustify  onClick={handleToggle}/>}  
    </div>
    <nav className={`${isOpen ? 'top-16 ' : '-top-64 ' } flex  sm:hidden absolute  w-full bg-gray-100  items-center flex-col 
       transition-all ease-in-out  duration-1000 rounded-b-lg text-gray-600 font-bold text-md capitalize`}>
       
    {/* <div  className="absolute top-3 right-3 cursor-pointer text-2xl text-white z-32 "> <MdCancel onClick={handleToggle}/></div> */}
         <NavLink  to="/"  
            className="link border-b-2 w-screen text-center p-4 hover:bg-cyan-100"
            
           
         >Home</NavLink>
         <NavLink  to="/about"
            className="link border-b-2 w-screen text-center p-4 hover:bg-cyan-100"
          
         >About</NavLink>
         <NavLink  to="/experience"
           className="link border-b-2 w-screen text-center p-4 hover:bg-cyan-100"
           
         >Experience</NavLink>

        <NavLink  to="/works"
            className="link border-b-2 w-screen text-center p-4 hover:bg-cyan-100"
           
         >Work</NavLink>       
        </nav>
    </>
  )
}

export default MobileMenu
