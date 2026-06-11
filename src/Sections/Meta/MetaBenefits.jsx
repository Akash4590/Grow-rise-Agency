// src/components/meta/MetaBenefits.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BENEFITS = [
  {
    title: "Highly Targeted Reach",
    desc: "Reach the right audience with precision targeting.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1.7}
        strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polygon points="14,3 17,10 25,10 19,15 21,23 14,18 7,23 9,15 3,10 11,10" />
      </svg>
    ),
  },
  {
    title: "Cost-Effective Advertising",
    desc: "Get the best ROI on your ad spend.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1.7}
        strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="14" cy="14" r="11" />
        <path d="M14 7v2.5M14 18.5V21" />
        <path d="M10.5 11a3.5 2.5 0 013.5-2.5 3.5 2.5 0 013.5 2.5c0 1.5-1.5 2-3.5 2.5-2 .5-3.5 1-3.5 2.5a3.5 2.5 0 003.5 2.5 3.5 2.5 0 003.5-2.5" />
      </svg>
    ),
  },
  {
    title: "Scalable Growth",
    desc: "Scale your campaigns with confidence.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1.7}
        strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M4 22l4-5 4 2 5-7 5 3" />
        <path d="M20 8h4v4" />
        <path d="M24 8l-5 5" />
      </svg>
    ),
  },
  {
    title: "Measurable Results",
    desc: "Track every click, lead & sale.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1.7}
        strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="3" width="22" height="22" rx="3" />
        <path d="M9 14h2v5H9zM13 9h2v10h-2zM17 11h2v8h-2z" fill="currentColor" stroke="none" opacity="0.7" />
      </svg>
    ),
  },
];

export default function MetaBenefits() {
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
        { y: 40, opacity: 0, scale: 0.94 },
        { y: 0, opacity: 1, scale: 1, duration: 0.65, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 76%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const onEnter = (e) => {
    e.currentTarget.style.transform   = "translateY(-6px) scale(1.02)";
    e.currentTarget.style.borderColor = "rgba(0,130,251,0.35)";
    e.currentTarget.style.boxShadow   = "0 12px 36px rgba(0,130,251,0.12), 0 0 0 1px rgba(0,130,251,0.18)";
  };
  const onLeave = (e) => {
    e.currentTarget.style.transform   = "translateY(0) scale(1)";
    e.currentTarget.style.borderColor = "rgba(0,130,251,0.14)";
    e.currentTarget.style.boxShadow   = "0 4px 20px rgba(0,0,0,0.3)";
  };

  return (
    <section ref={sectionRef} className="py-14 px-4"
      style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef}
          className="text-white font-extrabold text-center text-2xl sm:text-3xl mb-10 tracking-tight">
          Why Meta Ads?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BENEFITS.map((b, i) => (
            <div
              key={b.title}
              ref={(el) => (cardsRef.current[i] = el)}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              className="flex flex-col p-6 rounded-xl cursor-default"
              style={{
                background: "rgba(6,14,26,0.88)",
                border: "1px solid rgba(0,130,251,0.14)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                transition: "all 0.3s cubic-bezier(0.25,1,0.5,1)",
                willChange: "transform",
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-blue-400"
                style={{ background: "rgba(0,130,251,0.08)", border: "1px solid rgba(0,130,251,0.2)" }}>
                {b.icon}
              </div>
              <h3 className="text-white font-bold text-[14px] mb-2 leading-snug">{b.title}</h3>
              <p className="text-gray-400 text-[12px] leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}