const items = [
  "Branding", "Diseño Web", "Tiendas Virtuales",
  "Google Ads", "SEO", "E-Commerce",
  "Identidad Visual", "Performance Web",
];
const doubled = [...items, ...items]; // seamless loop

export default function MarqueeSection() {
  return (
    <div className="overflow-hidden bg-[#F18C1B] py-[15px]" aria-hidden>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex shrink-0 items-center gap-[22px] px-7 font-montserrat text-[12px] font-extrabold uppercase tracking-[2px] text-[#291231]"
          >
            {item}
            <span className="h-[5px] w-[5px] rounded-full bg-[#291231] opacity-35" />
          </span>
        ))}
      </div>
    </div>
  );
}
