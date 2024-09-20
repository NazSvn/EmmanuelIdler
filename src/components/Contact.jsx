import { TbBrandGithub, TbMail, TbBrandLinkedin } from "react-icons/tb";
import { useContext, useRef, useEffect } from "react";
import { GlobalContext } from "../context";
import useIntersectionObserver from "./utils/useIntersectionObserver";

const Contact = () => {
  const { setCurrentSection } = useContext(GlobalContext);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentSection("contact");
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
    threshold: 0.5,
  });
  return (
    <>
      <section id="contact" ref={sectionRef} className="w-4/5  mx-auto">
        <div
          ref={ref}
          className={`relative ${
            scrollDirection === "down"
              ? `transform transition duration-1000 ease-in-out ${
                  isVisible ? "translate-y-0" : "translate-y-20"
                }`
              : ""
          }`}
        >
          <div className="mt-40 h-[80dvh] content-center text-center">
            <h2
              className={`mb-4 transform text-4xl font-bold text-[#45CB85] transition md:text-[40px] ${
                isVisible ? "opacity-100" : "opacity-0"
              } delay-100 duration-[1500ms] ease-in-out`}
            >
              Find me here
            </h2>
            <div className="d flex h-20 items-center justify-center">
              <span
                className={`w-20 transform transition ${
                  isVisible ? "opacity-100" : "opacity-0"
                } delay-200 duration-[1500ms] ease-in-out`}
              >
                <a
                  href="https://github.com/NazSvn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbBrandGithub className="m-1 inline size-11 cursor-pointer transition-all hover:size-12" />
                </a>
              </span>
              <span
                className={`w-20 transform transition ${
                  isVisible ? "opacity-100" : "opacity-0"
                } delay-500 duration-[1500ms] ease-in-out`}
              >
                <a
                  href="mailto:idler90@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbMail className="m-1 inline size-12 cursor-pointer transition-all hover:size-14" />
                </a>
              </span>
              <span
                className={`w-20 transform transition ${
                  isVisible ? "opacity-100" : "opacity-0"
                } delay-700 duration-[1500ms] ease-in-out`}
              >
                <a
                  href="http://linkedin.com/in/emmanuel-idler-8b6a30227"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbBrandLinkedin className="m-1 inline size-11 cursor-pointer transition-all hover:size-12" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
