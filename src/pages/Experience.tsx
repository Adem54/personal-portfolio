import React from "react";
import { useContextData } from "../context/Context";
import { experiences } from "../utils/data";

interface ExperienceType {
  id: number;
  roll: string;
  company: string;
  description: string;
  from: string;
  til: string;
  img: string;
}

const Experience = () => {
  console.log("experiences: ", experiences);
  const { mode, setMode } = useContextData();

  return (
    <section
      className={`flex justify-center items-center pt-24 bg-gray-100 space-y-4 flex-col px-4 ${
        mode ? "bg-slate-900 text-white" : ""
      }`}
    >

  <div className={` pb-12  h-full ${mode ? 'bg-slate-900':''}`}>  
  <div id="card" className="">
          <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
      {experiences.map((item) => {
        const { img, from, til, roll, description, company } = item;
        return (
          <div
            v-for="card in cards"
            className="flex flex-col md:flex-row overflow-hidden
          bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2"
          >
            <div className="h-64 w-auto md:w-1/2">
              <img
                className="inset-0 h-full w-full object-cover object-center"
                alt=""
                src={img}
              />
            </div>
            <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
              <h3 className="font-semibold text-lg leading-tight truncate capitalize">
                {roll}
              </h3>
              <p className="mt-2">{description}</p>
              <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                {company} &bull; from:{from}-until: {til}
              </p>
            </div>
          </div>
        );
      })}
      </div>
      </div>
      </div>
    </section>
  );
};

export default Experience;

/*
<section className={`flex justify-center items-center space-y-4 flex-col px-4 ${mode ? 'text-white':''}`}>
<div className={`flex  justify-start ring-1  ring-black ${mode ? 'ring-white': ''} flex-col md:flex-row items-start  md:w-5/6 lg:w-3/4 rounded-sm gap-x-4 md:items-center`}>
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
        </section>







 <section className={`flex justify-center items-center space-y-4 flex-col px-4 ${mode ? 'bg-slate-900':'bg-gray-100'}`}>
  <div className={`pt-6 pb-12  h-full ${mode ? 'bg-slate-900':'bg-gray-100'}`}>  
        <div id="card" className="">
          <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">






        <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden
                                            bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
            <div className="h-64 w-auto md:w-1/2">
              <img className="inset-0 h-full w-full object-cover object-center" alt="" src={img} />
            </div>
            <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
              <h3 className="font-semibold text-lg leading-tight truncate">{roll}</h3>
              <p className="mt-2">
                  {description}
              </p>
              <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                  {company} &bull; from:{from}-until: {til}
              </p>
            </div>
          </div>


               </div>
        </div>
      </div>
      </section>
*/
