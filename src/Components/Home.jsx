import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="main-section">
      <section className="max-w-7xl mx-auto h-screen flex flex-col justify-center items-center px-6">
        <h1 className="text-3xl md:text-7xl text-white">
          Welcome to <span className="text-yellow-400">Pathan</span> Jewelery
        </h1>
        <p className="text-white font-light max-w-2xl md:text-center md:text-xl mt-6">
          Find the best jewelery for you and your family. We have a wide range
          of rings, necklaces, earrings, bracelets and more.
        </p>
        <Link
          to="/rings"
          className="transition text-white bg-yellow-500 hover:bg-yellow-400 py-2 px-4 rounded-lg mt-10"
        >
          Shop Now
        </Link>
      </section>
    </main>
  );
}

export default Home;
