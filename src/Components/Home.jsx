import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="max-w-7xl mx-auto h-[80vh] flex flex-col justify-center items-center px-6">
        <h1 className="text-3xl md:text-5xl font-bold">
          جواهر گلدن دنیایی از <span className="text-yellow-400">جواهرات</span>{" "}
        </h1>
        <p className="text-slate-600 md:text-xl mt-4">
          بهترین جواهرات را به بهترین قیمت از ما دریافت نمایید
        </p>
        <Link
          to="/rings"
          className="transition text-white bg-yellow-500 hover:bg-yellow-400 py-2 px-4 rounded-lg mt-10"
        >
          مشاهده جواهرات
        </Link>
      </section>
    </main>
  );
}

export default Home;
