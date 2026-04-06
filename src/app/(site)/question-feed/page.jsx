import MostAskTopicComponent from "@/app/components/MostAskTopicComponent";
import TopHelperComponent from "@/app/components/TopHelperComponent";
import React from "react";

export default function page() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#F5FAFF]">
        {/* Navbar */}
        <div></div>

        {/* Main section */}
        <main className="flex-1 max-w-7xl mx-auto w-full p-6 grid grid-cols-12 gap-6">
          {/* Left Content */}
          <div className="col-span-12 lg:col-span-8">
            <QuestionHeader />
          </div>

          {/* Right Sidebar */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            <TopHelperComponent />
            <MostAskTopicComponent />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-blue-900 text-white p-6 text-center">
          © 2026 HRD Community
        </footer>
      </div>
    </>
  );
}

function QuestionHeader() {
  return (
    <div className="p-6 rounded-xl">
      {/* Top Section */}
      <div className="flex justify-between items-center">
        {/* Title */}
        <div>
          <div className="flex gap-2.5">
            <h1 className="text-3xl font-bold text-[#00518E]">Question</h1>
            <h1 className="text-3xl font-bold text-[#012E51]">Feeds</h1>
          </div>

          <p className="text-gray-500 mt-1">
            Explore questions and answers from the HRD Community.
          </p>
        </div>

        {/* Button */}
        <button className="bg-linear-to-l from-[#012E51] via-[#00518E] to-[#137CFF]  text-white w-41.75 py-3 rounded-xl shadow hover:bg-blue-800 transition">
          Ask for Help
        </button>
      </div>

      {/* Filter Section */}
      <div className="flex flex-wrap gap-3 mt-6 items-center">
        {/* Dropdown */}
        <button className="bg-blue-700 text-white px-4 py-2 rounded-xl flex items-center gap-2">
          All Courses
          <span>▼</span>
        </button>

        {/* Tags */}
        {[
          "Java (30)",
          "Spring (26)",
          "Web (24)",
          "Database (10)",
          "Linux (5)",
        ].map((item, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-300 transition"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
