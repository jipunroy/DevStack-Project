import { useState } from "react";

import logo from "../../assets/logo-text.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <nav className="mx-auto max-w-7xl">

        {/* Desktop Navbar */}
        <div className="hidden h-17 items-center justify-between px-5 md:flex">

          {/* Logo */}
          <a href="#">
            <img
              src={logo}
              alt="Dev Stack"
              className="h-8 w-auto"
            />
          </a>

          {/* Navigation */}
          <div className="flex items-center gap-7">
            <a
              href="#"
              className="text-sm font-medium text-pink-500"
            >
              Home
            </a>

            <a
              href="#technologies"
              className="text-sm font-medium text-gray-600 hover:text-pink-500"
            >
              Technologies
            </a>

            <a
              href="#projects"
              className="text-sm font-medium text-gray-600 hover:text-pink-500"
            >
              Projects
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-gray-600 hover:text-pink-500"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-gray-600 hover:text-pink-500"
            >
              Contact
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="text-sm font-medium text-gray-700 hover:text-pink-500"
            >
              Sign In
            </button>

            <button
              type="button"
              className="rounded-full bg-[#D91B7E] px-5 py-2 text-sm font-medium text-white"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="relative flex h-16.5 items-center justify-between px-5 md:hidden">

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-9 w-9 flex-col justify-center gap-1.25"
            aria-label="Toggle menu"
          >
            <span className="block h-0.5 w-7 bg-gray-500" />
            <span className="block h-0.5 w-7 bg-gray-500" />
            <span className="block h-0.5 w-7 bg-gray-500" />
          </button>

          {/* Center Logo */}
          <a
            href="#"
            className="absolute left-1/2 -translate-x-1/2"
          >
            <img
              src={logo}
              alt="Dev Stack"
              className="h-9 w-auto"
            />
          </a>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="text-xs font-semibold text-gray-700"
            >
              Sign In
            </button>

            <button
              type="button"
              className="rounded-full bg-[#D91B7E] px-4 py-2 text-xs font-semibold text-white"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-gray-100 px-5 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-pink-500"
              >
                Home
              </a>

              <a
                href="#technologies"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm text-gray-600"
              >
                Technologies
              </a>

              <a
                href="#projects"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm text-gray-600"
              >
                Projects
              </a>

              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm text-gray-600"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm text-gray-600"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;