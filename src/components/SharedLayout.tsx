
import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


const Home = () => {
  return (
    <>
    <Header/>
   <section className="bg-gradient-to-t from-indigo-200  to-white-200 h-screen-90 relative overflow-hidden mt-4 ">
   <Outlet/>
   </section>
   <Footer/>
   </>
  )
}

export default Home
