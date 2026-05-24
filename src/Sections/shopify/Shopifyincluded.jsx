// src/components/shopify/ShopifyIncluded.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    title: "Store Setup",
    desc: "Professional store setup from scratch.",
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="10" width="24" height="18" rx="2" />
        <path d="M4 14h24" />
        <path d="M10 10V7a6 6 0 0112 0v3" />
        <rect x="12" y="18" width="8" height="6" rx="1" />
      </svg>
    ),
  },
  {
    title: "Theme Customization",
    desc: "Branded, mobile-friendly & conversion-focused.",
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="26" height="20" rx="2" />
        <path d="M3 12h26" />
        <rect x="7" y="16" width="8" height="6" rx="1" />
        <path d="M19 16h6M19 20h6" />
      </svg>
    ),
  },
  {
    title: "Product Upload",
    desc: "Optimized titles, descriptions & images.",
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 26 L7 10 L13 18 L18 12 L25 10 L28 26 Z" />
        <circle cx="10" cy="9" r="2.5" />
        <path d="M20 6v8M16 10h8" />
      </svg>
    ),
  },
  {
    title: "Apps Integration",
    desc: "Essential apps for sales and growth.",
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="4" />
        <path d="M16 4v4M16 24v4M4 16h4M24 16h4" />
        <path d="M7.76 7.76l2.83 2.83M21.41 21.41l2.83 2.83M7.76 24.24l2.83-2.83M21.41 10.59l2.83-2.83" />
      </svg>
    ),
  },
];

export default function ShopifyIncluded() {
  const sectionRef = useRef(null);
  const titleRef   = useRef(null);
  const cardsRef   = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%" } }
      );
      gsap.fromTo(cardsRef.current.filter(Boolean),
        { y: 40, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.65, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 76%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleEnter = (e) => {
    gsap.to(e.currentTarget, {
      y: -6, scale: 1.02, duration: 0.3, ease: "power2.out",
      boxShadow: "0 12px 40px rgba(74,222,128,0.14), 0 0 0 1px rgba(74,222,128,0.22)",
    });
  };
  const handleLeave = (e) => {
    gsap.to(e.currentTarget, {
      y: 0, scale: 1, duration: 0.3, ease: "power2.in",
      boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
    });
  };

  return (
    <section ref={sectionRef} className="py-14 px-4 section-divider" style={{ background: "#071510" }}>
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 ref={titleRef}
          className="text-white font-extrabold text-center text-2xl sm:text-3xl mb-10 tracking-tight">
          What&apos;s Included?
        </h2>

        {/* 4-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CARDS.map((card, i) => (
            <div
              key={card.title}
              ref={(el) => (cardsRef.current[i] = el)}
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
              className="flex flex-col p-6 rounded-xl cursor-default transition-colors duration-300"
              style={{
                background: "rgba(8,20,12,0.9)",
                border: "1px solid rgba(74,222,128,0.14)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                willChange: "transform",
              }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-green-400"
                style={{ background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.18)" }}>
                {card.icon}
              </div>
              <h3 className="text-white font-bold text-[15px] mb-2">{card.title}</h3>
              <p className="text-gray-400 text-[13px] leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}