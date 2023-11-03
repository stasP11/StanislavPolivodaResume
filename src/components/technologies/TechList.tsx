import { Tag } from "../buttons/tag";
import technologysList from "../../data/techs"

function TechList({id}: any) {
  return (
    <div id={id} className="flex flex-col justify-center items-center text-left">
      <h2 className="font-sans mt-4 mb-5 max-w-xl self-start text-left text-slate-900 text-2xl lg:text-4xl tracking-tight font-bold dark:text-white">
        Here are a few technologies I've been working with:
      </h2>
      <div className="flex flex-wrap lg:w-196 w-full">
        {technologysList.map((tag: any) => (
          <div className="mr-3 mt-2" key={tag.id}>
            <Tag tagName={tag.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechList;
