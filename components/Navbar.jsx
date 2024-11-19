"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({color = "#fff",btnBg = "#ffff",btnColor = "#0077B5",hamburgerColor = "#fff",}) => {
    const [showNav, setShowNav] = useState(false);

    const sidebarRef = useRef(null);

    // Close the sidebar if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setShowNav(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            {/* Navbar */}
            <div className="py-5 px-10 flex justify-between items-center max-h-fit">
                <div>
                    <h1 className={`text-[1.5rem] text-[${color}] font-bold`}>Jones.com</h1>
                </div>

                {/* Links for Desktop */}
                <div className="hidden md:flex items-center gap-x-6">
                    <Link href={"/"} className={`text-[${color}] cursor-pointer`}>
                        Home
                    </Link>
                    <Link href={"/buy"} className={`text-[${color}] cursor-pointer`}>
                        Buy
                    </Link>
                    <Link href={"/sell"} className={`text-[${color}] cursor-pointer`}>
                        Sell
                    </Link>
                    <Link href={"/faq"} className={`text-[${color}] cursor-pointer`}>
                        FAQ
                    </Link>
                    <button
                        style={{ backgroundColor: btnBg }}
                        className={`text-[${btnColor}] w-[8rem] h-[2.3rem] rounded-md`}
                    >
                        Signup
                    </button>
                </div>

                {/* Hamburger Icon for Mobile */}
                <GiHamburgerMenu
                    onClick={() => setShowNav(!showNav)}
                    className={`md:hidden block text-[${hamburgerColor}] cursor-pointer`}
                />
            </div>

            {/* Overlay */}
            {showNav && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setShowNav(false)}
                ></div>
            )}

            {/* Sidebar */}
            <div
                ref={sidebarRef}
                className={`fixed top-0 left-0 z-50 w-[12rem] h-full bg-[#07132D] px-5 transition-transform duration-300 ${showNav ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <h1 className="text-center text-white py-10 font-bold text-[1.2rem]">
                    JONES.COM
                </h1>

                <Link href={"/"} className="text-[#fff] cursor-pointer block mb-2">
                    Home
                </Link>
                <Link href={"/buy"} className="text-[#fff] cursor-pointer block mb-2">
                    Buy
                </Link>
                <Link href={"/sell"} className="text-[#fff] cursor-pointer block mb-2">
                    Sell
                </Link>
                <Link href={"/faq"} className="text-[#fff] cursor-pointer block mb-4">
                    FAQ
                </Link>
                <button style={{ backgroundColor: "#0077B5" }} className={`button2 text-[${"#fff"}] w-full h-[2.3rem] rounded-md`}>Signup</button>
            </div>
        </>
    );
};

export default Navbar;
