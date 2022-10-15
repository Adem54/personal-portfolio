import React from "react";
import ademImage from "../assets/Adem.jpg";
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center  md:justify-between items-center mt-4 md:mt-36   ">
      <div className="md:ml-24 mb-4  lg:ml-32">
        <div className="  mb-8 top-16  lg:left-10   text-center mx-auto sm:top-1/3 md:top-1/4 left-5 text-2xl sm:left-5  md:left-24 
        sm:text-3xl  xl:left-48 xl:text-7xl font-bold">
          
          <p id="text" className="text-red-500 mb-4">
          <Typewriter
            words={['Curios', 'Passionate', 'Motivated', 'Organized!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={120}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
          </p><span className="text-gray-600 ">Web Developer</span>
         

        </div>

        <img
          className=" lg:block  sm:mt-0 sm:mb-0 h-36 rounded-full md:block  md:h-48  sm:rounded-full  lg:h-72 object-cover   mx-auto"
          src={ademImage}
          alt="developer"
        />
      </div>
      <div
        className=" lg:flex flex flex-col gap-5 rounded-md shadow-lg shadow-black-200  m-auto  bg-white

        p-6 h-fit md:w-1/2 lg:w-1/2 w-4/5  "
      >
        <h1 className="md:text-4xl sm:text-3xl text-2xl  font-bold text-indigo-900">
          Hi, I'm Adem
        </h1>
        <p className="text-gray-400  ">
          Motivated and organized developer who is curious, willing to learn and
          very interested in his own professional development. Passionate about
          writing clean code that is reusable and follows the DRY principle. I
          am looking for an opportunity to develop programming skills and
          contribute with new exciting projects in an innovative environment.
        </p>

        <button className="bg-indigo-600 text-white text-xl px-3 py-2 rounded-sm font-semibold w-fit">
          Hire me
        </button>
      </div>
    </section>
  );
};

export default Home;
