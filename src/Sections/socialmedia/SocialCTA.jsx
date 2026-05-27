// src/components/socialmedia/SocialCTA.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SocialCTA() {
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

  const onBtnEnter = () => gsap.to(btnRef.current, {
    scale: 1.06,
    boxShadow: "0 0 36px rgba(245,197,24,0.5), 0 8px 24px rgba(245,197,24,0.2)",
    duration: 0.25, ease: "power2.out",
  });
  const onBtnLeave = () => gsap.to(btnRef.current, {
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
            background: "linear-gradient(135deg,rgba(8,24,14,0.97) 0%,rgba(5,14,9,0.97) 100%)",
            border: "1px solid rgba(74,222,128,0.18)",
            boxShadow: "0 0 60px rgba(74,222,128,0.05)",
          }}
        >
          <div>
            <h2 className="text-white font-extrabold text-xl sm:text-2xl leading-tight mb-2 tracking-tight">
              Ready to Grow on Social Media?
            </h2>
            <p className="text-gray-400 text-[13px] leading-relaxed">
              Let&apos;s build a strong social presence for your brand.
            </p>
          </div>

          <button
            ref={btnRef}
            onMouseEnter={onBtnEnter}
            onMouseLeave={onBtnLeave}
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