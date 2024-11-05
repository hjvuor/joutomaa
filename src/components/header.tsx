'use client'

import Link from "next/link";
import { useState } from "react";
import { Rubik_Glitch } from "next/font/google";

const rubik = Rubik_Glitch({
  weight: ["400"],
  subsets: ["latin"]
})

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false)
  }
    return (
        <header className="sticky top-0 left-0 container mx-auto shadow-md border-b border-white z-50">
          {/*header content container*/}
          <div className="max-w-screen-2xl flex justify-between items-center text-green-600 p-4">
          <div className={`text-2xl font-black italic ${rubik.className}`}>
            <Link href="/">JOUTOMAA</Link>
          </div>
          {/* Desktop */}
          <nav className="hidden xl:flex space-x-4">
            <Link href="/" className="hover:bg-gray-700 px-3 py-2 rounded-md">etusivulle</Link>
            <Link href="/feed" className="hover:bg-gray-700 px-3 py-2 rounded-md">fiidi</Link>
            <Link href="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md">inffot</Link>
          </nav>
          {/* Mobile */}
          <div className="xl:hidden">
          <button onClick={toggleMenu} className="focus:outline-none z-50">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="bg-black fixed flex right-2 top-20 flex-col z-30 px-3 text-xl">
              <Link href="/" className="hover:bg-gray-700 px-3 py-2 border-b border-green-600">etusivulle</Link>
              <Link onClick={closeMenu} href="/feed" className="px-3 py-2 border-b border-green-600">fiidi</Link>
              <Link onClick={closeMenu} href="/about" className="px-3 pr-32 py-2">inffot</Link>
            </div>
          )}
          </div>
          </div>
        </header>
      );
};
