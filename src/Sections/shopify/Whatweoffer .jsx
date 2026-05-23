// src/sections/WhatWeOffer.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    emoji: "🛍️",
    title: "Shopify Store Setup",
    desc: "High-converting stores designed for sales",
    color: "#96bf48",
    bg: "rgba(150,191,72,0.08)",
    border: "rgba(150,191,72,0.2)",
  },
  {
    emoji: "🔻",
    title: "Sales Funnel Design",
    desc: "Funnels that turn visitors into paying customers",
    color: "#F5C518",
    bg: "rgba(245,197,24,0.07)",
    border: "rgba(245,197,24,0.2)",
  },
  {
    emoji: "〽️",
    title: "Performance Marketing",
    desc: "Ads that bring qualified traffic and maximize ROAS",
    color: "#0082fb",
    bg: "rgba(0,130,251,0.07)",
    border: "rgba(0,130,251,0.2)",
  },
  {
    emoji: "📸",
    title: "Social Media Marketing",
    desc: "Build brand, engage audience and drive sales",
    color: "#e1306c",
    bg: "rgba(225,48,108,0.07)",
    border: "rgba(225,48,108,0.2)",
  },
];

export default function WhatWeOffer() {
  const sectionRef = useRef(null);
  const leftRef    = useRef(null);
  const cardsRef   = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current, { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } });
      gsap.fromTo(cardsRef.current.filter(Boolean), { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4" style={{ background: "#050505" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-start">

          {/* LEFT */}
          <div ref={leftRef} className="lg:max-w-[300px]">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-6 rounded-full border border-green-500/40 text-green-400 text-xs flex items-center justify-center font-bold">1</span>
              <span className="text-green-400 text-[10px] font-bold tracking-[0.18em] uppercase">What is our product or service?</span>
            </div>
            <h2 className="text-white font-extrabold text-2xl sm:text-3xl leading-tight mb-4">
              Complete eCommerce Growth System Under One Roof
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              We provide end-to-end eCommerce solutions that help you launch, grow and scale your Shopify brand profitably.
            </p>
          </div>

          {/* RIGHT — 4 service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((s, i) => (
              <div key={s.title}
                ref={(el) => (cardsRef.current[i] = el)}
                className="flex flex-col p-5 rounded-xl border transition-all duration-300 hover:-translate-y-1 group cursor-default"
                style={{ background: "rgba(8,15,10,0.8)", border: `1px solid rgba(255,255,255,0.07)`, boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = s.border; e.currentTarget.style.boxShadow = `0 8px 32px ${s.bg}`; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)"; }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: s.bg, border: `1px solid ${s.border}` }}>
                  {s.emoji}
                </div>
                <h3 className="text-white font-bold text-sm leading-snug mb-2">{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed flex-1">{s.desc}</p>
                <button className="mt-4 text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all"
                  style={{ color: s.color }}>
                  Learn More
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}