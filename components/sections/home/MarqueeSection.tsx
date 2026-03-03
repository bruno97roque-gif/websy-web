const items = [
  "Branding", "Diseño Web", "Tiendas Virtuales",
  "Google Ads", "SEO", "E-Commerce",
  "Identidad Visual", "Performance Web", "Logos", 
  "Manual de Marca", "UI/UX",
];
const doubled = [...items, ...items]; // seamless loop

export default function MarqueeSection() {
  return (
    <div className="overflow-hidden bg-[#F18C1B] py-[15px]" aria-hidden>
      {/* Añadimos 'flex' y 'w-max' aquí */}
      <div className="marquee-track flex w-max hover:cursor-default">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex shrink-0 items-center gap-[22px] px-7 font-montserrat text-[14px] font-extrabold uppercase tracking-[2px] text-[#291231]"
          >
            {item}
            <span className="h-[5px] w-[5px] rounded-full bg-[#291231] opacity-75" />
          </span>
        ))}
      </div>
    </div>
  );
}