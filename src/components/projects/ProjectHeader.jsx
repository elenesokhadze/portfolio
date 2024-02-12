import { useContext } from "react";
import SingleProjectContext from "../../context/SingleProjectContext";
import { useParams } from "react-router-dom";

const ProjectSingleHeader = () => {
  const { singleProjectData } = useContext(SingleProjectContext);
  const { id } = useParams();
  return (
    <div>
      <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
        {singleProjectData[id]?.ProjectHeader?.title}
      </p>
    </div>
  );
};

export default ProjectSingleHeader;
