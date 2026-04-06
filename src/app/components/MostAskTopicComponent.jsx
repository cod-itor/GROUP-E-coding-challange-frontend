import React from "react";

export default function MostAskTopicComponent() {
  const tags = [
    "docker_container",
    "linux",
    "handle_exception",
    "try_catch",
    "git_control",
    "css_pseudo_classes",
    "data_fetching",
    "spring",
  ];
  return (
    <div className="w-90">
      <div className="bg-white py-4 rounded-2xl shadow px-6">
        <div className="flex justify-between ">
          <div className="text-[18px] flex gap-1 font-bold">
            <h1 className="text-[#00518E] ">Most</h1>
            <h1 className="text-[#011B3E]">Ask Top</h1>
          </div>
        </div>
        <div className="my-5">
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, index) => (
              <Tag key={index} label={tag} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Tag({ label }) {
  return (
    <span className="text-[12px] px-4 py-2 bg-[#E6EEF4] text-gray-700 rounded-full text-sm font-medium hover:bg-gray-300 transition">
      #{label}
    </span>
  );
}
