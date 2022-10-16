
import {Outlet} from "react-router-dom";
import { useContextData } from "../context/Context";
import Footer from "./Footer";
import Header from "./Header";
import SocialIcons from "./SocialIcons";


const SharedLayout = () => {
  const {mode,setMode}=useContextData();

  return (
   <>
    <Header/>
   <section className={`bg-gradient-to-t from-indigo-200  to-white-200  h-auto  xl:h-screen    mt-4 ${mode ? 'from-slate-800 to-slate-900':''}`}>
    <SocialIcons/>
   <Outlet/>
   </section>
   <Footer/>
   </>
  )
}

export default SharedLayout
