import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { IoLogoCss3, IoLogoHtml5, IoLogoNodejs } from "react-icons/io";
import { RiJavascriptFill, RiReactjsFill } from "react-icons/ri";
import { GlobalContext } from "../context";
import { SiExpress, SiMongodb } from "react-icons/si";

const Hero = () => {
  const { firstLoad, setFirstLoad, setCurrentSection } =
    useContext(GlobalContext);
  const sectionRef = useRef(null);
  const [iconVisible, setIconVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentSection("");
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFirstLoad(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [setFirstLoad]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIconVisible(true);
    }, 3300);
    return () => clearTimeout(timeoutId);
  }, []);

  const techStack = useMemo(
    () => [
      {
        icon: IoLogoHtml5,
        label: "HTML5",
        color: "#f06529",
        hover: "hover:fill-[#f06529]",
        focus: "focus-visible:fill-[#f06529]",
      },
      {
        icon: IoLogoCss3,
        label: "CSS3",
        color: "#264de4",
        hover: "hover:fill-[#264de4]",
        focus: "focus-visible:fill-[#264de4]",
      },
      {
        icon: RiJavascriptFill,
        label: "JavaScript",
        color: "#f0db4f",
        hover: "hover:fill-[#f0db4f]",
        focus: "focus-visible:fill-[#f0db4f]",
      },
      {
        icon: RiReactjsFill,
        label: "React",
        color: "#61dafb",
        hover: "hover:fill-[#61dafb]",
        focus: "focus-visible:fill-[#61dafb]",
      },
      {
        icon: IoLogoNodejs,
        label: "Nojde.js",
        color: "#339933",
        hover: "hover:fill-[#339933]",
        focus: "focus-visible:fill-[#339933]",
      },
      {
        icon: SiExpress,
        label: "Express",
        color: "#000000",
        hover: "hover:fill-[#000000]",
        focus: "focus-visible:fill-[#000000]",
      },
      {
        icon: SiMongodb,
        label: "MongoDB",
        color: "#47A248",
        hover: "hover:fill-[#47A248]",
        focus: "focus-visible:fill-[#47A248]",
      },
    ],
    [],
  );

  const animationDelay = useMemo(
    () => [
      "delay-[1500ms]",
      "delay-[1600ms]",
      "delay-[1700ms]",
      "delay-[1800ms]",
      "delay-[1900ms]",
      "delay-[2000ms]",
      "delay-[2100ms]",
    ],
    [],
  );

  return (
    <header
      id="hero"
      ref={sectionRef}
      className="flex min-h-screen flex-col items-center justify-center pt-16"
      aria-labelledby="hero-title"
    >
      <div className="flex w-4/5 max-w-4xl justify-center">
        <div>
          {/* Main Heading */}
          <h1
            id="hero-title"
            className={`mb-5 transform text-6xl font-bold text-white transition focus-visible:outline-none md:text-8xl ${
              firstLoad
                ? "translate-y-[50%] opacity-0"
                : "translate-y-0 opacity-100"
            } delay-[800ms] duration-[600ms] ease-in-out`}
            tabIndex={0}
          >
            Emmanuel Idler
          </h1>
          <h2
            className={`mb-5 transform text-4xl font-bold text-[#e1e0e0d2] transition md:text-7xl ${
              firstLoad
                ? "translate-y-[50%] opacity-0"
                : "translate-y-0 opacity-100"
            } delay-[1000ms] duration-[600ms] ease-in-out`}
          >
            Full-Stack Developer.
          </h2>

          {/* Intro Paragraph */}
          <p
            className={`max-w-2xl transform text-wrap transition ${
              firstLoad
                ? "translate-y-[50%] opacity-0"
                : "translate-y-0 opacity-100"
            } delay-[1200ms] duration-[600ms] ease-in-out`}
          >
            Hi! I&apos;m a Full-Stack Developer with a passion for creating
            beautiful, responsive, and user-friendly web applications across the
            entire technology stack.
          </p>

          {/* Tech Stack */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <p
              className={`transform text-lg text-[#45CB85] transition ${
                firstLoad ? "opacity-0" : "opacity-100"
              } delay-[1400ms] duration-[800ms] ease-in-out`}
            >
              Tech stack:
            </p>
            <div className="flex flex-wrap content-center">
              {techStack.map((tech, index) => (
                <span
                  key={tech.label}
                  className={`h-14 w-14 transform content-center text-center transition ${
                    firstLoad ? "opacity-0" : "opacity-100"
                  } ${animationDelay[index]} duration-[1500ms] ease-in-out`}
                >
                  <tech.icon
                    aria-label={tech.label}
                    tabIndex={0}
                    className={`$ inline size-10 cursor-pointer text-center transition-all duration-300 ease-out hover:size-12 focus-visible:size-12 focus-visible:outline-none ${tech.hover} ${tech.focus} `}
                    style={{
                      fill: iconVisible ? "" : tech.color,
                    }}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
