function Contact() {
  return (
    <section>
      <div className="max-w-7xl mx-auto h-96 p-4">
        <h2 className="font-semibold border-r-4 border-yellow-500 text-right text-3xl md:text-4xl m-6 pr-3 py-2">
          Contact
        </h2>

        <div className="flex flex-col mt-20 gap-5 text-center md:text-2xl">
          <p className="text-slate-600">
            <span className="font-bold text-slate-800">Email: </span>
            example@gmail.com{" "}
          </p>
          <p className="text-slate-600">
            <span className="font-bold text-slate-800">Whatsapp: </span>
            +93 700 0000{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
