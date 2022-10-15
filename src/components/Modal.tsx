import React from "react";
//FaTimes
import { FaTimes } from "react-icons/fa";
import { useContextData } from "../context/Context";
import { limitedText } from "../utils/limitedText";
import { useWindowSize } from "../utils/useWindowsSize";
const Modal = () => {
  const { setShowModal, showModal, currentProject } = useContextData();
  console.log("currentProject: ", currentProject);
  const { img, description, githubUrl } = currentProject;

  const [width, height] = useWindowSize();

  let limitText = "";
  if (width <= 720) {
    limitText = limitedText(description, 24);
  } else if (width <= 900 && width > 720) {
    limitText = limitedText(description, 36);
  } else if (width >= 900 && width <= 1200) {
    limitText = limitedText(description, 45);
  } else if (width >= 1200) {
    limitText = limitedText(description, 87);
  }

  return (
    <div
      className=" bg-black/[.06] fixed inset-0 z-50 "
      onClick={() => {
        console.log("Clicked");
        if (showModal) {
          setShowModal(false);
        }
      }}
    >
      <div className="flex  h-screen justify-center items-center px-4  ">
        <div
          className="flex-col justify-center xl:w-1/3 lg:w-1/2 md:w-3/4 sm:w-3/4 w-1/1  h-3/4 relative  z-60 overflow-scroll   bg-red-300   border-4 border-sky-500 rounded-xl "
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex  text-lg w-1/1 h-1/1   text-zinc-600   mb-10 ">
            <img src={img} alt="" />
          </div>
          <div className="flex  px-4 py-4 mb-6 flex-col items-center">
            <p>{showModal ? limitText : description}</p>
            <a
              href={githubUrl}
              className="bg-red-500 px-7 py-2 rounded-md text-xl mt-4 text-white"
              target='_blank' rel="noreferrer"

            >
              Go Github
            </a>
          </div>
          <div
            className="absolute top-4 right-6 text-3xl cursor-pointer z-60 "
            onClick={() => setShowModal(false)}
          >
            <FaTimes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
