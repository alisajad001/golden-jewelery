import Ring from "./Ring";

function Rings() {
  return (
    <section>
      <div className="max-w-7xl flex flex-col p-4 mx-auto mb-20">
        <h2 className="font-semibold border-l-4 border-yellow-400 text-3xl md:text-4xl m-3 pl-3">
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
