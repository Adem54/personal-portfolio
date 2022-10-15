import React from "react";
import { useContextData } from "../context/Context";
import {experiences} from "../utils/data";


interface ExperienceType {
  id:number;
  roll:string;
  company:string;
  description:string;
  from:string;
  til:string;
  img:string;
}

const Experience = () => {
  console.log("experiences: ",experiences);
  const {mode,setMode}=useContextData();

  return (
    
    
    <section className={`flex justify-center items-center space-y-4 flex-col px-4 ${mode ? 'text-white':''}`}>


      {experiences.map((item)=>{
        const {img,from,til,roll,description,company}=item;
          return    <div className={`flex  justify-start ring-1  ring-black ${mode ? 'ring-white': ''} flex-col md:flex-row items-start  md:w-5/6 lg:w-3/4 rounded-sm gap-x-4 md:items-center`}>
          <img
            className="lg:h-72 lg:w-96 md:h-54 sm:w-full h-64 md:w-72 object-cover object-center rounded-sm "
            src={img}
            alt="developer"
          />
          <div className="flex flex-col font-roboto md:gap-y-0 pl-2">
            <p>
              {" "}
              <span className="text-xl font-bold mr-4 "> From:</span>
              <span >{from}</span>{" "}
            </p>
  
            <p>
              {" "}
              <span className="text-xl font-bold mr-4">Til:</span> <span>{til}</span>
            </p>
  
            <p>
              {" "}
              <span className="text-xl font-bold mr-4">Company:</span>
              <span>{company}</span>
            </p>
            <p>
              {" "}
              <span className="text-xl font-bold mr-4">Roll:</span>
              <span>{roll}</span>
            </p>
            <p className="">
              <span className="text-xl font-bold mr-4">Task:</span>
              <span >
               {description}
              </span>
            </p>
          </div>
        </div>
      })}
      
    </section>
    
    
  );
};

export default Experience;
