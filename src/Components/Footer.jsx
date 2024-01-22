import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-200">
      <div className="max-w-7xl h-20 flex flex-col justify-center items-center mx-auto px-4">
        <div className="flex flex-col justify-center items-center gap-2 bg-slate-200 mx-auto px-4">
          <h1 className="font-bold text-lg">
            <span className="text-yellow-400">Golden</span> Jewelery
          </h1>
          {/* <div className="w-[1px] h-6 bg-slate-400"></div> */}
          <div className="flex gap-5 items-center text-sm text-slate-500 font-medium">
            <Link to="/" className="transition hover:text-black">
              Home
            </Link>
            <Link to="/rings" className="transition hover:text-black">
              Rings
            </Link>
            <Link to="/contact" className="transition hover:text-black">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
