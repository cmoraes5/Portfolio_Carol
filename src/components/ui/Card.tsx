export function Card() {
  return (
    <div
      className="
        group flex flex-col lg:flex-row items-center justify-between
        bg-gradient-to-r from-[#DED1C1] via-[#E6DED5] to-[#f4efe9]
        text-[#7F5528] shadow-xs rounded-3xl
        p-6 sm:p-10 lg:pl-16 lg:pr-32 lg:pt-20
        w-full max-w-[1300px] mx-auto
        relative overflow-hidden
      "
    >
      {/* Texto */}
      <div className="flex flex-col lg:leading-[0.8] items-center lg:items-start text-center lg:text-left">
        <h1 className="text-[64px] sm:text-[90px] lg:text-[130px] font-bold leading-[0.9]">
          UX
        </h1>
        <h3 className="text-[36px] sm:text-[56px] lg:text-[80px] font-medium">
          Case Study
        </h3>
      </div>

      {/* Imagens */}
      <div className="relative flex justify-center items-center mt-10 lg:mt-0 w-full lg:w-auto">
        {/* Macbook */}
        <img
          src="/Macbook.png"
          alt=""
          className="w-[220px] sm:w-[320px] lg:w-[500px] h-auto z-10"
        />

        {/* iPad atrás */}
        <img
          src="/iPad2.png"
          alt=""
          className="absolute w-[140px] sm:w-[200px] lg:w-[300px] top-10 -left-6 sm:-left-12
          transition-transform duration-700 group-hover:rotate-2"
        />

        {/* iPad na frente */}
        <img
          src="/iPad.png"
          alt=""
          className="absolute w-[130px] sm:w-[190px] lg:w-[280px] -top-6 right-0
          transition-transform duration-700 group-hover:-rotate-6"
        />
      </div>
    </div>
  );
}
