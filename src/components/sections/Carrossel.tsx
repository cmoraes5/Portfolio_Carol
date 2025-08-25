export function Carrossel() {
  const texto =
    "INTERFACE DESIGN – UX DESIGN – PRODUCT DESIGN – UX RESEARCH – ";

  return (
    <div className="w-full overflow-hidden bg-[#EC2B58] text-white flex items-center">
      <div className="animate-marquee whitespace-nowrap flex font-bold text-3xl p-3">
        {[...Array(6)].map((_, i) => (
          <span key={i}>{texto}</span>
        ))}
      </div>
    </div>
  );
}
