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
      <div className="marquee-track flex w-max cursor-default">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex shrink-0 items-center font-montserrat text-[14px] font-extrabold uppercase tracking-[2px] text-[#291231]"
          >
            <span className="px-7">{item}</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/dots-marquees.webp" alt="" width={11} height={11} className="h-[11px] w-[11px] shrink-0 object-contain" draggable={false} />
          </span>
        ))}
      </div>
    </div>
  );
}