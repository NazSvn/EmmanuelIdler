import { useContext, useEffect } from "react";
import { SlArrowUp, SlMenu } from "react-icons/sl";
import { Link } from "react-scroll";
import { GlobalContext } from "../context";
import { FiX } from "react-icons/fi";
const NavBar = () => {
  const { isOpen, setIsOpen } = useContext(GlobalContext);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
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

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <>
      <nav className="flex h-16 items-center justify-between px-3 shadow-[0px_4px_10px_-6px_rgba(255,255,255,0.88)]">
        <h3>Emmanuel Idler</h3>
        <ul className="hidden w-96 justify-evenly md:flex">
          <li className="hover:text-green-300">
            <Link to="about" smooth={true} offset={-50} duration={1000}>
              About
            </Link>
          </li>
          <li className="hover:text-green-300">
            <Link to="projects" smooth={true} offset={-50} duration={1000}>
              Projects
            </Link>
          </li>
          <li className="hover:text-green-300">
            <Link to="contact" smooth={true} offset={-50} duration={1000}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="fixed bottom-5 right-16">
          <Link to="hero" smooth={true} offset={-300} duration={1000}>
            <SlArrowUp className="size-7 transition-all duration-300 hover:-translate-y-1 hover:fill-green-600" />
          </Link>
        </div>
        <div className="fixed right-5 top-6 z-50 md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FiX className="size-7" />
            ) : (
              <SlMenu className="size-6" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`fixed bottom-0 right-0 top-0 z-40 w-96 content-center bg-gray-900 transition-all duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex cursor-pointer flex-col items-center justify-evenly gap-8">
          <li className="flex w-full text-center hover:text-green-300">
            <Link
              className="w-full p-3"
              to="about"
              smooth={true}
              offset={-50}
              duration={1000}
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li className="flex w-full text-center hover:text-green-300">
            <Link
              className="w-full p-3"
              to="projects"
              smooth={true}
              offset={-50}
              duration={1000}
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
          <li className="flex w-full text-center hover:text-green-300">
            <Link
              className="w-full p-3"
              to="contact"
              smooth={true}
              offset={-50}
              duration={1000}
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
