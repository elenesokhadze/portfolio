import { useContext } from "react";
import { useParams } from "react-router-dom";
import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectInfo = () => {
  const { singleProjectData } = useContext(SingleProjectContext);
  const { id } = useParams();
  return (
    <div className="block sm:flex gap-0 sm:gap-10 mt-14">
      <div className="w-full sm:w-1/3 text-left">
        <div>
          <img
            src={singleProjectData[id].ProjectImage}
            className="rounded-t-xl border-none"
            alt="Single Project"
          />
        </div>

        {/* Single project objectives */}
        <div className="mb-7 mt-8">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {singleProjectData[id].ProjectInfo.ObjectivesHeading}
          </p>
          <p className="font-bold text-ternary-dark dark:text-ternary-light">
            {singleProjectData[id].ProjectInfo.ObjectivesDetails}
          </p>
          {/* Single project client details */}
          <div className="mb-7">
            <ul className="leading-loose">
              {singleProjectData[id].ProjectInfo.CompanyInfo.map((info) => {
                return (
                  <li
                    className="font-general-regular text-ternary-dark dark:text-ternary-light"
                    key={info.id}
                  >
                    <span>{info.title}: </span>
                    <a
                      href={info.details}
                      className={
                        info.title === "Website" || info.title === "Phone"
                          ? "hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300"
                          : ""
                      }
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Project Website and Phone"
                    >
                      {info.details}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Single project technologies */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {singleProjectData[id].ProjectInfo.Technologies[0].title}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {singleProjectData[id].ProjectInfo.Technologies[0].techs.join(", ")}
          </p>
        </div>
      </div>

      {/*  Single project right section */}
      <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
        <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
          {singleProjectData[id].ProjectInfo.ProjectDetailsHeading}
        </p>
        {singleProjectData[id].ProjectInfo.ProjectDetails.map((details) => {
          return (
            <p
              key={details.id}
              className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
            >
              {details.details}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectInfo;
