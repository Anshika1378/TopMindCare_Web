import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons for hamburger
import FirstOne from "../Main/FirstOne";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
        {/* Left side */}
        <div className="flex items-center">
          <img
            className="w-8 h-8 rounded"
            src="https://i.pinimg.com/736x/a6/ff/f9/a6fff963d32fac5eb0385be92089a654.jpg"
            alt="Logo"
          />
          <h1 className="ml-3 text-purple-600 font-semibold text-2xl">
            Topmind Care
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a className="text-purple-600 font-semibold text-lg" href="">
            Why
          </a>
          <a className="text-purple-600 font-semibold text-lg" href="">
            Programs
          </a>
          <a className="text-purple-600 font-semibold text-lg" href="">
            Feature
          </a>
          <a className="text-purple-600 font-semibold text-lg" href="">
            For Parents
          </a>
          <button className="px-4 py-2 text-lg text-white bg-purple-600 hover:bg-purple-800 rounded-2xl">
            Start Free
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col  gap-4 py-4 md:hidden">
            <a className="text-purple-600 font-semibold text-lg" href="">
              Why
            </a>
            <a className="text-purple-600 font-semibold text-lg" href="">
              Programs
            </a>
            <a className="text-purple-600 font-semibold text-lg" href="">
              Feature
            </a>
            <a className="text-purple-600 font-semibold text-lg" href="">
              For Parents
            </a>
            <button className="px-4 py-2 text-lg text-white bg-purple-600 hover:bg-purple-800 rounded-2xl">
              Start Free
            </button>
          </div>
        )}
      </nav>
      <FirstOne />
    </>
  );
}
