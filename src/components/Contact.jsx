import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

const Contact = () => {
  return (
    <>
      <div >
        <h2 className="inline">Contact:</h2>
        <a
          href="https://github.com/NazSvn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare className="m-1 inline size-11 cursor-pointer transition-all hover:size-12" />
        </a>
        <a
          href="mailto:idler90@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbMailFilled className="m-1 inline size-12 cursor-pointer transition-all hover:size-14" />
        </a>
        <a
          href="http://linkedin.com/in/emmanuel-idler-8b6a30227"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="m-1 inline size-11 cursor-pointer transition-all hover:size-12" />
        </a>
      </div>
    </>
  );
};
export default Contact;
