function Ring() {
  return (
    <div className="w-full md:w-72 relative flex md:flex-col-reverse gap-5 justify-between items-center hover:shadow-xl transition rounded-lg border border-slate-300 pl-4 md:pl-0 md:py-5">
      <span className="absolute top-0 left-0 p-1 md:p-2 rounded-md bg-yellow-400 font-medium">
        کود: ۱۵۲
      </span>
      <div className="text-center">
        <h3 className="text-sm mt-5 md:mt-1 sm:text-lg font-medium">
          انگشتر الماس مدل ۲۳۶۴
        </h3>
        <div className="flex mt-2 md:mt-0 gap-3 items-center justify-center">
          <del className="text-sm sm:text-lg text-red-400">۱۹۰۰۰ افغانی</del>
          <p className="text-sm sm:text-lg text-slate-700">۱۲۰۰۰ افغانی</p>
        </div>
      </div>
      <img
        src="https://kinclimg3.bluestone.com/f_jpg,c_scale,w_828,q_80,b_rgb:f0f0f0/giproduct/BIDG0319R180_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-66194.png"
        className="w-24 md:w-64 md:rounded-md md:h-72 h-32 object-cover"
        alt="Product"
      />
    </div>
  );
}

export default Ring;
