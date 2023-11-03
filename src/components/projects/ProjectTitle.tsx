function ProjectTitle(props: any) {
  const { selectedProject, onSelect } = props;
  const { name, company, title, id } = props.project;
  const isSelected = id === selectedProject;

  return (
    <div
      className={`xl:w-64 w-56 lg:m-0 mr-2.5 mb-1 ${
        isSelected ? "bg-green-200" : "bg-gray-50"
      } bg-gray-50 xl:text-xs lg:p-4
        p-2 shadow-lg transition-all ${
          isSelected ? "hover:bg-green-300" : "hover:bg-green-200"
        }`}
      onClick={onSelect}
    >
      <div className="flex flex-col items-start">
        <div className="sm:text-base text-gray-600">
          <span>Project Name:</span>{" "}
          <span className="font-semibold text-gray-800">{name}</span>
        </div>
        <div className="sm:text-base text-gray-600">
          <span>Company:</span>{" "}
          <span className="font-semibold text-gray-800">{company}</span>
        </div>
        <div className="sm:text-base text-gray-600 text-left">
          <span>Position: </span>
          <span className="font-semibold text-gray-800">{title}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectTitle;
