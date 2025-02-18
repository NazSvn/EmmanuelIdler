import { TbBrandGithub, TbMail, TbBrandLinkedin } from "react-icons/tb";
import { useContext, useRef, useEffect, useMemo } from "react";
import { GlobalContext } from "../context";
import useIntersectionObserver from "./utils/useIntersectionObserver";
import SocialLinks from "./SocialLinks";
import Tooltip from "./Tooltip";

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
    threshold: 0.5,
  });

  const contactInfo = useMemo(
    () => [
      {
        href: "https://github.com/NazSvn",
        label: "GitHub profile",
        icon: TbBrandGithub,
      },
      {
        href: "mailto:idler90@gmail.com",
        label: "Email me",
        icon: TbMail,
      },
      {
        href: "http://linkedin.com/in/emmanuel-idler-8b6a30227",
        label: "LinkedIn profile",
        icon: TbBrandLinkedin,
      },
    ],
    [],
  );

  const animationDelay = useMemo(
    () => ["delay-[200ms]", "delay-[500ms]", "delay-[700ms]"],
    [],
  );

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
              {contactInfo.map((contact, index) => (
                <span
                  key={contact.label}
                  className={`w-20 transform transition ${
                    isVisible ? "opacity-100" : "opacity-0"
                  } ${animationDelay[index]} duration-[1500ms] ease-in-out`}
                >
                  <Tooltip text={contact.label} position="bottom">
                    <SocialLinks
                      href={contact.href}
                      label={contact.label}
                      icon={contact.icon}
                      aClass={
                        "inline-block focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#70D7A1]"
                      }
                      icnClass={
                        "m-1 inline size-11 cursor-pointer transition-all hover:size-12 hover:text-[#45CB85]"
                      }
                    />
                  </Tooltip>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
