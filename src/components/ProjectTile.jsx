import { TbBrandGithub } from "react-icons/tb";
import { FiExternalLink } from "react-icons/fi";
import projects from "../data/projects.json";
import { useContext, useRef, useEffect } from "react";
import { GlobalContext } from "../context";
import useIntersectionObserver from "./utils/useIntersectionObserver";

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
  const { showTooltip, setShowTooltip, setCurrentSection } =
    useContext(GlobalContext);

  let timeOutId;

  const handleMouseEnter = (icon, index) => {
    timeOutId = setTimeout(() => {
      setShowTooltip({ icon, index });
    }, 1000);
  };

  const handleMouseLeave = () => {
    setShowTooltip(null);
    clearTimeout(timeOutId);
  };

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentSection("projects");
        }
      },
      { root: null, rootMargin: "0px", threshold: [0.25] },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [setCurrentSection]);

  return (
    <>
      <section id="projects" ref={sectionRef} className="pt-24 md:pt-28">
        <div className="mx-auto w-4/5 max-w-4xl">
          <h1 className="mb-9">
            {" "}
            <span
              className="text-4xl font-bold text-[#45CB85] focus-visible:rounded-sm focus-visible:outline-none focus-visible:outline-offset-4 focus-visible:ring-2 focus-visible:ring-[#70D7A1] md:text-[40px]"
              tabIndex={0}
            >
              Projects
            </span>
          </h1>
          {projects.map((project, index) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [ref, isVisible, scrollDirection] = useIntersectionObserver({
              threshold: 0.2,
            });
            return (
              <div
                key={index}
                ref={ref}
                className={`relative ${
                  scrollDirection === "down"
                    ? `transform transition duration-1000 ease-in-out ${
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-20 opacity-0"
                      }`
                    : "isolate"
                }`}
              >
                <div className="relative mx-auto mb-24 grid h-[400px] items-center sm:mb-14 sm:h-96 sm:grid-cols-12 md:mb-7">
                  <div
                    className={`col-span-12 md:shadow-lg md:shadow-[#00000033] ${index % 2 ? "absolute md:col-span-7 md:col-end-13" : "absolute md:col-span-7 md:col-start-1"}`}
                  >
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative focus-visible:outline-none"
                    >
                      <div className="group absolute inset-0 left-0 top-0 z-[3] h-full w-full rounded-md bg-[#153131] mix-blend-multiply transition-opacity duration-300 ease-in-out before:absolute before:h-full before:w-full before:rounded-md before:bg-[#4bdd92b0] before:mix-blend-screen group-hover:opacity-0 group-focus-visible:opacity-0"></div>

                      <div className="mix-blend-overlay brightness-100 contrast-100 grayscale transition-all duration-300 ease-in-out group-hover:mix-blend-normal group-hover:filter-none group-focus-visible:mix-blend-normal group-focus-visible:filter-none">
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
                        className="group focus-visible:outline-none"
                      >
                        <h3>
                          <span className="pointer-events-auto mb-4 cursor-pointer text-2xl hover:text-[#45CB85] group-focus-visible:rounded-[1px] group-focus-visible:outline group-focus-visible:outline-offset-4 group-focus-visible:outline-[#70D7A1]">
                            {project.title}
                          </span>
                        </h3>
                      </a>
                      <div>
                        <p className="pointer-events-auto mb-4 cursor-default rounded-md bg-[#153131] p-4">
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
                      <div className="h-7">
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative focus-visible:outline-none"
                          onMouseEnter={() => handleMouseEnter("git", index)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <TbBrandGithub className="pointer-events-auto m-1 inline size-6 cursor-pointer transition-all hover:text-[#45CB85] group-focus-visible:rounded-sm group-focus-visible:outline-none group-focus-visible:ring-2 group-focus-visible:ring-[#70D7A1]" />
                          {showTooltip?.icon === "git" &&
                            showTooltip?.index === index && (
                              <span className="absolute -bottom-10 left-6 mb-2 rounded border bg-black px-2 py-1 text-xs text-white opacity-100">
                                Github
                              </span>
                            )}
                        </a>

                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative focus-visible:outline-none"
                          onMouseEnter={() => handleMouseEnter("link", index)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <FiExternalLink className="pointer-events-auto m-1 inline size-6 cursor-pointer transition-all hover:text-[#45CB85] group-focus-visible:rounded-sm group-focus-visible:outline-none group-focus-visible:ring-2 group-focus-visible:ring-[#70D7A1]" />
                          {showTooltip?.icon === "link" &&
                            showTooltip?.index === index && (
                              <span className="absolute -bottom-10 left-6 mb-2 text-nowrap rounded border bg-black px-2 py-1 text-xs text-white opacity-100">
                                External link
                              </span>
                            )}
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
