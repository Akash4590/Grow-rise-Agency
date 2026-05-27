// src/components/socialmedia/SocialBenefits.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BENEFITS = [
  {
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1.7}
        strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="14" cy="9" r="5" />
        <path d="M4 24c0-5.5 4.5-10 10-10s10 4.5 10 10" />
        <path d="M20 4l2 2-2 2" />
        <path d="M22 6h-4" />
      </svg>
    ),
    title: "Increase Brand Awareness",
    desc: "Get discovered by the right audience.",
  },
  {
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1.7}
        strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M14 2l2.5 5 5.5.8-4 3.9.9 5.5L14 14.5l-4.9 2.7.9-5.5L6 7.8l5.5-.8z" />
        <path d="M6 20l2 6M22 20l-2 6M14 20v6" />
      </svg>
    ),
    title: "Boost Engagement & Followers",
    desc: "Build a loyal community around your brand.",
  },
  {
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1.7}
        strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M4 22l4-4 4 3 6-8 4 3" />
        <rect x="2" y="2" width="24" height="18" rx="3" />
        <path d="M2 20h24" />
      </svg>
    ),
    title: "Drive Website Traffic",
    desc: "More traffic, more leads, more sales.",
  },
  {
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1.7}
        strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="14" cy="14" r="11" />
        <path d="M14 8v6l4 2" />
        <path d="M9 3l2 3M19 3l-2 3M3 9l3 2M22 9l3 2" />
      </svg>
    ),
    title: "Improve Customer Trust",
    desc: "Social proof builds brand credibility.",
  },
];

export default function SocialBenefits() {
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
    e.currentTarget.style.borderColor = "rgba(74,222,128,0.35)";
    e.currentTarget.style.boxShadow   = "0 12px 36px rgba(74,222,128,0.1), 0 0 0 1px rgba(74,222,128,0.2)";
  };
  const onLeave = (e) => {
    e.currentTarget.style.transform   = "translateY(0) scale(1)";
    e.currentTarget.style.borderColor = "rgba(74,222,128,0.14)";
    e.currentTarget.style.boxShadow   = "0 4px 20px rgba(0,0,0,0.3)";
  };

  return (
    <section ref={sectionRef} className="py-14 px-4"
      style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-white font-extrabold text-center text-2xl sm:text-3xl mb-10 tracking-tight">
          Why Social Media Marketing?
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
                background: "rgba(8,20,12,0.88)",
                border: "1px solid rgba(74,222,128,0.14)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                transition: "all 0.3s cubic-bezier(0.25,1,0.5,1)",
                willChange: "transform",
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-green-400"
                style={{ background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.18)" }}>
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