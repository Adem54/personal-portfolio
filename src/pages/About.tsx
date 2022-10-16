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
        Hello. My name is Adem, and I'm very interested in web development. I took an IT degree from my own country, which nokut (the Norwegian educational system) recognized as a bachelor's degree. I've picked up a lot of knowledge about web programming. I really give importance to utilize the Internet to update myself on new programming concepts.To improve my web programming skills, I mostly utilize Medium.com, Udemy, and YouTube. I've built a few applications myself using react-redux, javascript, ASP.Net Core.
          <br />
          <span >
          From January to May, I took the Get Academy web development course. I had an internship at the software business Netsense for a part of the course. I've finished working on a front-end project called Hemsedal Happenings. I consider myself to be a front-end developer with back-end skills.
          </span>
          <br />
          <span>
          I enjoy participating in social life and joining volunteer works. I've attended the Cancer Society, Red Cross, KIA, Klyve Naermiljsenter, and NLM Secondhand Butik. I continue to volunteer at the cancer association daily.
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
