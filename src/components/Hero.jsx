import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { RiJavascriptFill, RiReactjsFill } from "react-icons/ri";
const Hero = () => {
  return (
    <div id="hero" className="container mx-auto mt-[12%] max-w-4xl content-center p-2 flex">
      <div className="mx-auto"> 
        <h1 className="mb-5 text-8xl font-bold text-white">Emmanuel Idler</h1>
        <h1 className="mb-5 text-7xl font-bold">Front-End Developer.</h1>
        <p className="max-w-2xl text-wrap">
          Hi! I&apos;m a Junior Front-End Developer with a strong passion for
          creating beautiful, responsive, and user-friendly web applications.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <p>Tech stack: </p>
          <div className="flex content-center">
            <span className="h-14 w-14 content-center text-center">
              <IoLogoHtml5 className="text-centercursor-pointer inline size-10 transition-all duration-300 ease-out hover:size-12 hover:fill-[#f06529]" />
            </span>
            <span className="h-14 w-14 content-center text-center">
              <IoLogoCss3 className="text-centercursor-pointer inline size-10 transition-all duration-300 ease-out hover:size-12 hover:fill-[#264de4]" />
            </span>
            <span className="h-14 w-14 content-center text-center">
              <RiJavascriptFill className="text-centercursor-pointer inline size-10 transition-all duration-300 ease-out hover:size-12 hover:fill-[#f0db4f]" />
            </span>
            <span className="h-14 w-14 content-center text-center">
              <RiReactjsFill className="text-centercursor-pointer inline size-10 transition-all duration-300 ease-out hover:size-12 hover:fill-[#61dafb]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
