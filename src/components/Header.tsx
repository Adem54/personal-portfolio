import React, { useState, useRef } from "react";
import StyledNavbar from './StyledNavbar'
import logoImage from "../assets/logo.png";
import MobileMenu from './MobileMenu';
import { useContextData } from '../context/Context';
const Header = () => {
    const {isOpen,handleToggle}=useContextData();
  const content = useRef<any>(null);
    
  return (
    <div 
    ref={content}
    className={`h-24    top-0 fixed flex z-10 w-full  bg-white`}>
    <header className="container mx-auto m-auto flex  justify-between items-center  text-gray-600 ">
    <img className="w-16" src={logoImage} alt="logo"/>
   
   <MobileMenu/>
    <StyledNavbar/>
    </header>
    </div>
  )
}

export default Header

/*

  <div
      class="h-screen/2 lg:h-screen bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden"

      AiOutlineMenu
    >
*/