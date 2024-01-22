import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-center py-5 flex flex-col gap-2">
      <h1 className="font-bold text-lg">
        <span className="text-yellow-400">Pathan</span> Jewelery
      </h1>
      <p className="text-sm text-slate-600">
        Copyright © 2024 Patahan Jewelery
      </p>
    </footer>
  );
}

export default Footer;
