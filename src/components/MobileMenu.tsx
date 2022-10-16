import { FaTimes } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useContextData } from "../context/Context";

const MobileMenu = () => {
  const { isOpen, handleToggle, mode, setMode } = useContextData();
  console.log("isOpen: ", isOpen);
  return (
    <>
      <div className="sm:hidden text-2xl cursor-pointer  mr-4">
        {isOpen ? (
          <FaTimes
            className={`${mode ? "text-white" : ""}`}
            onClick={handleToggle}
          />
        ) : (
          <FiAlignJustify
            className={`${mode ? "text-white" : ""}`}
            onClick={handleToggle}
          />
        )}
      </div>
      <nav
        className={`${
          isOpen ? "top-16 " : "-top-64 "
        } flex  sm:hidden absolute  w-full bg-gray-100  items-center flex-col 
       transition-all ease-in-out  duration-1000 rounded-b-lg text-gray-600 font-bold text-md capitalize`}
      >
        {/* <div  className="absolute top-3 right-3 cursor-pointer text-2xl text-white z-32 "> <MdCancel onClick={handleToggle}/></div> */}
        <NavLink
          to="/"
          className="link border-b-2 w-screen text-center  hover:bg-cyan-100"
        >
          <span
            className="link   block w-screen p-4 text-center h-full hover:bg-cyan-100"
            onClick={handleToggle}
          >
            Home
          </span>
        </NavLink>
        <NavLink
          to="/about"
          className="link border-b-2 w-screen text-center  hover:bg-cyan-100"
        >
          <span
            className="link   block w-screen p-4 text-center h-full hover:bg-cyan-100"
            onClick={handleToggle}
          >
            About
          </span>
        </NavLink>

        <NavLink
          to="/experience"
          className="link border-b-2 w-screen text-center  hover:bg-cyan-100"
        >
          <span
            className="link   block w-screen p-4 text-center h-full hover:bg-cyan-100"
            onClick={handleToggle}
          >
            Experiences
          </span>
        </NavLink>

        <NavLink
          to="/projects"
          className="link border-b-2 w-screen text-center  hover:bg-cyan-100"
        >
          <span
            className="link   block w-screen p-4 text-center h-full hover:bg-cyan-100"
            onClick={handleToggle}
          >
            Projects
          </span>
        </NavLink>
      </nav>
    </>
  );
};

export default MobileMenu;
