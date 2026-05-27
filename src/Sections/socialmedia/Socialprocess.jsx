// src/components/socialmedia/SocialProcess.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    num: "1",
    label: "Strategy",
    desc: "We create a custom social media strategy.",
  },
  {
    num: "2",
    label: "Content Creation",
    desc: "We develop content that engages your audience.",
  },
  {
    num: "3",
    label: "Management",
    desc: "Daily posting & community engagement.",
  },
  {
    num: "4",
    label: "Growth",
    desc: "We grow your audience & improve results.",
  },
];

function DashedArrow() {
  return (
    <div className="hidden lg:flex items-center justify-center w-10 shrink-0 mt-[-28px]">
      <svg viewBox="0 0 44 18" fill="none" className="w-9">
        <path d="M2 9 L34 9" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round"
          strokeDasharray="4 3" opacity="0.7" />
        <path d="M30 4.5 L37 9 L30 13.5" stroke="#4ade80" strokeWidth="1.8"
          strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </div>
  );
}

export default function SocialProcess() {
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

  return (
    <section ref={sectionRef} className="py-14 px-4"
      style={{ background: "#071510", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-white font-extrabold text-center text-2xl sm:text-3xl mb-12 tracking-tight">
          Our Process
        </h2>

        {/* ── Desktop horizontal ── */}
        <div className="hidden lg:flex items-start justify-center gap-0">
          {STEPS.map((step, i) => (
            <div key={step.num} className="flex items-start">
              <div
                ref={(el) => (stepsRef.current[i] = el)}
                className="flex flex-col items-center text-center w-[180px] cursor-default group"
                style={{ willChange: "transform" }}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget.querySelector(".sc"), {
                    boxShadow: "0 0 28px rgba(74,222,128,0.55)",
                    scale: 1.08, duration: 0.25,
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget.querySelector(".sc"), {
                    boxShadow: "0 0 14px rgba(74,222,128,0.22)",
                    scale: 1, duration: 0.25,
                  });
                }}
              >
                <div
                  className="sc w-14 h-14 rounded-full flex items-center justify-center font-black text-xl text-white mb-4 shrink-0"
                  style={{
                    background: "linear-gradient(135deg,#1a5c2a,#0d3318)",
                    border: "2px solid rgba(74,222,128,0.55)",
                    boxShadow: "0 0 14px rgba(74,222,128,0.22)",
                    willChange: "transform",
                  }}
                >
                  {step.num}
                </div>
                <span className="text-green-500/50 text-[10px] font-bold mb-1">{step.num}</span>
                <h3 className="text-white font-bold text-[14px] mb-2 leading-tight">{step.label}</h3>
                <p className="text-gray-400 text-[12px] leading-relaxed max-w-[140px]">{step.desc}</p>
              </div>
              {i < STEPS.length - 1 && <DashedArrow />}
            </div>
          ))}
        </div>

        {/* ── Mobile vertical ── */}
        <div className="flex lg:hidden flex-col items-start relative pl-4">
          {/* Vertical line */}
          <div className="absolute left-[27px] top-7 bottom-7 w-[2px]"
            style={{ background: "rgba(74,222,128,0.12)" }}>
            <div ref={lineRef} className="absolute inset-0 rounded-full"
              style={{ background: "linear-gradient(to bottom,#4ade80,rgba(74,222,128,0.25))" }} />
          </div>

          {STEPS.map((step, i) => (
            <div
              key={step.num}
              ref={(el) => (stepsRef.current[i] = el)}
              className="relative z-10 flex items-start gap-5 mb-8 last:mb-0"
              style={{ willChange: "transform" }}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center font-black text-xl text-white shrink-0"
                style={{
                  background: "linear-gradient(135deg,#1a5c2a,#0d3318)",
                  border: "2px solid rgba(74,222,128,0.55)",
                  boxShadow: "0 0 14px rgba(74,222,128,0.22)",
                }}>
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