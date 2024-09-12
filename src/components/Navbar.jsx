import React, { useState } from "react";
import { Button } from "@mui/material";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoIosSearch } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { RxCrossCircled } from "react-icons/rx";

const Navbar = ({handleDrawerToggle,isDrawerOpen}) => {
  const [value, setValue] = useState("");
  const handleSearchChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className="w-full p-4 bg-white flex flex-row items-center justify-between">
        <div className="flex flex-row items-center space-x-3 xl:px-28 lg:px-24 px-2 lg:w-[40%] xl:w-[40%] w-[20%]">
          <img src="/indmoney-weblogo.avif" alt="" className="w-12 h-12" />
          <div className="hidden lg:flex xl:flex flex-row space-x-2 rounded-3xl bg-[#f5f5f8] p-2 px-4 border-2 border-gray-200 w-full items-center">
            <IoIosSearch className="text-2xl" />
            <input
              type="text"
              value={value}
              onChange={handleSearchChange}
              placeholder="Search here"
              className="bg-transparent text-black border-none outline-none appearance-none text-base w-full"
            />
            {value.length > 0 && (
              <RxCrossCircled
                className="text-gray-500 text-2xl cursor-pointer"
                onClick={() => setValue("")}
              />
            )}
          </div>
        </div>
        <div className="flex flex-row space-x-4 items-center lg:px-20 xl:px-20 px-2">
          <Button
            variant="outlined"
            color="success"
            sx={{ borderRadius: "20px" }}
          >
            Log In
          </Button>
          <TfiHeadphoneAlt className="text-xl" />
          <IoIosSearch className="text-2xl" />
          {isDrawerOpen?(
            <RxCross2 className="text-2xl cursor-pointer" onClick={handleDrawerToggle(false)}/>
          ):(
            <HiMenuAlt3 className="text-2xl cursor-pointer" onClick={handleDrawerToggle(true)} />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
