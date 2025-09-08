export function Card() {
  return (
    <div
      className="group pl-17 pr-[180px] pt-20 rounded-3xl bg-linear-to-r
     from-[#DED1C1] via-[#E6DED5] to-[#f4efe9] text-[#7F5528]
      shadow-xs flex flex-row flex-wrap lg:flex-nowrap justify-center lg:gap-40"
    >
      <div className="leading-[0.8] lg:block flex flex-row items-center">
        <h1 className="text-[130px] font-bold">UX</h1>
        <h3 className="text-[80px] font-medium">Case Study</h3>
      </div>

      <div className="flex flex-row relative">
        <img
          className="absolute top-24 right-5/9
         transition-transform duration-1000 group-hover:rotate-2"
          src="iPad2.png"
          alt=""
        />
        <img className="" src="/Macbook.png" alt="" />
        <img
          className="left-10/12 -top-7 absolute h-[180px]
        transition-transform delay-75 duration-2000 group-hover:-rotate-6"
          src="/iPad.png"
          alt=""
        />
      </div>
    </div>
  );
}
