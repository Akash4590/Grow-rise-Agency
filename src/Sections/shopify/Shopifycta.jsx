// src/components/shopify/ShopifyCTA.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ShopifyCTA() {
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

  const handleEnter = () => {
    gsap.to(btnRef.current, {
      scale: 1.05,
      boxShadow: "0 0 32px rgba(245,197,24,0.45), 0 8px 24px rgba(245,197,24,0.2)",
      duration: 0.25, ease: "power2.out",
    });
  };
  const handleLeave = () => {
    gsap.to(btnRef.current, {
      scale: 1,
      boxShadow: "0 0 16px rgba(245,197,24,0.2)",
      duration: 0.25, ease: "power2.in",
    });
  };

  return (
    <section ref={sectionRef} className="py-10 px-4 section-divider" style={{ background: "#050505" }}>
      <div className="max-w-6xl mx-auto">
        <div
          ref={boxRef}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl p-7 sm:p-8"
          style={{
            background: "linear-gradient(135deg, rgba(8,24,14,0.95) 0%, rgba(6,16,10,0.95) 100%)",
            border: "1px solid rgba(74,222,128,0.18)",
            boxShadow: "0 0 60px rgba(74,222,128,0.05)",
          }}
        >
          {/* Text */}
          <div>
            <h2 className="text-white font-extrabold text-xl sm:text-2xl leading-tight mb-2 tracking-tight">
              Ready to Launch Your Shopify Store?
            </h2>
            <p className="text-gray-400 text-[13px] leading-relaxed">
              Let&apos;s build a store that converts visitors into loyal customers.
            </p>
          </div>

          {/* Button */}
          <button
            ref={btnRef}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="shrink-0 bg-[#F5C518] text-[#050505] font-bold px-7 py-3.5 rounded-xl text-[14px] flex items-center gap-2 transition-colors hover:bg-yellow-300"
            style={{ boxShadow: "0 0 16px rgba(245,197,24,0.2)" }}
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