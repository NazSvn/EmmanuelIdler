import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { RiJavascriptFill, RiReactjsFill } from "react-icons/ri";
const About = () => {
  return (
    <div className="container mx-auto min-h-80 w-[600PX] p-2">
      <h1 className="mb-5 text-6xl font-bold">Front-End Developer</h1>
      <p className="text-wrap text-lg">
        Hi! I&apos;m Emmanuel Idler, a Junior Front-End Developer with a strong
        passion for creating beautiful, responsive, and user-friendly web
        applications.{" "}
      </p>
      <div className="mt-6">
        <p className="inline">Tech stack: </p>
        <IoLogoHtml5 className="inline size-11 cursor-pointer transition-all hover:size-12" />
        <IoLogoCss3 className="inline size-11 cursor-pointer transition-all hover:size-12" />
        <RiJavascriptFill className="inline size-11 cursor-pointer transition-all hover:size-12" />
        <RiReactjsFill className="inline size-11 cursor-pointer transition-all hover:size-12" />
      </div>
    </div>
  );
};

export default About;
