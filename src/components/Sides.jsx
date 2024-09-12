import { TbBrandGithub, TbMail, TbBrandLinkedin } from "react-icons/tb";

const Contact = () => {
  return (
    <>
      <div className="invisible fixed bottom-0 left-5 w-10 content-center text-center md:visible lg:left-10">
        <ul className="flex flex-col items-center justify-center text-[#e1e0e0d2] after:mx-0 after:my-auto after:block after:h-[100px] after:w-[1px] after:bg-[#45CB85]">
          <li className="mb-4">
            <a
              href="https://github.com/NazSvn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandGithub className="m-1 inline size-6 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-[#45CB85]" />
            </a>
          </li>
          <li className="mb-4">
            <a
              href="mailto:idler90@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbMail className="m-1 inline size-6 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-[#45CB85]" />
            </a>
          </li>
          <li className="mb-10">
            <a
              href="http://linkedin.com/in/emmanuel-idler-8b6a30227"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandLinkedin className="m-1 inline size-6 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-[#45CB85]" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Contact;
