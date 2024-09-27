import { useContext, useEffect, useRef } from "react";
import { SlArrowUp, SlMenu } from "react-icons/sl";
import { Link, scroller } from "react-scroll";
import { GlobalContext } from "../context";
import { FiX } from "react-icons/fi";

const NavBar = () => {
  const {
    isOpen,
    setIsOpen,
    isShown,
    setIsShown,
    atTop,
    setAtTop,
    firstLoad,
    setFirstLoad,
    currentSection,
  } = useContext(GlobalContext);

  const burgerNavRef = useRef(null);
  const prevScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= "768") {
        document.body.classList.remove("no-scroll");
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleWheel);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("no-scroll");
      document.removeEventListener("scroll", handleWheel);
    };
  }, [isOpen]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFirstLoad(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e) => {
    if (burgerNavRef.current && !burgerNavRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleWheel = () => {
    const currentScrollY = window.scrollY;
    if (isShown && !isOpen) {
      if (currentScrollY > prevScrollY.current) {
        setIsShown(false);
      } else {
        setIsShown(true);
      }
    }

    if (currentScrollY === 0) {
      setAtTop(true);
    } else {
      setAtTop(false);
    }

    prevScrollY.current = currentScrollY;
  };

  const handleKeyDown = (e, targetId) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scroller.scrollTo(targetId, {
        duration: 1000,
        smooth: true,
      });

      setIsOpen(false);
    }
  };

  return (
    <>
      <header id="header">
        <nav
          id="navBar"
          className={`fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between px-4 text-[hsl(0,0%,100%)] ${!isShown && "-translate-y-full"} delay-75 duration-300 ${atTop || !isShown ? "shadow-none" : "shadow-[0px_13px_23px_-11px_rgba(0,0,0,0.41)]"} bg-[rgba(21,49,49,0.85)] backdrop-blur`}
          aria-label="Main Navigation"
        >
          <h3
            className={`transform transition ${
              firstLoad
                ? "translate-x-[-100%] opacity-0"
                : "translate-x-0 opacity-100"
            } delay-200 duration-500 ease-in-out`}
          >
            <Link
              className={`h-full cursor-pointer content-center p-2 text-[22px] text-[#70D7A1] transition-all duration-300 ease-out hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#70D7A1]`}
              to="hero"
              smooth={true}
              offset={-400}
              duration={1000}
              onKeyDown={(e) => handleKeyDown(e, "hero")}
              tabIndex={`${isShown ? "0" : ""}`}
            >
              Emmanuel Idler
            </Link>
          </h3>
          <ul className="hidden h-full w-80 items-center justify-between p-2 md:flex">
            <li
              className={`transform transition ${
                firstLoad
                  ? "translate-y-[-100%] opacity-0"
                  : "translate-y-0 opacity-100"
              } delay-200 duration-500 ease-in-out`}
            >
              <Link
                className={`cursor-pointer p-2 text-xs transition-all duration-300 ease-out hover:text-[#45CB85] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#70D7A1] ${
                  currentSection === "about" && currentSection !== ""
                    ? "active"
                    : ""
                }`}
                to="about"
                smooth={true}
                offset={-80}
                duration={1000}
                onKeyDown={(e) => handleKeyDown(e, "about")}
                tabIndex={`${isShown ? "0" : ""}`}
              >
                About
              </Link>
            </li>
            <li
              className={`transform transition ${
                firstLoad
                  ? "translate-y-[-100%] opacity-0"
                  : "translate-y-0 opacity-100"
              } delay-[400ms] duration-500 ease-in-out`}
            >
              <Link
                className={`cursor-pointer p-2 text-xs transition-all duration-300 ease-out hover:text-[#45CB85] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#70D7A1] ${
                  currentSection === "projects" ? "active" : ""
                }`}
                to="projects"
                smooth={true}
                duration={1000}
                onKeyDown={(e) => handleKeyDown(e, "projects")}
                tabIndex={`${isShown ? "0" : ""}`}
              >
                Projects
              </Link>
            </li>
            <li
              className={`transform transition ${
                firstLoad
                  ? "translate-y-[-100%] opacity-0"
                  : "translate-y-0 opacity-100"
              } delay-[600ms] duration-500 ease-in-out`}
            >
              <Link
                className={`cursor-pointer p-2 text-xs transition-all duration-300 ease-out hover:text-[#45CB85] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#70D7A1] ${
                  currentSection === "contact" ? "active" : ""
                }`}
                to="contact"
                smooth={true}
                offset={-50}
                duration={1000}
                onKeyDown={(e) => handleKeyDown(e, "contact")}
                tabIndex={`${isShown ? "0" : ""}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {!atTop && (
          <div
            className="fixed bottom-1 right-2 z-50 rounded bg-[#24242498] p-3 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#70D7A1] md:right-5"
            tabIndex="0"
            onKeyDown={(e) => handleKeyDown(e, "hero")}
          >
            <Link to="hero" smooth={true} offset={-300} duration={1000}>
              <SlArrowUp
                className="size-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:text-[#45CB85] md:size-5"
                aria-label="Scroll to top"
              />
            </Link>
          </div>
        )}

        <div
          className={`fixed right-5 top-6 z-[52] md:hidden ${!isShown && "-translate-y-12"} delay-75 duration-300`}
        >
          <button
            onClick={isShown && toggleMenu}
            aria-expanded={isOpen}
            aria-controls="burgerNav"
            className={`flex ${isShown && "focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#70D7A1]"}`}
          >
            {isOpen ? (
              <FiX className="size-7" aria-label="Close menu" />
            ) : (
              <SlMenu className="size-6" aria-label="Open menu" />
            )}
          </button>
        </div>

        <div
          id="burgerNav"
          ref={burgerNavRef}
          className={`fixed bottom-0 right-0 top-0 z-50 w-96 content-center bg-gray-900 transition-all duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          aria-hidden={!isOpen}
        >
          <ul className="flex cursor-pointer flex-col items-center justify-evenly gap-8">
            <li
              className={`flex w-full text-center transition-all duration-300 ease-out hover:text-[#45CB85] ${
                currentSection === "about" ? "active" : ""
              }`}
            >
              <Link
                className="w-full p-3 focus-visible:text-[#45CB85] focus-visible:outline-none"
                to="about"
                smooth={true}
                offset={-50}
                duration={1000}
                spy={true}
                onClick={toggleMenu}
                onKeyDown={(e) => handleKeyDown(e, "about")}
                tabIndex={`${isOpen ? "0" : ""}`}
              >
                About
              </Link>
            </li>
            <li
              className={`flex w-full text-center transition-all duration-300 ease-out hover:text-[#45CB85] ${
                currentSection === "projects" ? "active" : ""
              }`}
            >
              <Link
                className="w-full p-3 focus-visible:text-[#45CB85] focus-visible:outline-none"
                to="projects"
                smooth={true}
                offset={-10}
                duration={1000}
                spy={true}
                onClick={toggleMenu}
                onKeyDown={(e) => handleKeyDown(e, "projects")}
                tabIndex={`${isOpen ? "0" : ""}`}
              >
                Projects
              </Link>
            </li>
            <li
              className={`flex w-full text-center transition-all duration-300 ease-out hover:text-[#45CB85] ${
                currentSection === "contact" ? "active" : ""
              }`}
            >
              <Link
                className="w-full p-3 focus-visible:text-[#45CB85] focus-visible:outline-none"
                to="contact"
                smooth={true}
                offset={-100}
                duration={1000}
                spy={true}
                onClick={toggleMenu}
                onKeyDown={(e) => handleKeyDown(e, "contact")}
                tabIndex={`${isOpen ? "0" : ""}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
export default NavBar;
