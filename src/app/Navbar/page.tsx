"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="container mx-auto p-8 px-4 md:px-80 flex justify-between items-center">
      <div className="mr-4">
        <Link href="/">
          <h1 className="font-bold text-2xl text-[#00FF0A] hover:text-4xl">
            @glendev
          </h1>
        </Link>
      </div>
      <div className="md:hidden">
        {/* This div will be displayed only on mobile view */}
        <button className="text-white focus:outline-none" onClick={toggleMenu}>
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 7h16v2H4v-2zm0 7h16v2H4v-2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            )}
          </svg>
        </button>
        {isMenuOpen && (
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link href="/About" className="text-white hover:text-[#66ff00]">
                About
              </Link>
            </li>
            <li>
              <a href="#Projects" className="text-white hover:text-[#66ff00]">
                Projects
              </a>
            </li>
            <li>
              <a href="#Contact" className="text-white hover:text-[#66ff00]">
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
      <div className="hidden md:flex flex-col justify-between">
        {/* This div will be displayed on medium and larger screens */}
        <ul className="flex space-x-4 p-4">
          <li>
            <Link href="/About" className="text-white hover:text-[#66ff00]">
              About
            </Link>
          </li>
          <li>
            <a href="#Projects" className="text-white hover:text-[#66ff00]">
              Projects
            </a>
          </li>
          <li>
            <a href="#Contact" className="text-white hover:text-[#66ff00]">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
