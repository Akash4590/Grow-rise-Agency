// ─────────────────────────────────────────────────────────────────────────────
// WhyChooseUs.jsx
// File: src/sections/WhyChooseUs.jsx
// deps: react, gsap + ScrollTrigger (already installed), tailwindcss
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ── Icons ──────────────────────────────────────────────────────────────────────
const IconRevenue = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const IconAnalytics = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const IconConversion = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconDashboard = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const IconFunnel = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
  </svg>
);

const IconRocket = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.82m2.56-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);

// ── Card data ──────────────────────────────────────────────────────────────────
const CARDS = [
  {
    id: 1,
    Icon: IconRevenue,
    title: "Revenue Focused",
    desc: "We optimize for profit, revenue growth, and long-term scalability — not vanity metrics that look good but don't move the needle.",
    accentColor: "#4ade80",        // green-400
    glowColor: "rgba(74,222,128,0.12)",
    borderHover: "rgba(74,222,128,0.28)",
    iconBg: "rgba(74,222,128,0.08)",
    iconBorder: "rgba(74,222,128,0.18)",
    stat: "+340% avg. revenue growth",
  },
  {
    id: 2,
    Icon: IconAnalytics,
    title: "Data Driven Decisions",
    desc: "Every strategy is backed by deep analytics, customer behavior data, and performance metrics — no guesswork, ever.",
    accentColor: "#F5C518",
    glowColor: "rgba(245,197,24,0.10)",
    borderHover: "rgba(245,197,24,0.28)",
    iconBg: "rgba(245,197,24,0.07)",
    iconBorder: "rgba(245,197,24,0.18)",
    stat: "Real-time dashboards",
  },
  {
    id: 3,
    Icon: IconConversion,
    title: "Conversion Optimization",
    desc: "We improve every layer of your store performance — landing pages, product pages, checkout — to maximize every visitor.",
    accentColor: "#34d399",
    glowColor: "rgba(52,211,153,0.10)",
    borderHover: "rgba(52,211,153,0.28)",
    iconBg: "rgba(52,211,153,0.07)",
    iconBorder: "rgba(52,211,153,0.18)",
    stat: "3.8% avg. conv. rate",
  },
  {
    id: 4,
    Icon: IconDashboard,
    title: "Transparent Reporting",
    desc: "Real dashboards. Real metrics. Full performance visibility so you always know exactly where every marketing dollar is working.",
    accentColor: "#a3e635",
    glowColor: "rgba(163,230,53,0.09)",
    borderHover: "rgba(163,230,53,0.26)",
    iconBg: "rgba(163,230,53,0.07)",
    iconBorder: "rgba(163,230,53,0.16)",
    stat: "Weekly performance reports",
  },
  {
    id: 5,
    Icon: IconFunnel,
    title: "Funnel Optimization",
    desc: "We engineer the complete customer journey from first click to final purchase — eliminating every drop-off point in between.",
    accentColor: "#F5C518",
    glowColor: "rgba(245,197,24,0.09)",
    borderHover: "rgba(245,197,24,0.26)",
    iconBg: "rgba(245,197,24,0.06)",
    iconBorder: "rgba(245,197,24,0.16)",
    stat: "-42% cart abandonment",
  },
  {
    id: 6,
    Icon: IconRocket,
    title: "Scalable Growth Systems",
    desc: "We build repeatable frameworks — not one-off campaigns — designed to support long-term eCommerce scaling without breaking margins.",
    accentColor: "#4ade80",
    glowColor: "rgba(74,222,128,0.10)",
    borderHover: "rgba(74,222,128,0.26)",
    iconBg: "rgba(74,222,128,0.07)",
    iconBorder: "rgba(74,222,128,0.16)",
    stat: "100+ brands scaled",
  },
];

