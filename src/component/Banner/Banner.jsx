

const Banner = () => {


  return (
    <section className="w-full mt-13 bg-yellow-100 px-4 py-2">

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">

        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:ml-8 space-y-4">

          <h1 className="tracking-tight text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-500 uppercase">
            Big Sales
          </h1>

          <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-400">
            Up to 40% OFF - Just In Limited Time Only!
          </h2>

          {/* Countdown */}
          <div className="flex gap-3 mt-4 ">
            {["00", "00", "00"].map((time, index) => (
              <span
                key={index}
                className="px-3 py-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500 bg-slate-700 rounded">
                {time}
              </span>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="h-[300px] w-full md:w-1/2 lg:w-2/5">
          <img
            src="/images/2-girl-shopping-bags-hands.png"
            alt="Girl holding shopping bags"
            className="w-full h-[310px] object-cover"
          />
        </div>
      </div>

    </section>
  );
};

export default Banner;
