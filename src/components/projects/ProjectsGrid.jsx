import { useContext } from "react";
import ProjectSingle from "./ProjectSingle";
import { ProjectsContext } from "../../context/ProjectsContext";

const ProjectsGrid = () => {
  const { projects, selectProject, selectProjectsByCategory } =
    useContext(ProjectsContext);
  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Projects portfolio
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 sm:gap-10">
        {selectProject
          ? selectProjectsByCategory.map((project) => (
              <ProjectSingle
                title={project.title}
                image={project.img}
                key={project.id}
              />
            ))
          : projects.map((project) => (
              <ProjectSingle
                id={project.id}
                title={project.title}
                image={project.img}
                key={project.id}
              />
            ))}
      </div>
      <div className="flex justify-center mt-14 border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
        <span
          className="font-general-medium block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-100 text-nowrap"
          aria-label="More Projects"
        >
          <a
            href="https://github.com/elenesokhadze"
            target="_blank"
            rel="noreferrer"
          >
            More Projects
          </a>
        </span>
      </div>
    </section>
  );
};

export default ProjectsGrid;
