import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="max-w-7xl pb-3 pt-10 flex flex-col justify-center items-center gap-7 bg-slate-200 mx-auto px-4">
        <div className="flex justify-center items-center gap-7 bg-slate-200 mx-auto px-4">
          <h2 className="font-bold text-lg">
            جواهر <span className="text-yellow-400">گلدن</span>
          </h2>
          <div className="w-[1px] h-6 bg-slate-400"></div>
          <div className="flex gap-5 items-center text-sm text-slate-500 font-medium">
            <Link href="/" className="transition hover:text-black">
              خانه
            </Link>
            <Link href="/" className="transition hover:text-black">
              جواهرات
            </Link>
            <Link href="/" className="transition hover:text-black">
              ارتباط با ما
            </Link>
          </div>
        </div>
        <p className="text-sm text-slate-500 font-medium">
          طراحی وبسایت توسط{" "}
          <a
            href="https://alisajadahmadi.netlify.app/"
            target="_blank"
            className="text-blue-500"
          >
            علی سجاد احمدی
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
