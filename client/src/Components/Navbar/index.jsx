import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";

const MobileNav = () => {
    return (
        <div className="flex w-full items-center justify-between lg:hidden">
            <a href="/">
                <div className="w-24 h-auto ml-4">
                    <img
                        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                        alt="logo"
                        className="w-full h-full"
                    />
                </div>
            </a>

            <div className="flex items-center gap-3">
                <button className="bg-zomato-400 text-white font-semibold text-sm px-3 py-2 rounded-full">
                    Use App
                </button>
                <span className="border p-2 border-gray-300 text-zomato-400 rounded-full">
                    <FaUserAlt />
                </span>
            </div>
        </div>
    );
};

const LargeNav = () => {
    return (
        <>
            <div className="hidden lg:inline container px-16 mx-auto ">
                <div className="hidden w-full items-center gap-4 lg:flex">
                    {/* logo  */}
                    <a href="/">
                        <div className="w-32 h-auto ml-4">
                            <img
                                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                                alt="logo"
                                className="w-full h-full"
                            />
                        </div>
                    </a>

                    {/* location & search  */}
                    <div className=" w-3/4 flex gap-3 shadow-md items-center bg-white w-full p-3 border border-gray-200 rounded">
                        <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-1">
                            <span className="text-zomato-400">
                                <IoLocation />
                            </span>
                            <input
                                type="text"
                                placeholder="Gwalior"
                                className="focus:outline-none"
                            />
                            <IoMdArrowDropdown />
                        </div>
                        <div className="flex w-full items-center gap-3">
                            <RiSearchLine />
                            <input
                                type="search"
                                placeholder="Search for restaurant, cuisine or a dish"
                                className="w-full focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* buttons  */}
                    <div className="ml-28 flex gap-2">
                        <button className="text-lg text-gray-500 hover:text-black">
                            Login
                        </button>
                        <button className="text-lg text-gray-500 hover:text-black">
                            Signup
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

const Navbar = () => {
    return (
        <>
            <nav className="py-3 px-2 flex items-center bg-white shadow-md lg:shadow-none">
                <MobileNav />
                <LargeNav />
            </nav>
        </>
    );
};

export default Navbar;