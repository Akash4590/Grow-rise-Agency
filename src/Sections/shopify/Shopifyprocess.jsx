// src/components/shopify/ShopifyProcess.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { num: "1", label: "Discovery Call",  desc: "We understand your niche & goals." },
  { num: "2", label: "Store Setup",     desc: "We design & set up your store." },
  { num: "3", label: "Optimization",    desc: "We optimize for speed & conversions." },
  { num: "4", label: "Launch",          desc: "Your store is ready to sell & scale." },
];

// Arrow SVG connector
function Arrow() {
  return (
    <div className="hidden lg:flex items-center justify-center w-12 shrink-0 mt-[-32px]">
      <svg viewBox="0 0 48 20" className="w-10 h-5" fill="none">
        <path d="M2 10 L38 10" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round"
          strokeDasharray="4 3" />
        <path d="M34 5 L42 10 L34 15" stroke="#4ade80" strokeWidth="1.8"
          strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </div>
  );
}

export default function ShopifyProcess() {
  const sectionRef  = useRef(null);
  const titleRef    = useRef(null);
  const stepsRef    = useRef([]);
  const lineRef     = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title
      gsap.fromTo(titleRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%" } }
      );
      // Steps stagger
      gsap.fromTo(stepsRef.current.filter(Boolean),
        { y: 40, opacity: 0, scale: 0.92 },
        { y: 0, opacity: 1, scale: 1, duration: 0.65, stagger: 0.14, ease: "back.out(1.4)",
          scrollTrigger: { trigger: sectionRef.current, start: "top 74%" } }
      );
      // Animated line draw (mobile vertical line)
      if (lineRef.current) {
        gsap.fromTo(lineRef.current,
          { scaleY: 0, transformOrigin: "top" },
          { scaleY: 1, duration: 1.2, ease: "power2.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 72%" } }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleEnter = (el) => {
    gsap.to(el, { y: -5, scale: 1.03, duration: 0.25, ease: "power2.out" });
    gsap.to(el.querySelector(".step-circle"), {
      boxShadow: "0 0 24px rgba(74,222,128,0.5), 0 0 48px rgba(74,222,128,0.2)",
      duration: 0.25,
    });
  };
  const handleLeave = (el) => {
    gsap.to(el, { y: 0, scale: 1, duration: 0.25, ease: "power2.in" });
    gsap.to(el.querySelector(".step-circle"), {
      boxShadow: "0 0 12px rgba(74,222,128,0.2)",
      duration: 0.25,
    });
  };

  return (
    <section ref={sectionRef} className="py-14 px-4 section-divider" style={{ background: "#071510" }}>
      <div className="max-w-6xl mx-auto">

        <h2 ref={titleRef}
          className="text-white font-extrabold text-center text-2xl sm:text-3xl mb-12 tracking-tight">
          Our Process
        </h2>

        {/* DESKTOP: horizontal layout */}
        <div className="hidden lg:flex items-start justify-center gap-0">
          {STEPS.map((step, i) => (
            <>
              <div
                key={step.num}
                ref={(el) => (stepsRef.current[i] = el)}
                onMouseEnter={(e) => handleEnter(e.currentTarget)}
                onMouseLeave={(e) => handleLeave(e.currentTarget)}
                className="flex flex-col items-center text-center w-[180px] cursor-default"
                style={{ willChange: "transform" }}
              >
                {/* Circle */}
                <div
                  className="step-circle w-14 h-14 rounded-full flex items-center justify-center font-black text-xl text-white mb-4 shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #1a5c2a, #0d3318)",
                    border: "2px solid rgba(74,222,128,0.5)",
                    boxShadow: "0 0 12px rgba(74,222,128,0.2)",
                  }}
                >
                  {step.num}
                </div>
                {/* Small number label */}
                <span className="text-green-400/50 text-[10px] font-bold mb-1">{step.num}</span>
                <h3 className="text-white font-bold text-[15px] mb-2 leading-tight">{step.label}</h3>
                <p className="text-gray-400 text-[12px] leading-relaxed max-w-[140px]">{step.desc}</p>
              </div>
              {/* Arrow between steps */}
              {i < STEPS.length - 1 && <Arrow key={`arrow-${i}`} />}
            </>
          ))}
        </div>

        {/* MOBILE: vertical layout */}
        <div className="flex lg:hidden flex-col items-center relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[27px] top-7 bottom-7 w-[2px] z-0"
            style={{ background: "rgba(74,222,128,0.15)" }}>
            <div ref={lineRef} className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom,#4ade80,rgba(74,222,128,0.3))" }} />
          </div>

          {STEPS.map((step, i) => (
            <div
              key={step.num}
              ref={(el) => (stepsRef.current[i] = el)}
              className="relative z-10 flex items-start gap-5 w-full mb-8 last:mb-0"
              style={{ willChange: "transform" }}
            >
              <div
                className="step-circle w-14 h-14 rounded-full flex items-center justify-center font-black text-xl text-white shrink-0"
                style={{
                  background: "linear-gradient(135deg,#1a5c2a,#0d3318)",
                  border: "2px solid rgba(74,222,128,0.5)",
                  boxShadow: "0 0 12px rgba(74,222,128,0.2)",
                }}
              >
                {step.num}
              </div>
              <div className="pt-3">
                <h3 className="text-white font-bold text-[15px] mb-1">{step.label}</h3>
                <p className="text-gray-400 text-[13px] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}