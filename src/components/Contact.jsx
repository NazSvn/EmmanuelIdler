import { TbBrandGithub, TbMail, TbBrandLinkedin } from "react-icons/tb";
import { useContext, useRef, useEffect, useState } from "react";
import { GlobalContext } from "../context";
import useIntersectionObserver from "./utils/useIntersectionObserver";
import { PropTypes } from "prop-types";

const SocialLinks = ({
  href,
  label,
  icon: IconComponent,
  handleMouseEnter,
  handleMouseLeave,
  tooltipVisible,
}) => (
  <span>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      aria-describedby={tooltipVisible ? `${label}-tooltip` : undefined}
      onMouseEnter={() => handleMouseEnter(label)}
      onMouseLeave={handleMouseLeave}
      onFocus={() => handleMouseEnter(label)}
      onBlur={handleMouseLeave}
      className="inline-block focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#70D7A1]"
    >
      <IconComponent className="m-1 inline size-11 cursor-pointer transition-all hover:size-12 hover:text-[#45CB85]" />
    </a>
    {tooltipVisible && (
      <span
        id={`${label}-tooltip`}
        role="tooltip"
        aria-live="polite"
        className="absolute -bottom-8 left-2/4 mb-2 rounded border bg-black px-2 py-1 text-xs text-white opacity-100"
      >
        {label}
      </span>
    )}
  </span>
);

const Contact = () => {
  const { setCurrentSection } = useContext(GlobalContext);
  const [showTooltip, setShowTooltip] = useState(null);
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

  let timeOutId;

  const handleMouseEnter = (icon) => {
    timeOutId = setTimeout(() => {
      setShowTooltip(icon);
    }, 1000);
  };

  const handleMouseLeave = () => {
    setShowTooltip(null);
    clearTimeout(timeOutId);
  };

  return (
    <>
      <section id="contact" ref={sectionRef} className="mx-auto w-4/5">
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
                <SocialLinks
                  href="https://github.com/NazSvn"
                  label="Github"
                  icon={TbBrandGithub}
                  showTooltip={showTooltip}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                  tooltipVisible={showTooltip === "Github"}
                />
              </span>
              <span
                className={`w-20 transform transition ${
                  isVisible ? "opacity-100" : "opacity-0"
                } delay-500 duration-[1500ms] ease-in-out`}
              >
                <SocialLinks
                  href="mailto:idler90@gmail.com"
                  label="Mail"
                  icon={TbMail}
                  showTooltip={showTooltip}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                  tooltipVisible={showTooltip === "Mail"}
                />
              </span>
              <span
                className={`w-20 transform transition ${
                  isVisible ? "opacity-100" : "opacity-0"
                } delay-700 duration-[1500ms] ease-in-out`}
              >
                <SocialLinks
                  href="http://linkedin.com/in/emmanuel-idler-8b6a30227"
                  label="LinkedIn"
                  icon={TbBrandLinkedin}
                  showTooltip={showTooltip}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                  tooltipVisible={showTooltip === "LinkedIn"}
                />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;

SocialLinks.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  tooltipVisible: PropTypes.bool.isRequired,
};
