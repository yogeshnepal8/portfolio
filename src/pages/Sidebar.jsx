import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosPeople } from "react-icons/io";
import { HiClipboardDocument } from "react-icons/hi2";
import {
  GrContact,
  GrLinkedin,
  GrInstagram,
  GrFacebookOption,
} from "react-icons/gr";
import { AiOutlineCalculator } from "react-icons/ai";
import { LiaFileContractSolid } from "react-icons/lia";
import { MdOutlineConstruction } from "react-icons/md";

function Sidebar() {
  return (
    <div className="w-24 flex flex-col flex-none lg:w-96 shadow-lg 2xl:py-6 fixed h-full z-10 lg:py-6">
      <div className="basis-1 text-center lg:text-center text-3xl font-bold flex justify-center items-center h-24 ">
        <Link to="/about">
          Y<span className="text-blue-800 text-3xl">OG</span>ESH
        </Link>
      </div>
      <div className="">
        <nav>
          <ul className="text-center px-6 mt-2 2xl:space-y-3 font-medium drop-shadow-md lg:mt-4 2xl:mt-10  ">
            <li className="nav-bar">
              <NavLink to="/about">
                <IoIosPeople className="inline-block mr-2 text-3xl" />
                <span className="hidden sm:inline">About</span>
              </NavLink>
            </li>
            <li className="nav-bar">
              <NavLink to="/portfolio">
                <HiClipboardDocument className="inline-block mr-2 text-3xl" />
                <span className="hidden sm:inline">Portfolio</span>
              </NavLink>
            </li>
            <li className="nav-bar">
              <NavLink to="/contact">
                <GrContact className="inline-block mr-2 text-3xl" />
                <span className="hidden sm:inline">Contact</span>
              </NavLink>
            </li>
            <li className="nav-bar">
              <NavLink to="/estimation">
                <AiOutlineCalculator className="inline-block mr-2 text-3xl" />
                <span className="hidden sm:inline">Estimation</span>
              </NavLink>
            </li>
            <li className="nav-bar">
              <NavLink to="/building-codes">
                <LiaFileContractSolid className="inline-block mr-2 text-3xl" />
                <span className="hidden sm:inline">Codes</span>
              </NavLink>
            </li>
            <li className="nav-bar">
              <NavLink to="/structural-design">
                <MdOutlineConstruction className="inline-block mr-2 text-3xl" />
                <span className="hidden sm:inline">Design</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="text-3xl flex items-center lg:justify-center py-3 flex-col lg:flex-row lg:space-x-6 mt-4 border-y-2">
        <Link
          to="https://www.linkedin.com/in/yogeshnepal8/"
          className="nav-bar"
          target="_blank"
        >
          <GrLinkedin />
        </Link>
        <Link
          to="https://www.facebook.com/ynepal11"
          className="nav-bar"
          target="_blank"
        >
          <GrFacebookOption />
        </Link>
        <Link
          target="_blank"
          className="nav-bar"
          to="https://www.instagram.com/yogessnepal/"
        >
          <GrInstagram />
        </Link>
      </div>
      <div className="hidden lg:block flex-col text-center font-light italic text-[13px] py-4 space-y-2 border-b-2">
        <p>Email: yogeshnepal8@gmail.com</p>
        <p>Contact: +977-9808477776</p>
      </div>
      <p className="hidden lg:block text-center mt-4">
        ©yogeshnepal.com, {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default Sidebar;
