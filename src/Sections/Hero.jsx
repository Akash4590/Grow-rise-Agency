import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// ── Floating stat card ────────────────────────
function FloatingCard({ label, value, change, delay, className }) {
  const cardRef = useRef(null);

  useEffect(() => {
    // Floating loop animation
    gsap.to(cardRef.current, {
      y: -12,
      duration: 2.5 + delay,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: delay,
    });
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`glass rounded-2xl px-4 py-3 shadow-2xl ${className}`}
    >
      <p className="text-gray-400 text-[11px] mb-1">{label}</p>
      <p className="text-white font-extrabold text-xl leading-none">{value}</p>
      <p className="text-green-400 text-xs font-bold mt-1">▲ {change}</p>
    </div>
  );
}

// ── Animated bar chart ────────────────────────
function AnimatedChart() {
  const chartRef = useRef(null);
  const lineRef = useRef(null);

  const bars = [
    { h: 40, x: 10 }, { h: 55, x: 50 }, { h: 45, x: 90 },
    { h: 70, x: 130 }, { h: 60, x: 170 }, { h: 90, x: 210 }, { h: 105, x: 250 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Bars grow up
      gsap.fromTo(
        chartRef.current?.querySelectorAll(".bar"),
        { scaleY: 0, transformOrigin: "bottom" },
        { scaleY: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 1.2 }
      );
      // Line draws
      const path = lineRef.current;
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(path, { strokeDashoffset: 0, duration: 1.5, ease: "power2.out", delay: 1.5 });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative glass rounded-2xl p-5 shadow-[0_0_60px_rgba(74,222,128,0.08)]">
      {/* Chart label */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-gray-400 text-xs font-medium">Revenue Growth</p>
        <span className="text-green-400 text-xs font-bold bg-green-900/40 border border-green-700/40 px-2 py-0.5 rounded-full">+120%</span>
      </div>

      {/* SVG chart */}
      <svg ref={chartRef} viewBox="0 0 300 140" className="w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="heroGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e4d2b" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0d2414" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="glowLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4ade80" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#4ade80" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Bars */}
        {bars.map((bar, i) => (
          <rect
            key={i}
            className="bar"
            x={bar.x} y={140 - bar.h} width="24" height={bar.h} rx="4"
            fill="url(#barGrad)" stroke="#2a5c35" strokeWidth="0.5"
          />
        ))}

        {/* Neon line */}
        <polyline
          ref={lineRef}
          points="22,100 62,85 102,95 142,70 182,80 222,50 274,35"
          fill="none" stroke="url(#glowLine)" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          filter="url(#heroGlow)"
        />

        {/* Arrow */}
        <polygon points="268,27 283,35 268,43" fill="#4ade80" filter="url(#heroGlow)" />

        {/* Dots */}
        {[[22,100],[62,85],[102,95],[142,70],[182,80],[222,50]].map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r="3.5" fill="#4ade80" filter="url(#heroGlow)" />
        ))}
      </svg>
    </div>
  );
}

// ── Floating particles ────────────────────────
function Particles() {
  const particles = Array.from({ length: 18 }, (_, i) => i);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((i) => (
        <div
          key={i}
          className="absolute rounded-full bg-green-400/20"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}

// ── Hero ──────────────────────────────────────
function Hero() {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const btnsRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Badge
      tl.fromTo(badgeRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );
      // Heading words stagger
      tl.fromTo(
        headingRef.current?.querySelectorAll("span"),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.04, ease: "power3.out" },
        "-=0.2"
      );
      // Sub
      tl.fromTo(subRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );
      // Buttons
      tl.fromTo(btnsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.2"
      );
      // Right content
      tl.fromTo(rightRef.current,
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
        "-=0.8"
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Split heading for word-by-word animation
  const headingWords = "Scale Your eCommerce Brand To $10K–$100K/Month Profitably".split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 px-4"
    >
      {/* ── Background effects ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial gradient glow top-right */}
        <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-green-900/20 rounded-full blur-[120px]" />
        {/* Bottom-left glow */}
        <div className="absolute bottom-0 left-[-50px] w-[400px] h-[400px] bg-green-800/10 rounded-full blur-[100px]" />
        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-green-950/30 rounded-full blur-[140px]" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, #4ade80 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <Particles />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-10">

        {/* ── LEFT: Text ── */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <div ref={badgeRef} className="inline-flex items-center gap-2 glass border border-green-500/30 text-green-400 text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Ecommerce Growth Agency
          </div>

          {/* Heading — word by word */}
          <h1 ref={headingRef} className="font-extrabold leading-[1.08] mb-6 text-[36px] sm:text-[46px] lg:text-[54px] xl:text-[60px] tracking-tight">
            {headingWords.map((word, i) => {
              const isYellow = ["$10K–$100K/Month"].includes(word);
              return (
                <span key={i} className={`inline-block mr-[0.25em] ${isYellow ? "text-[#F5C518]" : "text-white"}`}>
                  {word}
                </span>
              );
            })}
          </h1>

          {/* Sub */}
          <p ref={subRef} className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-[480px] mx-auto lg:mx-0 mb-10">
            We engineer profit-driven eCommerce growth systems — paid ads, funnel optimization, and data-backed scaling that turns traffic into consistent, predictable revenue.
          </p>

          {/* Buttons */}
          <div ref={btnsRef} className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
            <button className="group relative bg-[#F5C518] text-[#071209] font-bold px-8 py-4 rounded-xl text-sm yellow-glow hover:bg-yellow-300 transition-all duration-200 hover:scale-105 flex items-center gap-2">
              Get Free Audit
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="group glass-light border border-white/10 text-white font-semibold px-8 py-4 rounded-xl text-sm hover:bg-white/10 transition-all duration-200 flex items-center gap-2">
              View Case Studies
              <svg className="w-4 h-4 opacity-60 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Trust bar */}
          <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              100+ Brands Scaled
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              $2M+ Revenue Generated
            </div>
          </div>
        </div>

        {/* ── RIGHT: Visual ── */}
        <div ref={rightRef} className="flex-1 w-full max-w-[520px] lg:max-w-none relative">
          {/* Main chart card */}
          <AnimatedChart />

          {/* Revenue floating card */}
          <FloatingCard
            label="Total Revenue"
            value="$125,430"
            change="+120%"
            delay={0}
            className="absolute -top-6 -right-4 lg:-right-8 min-w-[140px] z-10"
          />

          {/* ROAS floating card */}
          <FloatingCard
            label="ROAS"
            value="4.2x"
            change="+80%"
            delay={0.5}
            className="absolute -bottom-6 -right-4 lg:-right-8 min-w-[120px] z-10"
          />

          {/* Active clients card */}
          <FloatingCard
            label="Active Clients"
            value="100+"
            change="Growing"
            delay={1}
            className="absolute -left-4 lg:-left-8 top-1/2 -translate-y-1/2 min-w-[120px] z-10"
          />

          {/* Background glow behind chart */}
          <div className="absolute inset-0 bg-green-400/5 rounded-2xl blur-2xl -z-10" />
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>

      {/* Floating animation keyframe */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}

export default Hero;