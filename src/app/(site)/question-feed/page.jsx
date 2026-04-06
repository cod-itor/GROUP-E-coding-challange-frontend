import TopHelperComponent from "@/app/components/TopHelperComponent";
import React from "react";

export default function page() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <div></div>

        {/* Main section */}
        <main className="flex-1 max-w-7xl mx-auto w-full p-6 grid grid-cols-12 gap-6">
          {/* Left Content */}
          <div className="col-span-12 lg:col-span-8">
            {/* <QuestionListSectionComponent /> */}
          </div>

          {/* Right Sidebar */}
          <div className="col-span-12 lg:col-span-4 space-y-4">
            <TopHelperComponent />
            {/* <TagsComponent /> */}
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
