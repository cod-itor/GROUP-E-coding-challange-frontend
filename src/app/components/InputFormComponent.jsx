
"use client";
import { MdEmail, MdLock, MdVisibility } from "react-icons/md";
import ButtonComponent from "./ButtonComponent";

export default function InputForm() {
  return (
    <div className="flex flex-col justify-center w-[650px] rounded-xl border border-blue-100 bg-white shadow-sm space-y-5">
      
      <div className="grid grid-cols-3 items-center gap-4 pt-10 pl-10 ">
        <label className="flex items-center gap-2 text-[#002d58] font-bold text-lg">
          <div className="bg-[#0056b3] p-1 rounded text-white shadow-sm">
            <MdEmail size={18} />
          </div>
          Email Address
        </label>
        <div className="col-span-2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-[368px] px-4 py-3 rounded-xl border border-blue-100 bg-white shadow-sm focus:ring-2 focus:ring-blue-400 outline-none transition-all placeholder:text-gray-400 text-gray-600"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 items-center gap-4 pt-10 pl-10">
        <label className="flex items-center gap-2 text-[#002d58] font-bold text-lg">
          <div className="bg-[#0056b3] p-1 rounded text-white shadow-sm">
            <MdLock size={18} />
          </div>
          Password
        </label>
        <div className="col-span-2 relative">
          <input
            type="password"
            placeholder="••••••••••"
            className="w-[368px] px-4 py-3 rounded-xl border border-blue-100 bg-white shadow-sm focus:ring-2 focus:ring-blue-400 outline-none transition-all text-gray-600"
          />
          <button type="button" className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600">
            <MdVisibility size={20} />
          </button>
        </div>
      </div>

      <button className="bg-[#004d8c] text-white text-[10px] px-3 py-1.5 rounded-md font-medium">
          Login
        </button>

      
      {/* <div className="pt-4">
        <ButtonComponent className="bg-[#0056b3] hover:bg-[#004494] text-white w-full py-7 rounded-2xl text-xl font-bold shadow-lg shadow-blue-900/20">
          Login
        </ButtonComponent>
      </div> */}

      <p className="text-center text-gray-500 font-medium">
        Don't have an account yet?{" "}
        <a href="#" className="text-[#0056b3] font-bold underline underline-offset-4 decoration-2">
          Sign Up
        </a>
      </p>
    </div>
  );
}