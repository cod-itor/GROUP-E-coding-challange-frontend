import React from "react";
import Image from "next/image";

export default function NavBarComponent() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-800">
      <div className="flex items-center gap-3">
          <Image src="/images/hrd.png"
            width={243}
            height={40}
            alt="logo" 
            className="object-cover"
          >
          </Image>
      </div>
      <button className="flex bg-[#00518E] text-white rounded radius-12px top-12px right-30px left30px bottom-12px gap-10px w-109px h-47px items-center">
        login
      </button>
    </nav>
  );
}
