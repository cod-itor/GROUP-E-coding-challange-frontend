import React from "react";
import Image from "next/image";

export default function FooterComponent() {
  return (
    <div className="bg-sky-600 w-600px h-300px left-150px top-84px right-150px gap-64px">
      <Image
        src="/images/hrdlogo.png"
        width={33}
        height={40}
        alt="logo"
      >
      </Image>
      <div className="text-white flex ">HRD Community</div>
      <div className="text-white left-150px top-84px right-150px gap-64px">
        <p>
          A collaborative educational hub designed to bridge the gap between
          classroom <br /> teaching and student understanding. An accessible academic
          support platform that <br /> fosters peer-to-peer learning through
          incentives, while ensuring accuracy and <br /> integrity with
          instructor-reviewed answers.
        </p>
      </div>

      <footer class="rounded-base shadow-xs m-4">
        <div class="w-full flex text-center justify-center mx-auto max-w-screen-xl p-4 flex items-center justify-between">
          <span class="text-white text-body text-center">
            © Copyright 2026,
            <a> 
              All right reserved by KSHRD Center
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
