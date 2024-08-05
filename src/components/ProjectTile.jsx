import { TbBrandGithub } from "react-icons/tb";
import { FiExternalLink } from "react-icons/fi";
import projects from "../data/projects.json";

const ProjectTile = () => {
  return (
    <>
      {projects.map((project, index) => {
        return (
          <div key={index}>
            <div
              id="projects"
              className="relative mx-auto mb-5 grid h-96 w-4/5 max-w-4xl grid-cols-12 items-center sm:w-4/5"
            >
              <div
                className={`col-span-12 ${index % 2 ? "absolute md:col-span-7 md:col-end-13" : "absolute md:col-span-7 md:col-start-1"}`}
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <picture>
                    <source
                      type="image/avif"
                      srcSet={`${project.images.avif.srcset["175w"]} 175w, ${project.images.avif.srcset["350w"]} 350w, ${project.images.avif.srcset["700w"]} 700w`}
                      sizes={project.images.avif.sizes}
                    />
                    <source
                      type="image/webp"
                      srcSet={`${project.images.webp.srcset["175w"]} 175w, ${project.images.webp.srcset["350w"]} 350w, ${project.images.webp.srcset["700w"]} 700w`}
                      sizes={project.images.webp.sizes}
                    />
                    <img
                      width="700"
                      height="438"
                      src={project.images.png.srcset["700w"]}
                      srcSet={`${project.images.png.srcset["175w"]} 175w, ${project.images.png.srcset["350w"]} 350w, ${project.images.png.srcset["700w"]} 700w`}
                      sizes={project.images.png.sizes}
                      alt="Project thumbnail"
                      className="grayscale transition-all duration-700 ease-in-out hover:grayscale-0"
                      style={{ objectFit: "cover", opacity: 1 }}
                    />
                  </picture>
                </a>
              </div>
              <div
                className={`pointer-events-none z-[2] col-span-12 h-full content-center bg-[#242424] bg-opacity-95 md:col-span-8 md:bg-opacity-0 lg:col-span-6 ${index % 2 ? "md:col-start-1 lg:col-start-1" : "md:col-end-13 lg:col-end-13"}`}
              >
                <div className={`${index % 2 ? "text-left" : "text-right"}`}>
                  <p className="my-4 text-xs text-[#adddbe]">
                    Featured Project
                  </p>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3>
                      <span className="pointer-events-auto mb-4 cursor-pointer text-2xl hover:text-[#adddbe]">
                        {project.title}
                      </span>
                    </h3>
                  </a>
                  <div>
                    <p className="pointer-events-auto mb-4 cursor-default rounded-md bg-[#242424] p-4 text-sm">
                      {project.description}
                    </p>
                  </div>

                  <ul
                    className={`my-2 flex gap-3 text-xs ${index % 2 ? "" : "justify-end"}`}
                  >
                    {project.tech.map((tech, index) => {
                      return (
                        <li
                          className="pointer-events-auto cursor-default hover:text-[#adddbe]"
                          key={index}
                        >
                          {tech}
                        </li>
                      );
                    })}
                  </ul>
                  <div className=" ">
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TbBrandGithub className="pointer-events-auto m-1 inline size-6 cursor-pointer transition-all hover:text-[#adddbe]" />
                    </a>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink className="pointer-events-auto m-1 inline size-6 cursor-pointer transition-all hover:text-[#adddbe]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectTile;
