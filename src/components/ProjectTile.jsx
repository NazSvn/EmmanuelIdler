import { TbBrandGithub } from "react-icons/tb";
import { FiExternalLink } from "react-icons/fi";
import projects from "../data/projects.json";

const highlightWords = (text, wordsToHighlight) => {
  return text
    .split(new RegExp(`(${wordsToHighlight.join("|")})`, "gi"))
    .map((word, i) =>
      wordsToHighlight.includes(word) ? (
        <span key={i} className="text-[#45CB85]">
          {word}
        </span>
      ) : (
        word
      ),
    );
};

const ProjectTile = () => {
  return (
    <>
      <section id="projects" className="pt-24 md:pt-28">
        <div className="mx-auto w-4/5 max-w-4xl">
          <h1 className="mb-9 text-4xl font-bold text-[#45CB85] md:text-[40px]">
            projects
          </h1>
          {projects.map((project, index) => {
            return (
              <div key={index}>
                <div className="relative mx-auto mb-7 grid h-96 grid-cols-12 items-center">
                  <div
                    className={`col-span-12 md:shadow-lg md:shadow-[#00000033] ${index % 2 ? "absolute md:col-span-7 md:col-end-13" : "absolute md:col-span-7 md:col-start-1"}`}
                  >
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inset-0 h-full w-full transition-all duration-300 ease-in-out before:absolute before:left-0 before:top-0 before:z-[3] before:h-full before:w-full before:rounded-md before:bg-[#153131] before:mix-blend-screen before:transition-opacity before:duration-300 group-hover:before:opacity-0"
                    >
                      <div className="mix-blend-overlay brightness-100 contrast-100 grayscale transition-all duration-300 ease-in-out group-hover:mix-blend-normal group-hover:filter-none">
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
                            style={{ objectFit: "cover", opacity: 1 }}
                            className="rounded-md"
                          />
                        </picture>
                      </div>
                    </a>
                  </div>
                  <div
                    className={`pointer-events-none z-[5] col-span-12 h-full content-center bg-[#153131] bg-opacity-85 p-5 shadow-lg md:col-span-8 md:bg-opacity-0 md:shadow-none lg:col-span-6 ${index % 2 ? "md:col-start-1 lg:col-start-1" : "md:col-end-13 lg:col-end-13"}`}
                  >
                    <div
                      className={`${index % 2 ? "text-left" : "text-right"}`}
                    >
                      <p className="my-4 text-xs text-[#45CB85]">
                        Featured Project
                      </p>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h3>
                          <span className="pointer-events-auto mb-4 cursor-pointer text-2xl hover:text-[#45CB85]">
                            {project.title}
                          </span>
                        </h3>
                      </a>
                      <div>
                        <p className="pointer-events-auto mb-4 cursor-default rounded-md bg-[#153131] p-4 text-sm">
                          {highlightWords(
                            project.description,
                            project.wordsTohigHlight,
                          )}
                        </p>
                      </div>

                      <ul
                        className={`my-2 flex gap-3 text-xs ${index % 2 ? "" : "justify-end"}`}
                      >
                        {project.tech.map((tech, index) => {
                          return (
                            <li
                              className="pointer-events-auto cursor-default hover:text-[#45CB85]"
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
                          <TbBrandGithub className="pointer-events-auto m-1 inline size-6 cursor-pointer transition-all hover:text-[#45CB85]" />
                        </a>
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiExternalLink className="pointer-events-auto m-1 inline size-6 cursor-pointer transition-all hover:text-[#45CB85]" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ProjectTile;
