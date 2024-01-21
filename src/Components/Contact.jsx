function Contact() {
  return (
    <section>
      <div className="max-w-7xl mx-auto h-96 p-4">
        <h2 className="font-semibold border-r-4 border-yellow-500 text-right text-3xl md:text-4xl m-6 pr-3 py-2">
          ارتباط با ما
        </h2>

        <div className="flex flex-col mt-20 gap-2 text-center md:text-2xl">
          <p className="text-slate-600">
            example@gmail.com{" "}
            <span className="font-bold text-slate-800">: ایمیل</span>
          </p>
          <p className="text-slate-600">
            ۰۰۹۳۷۰۰۰۰۰۰{" "}
            <span className="font-bold text-slate-800">: واتسپ</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
