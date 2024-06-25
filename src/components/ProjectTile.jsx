import { FaGithubSquare } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";

const ProjectTile = () => {
  return (
    <>
      <div className="p-5 relative mx-auto grid h-96 w-[1000px] grid-cols-12 border">
        <div className="self-center absolute -z-10 col-span-7 col-start-1 border border-red-400">
          <a
            href="https://nazsvn.github.io/forCodeCampLandingPage/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className=""
              src="https://nazsvn.github.io/forCodeCampLandingPage/thumbnail.png"
              alt="Project thumbnail"
            />
          </a>
        </div>
        <div className="col-span-8 col-start-7 border border-rose-600">
          <div>
            <p className="text-right text-lg mb-2">Featured Project</p>
            <h3 className="text-right mb-3">Landing Page</h3>
            <div>
              <p className="bg-slate-400 p-4">
                A landing page created for the freeCodeCamp Responsive Web
                Design Certification.A landing page created for the freeCodeCamp
                Responsive Web Design Certification
              </p>
            </div>
            <ul className="flex justify-end m-2 gap-3">
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
