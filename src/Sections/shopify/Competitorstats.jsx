// src/sections/CompetitorStats.jsx
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: 70,  suffix: "%", label: "of eCommerce brands invest in paid ads",            color: "#4ade80" },
  { value: 64,  suffix: "%", label: "of brands use funnels to increase sales",            color: "#4ade80" },
  { value: 80,  suffix: "%", label: "of customers prefer brands with strong social presence", color: "#4ade80" },
  { value: 3.5, suffix: "x", label: "more revenue for stores that optimize their customer journey", color: "#F5C518", decimals: 1 },
];

function AnimatedNumber({ to, suffix, decimals = 0, color, active }) {
  const ref = useRef(null);
  const ran = useRef(false);

  useEffect(() => {
    if (!active || ran.current || !ref.current) return;
    ran.current = true;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: to,
      duration: 1.8,
      ease: "power2.out",
      onUpdate() {
        if (ref.current) ref.current.textContent = obj.val.toFixed(decimals) + suffix;
      },
    });
  }, [active, to, suffix, decimals]);

  return (
    <span ref={ref} style={{ color }} className="font-extrabold text-4xl sm:text-5xl leading-none">
      0{suffix}
    </span>
  );
}

export default function CompetitorStats() {
  const sectionRef = useRef(null);
  const leftRef    = useRef(null);
  const cardsRef   = useRef([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current, { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } });
      gsap.fromTo(cardsRef.current.filter(Boolean), { y: 40, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.65, stagger: 0.1, ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current, start: "top 75%",
            onEnter: () => setActive(true),
          } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4" style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={leftRef} className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-6 rounded-full border border-yellow-500/40 text-yellow-400 text-xs flex items-center justify-center font-bold">3</span>
            <span className="text-yellow-400 text-[10px] font-bold tracking-[0.18em] uppercase">Is your competitor doing this?</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end">
            <h2 className="text-white font-extrabold text-2xl sm:text-3xl leading-tight">
              Your Competitors Are Already Scaling With These Strategies
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              They are running high-converting ads, optimizing funnels and building strong brands. If you're not doing this, you're leaving money on the table.
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <div key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="flex flex-col items-center text-center p-6 rounded-xl"
              style={{ background: "rgba(8,15,10,0.8)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="mb-3">
                <svg viewBox="0 0 32 32" className="w-8 h-8 mx-auto mb-3 text-gray-500" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  {i === 0 && <><rect x="2" y="20" width="6" height="10" rx="1"/><rect x="13" y="12" width="6" height="18" rx="1"/><rect x="24" y="4" width="6" height="26" rx="1"/></>}
                  {i === 1 && <><path d="M16 2l-12 8h24l-12-8z"/><path d="M9 10v16"/><path d="M23 10v16"/><path d="M4 26h24"/></>}
                  {i === 2 && <><path d="M16 2l14 7-14 7L2 9l14-7z"/><path d="M2 16l14 7 14-7"/><path d="M2 23l14 7 14-7"/></>}
                  {i === 3 && <><path d="M4 28l6-8 6 4 6-10 6-8"/><circle cx="28" cy="6" r="2"/></>}
                </svg>
              </div>
              <AnimatedNumber to={s.value} suffix={s.suffix} color={s.color} active={active} decimals={s.decimals || 0} />
              <p className="text-gray-400 text-xs leading-relaxed mt-3">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}