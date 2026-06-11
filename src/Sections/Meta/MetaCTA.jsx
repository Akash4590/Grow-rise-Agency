// src/components/meta/MetaCTA.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MetaCTA() {
  const sectionRef = useRef(null);
  const boxRef     = useRef(null);
  const btnRef     = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(boxRef.current,
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const onEnter = () => gsap.to(btnRef.current, {
    scale: 1.06,
    boxShadow: "0 0 36px rgba(245,197,24,0.5), 0 8px 24px rgba(245,197,24,0.2)",
    duration: 0.25, ease: "power2.out",
  });
  const onLeave = () => gsap.to(btnRef.current, {
    scale: 1,
    boxShadow: "0 0 16px rgba(245,197,24,0.18)",
    duration: 0.25, ease: "power2.in",
  });

  return (
    <section ref={sectionRef} className="py-10 px-4"
      style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-6xl mx-auto">
        <div
          ref={boxRef}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl p-7 sm:p-8"
          style={{
            background: "linear-gradient(135deg,rgba(6,14,26,0.97) 0%,rgba(4,10,20,0.97) 100%)",
            border: "1px solid rgba(0,130,251,0.18)",
            boxShadow: "0 0 60px rgba(0,130,251,0.05)",
          }}
        >
          <div>
            <h2 className="text-white font-extrabold text-xl sm:text-2xl leading-tight mb-2 tracking-tight">
              Ready to Scale with Meta Ads?
            </h2>
            <p className="text-gray-400 text-[13px] leading-relaxed">
              Let&apos;s run ads that bring real results.
            </p>
          </div>

          <button
            ref={btnRef}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            className="shrink-0 inline-flex items-center gap-2 bg-[#F5C518] text-[#050505] font-bold rounded-xl transition-colors hover:bg-yellow-300"
            style={{ padding: "13px 28px", fontSize: "14px", boxShadow: "0 0 16px rgba(245,197,24,0.18)" }}
          >
            Book Free Strategy Call
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}