import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto h-20 px-5 flex justify-between items-center">
        <h1 className="font-bold">
          جواهر <span className="text-yellow-400">گلدن</span>
        </h1>

        <div className="flex gap-5 items-center text-sm text-gray-500 font-medium">
          <Link to="/" className="transition hover:text-black">
            خانه
          </Link>
          <Link to="/" className="transition hover:text-black">
            انگشترها
          </Link>
          <Link
            to="/"
            className="transition text-white bg-yellow-500 hover:bg-yellow-400 py-2 px-4 rounded-lg"
          >
            ارتباط با ما
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
