import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { RiJavascriptFill, RiReactjsFill } from "react-icons/ri";
const Hero = () => {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center pt-16"
    >
      <div className="flex w-4/5 max-w-4xl justify-center">
        <div>
          <h1 className="mb-5 text-6xl font-bold text-white md:text-8xl">
            Emmanuel Idler
          </h1>
          <h1 className="mb-5 text-4xl font-bold text-[#e1e0e0d2] md:text-7xl">
            Front-End Developer.
          </h1>
          <p className="max-w-2xl text-wrap">
            Hi! I&apos;m a Junior Front-End Developer with a strong passion for
            creating beautiful, responsive, and user-friendly web applications.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <p className="text-lg text-[#45CB85]">Tech stack: </p>
            <div className="flex content-center">
              <span className="h-14 w-14 content-center text-center">
                <IoLogoHtml5 className="inline size-10 cursor-pointer text-center transition-all duration-300 ease-out hover:size-12 hover:fill-[#f06529]" />
              </span>
              <span className="h-14 w-14 content-center text-center">
                <IoLogoCss3 className="inline size-10 cursor-pointer text-center transition-all duration-300 ease-out hover:size-12 hover:fill-[#264de4]" />
              </span>
              <span className="h-14 w-14 content-center text-center">
                <RiJavascriptFill className="inline size-10 cursor-pointer text-center transition-all duration-300 ease-out hover:size-12 hover:fill-[#f0db4f]" />
              </span>
              <span className="githubIcon h-14 w-14 content-center text-center">
                <RiReactjsFill className="inline size-10 cursor-pointer text-center transition-all duration-300 ease-out hover:size-12 hover:fill-[#61dafb]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
