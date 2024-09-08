import React from "react";
import { Navigate } from "react-router-dom";
import { logo } from "../../assets";
function Navbar() {
  return (
    <nav className="w-full flex justify-between bg-white py-3 px-5 border-b-2 font-main font-semibold text-base">
      <div className="pr-4 sm:border-r-2">
        <img src={logo} alt="" />
      </div>
      <div className="px-4">
        <ul className="flex gap-4">
          <li className="leading-10">Beranda</li>
          <li className="leading-10">Doa</li>
          <li className="">
            <input
              className="w-40 h-full rounded-xl bg-gray-100 text-center"
              type="text"
              placeholder="Search Surah, Doa"
            />
          </li>
          <li className=""><div className="w-10 h-10 rounded-full bg-black"></div></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
