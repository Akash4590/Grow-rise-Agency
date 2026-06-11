// src/components/meta/MetaServices.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: "Ad Strategy",
    desc: "Data-driven strategy for maximum ROI.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1.7}
        strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M4 22l4-5 4 3 5-7 5 4" />
        <rect x="2" y="3" width="24" height="18" rx="2" />
        <path d="M2 21h24" />
      </svg>
    ),
  },
  {
    title: "Audience Targeting",
    desc: "Reach the right people who convert.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1.7}
        strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="14" cy="14" r="11" />
        <circle cx="14" cy="14" r="6" />
        <circle cx="14" cy="14" r="2" />
        <path d="M14 3v2M14 23v2M3 14h2M23 14h2" />
      </svg>
    ),
  },
  {
    title: "Ad Creation",
    desc: "Engaging ads that get clicks & sales.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1.7}
        strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="5" width="22" height="16" rx="2" />
        <path d="M8 13l4-4 3 3 2-2 4 4" />
        <circle cx="10" cy="10" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Optimization",
    desc: "Continuous testing for better results.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1.7}
        strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M14 3v4M14 21v4M3 14h4M21 14h4" />
        <circle cx="14" cy="14" r="5" />
        <path d="M6.3 6.3l2.8 2.8M18.9 18.9l2.8 2.8M6.3 21.7l2.8-2.8M18.9 9.1l2.8-2.8" />
      </svg>
    ),
  },
];

export default function MetaServices() {
  const sectionRef = useRef(null);
  const titleRef   = useRef(null);
  const cardsRef   = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { y: 26, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%" } }
      );
      gsap.fromTo(cardsRef.current.filter(Boolean),
        { y: 40, opacity: 0, scale: 0.94 },
        { y: 0, opacity: 1, scale: 1, duration: 0.65, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 76%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const onEnter = (e) => {
    e.currentTarget.style.transform   = "translateY(-6px) scale(1.02)";
    e.currentTarget.style.borderColor = "rgba(0,130,251,0.4)";
    e.currentTarget.style.boxShadow   = "0 12px 36px rgba(0,130,251,0.14), 0 0 0 1px rgba(0,130,251,0.2)";
  };
  const onLeave = (e) => {
    e.currentTarget.style.transform   = "translateY(0) scale(1)";
    e.currentTarget.style.borderColor = "rgba(0,130,251,0.15)";
    e.currentTarget.style.boxShadow   = "0 4px 20px rgba(0,0,0,0.3)";
  };

  return (
    <section ref={sectionRef} className="py-14 px-4"
      style={{ background: "#071018", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef}
          className="text-white font-extrabold text-center text-2xl sm:text-3xl mb-10 tracking-tight">
          What We Do
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              ref={(el) => (cardsRef.current[i] = el)}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              className="flex flex-col p-6 rounded-xl cursor-default"
              style={{
                background: "rgba(6,14,26,0.9)",
                border: "1px solid rgba(0,130,251,0.15)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                transition: "all 0.3s cubic-bezier(0.25,1,0.5,1)",
                willChange: "transform",
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-blue-400"
                style={{ background: "rgba(0,130,251,0.09)", border: "1px solid rgba(0,130,251,0.22)" }}>
                {s.icon}
              </div>
              <h3 className="text-white font-bold text-[15px] mb-2">{s.title}</h3>
              <p className="text-gray-400 text-[13px] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}