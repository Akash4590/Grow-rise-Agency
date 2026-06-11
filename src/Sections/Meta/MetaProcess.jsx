// src/components/meta/MetaProcess.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { num: "1", label: "Research",       desc: "We analyze your business & audience." },
  { num: "2", label: "Campaign Setup", desc: "We create & launch high-performing ads." },
  { num: "3", label: "Optimization",   desc: "We test, optimize & improve performance." },
  { num: "4", label: "Scale",          desc: "We scale campaigns for maximum growth." },
];

function DashedArrow() {
  return (
    <div className="hidden lg:flex items-center justify-center w-10 shrink-0 mt-[-28px]">
      <svg viewBox="0 0 44 18" fill="none" className="w-9">
        <path d="M2 9 L34 9" stroke="#0082fb" strokeWidth="1.8"
          strokeLinecap="round" strokeDasharray="4 3" opacity="0.65" />
        <path d="M30 4.5 L37 9 L30 13.5" stroke="#0082fb" strokeWidth="1.8"
          strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </div>
  );
}

export default function MetaProcess() {
  const sectionRef = useRef(null);
  const titleRef   = useRef(null);
  const stepsRef   = useRef([]);
  const lineRef    = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%" } }
      );
      gsap.fromTo(stepsRef.current.filter(Boolean),
        { y: 38, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.65, stagger: 0.14, ease: "back.out(1.4)",
          scrollTrigger: { trigger: sectionRef.current, start: "top 74%" } }
      );
      if (lineRef.current) {
        gsap.fromTo(lineRef.current,
          { scaleY: 0, transformOrigin: "top" },
          { scaleY: 1, duration: 1.1, ease: "power2.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 72%" } }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const circleStyle = {
    background: "linear-gradient(135deg,#0a2a5c,#051428)",
    border: "2px solid rgba(0,130,251,0.55)",
    boxShadow: "0 0 14px rgba(0,130,251,0.22)",
  };

  return (
    <section ref={sectionRef} className="py-14 px-4"
      style={{ background: "#071018", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef}
          className="text-white font-extrabold text-center text-2xl sm:text-3xl mb-12 tracking-tight">
          Our Process
        </h2>

        {/* Desktop horizontal */}
        <div className="hidden lg:flex items-start justify-center gap-0">
          {STEPS.map((step, i) => (
            <div key={step.num} className="flex items-start">
              <div
                ref={(el) => (stepsRef.current[i] = el)}
                className="flex flex-col items-center text-center w-[180px] cursor-default"
                style={{ willChange: "transform" }}
                onMouseEnter={(e) => gsap.to(e.currentTarget.querySelector(".sc"), { scale: 1.1, boxShadow: "0 0 28px rgba(0,130,251,0.5)", duration: 0.25 })}
                onMouseLeave={(e) => gsap.to(e.currentTarget.querySelector(".sc"), { scale: 1, boxShadow: "0 0 14px rgba(0,130,251,0.22)", duration: 0.25 })}
              >
                <div className="sc w-14 h-14 rounded-full flex items-center justify-center font-black text-xl text-white mb-4"
                  style={{ ...circleStyle, willChange: "transform" }}>
                  {step.num}
                </div>
                <span className="text-blue-500/50 text-[10px] font-bold mb-1">{step.num}</span>
                <h3 className="text-white font-bold text-[14px] mb-2 leading-tight">{step.label}</h3>
                <p className="text-gray-400 text-[12px] leading-relaxed max-w-[140px]">{step.desc}</p>
              </div>
              {i < STEPS.length - 1 && <DashedArrow />}
            </div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="flex lg:hidden flex-col items-start relative pl-4">
          <div className="absolute left-[27px] top-7 bottom-7 w-[2px]"
            style={{ background: "rgba(0,130,251,0.1)" }}>
            <div ref={lineRef} className="absolute inset-0 rounded-full"
              style={{ background: "linear-gradient(to bottom,#0082fb,rgba(0,130,251,0.25))" }} />
          </div>
          {STEPS.map((step, i) => (
            <div key={step.num}
              ref={(el) => (stepsRef.current[i] = el)}
              className="relative z-10 flex items-start gap-5 mb-8 last:mb-0"
              style={{ willChange: "transform" }}>
              <div className="sc w-14 h-14 rounded-full flex items-center justify-center font-black text-xl text-white shrink-0"
                style={circleStyle}>
                {step.num}
              </div>
              <div className="pt-3">
                <h3 className="text-white font-bold text-[14px] mb-1">{step.label}</h3>
                <p className="text-gray-400 text-[13px] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}