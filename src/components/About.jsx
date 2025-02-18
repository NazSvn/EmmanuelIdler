import { RiArrowDropRightLine } from "react-icons/ri";
import { useContext, useEffect, useMemo, useRef } from "react";
import { GlobalContext } from "../context";
import useIntersectionObserver from "./utils/useIntersectionObserver";
import { TbMail } from "react-icons/tb";
import { Link } from "react-scroll";

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

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [setCurrentSection]);

  const [ref, isVisible, scrollDirection] = useIntersectionObserver({
    threshold: 0.25,
  });

  const technologies = useMemo(
    () => ["Node.js", "Express", "MongoDB", "JWT", "REST APIs", "Stripe"],
    [],
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="mb-40 pt-24 md:pt-28"
      aria-labelledby="about-heading"
    >
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
        {/* Main Section Header */}
        <header id="about-heading">
          <h1 className="mb-5">
            <span
              className="text-4xl font-bold text-[#45CB85] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#70D7A1] md:text-[40px]"
              tabIndex={0}
            >
              About Me
            </span>
          </h1>
        </header>
        <div className="flex gap-3 max-sm:flex-col">
          {/* About Me Paragraph */}
          <p className="mr-4 w-3/5 text-wrap leading-relaxed max-sm:w-auto">
            Hi! I&apos;m <span className="text-[#45CB85]">Emmanuel Idler</span>,
            a Full-Stack Developer with strong front-end foundations and growing
            backend expertise. I have hands-on experience with{" "}
            <span className="text-[#45CB85]">HTML</span>,{" "}
            <span className="text-[#45CB85]">CSS</span>,{" "}
            <span className="text-[#45CB85]">JavaScript</span>,{" "}
            <span className="text-[#45CB85]">React</span>,{" "}
            <span className="text-[#45CB85]">Tailwind CSS</span>, and recently
            expanded into <span className="text-[#45CB85]">Node.js</span>,{" "}
            <span className="text-[#45CB85]">Express</span>,{" "}
            <span className="text-[#45CB85]">MongoDB</span>, and building
            complete <span className="text-[#45CB85]">MERN</span> applications.
            My goal is to leverage my skills to build innovative, end-to-end web
            experiences. I&apos;m highly motivated, eager to tackle new
            challenges, and always looking for opportunities to expand my
            knowledge across the full development stack. <br />
            Feel free to check out my projects and get in touch if you&apos;d
            like to collaborate or have any questions!
          </p>

          {/* Technologies Section */}
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
            {/* Front-End Section */}
            <div className="mb-4">
              <h3 className="mb-2 text-sm font-semibold text-[#3bad72]">
                Front-End
              </h3>
              <ul
                className="grid grid-cols-2 gap-2 text-xs"
                aria-label="Front-End Technologies list"
              >
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "Tailwind CSS",
                  "React",
                  "Zustand",
                ].map((tech) => (
                  <li
                    key={tech}
                    className="custom-hover-underline"
                    tabIndex={0}
                  >
                    <RiArrowDropRightLine
                      className="inline"
                      aria-hidden="true"
                    />
                    <span className="text-inherit transition-all duration-300">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Back-End Section */}
            <div>
              <h3 className="mb-2 text-sm font-semibold text-[#3bad72]">
                Back-End
              </h3>
              <ul
                className="grid grid-cols-2 gap-2 text-xs"
                aria-label="Back-End Technologies list"
              >
                {technologies.map((tech) => (
                  <li
                    key={tech}
                    className="custom-hover-underline"
                    tabIndex={0}
                  >
                    <RiArrowDropRightLine
                      className="inline"
                      aria-hidden="true"
                    />
                    <span className="text-inherit transition-all duration-300">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`*: mb-6 mt-4 flex flex-wrap gap-4 max-sm:w-auto ${
            scrollDirection === "down"
              ? `transform transition delay-300 duration-1000 ease-in-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`
              : ""
          }`}
        >
          <Link
            className="inline-flex items-center rounded-md border border-[#45CB85] px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out hover:bg-[#45cb8610] hover:text-[#45CB85] focus:outline-none focus:ring-2 focus:ring-[#70D7A1] focus:ring-offset-2"
            to={"contact"}
            href={"#contact"}
            smooth={true}
            offset={-80}
            duration={1000}
          >
            <TbMail className="m-1 inline size-6 cursor-pointer transition-all duration-300 ease-in-out" />
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
