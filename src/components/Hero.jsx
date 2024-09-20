import { useContext, useEffect, useRef } from "react";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { RiJavascriptFill, RiReactjsFill } from "react-icons/ri";
import { GlobalContext } from "../context";

const Hero = () => {
  const { firstLoad, setFirstLoad, setCurrentSection } =
    useContext(GlobalContext); 

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentSection("");  
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFirstLoad(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="flex min-h-screen flex-col items-center justify-center pt-16"
    >
      <div className="flex w-4/5 max-w-4xl justify-center">
        <div>
          <h1
            className={`mb-5 transform text-6xl font-bold text-white transition md:text-8xl ${
              firstLoad
                ? "translate-y-[50%] opacity-0"
                : "translate-y-0 opacity-100"
            } delay-[800ms] duration-[600ms] ease-in-out`}
          >
            Emmanuel Idler
          </h1>
          <h1
            className={`mb-5 transform text-4xl font-bold text-[#e1e0e0d2] transition md:text-7xl ${
              firstLoad
                ? "translate-y-[50%] opacity-0"
                : "translate-y-0 opacity-100"
            } delay-[1000ms] duration-[600ms] ease-in-out`}
          >
            Front-End Developer.
          </h1>
          <p
            className={`max-w-2xl transform text-wrap transition ${
              firstLoad
                ? "translate-y-[50%] opacity-0"
                : "translate-y-0 opacity-100"
            } delay-[1200ms] duration-[600ms] ease-in-out`}
          >
            Hi! I&apos;m a Junior Front-End Developer with a strong passion for
            creating beautiful, responsive, and user-friendly web applications.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <p
              className={`transform text-lg text-[#45CB85] transition ${
                firstLoad ? "opacity-0" : "opacity-100"
              } delay-[1400ms] duration-[800ms] ease-in-out`}
            >
              Tech stack:
            </p>
            <div className="flex content-center">
              <span
                className={`h-14 w-14 transform content-center text-center transition ${
                  firstLoad ? "opacity-0" : "opacity-100"
                } delay-[1500ms] duration-[1500ms] ease-in-out`}
              >
                <IoLogoHtml5 className="inline size-10 cursor-pointer text-center transition-all duration-300 ease-out hover:size-12 hover:fill-[#f06529]" />
              </span>
              <span
                className={`h-14 w-14 transform content-center text-center transition ${
                  firstLoad ? "opacity-0" : "opacity-100"
                } delay-[1600ms] duration-[1500ms] ease-in-out`}
              >
                <IoLogoCss3 className="inline size-10 cursor-pointer text-center transition-all duration-300 ease-out hover:size-12 hover:fill-[#264de4]" />
              </span>
              <span
                className={`h-14 w-14 transform content-center text-center transition ${
                  firstLoad ? "opacity-0" : "opacity-100"
                } delay-[1700ms] duration-[1500ms] ease-in-out`}
              >
                <RiJavascriptFill className="inline size-10 cursor-pointer text-center transition-all duration-300 ease-out hover:size-12 hover:fill-[#f0db4f]" />
              </span>
              <span
                className={`h-14 w-14 transform content-center text-center transition ${
                  firstLoad ? "opacity-0" : "opacity-100"
                } delay-[1800ms] duration-[1500ms] ease-in-out`}
              >
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
