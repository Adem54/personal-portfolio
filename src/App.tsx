import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Experience from "./pages/Experience";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
      <Route index element={<Home/>} />  
      <Route path="/about" element={<About/>}/>
      <Route path="/experience" element={<Experience/>}/>
      <Route path="/works" element={<Works/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
