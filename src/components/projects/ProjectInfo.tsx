import { Tag, Button } from "../buttons/tag";
import React, { useState } from "react";

function ProjectInfo(props: any) {
  const { name, description, timeRange, tags } = props.project;
  const [tagStatus, setTagStatus] = useState(false);
  const visibleTags = tagStatus ? tags : tags.slice(0, 3);

  return (
    <div
      className="p-2 text-left bg-white  p-8 text-sm leading-6
      text-slate-700 shadow-xl dark:bg-slate-800 dark:text-slate-400 sm:text-base sm:leading-7"
    >
      <div className="project__titleInfo">
        <div>
          <div className="flex items-baseline font-mono">
            <span>⏰</span>
            <time
              dateTime={timeRange.start}
              className="block text-sm leading-6 text-slate-500 dark:text-slate-400"
            >
              Started at: {timeRange.start}
            </time>
          </div>
          <div className="flex items-baseline font-mono">
            <span>⏰</span>
            <time
              dateTime={timeRange.end}
              className="block text-sm leading-6 text-slate-500 dark:text-slate-400"
            >
              Finished at: {timeRange.end || "keep going..."}
            </time>
          </div>
        </div>
        <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-slate-200">
          Project name: {name}
        </h3>
      </div>
      <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-slate-200">
        Description:
      </h3>
      <div className="text-sm leading-6 sm:text-lg text-slate-500 dark:text-slate-400"
      dangerouslySetInnerHTML={{ __html: description }}></div>

      <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-slate-200">
        Technologies:
      </h3>
      <div className="flex flex-wrap">
        {visibleTags.map((tag: string) => (
          <div className="mt-2 mr-2" key={tag}>
            <Tag tagName={tag} />
          </div>
        ))}
        <div className="mt-2">
          <Button onShow={() => setTagStatus(!tagStatus)} status={tagStatus} />
        </div>
      </div>
    </div>
  );
}

export default ProjectInfo;
