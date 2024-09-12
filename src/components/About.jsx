import { RiArrowDropRightLine } from "react-icons/ri";

const About = () => {
  return (
    <section id="about" className="mb-40 pt-24 md:pt-28">
      <div className="mx-auto w-4/5 max-w-4xl content-center sm:w-4/5">
        <h1 className="mb-5 text-4xl font-bold text-[#45CB85] md:text-[40px]">
          About me
        </h1>
        <div className="flex gap-3 max-sm:flex-col">
          <p className="mr-4 w-3/5 text-wrap leading-relaxed max-sm:w-auto">
            Hi! I&apos;m <span className="text-[#45CB85]">Emmanuel Idler</span>,
            a Junior Front-End Developer with a strong passion for continuously
            learn and grow, both professionally and personally. I have hands-on
            experience with <span className="text-[#45CB85]">HTML</span>,{" "}
            <span className="text-[#45CB85]">CSS</span>,{" "}
            <span className="text-[#45CB85]">JavaScript </span>,{" "}
            <span className="text-[#45CB85]">React </span> and{" "}
            <span className="text-[#45CB85]">Tailwind CSS </span>. My goal is to
            leverage my skills to build innovative and impactful web
            experiences. I&apos;m highly motivated, eager to tackle new
            challenges, and always looking for opportunities to expand my
            knowledge and improve my skills. <br />
            Feel free to check out my projects and get in touch if you&apos;d
            like to collaborate or have any questions!
          </p>
          <div className="w-2/5 ps-3 max-sm:w-auto">
            <p className="mb-2 text-[#45CB85]">
              Technologies I&apos;ve worked with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              <li className="custom-hover-underline">
                <RiArrowDropRightLine className="inline" />
                <span className="text-inherit transition-all duration-300">
                  HTML
                </span>
              </li>
              <li className="custom-hover-underline">
                <RiArrowDropRightLine className="inline" />
                <span className="text-inherit transition-all duration-300">
                  CSS
                </span>
              </li>
              <li className="custom-hover-underline">
                <RiArrowDropRightLine className="inline" />
                <span className="text-inherit transition-all duration-300">
                  JavaScript
                </span>
              </li>
              <li className="custom-hover-underline">
                <RiArrowDropRightLine className="inline" />
                <span className="text-inherit transition-all duration-300">
                  Tailwind CSS
                </span>
              </li>
              <li className="custom-hover-underline">
                <RiArrowDropRightLine className="inline" />
                <span className="text-inherit transition-all duration-300">
                  React
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
