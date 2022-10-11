
import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


const Home = () => {
  return (
   <>
    <Header/>
   <section className="bg-gradient-to-t from-indigo-200  to-white-200  h-auto  xl:h-screen pt-24 pb-40  mt-4 ">
   <Outlet/>
   </section>
   <Footer/>
   </>
  )
}

export default Home
