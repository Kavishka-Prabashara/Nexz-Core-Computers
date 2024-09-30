import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiLaptop } from "react-icons/ci";
import { TfiMouse } from "react-icons/tfi";
import { FaRegKeyboard } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { BsMotherboard } from "react-icons/bs";
import { PiGraphicsCardBold } from "react-icons/pi";



import { FiMonitor, FiCpu, FiHardDrive, FiMenu, FiX } from 'react-icons/fi';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Hamburger Icon (visible on mobile) */}
            <div className="absolute top-30 left-4 md:hidden z-20">
                <button
                    onClick={toggleSidebar}
                    className="text-white focus:outline-none"
                >
                    {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
                </button>
            </div>

            {/* Sidebar */}
            <aside
                className={`bg-blue-900 w-64 p-4 shadow-lg fixed top-0 left-0 h-full z-50 transition-transform transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } md:translate-x-0 md:relative`}
            >
                {/* Close Button (inside sidebar) */}
                <div className="flex justify-end mb-4 md:hidden">
                    <button
                        onClick={toggleSidebar}
                        className="text-white focus:outline-none"
                    >
                        <FiX size={30} />
                    </button>
                </div>

                <ul className="space-y-4 text-center">
                    <li>
                        <Link
                            to="/laptop"
                            className="flex items-center text-white bg-blue-950 border border-white pb-2 block transition-all duration-300 rounded-lg hover:bg-blue-700 active:bg-blue-800 text-lg"
                        >
                            <CiLaptop className="mr-2"/> Laptop
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/pc"
                            className="flex items-center text-white bg-blue-950 border border-white pb-2 block transition-all duration-300 rounded-lg hover:bg-blue-700 active:bg-blue-800 text-lg"
                        >
                            <FaComputer className="mr-2"/> PC
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/monitor"
                            className="flex items-center text-white bg-blue-950 border border-white pb-2 block transition-all duration-300 rounded-lg hover:bg-blue-700 active:bg-blue-800 text-lg"
                        >
                            <FiMonitor className="mr-2"/> Monitor
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/mouse"
                            className="flex items-center text-white bg-blue-950 border border-white pb-2 block transition-all duration-300 rounded-lg hover:bg-blue-700 active:bg-blue-800 text-lg"
                        >
                            <TfiMouse className="mr-2"/> Mouse
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/keyboard"
                            className="flex items-center text-white bg-blue-950 border border-white pb-2 block transition-all duration-300 rounded-lg hover:bg-blue-700 active:bg-blue-800 text-lg"
                        >
                            <FaRegKeyboard className="mr-2"/>Keyboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/processor"
                            className="flex items-center text-white bg-blue-950 border border-white pb-2 block transition-all duration-300 rounded-lg hover:bg-blue-700 active:bg-blue-800 text-lg"
                        >
                            <FiCpu className="mr-2"/> Processor
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/graphiCard"
                            className="flex items-center text-white bg-blue-950 border border-white pb-2 block transition-all duration-300 rounded-lg hover:bg-blue-700 active:bg-blue-800 text-lg"
                        >
                            <PiGraphicsCardBold className="mr-2"/> Graphic Card
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/motherboard"
                            className="flex items-center text-white bg-blue-950 border border-white block transition-all duration-300 rounded-lg hover:bg-blue-700 active:bg-blue-800 text-lg"
                        >
                            <BsMotherboard className="mr-2"/> Motherboard
                        </Link>
                    </li>
                </ul>
            </aside>

            {/* Overlay (for mobile) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 md:hidden"
                    onClick={toggleSidebar}
                />
            )}
        </>
    );
};

export default SideBar;
