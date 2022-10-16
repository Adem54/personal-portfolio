import React from "react";
import { projects } from "../utils/data";
import { useContextData } from "../context/Context";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
const Works = () => {
  const { projectsStatus, setProjectsStatus,filterProjects, setShowModal,showModal,currentProject,setCurrentProject,mode}=useContextData();
  console.log("projectStatus: ",projectsStatus);


// mode ? "bg-slate-900 text-white" : ""
  return (
    <section className={`relative top-8 pb-24  pt-32 bg-gray-100  ${mode ? "bg-slate-900 text-white" : ""}`} 
  
    >
      <div className="relative flex  min-h-screen items-center justify-center ">
        <div className="flex   absolute -top-20  container mx-auto    justify-center   text-white gap-x-8 ">
          <button className={`bg-red-500 px-7 py-2 rounded-sm sm:text-sm  sm:px-5  md:text-xl ${projectsStatus==='all' ? 'bg-green-400' : ''}`} 
          onClick={()=>setProjectsStatus("all")}

          >
            All
          </button>
          <button className={`bg-red-500 px-7 py-2 rounded-sm text-xl ${projectsStatus==='front-end' ? 'bg-green-400' : ''}`} 
              onClick={()=>setProjectsStatus("front-end")}
          >
            Frontend
          </button>
          <button className={`bg-red-500 px-7 py-2 rounded-sm text-xl ${projectsStatus==='back-end' ? 'bg-green-400' : ''}`} 
           onClick={()=>setProjectsStatus("back-end")}

          >
            Backend
          </button>
        </div>
        <div className=" grid grid-cols-1 gap-5 mt-4 md:grid-cols-2 lg:grid-cols-3">
          {filterProjects().map((item:any) =>  {
            const {id,title,img,githubUrl}=item;
            return <div key={id} className="group rounded-sm relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-72 w-96 ">
                <img
                  className="h-full  w-full object-cover object-center transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={img}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-xl font-bold -mt-16  hover:mt-0 text-white">
                  {title}
                </h1>
                {/* <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis dolore adipisci placeat.
                </p> */}
                <button className="rounded-full bg-neutral-900 mt-4 py-2 px-3.5 font-com text-md capitalize text-white shadow shadow-black/60"
                onClick={()=>{
                  setShowModal(true)
                  setCurrentProject(item);
                }}
                >
               See more
                </button>
              </div>
             
             
            </div>
          
        } )}
        </div>
      </div>
      <div>{showModal && <Modal/>}</div>
    </section>
  );
};

export default Works;
