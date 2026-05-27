// src/components/socialmedia/SocialPlatforms.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PLATFORMS = [
  {
    name: "Facebook",
    color: "#1877f2",
    glowRgb: "24,119,242",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect width="40" height="40" rx="10" fill="#1877f2" />
        <path d="M24 8h-3a6 6 0 00-6 6v3H11v6h4v12h6V23h4l1-6h-5v-3a1.5 1.5 0 011.5-1.5H24V8z"
          fill="white" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    color: "#e1306c",
    glowRgb: "225,48,108",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <defs>
          <radialGradient id="igp" cx="30%" cy="100%" r="120%">
            <stop offset="0%" stopColor="#f9ce34" />
            <stop offset="25%" stopColor="#ee2a7b" />
            <stop offset="55%" stopColor="#9b26af" />
            <stop offset="100%" stopColor="#4c68d7" />
          </radialGradient>
        </defs>
        <rect width="40" height="40" rx="10" fill="url(#igp)" />
        <rect x="9" y="9" width="22" height="22" rx="6" stroke="white" strokeWidth="1.8" fill="none" />
        <circle cx="20" cy="20" r="5.5" stroke="white" strokeWidth="1.8" fill="none" />
        <circle cx="27" cy="12" r="1.5" fill="white" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    color: "#fe2c55",
    glowRgb: "254,44,85",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect width="40" height="40" rx="10" fill="#010101" />
        <path d="M24 8c.3 3.8 3 5.5 6 5.5v4.8c-2.2 0-4.2-.7-6-2V24a8 8 0 11-8-8c.3 0 .5 0 .8.1v4.8c-.3 0-.5-.1-.8-.1a3.3 3.3 0 100 6.6 3.3 3.3 0 003.3-3.3V8H24z"
          fill="white" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    color: "#ff0000",
    glowRgb: "255,0,0",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect width="40" height="40" rx="10" fill="#ff0000" />
        <path d="M32 14.5s-.3-2-1.3-2.8c-1.2-1.3-2.6-1.3-3.2-1.4C24.5 10 20 10 20 10s-4.5 0-7.5.3c-.6.1-2 .1-3.2 1.4-1 .8-1.3 2.8-1.3 2.8S7.5 16.7 7.5 19v2.1c0 2.3.5 4.5.5 4.5s.3 2 1.3 2.8c1.2 1.3 2.8 1.2 3.5 1.3 2.5.3 10.7.3 10.7.3s4.5 0 7.5-.3c.6-.1 2-.1 3.2-1.4 1-.8 1.3-2.8 1.3-2.8S36 23.4 36 21.1V19c0-2.3-.5-4.5-.5-4.5z"
          fill="#ff0000" />
        <polygon points="16.5,14.5 25.5,20 16.5,25.5" fill="white" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    color: "#0a66c2",
    glowRgb: "10,102,194",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect width="40" height="40" rx="10" fill="#0a66c2" />
        <rect x="8" y="15" width="5" height="17" fill="white" />
        <circle cx="10.5" cy="9.5" r="3.5" fill="white" />
        <path d="M18 15h5v2.3h.1c.7-1.3 2.3-2.7 5-2.7 5.3 0 6.3 3.5 6.3 8V32h-5V23c0-2 0-4.5-2.8-4.5-2.8 0-3.2 2.2-3.2 4.4V32h-5V15z"
          fill="white" />
      </svg>
    ),
  },
];

export default function SocialPlatforms() {
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
        { y: 36, opacity: 0, scale: 0.93 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.09, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 76%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const onEnter = (e, color, glowRgb) => {
    e.currentTarget.style.borderColor = `rgba(${glowRgb},0.45)`;
    e.currentTarget.style.boxShadow   = `0 0 28px rgba(${glowRgb},0.18), 0 8px 24px rgba(0,0,0,0.4)`;
    e.currentTarget.style.transform   = "translateY(-5px) scale(1.04)";
  };
  const onLeave = (e) => {
    e.currentTarget.style.borderColor = "rgba(74,222,128,0.15)";
    e.currentTarget.style.boxShadow   = "0 4px 16px rgba(0,0,0,0.3)";
    e.currentTarget.style.transform   = "translateY(0) scale(1)";
  };

  return (
    <section ref={sectionRef} className="py-14 px-4" style={{ background: "#071510", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-white font-extrabold text-center text-2xl sm:text-3xl mb-10 tracking-tight">
          Platforms We Manage
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {PLATFORMS.map((p, i) => (
            <div
              key={p.name}
              ref={(el) => (cardsRef.current[i] = el)}
              onMouseEnter={(e) => onEnter(e, p.color, p.glowRgb)}
              onMouseLeave={onLeave}
              className="flex flex-col items-center gap-4 py-7 px-4 rounded-xl cursor-default"
              style={{
                background: "rgba(8,20,12,0.9)",
                border: "1px solid rgba(74,222,128,0.15)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                transition: "all 0.28s cubic-bezier(0.25,1,0.5,1)",
                willChange: "transform",
              }}
            >
              <div className="drop-shadow-xl">{p.icon}</div>
              <span className="text-white font-semibold text-[14px]">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}