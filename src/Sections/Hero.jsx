// ─────────────────────────────────────────────────────────────────────────────
// Hero.jsx  (updated)
// CHANGES:  AnimatedChart + three FloatingCard components replaced by
//           <HeroDashboard3D /> which renders the full Three.js scene.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HeroDashboard3D from "./HeroDashboard3D"; // ← only new import

// ── Floating particles (background decoration) ────────────────────────────────
function Particles() {
  const particles = Array.from({ length: 18 }, (_, i) => i);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((i) => (
        <div
          key={i}
          className="absolute rounded-full bg-green-400/20"
          style={{
            width:  `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left:   `${Math.random() * 100}%`,
            top:    `${Math.random() * 100}%`,
            animation: `floatBg ${4 + Math.random() * 6}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}

// ── Hero ───────────────────────────────────────────────────────────────────────
function Hero() {
  const sectionRef  = useRef(null);
  const badgeRef    = useRef(null);
  const headingRef  = useRef(null);
  const subRef      = useRef(null);
  const btnsRef     = useRef(null);
  const rightRef    = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(badgeRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );
      tl.fromTo(
        headingRef.current?.querySelectorAll("span"),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.04, ease: "power3.out" },
        "-=0.2"
      );
      tl.fromTo(subRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );
      tl.fromTo(btnsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.2"
      );
      tl.fromTo(rightRef.current,
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
        "-=0.8"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headingWords = "Scale Your eCommerce Brand To $10K–$100K/Month Profitably".split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 px-4"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-green-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-[-50px] w-[400px] h-[400px] bg-green-800/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-green-950/30 rounded-full blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #4ade80 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <Particles />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-10">

        {/* ── LEFT: Text ── */}
        <div className="flex-1 text-center lg:text-left">

          {/* Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 glass border border-green-500/30 text-green-400 text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Ecommerce Growth Agency
          </div>

          {/* Heading */}
          <h1
            ref={headingRef}
            className="font-extrabold leading-[1.08] mb-6 text-[36px] sm:text-[46px] lg:text-[54px] xl:text-[60px] tracking-tight"
          >
            {headingWords.map((word, i) => {
              const isYellow = word === "$10K–$100K/Month";
              return (
                <span
                  key={i}
                  className={`inline-block mr-[0.25em] ${isYellow ? "text-[#F5C518]" : "text-white"}`}
                >
                  {word}
                </span>
              );
            })}
          </h1>

          {/* Sub */}
          <p
            ref={subRef}
            className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-[480px] mx-auto lg:mx-0 mb-10"
          >
            We engineer profit-driven eCommerce growth systems — paid ads, funnel
            optimization, and data-backed scaling that turns traffic into consistent,
            predictable revenue.
          </p>

          {/* Buttons */}
          <div
            ref={btnsRef}
            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
          >
            <button className="group relative bg-[#F5C518] text-[#071209] font-bold px-8 py-4 rounded-xl text-sm hover:bg-yellow-300 transition-all duration-200 hover:scale-105 flex items-center gap-2">
              Get Free Audit
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="group border border-white/10 text-white font-semibold px-8 py-4 rounded-xl text-sm hover:bg-white/10 transition-all duration-200 flex items-center gap-2">
              View Case Studies
              <svg className="w-4 h-4 opacity-60 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Trust strip */}
          <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
            {["100+ Brands Scaled","$2M+ Revenue Generated"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-gray-500 text-xs">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: 3D Dashboard ──
              HeroDashboard3D renders the full Three.js scene PLUS all KPI
              overlay cards. Nothing else needed here.
        ── */}
        <div ref={rightRef} className="flex-1 w-full max-w-[560px] lg:max-w-none">
          <HeroDashboard3D />
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>

      <style>{`
        @keyframes floatBg {
          0%, 100% { transform: translateY(0px);   }
          50%       { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}

export default Hero;