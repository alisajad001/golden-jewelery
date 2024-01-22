import { useState } from "react";
import { Link } from "react-router-dom";

import { FaBagShopping } from "react-icons/fa6";
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

        <div className="flex items-center gap-4 sm:hidden">
          <button>
            <FaBars className="text-xl" />
          </button>
          <Link to="/cart">
            <FaBagShopping className="text-xl" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
