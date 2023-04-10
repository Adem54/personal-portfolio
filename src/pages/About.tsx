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
        Hello, I'm Adem and I'm from Turkey. I graduated from the IT department of Sakarya University in Turkey. I'm very interested in web development and spend most of my time learning new things in this field through the internet. I place great importance on keeping myself up-to-date and strive to develop myself, especially by using the Udemy course platform, medium.com, and Stack Overflow. I am interested in both backend and frontend development, and you can find many of my projects in these areas in my portfolio
          <br />
          <span >
          From January to May 2022, I attended the Get Academy full-stack web development course. During the 1.5-month period of the course, I have been as an intern at Netsense Software IT company. I completed a project called "happening" (hemsedal-happening-project), which was a part of the company's ongoing project. You can also find this project in my portfolio.
          </span>
          <br />
          <span>
          I am a very social person and enjoy being active in the community. I have volunteered at places such as the Cancer Patients Association, Red Cross, Kia, Klyve Nærmiljøsenter, and NLM Secondhand Boutique. I am currently volunteering in the hverdagshjelp area of the Cancer Patients Association.
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
