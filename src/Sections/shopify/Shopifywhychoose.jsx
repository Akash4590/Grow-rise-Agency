// src/components/shopify/ShopifyWhyChoose.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "100+",  sub: "Stores Built",      isYellow: true },
  { value: "4.8★",  sub: "Client Rating",     isYellow: true },
  { value: "Proven", sub: "Growth Strategy",  isYellow: true },
  { value: "Ongoing",sub: "Support",          isYellow: true },
];

export default function ShopifyWhyChoose() {
  const sectionRef = useRef(null);
  const titleRef   = useRef(null);
  const cardsRef   = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%" } }
      );
      gsap.fromTo(cardsRef.current.filter(Boolean),
        { y: 36, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 76%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleEnter = (e) => {
    gsap.to(e.currentTarget, {
      y: -5, scale: 1.03, duration: 0.28, ease: "power2.out",
      borderColor: "rgba(245,197,24,0.45)",
      boxShadow: "0 8px 32px rgba(245,197,24,0.12), 0 0 0 1px rgba(245,197,24,0.2)",
    });
  };
  const handleLeave = (e) => {
    gsap.to(e.currentTarget, {
      y: 0, scale: 1, duration: 0.28, ease: "power2.in",
      borderColor: "rgba(74,222,128,0.18)",
      boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
    });
  };

  return (
    <section ref={sectionRef} className="py-14 px-4 section-divider" style={{ background: "#060f09" }}>
      <div className="max-w-6xl mx-auto">

        <h2 ref={titleRef}
          className="text-white font-extrabold text-center text-2xl sm:text-3xl mb-10 tracking-tight">
          Why Choose GrowRise?
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.sub}
              ref={(el) => (cardsRef.current[i] = el)}
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
              className="flex flex-col items-center justify-center text-center py-8 px-4 rounded-xl cursor-default"
              style={{
                background: "rgba(8,20,12,0.9)",
                border: "1px solid rgba(74,222,128,0.18)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                transition: "border-color 0.3s",
                willChange: "transform",
              }}
            >
              <p className="font-black text-[#F5C518] mb-2 leading-none"
                style={{ fontSize: "clamp(26px,4vw,36px)" }}>
                {stat.value}
              </p>
              <p className="text-gray-300 text-[13px] font-medium">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}