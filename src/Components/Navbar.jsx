import { useState } from "react";
import { Link } from "react-router-dom";

import { FaBagShopping, FaX, FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto h-20 px-5 flex justify-between items-center">
        <h1 className="font-bold text-lg">
          <span className="text-yellow-400">Golden</span> Jewelery
        </h1>

        <div className="hidden sm:flex gap-5 items-center text-sm text-gray-600 font-semibold uppercase">
          <Link to="/" className="transition hover:text-black">
            Home
          </Link>
          <Link to="/rings" className="transition hover:text-black">
            Rings
          </Link>
          <Link
            to="/cart"
            className="transition hover:text-black flex items-center gap-2"
          >
            Cart <FaBagShopping />
          </Link>
          <Link
            to="/contact"
            className="transition text-white bg-yellow-500 hover:bg-yellow-400 py-2 px-4 rounded-lg"
          >
            Contact
          </Link>
        </div>

        {mobileMenu && (
          <div className="absolute transition-all flex flex-col gap-10 text-2xl font-semibold justify-center items-center top-0 left-0 right-0 bottom-0 bg-white z-20 sm:hidden">
            <Link
              to="/"
              className="transition hover:text-black"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              Home
            </Link>
            <Link
              to="/rings"
              className="transition hover:text-black"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              Rings
            </Link>
            <Link
              to="/cart"
              className="transition hover:text-black flex items-center gap-2"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              Cart
            </Link>
            <Link
              to="/contact"
              className="transition text-white bg-yellow-500 hover:bg-yellow-400 py-2 px-4 rounded-lg"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              Contact
            </Link>
          </div>
        )}

        <div className="flex items-center gap-4 sm:hidden">
          <Link to="/cart">
            <FaBagShopping className="text-xl" />
          </Link>
          <button className="z-30" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? (
              <FaXmark className="border rounded-full w-10 h-10 p-2 border-black" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
