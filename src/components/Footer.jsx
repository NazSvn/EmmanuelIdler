import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex h-14 w-32 items-center justify-around">
          <a
            href="https://github.com/NazSvn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="inline cursor-pointer transition-all hover:fill-orange-100" />
          </a>
          <a
            href="mailto:idler90@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbMailFilled className="inline cursor-pointer transition-all hover:fill-orange-100" />
          </a>
          <a
            href="http://linkedin.com/in/emmanuel-idler-8b6a30227"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="inline cursor-pointer transition-all hover:fill-orange-100" />
          </a>
        </div>
        <hr className="shadow-[0px_4px_8px_-7px_rgba(255,255,255,0.65)] h-[15px] w-[60%] border-none mt-[-20px]" />
        <div className="mb-5 min-w-[80%] pt-3 text-center text-xs">
          © 2024 Emmanuel Idler. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;

// shadow-[inset_0px_10px_10px_-15px_rgba(255,255,255,0.4)]
