import { useContext, useEffect, useRef } from "react";
import { SlArrowUp, SlMenu } from "react-icons/sl";
import { Link } from "react-scroll";
import { GlobalContext } from "../context";
import { FiX } from "react-icons/fi";

const NavBar = () => {
  const { isOpen, setIsOpen, isShown, setIsShown, atTop, setAtTop } =
    useContext(GlobalContext);
  const burgerNavRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleNavBar = () => {
    setIsShown(!isShown);
  };

  const handleClickOutside = (e) => {
    if (burgerNavRef.current && !burgerNavRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleWheel = (e) => {
    if (isShown && !isOpen) {
      if (e.deltaY > 0) {
        setIsShown(false);
      } else {
        setIsShown(true);
      }
    }

    if (window.scrollY > 100) {
      setAtTop(false);
    } else {
      setAtTop(true);
    }
  };

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
    document.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("no-scroll");
      document.removeEventListener("wheel", handleWheel);
    };
  }, [isOpen]);

  return (
    <>
      <nav
        id="navBar"
        className={`fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between px-4 ${!isShown && "-translate-y-full"} delay-75 duration-300 ${atTop || !isShown ? "shadow-none" : "shadow-[0px_13px_23px_-11px_rgba(0,0,0,0.41)]"} bg-[#242424b2] backdrop-blur ${atTop && "bg-inherit"} `}
      >
        <h3 className="h-full content-center p-2 text-xl hover:text-[#adddbe]">
          <Link
            className="cursor-pointer"
            to="hero"
            smooth={true}
            offset={-400}
            duration={1000}
          >
            {" "}
            Emmanuel Idler
          </Link>
        </h3>
        <ul className="hidden h-full w-80 items-center justify-between p-2 md:flex">
          <li className="hover:text-[#adddbe]">
            <Link
              className="cursor-pointer p-2"
              to="about"
              smooth={true}
              offset={0}
              duration={1000}
              activeClass="active"
              spy={true}
              onClick={toggleNavBar}
            >
              About
            </Link>
          </li>
          <li className="hover:text-[#adddbe]">
            <Link
              className="cursor-pointer p-2"
              to="projects"
              smooth={true}
              offset={-50}
              duration={1000}
              activeClass="active"
              spy={true}
              onClick={toggleNavBar}
            >
              Projects
            </Link>
          </li>
          <li className="hover:text-[#adddbe]">
            <Link
              className="cursor-pointer p-2"
              to="contact"
              smooth={true}
              offset={-50}
              duration={1000}
              activeClass="active"
              spy={true}
              onClick={toggleNavBar}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      {!atTop && (
        <div className="fixed bottom-1 right-2 z-50 rounded bg-[#242424] p-3 md:right-5">
          <Link to="hero" smooth={true} offset={-300} duration={1000}>
            <SlArrowUp className="size-5 transition-all duration-300 hover:-translate-y-1 hover:text-[#adddbe] md:size-6" />
          </Link>
        </div>
      )}

      <div
        className={`fixed right-5 top-6 z-[52] md:hidden ${!isShown && "-translate-y-12"} delay-75 duration-300`}
      >
        <button onClick={toggleMenu}>
          {isOpen ? (
            <FiX className="size-7 -translate-x-3" />
          ) : (
            <SlMenu className="size-6" />
          )}
        </button>
      </div>
      <div
        id="burgerNav"
        ref={burgerNavRef}
        className={`fixed bottom-0 right-0 top-0 z-50 w-96 content-center bg-gray-900 transition-all duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex cursor-pointer flex-col items-center justify-evenly gap-8">
          <li className="flex w-full text-center hover:text-[#adddbe]">
            <Link
              className="w-full p-3"
              to="about"
              smooth={true}
              offset={-50}
              duration={1000}
              activeClass="active"
              spy={true}
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li className="flex w-full text-center hover:text-[#adddbe]">
            <Link
              className="w-full p-3"
              to="projects"
              smooth={true}
              offset={-50}
              duration={1000}
              activeClass="active"
              spy={true}
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
          <li className="flex w-full text-center hover:text-[#adddbe]">
            <Link
              className="w-full p-3"
              to="contact"
              smooth={true}
              offset={-50}
              duration={1000}
              activeClass="active"
              spy={true}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default NavBar;
