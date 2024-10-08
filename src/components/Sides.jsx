import { useContext, useEffect } from "react";
import { TbBrandGithub, TbMail, TbBrandLinkedin } from "react-icons/tb";
import { GlobalContext } from "../context";

const Contact = () => {
  const { showTooltip, setShowTooltip, firstLoad, setFirstLoad } =
    useContext(GlobalContext);
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFirstLoad(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div
        className={`invisible fixed bottom-0 left-5 w-10 transform content-center text-center transition md:visible lg:left-10 ${
          firstLoad ? "opacity-0" : "opacity-100"
        } delay-1000 duration-700 ease-in-out`}
      >
        <ul className="flex flex-col items-center justify-center text-[#e1e0e0d2] after:mx-0 after:my-auto after:block after:h-[100px] after:w-[1px] after:bg-[#45CB85]">
          <li className="relative mb-4">
            <a
              href="https://github.com/NazSvn"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => handleMouseEnter("github")}
              onMouseLeave={handleMouseLeave}
              className="inline-block focus-visible:-translate-y-1 focus-visible:rounded-sm focus-visible:text-[#45CB85] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#70D7A1] focus-visible:transition-all focus-visible:duration-300 focus-visible:ease-in-out"
            >
              <TbBrandGithub className="m-1 inline size-6 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-[#45CB85]" />
            </a>
            {showTooltip === "github" && (
              <span className="absolute -bottom-6 left-7 mb-2 rounded border bg-black px-2 py-1 text-xs text-white opacity-100">
                Github
              </span>
            )}
          </li>
          <li className="relative mb-4">
            <a
              href="mailto:idler90@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => handleMouseEnter("mail")}
              onMouseLeave={handleMouseLeave}
              className="inline-block focus-visible:-translate-y-1 focus-visible:rounded-sm focus-visible:text-[#45CB85] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#70D7A1] focus-visible:transition-all focus-visible:duration-300 focus-visible:ease-in-out"
            >
              <TbMail className="m-1 inline size-6 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-[#45CB85]" />
            </a>
            {showTooltip === "mail" && (
              <span className="absolute -bottom-6 left-7 mb-2 rounded border bg-black px-2 py-1 text-xs text-white opacity-100">
                Mail
              </span>
            )}
          </li>
          <li className="relative mb-10">
            <a
              href="http://linkedin.com/in/emmanuel-idler-8b6a30227"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => handleMouseEnter("linkedin")}
              onMouseLeave={handleMouseLeave}
              className="inline-block focus-visible:-translate-y-1 focus-visible:rounded-sm focus-visible:text-[#45CB85] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#70D7A1] focus-visible:transition-all focus-visible:duration-300 focus-visible:ease-in-out"
            >
              <TbBrandLinkedin className="m-1 inline size-6 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-[#45CB85]" />
            </a>
            {showTooltip === "linkedin" && (
              <span className="absolute -bottom-7 left-7 mb-2 rounded border bg-black px-2 py-1 text-xs text-white opacity-100">
                LinkedIn
              </span>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};
export default Contact;
