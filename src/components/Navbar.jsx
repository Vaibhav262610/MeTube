import React from "react";
import { CiSearch } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      <div className="flex fixed bg-[#0c0c0c] items-center  justify-center ml-4 p-1">
        <div className="flex items-center pt-1 w-[93rem] justify-between">
          <div className="flex items-center gap-4">
            <div>
              <IoIosMenu className="text-2xl cursor-pointer  text-gray-400" />
            </div>
            <div className="flex  items-center gap-1 cursor-pointer">
              <img
                src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png"
                height={38}
                width={38}
                alt="404"
              />
              <h1 className="nav-text font-medium text-xl text-white">
                MeTube
              </h1>
            </div>
          </div>
          <div>
            <div className="flex items-center  rounded-full ">
              <input
                type="text"
                className="py-2 outline-none px-8  input  text-gray-200"
                placeholder="Search"
              />
              <div className="px-6 cursor-pointer items-center search-icon py-2 flex">
                <CiSearch className=" text-white  text-2xl" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-8 items-center">
              <RiVideoAddLine className="text-gray-300 cursor-pointer text-xl" />
              <GoBell className="text-gray-300 cursor-pointer text-xl" />
              <MdAccountCircle className="text-gray-300 cursor-pointer text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
