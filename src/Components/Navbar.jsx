import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto h-20 px-5 flex justify-between items-center">
        <h1 className="font-bold text-lg">
          <span className="text-yellow-400">Golden</span> Jewelery
        </h1>

        <div className="flex gap-5 items-center text-sm text-gray-600 font-semibold uppercase">
          <Link to="/" className="transition hover:text-black">
            Home
          </Link>
          <Link to="/rings" className="transition hover:text-black">
            Rings
          </Link>
          <Link
            to="/contact"
            className="transition text-white bg-yellow-500 hover:bg-yellow-400 py-2 px-4 rounded-lg"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
