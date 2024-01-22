import Ring from "./Ring";

function Rings() {
  return (
    <section>
      <div className="max-w-7xl flex flex-col p-4 mx-auto mb-20">
        <h2 className="font-semibold border-r-4 border-yellow-500 text-right text-3xl md:text-4xl m-6 pr-3 py-2">
          Rings
        </h2>

        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 mt-10">
          <Ring />
          <Ring />
          <Ring />
          <Ring />
        </div>
      </div>
    </section>
  );
}

export default Rings;
