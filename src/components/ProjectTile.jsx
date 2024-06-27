import { FaGithubSquare } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";

const ProjectTile = () => {
  return (
    <>
      <div className="container relative mx-auto grid h-96 max-w-4xl grid-cols-12 items-center p-5">
        <div className="absolute col-span-7 col-start-1 max-sm:col-span-full">
          <a
            href="https://nazsvn.github.io/forCodeCampLandingPage/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="grayscale transition-all duration-700 ease-in-out hover:grayscale-0"
              src="https://nazsvn.github.io/forCodeCampLandingPage/thumbnail.png"
              alt="Project thumbnail"
            />
          </a>
        </div>
        <div className="z-10 col-span-8 col-start-7 max-md:col-start-6 max-sm:col-span-full">
          <div>
            <p className="mb-2 text-right text-xs">Featured Project</p>
            <h3 className="mb-3 text-right text-2xl">Landing Page</h3>
            <div>
              <p className="rounded-md bg-[#242424] p-4 text-sm text-right">
                A landing page created for the freeCodeCamp Responsive Web
                Design Certification.A landing page created for the freeCodeCamp
                Responsive Web Design Certification 
              </p>
            </div>
            <ul className="m-2 flex justify-end gap-3 text-xs">
              <li>HTML</li>
              <li>CSS</li>
              <li>Styling</li>
              <li>vs code</li>
            </ul>
            <div className="text-right">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectTile;