// ── Single Card ────────────────────────────────────────────────────────────────
function FeatureCard({ card, cardRef, index }) {
  const { Icon, title, desc, accentColor, glowColor, borderHover, iconBg, iconBorder, stat } = card;

  // Hover glow / lift handled with inline style so we can use dynamic colours
  const handleMouseEnter = useCallback((e) => {
    const el = e.currentTarget;
    el.style.borderColor = borderHover;
    el.style.boxShadow = `0 20px 60px ${glowColor}, 0 0 0 1px ${borderHover}, 0 8px 24px rgba(0,0,0,0.4)`;
    el.style.transform = "translateY(-6px) scale(1.015)";
  }, [borderHover, glowColor]);

  const handleMouseLeave = useCallback((e) => {
    const el = e.currentTarget;
    el.style.borderColor = "rgba(255,255,255,0.06)";
    el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.3)";
    el.style.transform = "translateY(0px) scale(1)";
  }, []);

  return (
    <div
      ref={(el) => (cardRef.current[index] = el)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col gap-5 rounded-2xl p-6 cursor-default"
      style={{
        background: "linear-gradient(145deg, #080f0a 0%, #060c08 100%)",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s cubic-bezier(0.25,1,0.5,1)",
        willChange: "transform",
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-[1.5px] rounded-full"
        style={{ background: `linear-gradient(90deg, transparent, ${accentColor}55, transparent)` }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
        style={{
          background: iconBg,
          border: `1px solid ${iconBorder}`,
          color: accentColor,
        }}
      >
        <Icon />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-white font-bold text-[15px] leading-snug tracking-tight">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          {desc}
        </p>
      </div>

      {/* Stat pill */}
      <div
        className="inline-flex items-center gap-1.5 self-start px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wide uppercase"
        style={{
          background: `${accentColor}0f`,
          border: `1px solid ${accentColor}28`,
          color: accentColor,
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full shrink-0"
          style={{ background: accentColor }}
        />
        {stat}
      </div>
    </div>
  );
}

// ── Main Section ───────────────────────────────────────────────────────────────
export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subRef     = useRef(null);
  const cardsRef   = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Badge + heading slide up ──
      gsap.fromTo(
        headingRef.current,
        { y: 36, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      // ── Sub text ──
      gsap.fromTo(
        subRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 76%" },
        }
      );

      // ── Cards stagger reveal ──
      gsap.fromTo(
        cardsRef.current.filter(Boolean),
        {
          y: 56,
          opacity: 0,
          scale: 0.94,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.72,
          ease: "power3.out",
          stagger: {
            each: 0.11,
            from: "start",
          },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
          },
        }
      );

      // ── Subtle continuous float — alternating per card ──
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.to(card, {
          y: i % 2 === 0 ? -6 : 5,
          duration: 3.0 + i * 0.28,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.22,
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-28 px-4 overflow-hidden">

      {/* ── Background atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left glow */}
        <div className="absolute -left-40 top-1/3 w-[520px] h-[520px] bg-green-900/12 rounded-full blur-[140px]" />
        {/* Right glow */}
        <div className="absolute -right-40 bottom-1/4 w-[440px] h-[440px] bg-green-800/8 rounded-full blur-[130px]" />
        {/* Center accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#F5C518]/3 rounded-full blur-[120px]" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: "radial-gradient(circle, #4ade80 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Horizontal separator line at top */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px"
          style={{ background: "linear-gradient(90deg,transparent,rgba(74,222,128,0.15),transparent)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <div ref={headingRef} className="text-center mb-4">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/4 backdrop-blur-sm border border-green-500/25 text-green-400 text-[10px] font-bold tracking-[0.22em] uppercase px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Why Choose GrowRise
          </div>

          {/* Heading */}
          <h2 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-tight tracking-tight max-w-3xl mx-auto">
            Why Leading eCommerce Brands{" "}
            <span className="text-[#F5C518]">Choose Us</span>
          </h2>
        </div>

        {/* ── Sub text ── */}
        <div ref={subRef} className="text-center mb-14">
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            We don&apos;t focus on vanity metrics.{" "}
            <span className="text-gray-300">
              We build revenue systems that increase ROAS, improve conversion rates, and create scalable growth.
            </span>
          </p>
        </div>

        {/* ── 6-card grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CARDS.map((card, i) => (
            <FeatureCard
              key={card.id}
              card={card}
              index={i}
              cardRef={cardsRef}
            />
          ))}
        </div>

        {/* ── Bottom trust strip ── */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-8 flex-wrap justify-center sm:justify-start">
            {[
              { val: "100+", label: "Brands Scaled" },
              { val: "4.2x", label: "Average ROAS" },
              { val: "$2M+", label: "Revenue Generated" },
              { val: "98%",  label: "Client Retention" },
            ].map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <p className="text-[#F5C518] font-extrabold text-xl leading-none">{s.val}</p>
                <p className="text-gray-600 text-[10px] uppercase tracking-widest mt-1.5">{s.label}</p>
              </div>
            ))}
          </div>
          <button className="group bg-[#F5C518] text-[#071209] font-bold px-7 py-3.5 rounded-xl text-sm hover:bg-yellow-300 transition-all duration-200 hover:scale-105 flex items-center gap-2 shrink-0 shadow-[0_0_28px_rgba(245,197,24,0.18)]">
            Get Your Free Audit
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}