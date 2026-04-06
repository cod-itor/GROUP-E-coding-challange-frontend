import React from "react";

export default function QuestionCard({
  category = "Docker",
  askedBy = "Mao Meanmean",
  title = "Docker container not starting on Linux",
  description = "My Docker container is failing to start on my Linux machine. I've checked the logs, but I'm not sure what's causing the issue. Any ideas?",
  tags = ["#docker_container", "#linux"],
  answerCount = 10,
}) {
  return (
    <div className="flex flex-col gap-3 p-5 w-[1050px] bg-white border border-[#73899A] rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center">
        <div className="flex gap-8 items-center">
            <div className="inline-block bg-[#E6EEF4] text-[#00518E] rounded-xl font-semibold text-sm px-3 py-1 rounded">
          {category}
        </div>
         <div className="text-sm font-lg font-medium  text-[#73899A]">
         Asked by <span className="text-[#73899A]">{askedBy}</span>
      </div></div>
        
        <div className="text-lg text-gray-600 cursor-pointer font-extrabold ">
          ⋮
        </div>
      </div>

     

      <h2 className="text-lg font-semibold text-[#00518E] m-0 leading-tight cursor-pointer hover:opacity-80 transition-opacity">
        {title}
      </h2>

      <p className="text-sm text-[#6B6B6B] font-medium m-0 leading-relaxed">{description}</p>

      <div className="flex justify-between items-center mt-2">
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-[#E6EEF4] text-gray-600 text-xs px-2.5 py-1 rounded-full cursor-pointer hover:bg-gray-200 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        <button className="px-4 py-2 bg-[#00518E] text-white font-semibold text-sm rounded-lg hover:bg-blue-800 active:bg-blue-900 transition-colors whitespace-nowrap">
          View Answer ({answerCount})
        </button>
      </div>
    </div>
  );
}
