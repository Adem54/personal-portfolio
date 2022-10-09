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
    <nav className={`${isOpen ? 'top-24 ' : '-top-64 ' } flex  sm:hidden absolute  w-full bg-slate-500 text-white items-center flex-col 
       transition-all ease-in-out delay-150 duration-1000 rounded-b-lg`}>
       
    {/* <div  className="absolute top-3 right-3 cursor-pointer text-2xl text-white z-32 "> <MdCancel onClick={handleToggle}/></div> */}
         <NavLink  to="/home"  
            className={({isActive})=>(isActive ? "link  active border-b-2 w-screen text-center p-4 hover:bg-sky-700" : "link border-b-2 w-screen text-center p-4 hover:bg-sky-700  ")
               
        }
            
           
         >Home</NavLink>
         <NavLink  to="/about"
           className={({isActive})=>(isActive ? "link active border-b-2 w-screen text-center p-4 hover:bg-sky-700" : "link border-b-2 w-screen text-center p-4 hover:bg-sky-700")}
          
         >About</NavLink>
         <NavLink  to="/experience"
           className={({isActive})=>(isActive ? "link active border-b-2 w-screen text-center p-4 hover:bg-sky-700" : "link border-b-2 w-screen text-center p-4 hover:bg-sky-700")}
           
         >Experience</NavLink>

        <NavLink  to="/works"
           className={({isActive})=>(isActive ? "link active border-b-2 w-screen text-center p-4 hover:bg-sky-700" : "link border-b-2 w-screen text-center p-4 hover:bg-sky-700")}
           
         >Work</NavLink>       
        </nav>
    </>
  )
}

export default MobileMenu
