import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2 flex h-14 w-40 items-center justify-around">
          <a
            href="https://github.com/NazSvn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="m-1 inline size-6 cursor-pointer transition-all hover:text-gray-400" />
          </a>
          <a
            href="mailto:idler90@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbMailFilled className="m-1 inline size-6 cursor-pointer transition-all hover:text-gray-400" />
          </a>
          <a
            href="http://linkedin.com/in/emmanuel-idler-8b6a30227"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="m-1 inline size-6 cursor-pointer transition-all hover:text-gray-400" />
          </a>
        </div>
        <div className="text-sm">
          © 2024 Emmanuel Idler. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
