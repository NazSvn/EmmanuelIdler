import { RiArrowDropRightLine } from "react-icons/ri";
import { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../context";
import useIntersectionObserver from "./utils/useIntersectionObserver";

const About = () => {
  const { setCurrentSection } = useContext(GlobalContext);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentSection("about");
        }
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [setCurrentSection]);

  const [ref, isVisible, scrollDirection] = useIntersectionObserver({
    threshold: 0.25,
  });

  return (
    <section id="about" ref={sectionRef} className="mb-40 pt-24 md:pt-28">
      <div
        ref={ref}
        className={`relative mx-auto w-4/5 max-w-4xl content-center sm:w-4/5 ${
          scrollDirection === "down"
            ? `transform transition duration-1000 ease-in-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`
            : ""
        }`}
      >
        <h1 className="mb-5">
          <span
            className="text-4xl font-bold text-[#45CB85] focus-visible:rounded-sm focus-visible:outline-none focus-visible:outline-offset-4 focus-visible:ring-2 focus-visible:ring-[#70D7A1] md:text-[40px]"
            tabIndex={0}
          >
            About me
          </span>
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
          <div
            className={`relative w-2/5 ps-3 max-sm:w-auto ${
              scrollDirection === "down"
                ? `transform transition delay-150 duration-1000 ease-in-out ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-20 opacity-0"
                  }`
                : ""
            }`}
          >
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
