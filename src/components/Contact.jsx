import { TbBrandGithub, TbMail, TbBrandLinkedin } from "react-icons/tb";

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="mx-auto mt-40 h-[80dvh] content-center text-center"
      >
        <h2 className="mb-4 text-5xl font-bold">Find me here</h2>
        <div className="d flex h-20 items-center justify-center">
          <span className="w-20">
            {" "}
            <a
              href="https://github.com/NazSvn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandGithub className="m-1 inline size-11 cursor-pointer transition-all hover:size-12" />
            </a>
          </span>
          <span className="w-20">
            <a
              href="mailto:idler90@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbMail className="m-1 inline size-12 cursor-pointer transition-all hover:size-14" />
            </a>{" "}
          </span>
          <span className="w-20">
            <a
              href="http://linkedin.com/in/emmanuel-idler-8b6a30227"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandLinkedin className="m-1 inline size-11 cursor-pointer transition-all hover:size-12" />
            </a>
          </span>
        </div>
      </div>
    </>
  );
};
export default Contact;
