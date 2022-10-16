import { FaCaretRight } from "react-icons/fa";
import ademImg from "../assets/adem.jpeg";
import { useContextData } from "../context/Context";
const About = () => {
  const {mode,setMode}=useContextData();

  return (
    <section className="mt-4 sm-ml-12 top-1/4 pt-24 container sm:mx-auto flex flex-col justify-center pb-24  items-center   ">
      <h2 className={`text-3xl sm:text-4xl ${mode ? 'text-white':''}`}>About Me</h2>

      <div className="flex  items-center flex-col lg:flex-row lg:justify-around lg:gap-x-8">
        <p className={`lg:w-1/2 w-full px-4 mt-8   xl:text-lg tracking-wide font-roboto ${mode ? 'text-white':''}`}>
          Hello. My name is Adem and I am very interested in web-developing. I
          have an IT degree from my home country and was approved by nokut(<b>Norweigan educational system</b>) as a
          bachelor's degree. I have learned a lot myself about web development.
          I enjoy a lot to learn self new things in programming through the
          Internet. I mostly use youtube, the udemy course platform and
          medium.com to develop myself in web development. I have created some
          projects myself using html, css, javascript, react-redux, and Asp.net
          core.
          <br />
          <span >
            I have attended the Get academy web development course from January
            to May. For part of the course period, I have experienced internship
            in a software company called Netsense. I have completed a front-end
            project name of Hemsedal happenings project. I can describe myself
            as a front-end developer who can also back-end. I'm not as good at
            the back-end as I am at the front-end, but I'm on my way to getting
            better at the back-end as well. In the long term, my plan is to
            become a good full-stack developer. I am happy to be active in
            social life.
          </span>
          <br />
          <br />
          <span>
            I am interested in going on trips and participating in voluntary
            activities. I have been to the Red Cross, KIA, Klyve
            Nærmømiljøsenter, NLM secondhand butik and Cancer Society. I am
            still a volunteer in everyday help at the cancer association.
          </span>
          <br />
          <br />
          <span>
            Here are a few technologies I've been working with recently:
          </span>
          <div className="flex items-center gap-x-8 ">
            <div className="mt-4">
              <div className="flex items-center">
                <FaCaretRight /> <span>Html</span>
              </div>
              <div className="flex items-center">
                <FaCaretRight /> <span>Css</span>
              </div>
              <div className="flex items-center">
                <FaCaretRight /> <span>Sass</span>
              </div>
              <div className="flex items-center">
                <FaCaretRight /> <span>React</span>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center">
                <FaCaretRight /> <span>React query</span>
              </div>
              <div className="flex items-center">
                <FaCaretRight /> <span>Redux-toolkit</span>
              </div>
              <div className="flex items-center">
                <FaCaretRight /> <span>Typescript</span>
              </div>
              <div className="flex items-center">
                <FaCaretRight /> <span>Tailwind css</span>
              </div>
            </div>

            <div>
              <div className="flex items-center">
                <FaCaretRight /> <span>C#</span>
              </div>
              <div className="flex items-center">
                <FaCaretRight /> <span>Dotnet-5</span>
              </div>
            </div>
          </div>
        </p>

        <img
          className="w-3/4 md:w-1/2  lg:w-1/3 xl:w-1/3     my-8 lg:mb-10 rounded-md object-cover object-left  "

          src={ademImg}
          alt="adem"
        />
      </div>
    </section>
  );
};

export default About;
/*

   <h5>Here are a few technologies I've been working with recently:</h5>
    <FaCaretRight/> Html
    <FaCaretRight/> Html
    <FaCaretRight/> Html
*/
