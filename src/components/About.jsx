import { RiArrowDropRightLine } from "react-icons/ri";

const About = () => {
  return (
    <div className="container mx-auto min-h-screen max-w-4xl content-center p-2">
      <h1 className="mb-5 text-5xl font-bold">About me</h1>
      <div className="container flex gap-3 max-sm:flex-col">
        <p className="w-3/5 text-wrap leading-relaxed max-sm:w-auto">
          Hi! I&apos;m Emmanuel Idler, a Junior Front-End Developer with a
          strong passion for continuously learn and grow, both professionally
          and personally. I have hands-on experience with HTML, CSS, JavaScript,
          React and Tailwind CSS. My goal is to leverage my skills to build
          innovative and impactful web experiences. I&apos;m highly motivated,
          eager to tackle new challenges, and always looking for opportunities
          to expand my knowledge and improve my skills. <br />
          Feel free to check out my projects and get in touch if you&apos;d like
          to collaborate or have any questions!
        </p>
        <div className="w-2/5 ps-3 max-sm:w-auto">
          <p className="mb-2">Technologies I&apos;ve worked with recently: </p>
          <ul className="r grid grid-cols-2 gap-2 text-xs">
            <li>
              <RiArrowDropRightLine className="inline" /> <span> HTML </span>
            </li>
            <li>
              <RiArrowDropRightLine className="inline" /> <span> CSS </span>
            </li>
            <li>
              <RiArrowDropRightLine className="inline" />
              <span> JavaScript </span>
            </li>
            <li>
              <RiArrowDropRightLine className="inline" />
              <span> Tailwind CSS </span>
            </li>
            <li>
              <RiArrowDropRightLine className="inline" /> <span> React </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
