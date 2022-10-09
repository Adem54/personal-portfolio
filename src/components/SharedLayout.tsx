
import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


const SharedLayout = () => {
  return (
    <>
    <Header/>
   <section className="bg-gradient-to-t from-indigo-200  to-gray-100 h-screen/2 lg:h-screen-80 mt-4 ">
   <Outlet/>
   </section>
   <Footer/>
   </>
  )
}

export default SharedLayout
