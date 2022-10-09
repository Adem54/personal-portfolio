
import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import StyledNavbar from "./StyledNavbar";

const SharedLayout = () => {
  return (
   <>
    <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default SharedLayout
