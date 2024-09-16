import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { logo } from "../../assets";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <nav className="w-full flex justify-between bg-white py-3 px-5 border-b-2 font-main font-semibold text-base flex-wrap sm:flex-nowrap">
      <div className="pr-4 sm:border-r-2 flex justify-center">
        <img src={logo} alt="" />
      </div>
      <div
        className="sm:hidden flex justify-end"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <FaXmark className="bg-pink w-10 h-10 text-white rounded-xl p-2" />
        ) : (
          <GiHamburgerMenu className="bg-pink w-10 h-10 text-white rounded-xl p-2" />
        )}
      </div>

      <div className="w-full sm:w-auto sm:px-4">
        <ul
          className={`${
            open ? "flex flex-col" : "hidden sm:flex"
          } w-full sm:w-auto gap-1 sm:gap-4 sm:flex sm:justify-end`}
        >
          <li className="leading-10">
            <NavLink
              to="/"
              className={`block sm:inline w-full sm:w-auto ${
                isActive("/") 
                  ? "bg-pinkshadow rounded-xl text-pink pl-2 p-0 sm:p-4"
                  : "bg-transparent text-black pl-2 sm:pl-0 sm:hover:p-4 hover:rounded-xl hover:bg-pinkshadow hover:text-pinkungu"
              }`}
            >
              Dasboard
            </NavLink>
          </li>
          <li className="leading-10">
            <NavLink
              to="/doa"
              className={`block sm:inline w-full sm:w-auto ${
                isActive("/doa")
                  ? "bg-pinkshadow rounded-xl text-pink pl-2 p-0 sm:p-4"
                  : "bg-transparent text-black pl-2 sm:pl-0 sm:hover:p-4 hover:rounded-xl hover:bg-pinkshadow hover:text-pinkungu"
              }`}
            >
              Doa
            </NavLink>
          </li>
          <li>
            <div className="flex gap-4">
              <input
                className="w-[90%] sm:w-40 h-10 rounded-xl bg-gray-200 text-center focus:outline-none"
                type="text"
                placeholder="Search Surah, Doa"
              />
              <div className="w-10 h-10 rounded-full bg-black"></div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
