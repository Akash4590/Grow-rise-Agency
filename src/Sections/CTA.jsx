import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function CTA() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 40, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 px-4 relative overflow-hidden">
      {/* Glow layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-green-900/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#F5C518]/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div
          ref={contentRef}
          className="glass rounded-3xl p-10 sm:p-16 border border-white/8 text-center relative overflow-hidden"
          style={{ boxShadow: "0 0 80px rgba(74,222,128,0.06), 0 0 40px rgba(245,197,24,0.04)" }}
        >
          {/* Decorative glow inside */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-green-400/40 to-transparent" />

          <div className="inline-flex items-center gap-2 glass border border-green-500/30 text-green-400 text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Limited Spots Available
          </div>

          <h2 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
            Ready To Scale Your<br />
            <span className="text-[#F5C518]">eCommerce Brand?</span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Book your free strategy call. We'll audit your store, ads, and funnel — and show you exactly how to scale profitably.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group bg-[#F5C518] text-[#071209] font-bold px-10 py-4 rounded-xl text-base yellow-glow hover:bg-yellow-300 transition-all duration-200 hover:scale-105 flex items-center gap-2">
              Book Free Strategy Call
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <p className="text-gray-500 text-xs">No credit card. No commitment. 30-min call.</p>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-10 pt-8 border-t border-white/5">
            {["100+ Brands Scaled", "4.2x Avg ROAS", "$2M+ Revenue Generated", "No Long-term Contracts"].map(t => (
              <div key={t} className="flex items-center gap-2 text-gray-500 text-xs">
                <svg className="w-3.5 h-3.5 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;