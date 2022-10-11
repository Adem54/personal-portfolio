import logoImage from "../assets/logo.png";
import moonImg from "../assets/moon.png";
import MobileMenu from './MobileMenu';
import StyledNavbar from './StyledNavbar';
const Header = () => {
 
    
  return (
    <div 

    className={`h-18    top-0 fixed flex z-10 w-full  bg-white`}>
    <header className="container mx-auto m-auto flex justify-between sm:justify-around items-center  text-gray-600 ">
    <img className="w-16" src={logoImage} alt="logo"/>
   
   <MobileMenu/>
    <StyledNavbar/>
    <img className="hidden md:block w-5 cursor-pointer" src={moonImg} alt="dark-light-mode"/>
    </header>
    </div>
  )
}

export default Header

/*

  <div
      class="h-screen/2 lg:h-screen bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden"

      AiOutlineMenu
       <img
          id="moon"
            class="hidden md:block w-5 cursor-pointer"
            src="./img/moon.png"
            alt="moon"
          />
    >
*/