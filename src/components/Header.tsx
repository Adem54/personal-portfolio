import React from 'react'
import StyledNavbar from './StyledNavbar'
import logoImage from "../assets/logo.png";
const Header = () => {
  return (
    <div>
    <header className="container mx-auto flex justify-between  ">
    <img className="w-16" src={logoImage} alt="logo"/>
    <StyledNavbar/>
    </header>
    </div>
  )
}

export default Header
