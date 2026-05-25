// ─────────────────────────────────────────────────────────────────────────────
// Services.jsx
// File: src/sections/Services.jsx
// deps: react, gsap + ScrollTrigger (already installed), tailwindcss
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ── Icons ──────────────────────────────────────────────────────────────────────
const ShopifyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 01-8 0" />
  </svg>
);

const WebDevIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="12" y1="2" x2="12" y2="22" />
  </svg>
);

const MarketingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const ReactWPIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <circle cx="12" cy="12" r="1" />
    <path d="M20.2 20.2c-2.04 2.04-5.5.97-8.48-2.01s-4.05-6.44-2.01-8.48c2.04-2.04 5.5-.97 8.48 2.01s4.05 6.44 2.01 8.48z" />
    <path d="M3.8 20.2c2.04 2.04 5.5.97 8.48-2.01s4.05-6.44 2.01-8.48c-2.04-2.04-5.5-.97-8.48 2.01S1.76 18.16 3.8 20.2z" />
    <path d="M12 3.8c0 2.89-3.58 5.24-8 5.24S-4 6.69-4 3.8 -0.42-1.44 4-1.44 12 .91 12 3.8z" />
  </svg>
);

// ── Services data ──────────────────────────────────────────────────────────────
const SERVICES = [
  {
    id: 1,
    category: "SHOPIFY DEVELOPMENT",
    Icon: ShopifyIcon,
    title: "Shopify Development",
    desc: "High-converting Shopify stores engineered for speed, UX, and maximum revenue per visitor. From custom themes to full-stack builds.",
    tags: ["Shopify Plus", "Custom Themes", "Speed Optimization", "CRO"],
    accentColor: "#4ade80",
    glowRgb: "74,222,128",
    iconBg: "rgba(74,222,128,0.07)",
    iconBorder: "rgba(74,222,128,0.18)",
    badgeBg: "rgba(74,222,128,0.07)",
    badgeBorder: "rgba(74,222,128,0.20)",
    badgeText: "#4ade80",
  },
  {
    id: 2,
    category: "Social media marketing",
    Icon: WebDevIcon,
    title: "Website Development",
    desc: "Performance-first websites built to convert. We design and develop landing pages, funnels, and full brand websites that drive results.",
    tags: ["Landing Pages", "Funnels", "UI/UX Design", "SEO"],
    accentColor: "#F5C518",
    glowRgb: "245,197,24",
    iconBg: "rgba(245,197,24,0.07)",
    iconBorder: "rgba(245,197,24,0.18)",
    badgeBg: "rgba(245,197,24,0.07)",
    badgeBorder: "rgba(245,197,24,0.20)",
    badgeText: "#F5C518",
  },
  {
    id: 3,
    category: "PERFORMANCE MARKETING",
    Icon: MarketingIcon,
    title: "Performance Marketing",
    desc: "Profit-driven paid media that scales. We run Meta, Google, and TikTok campaigns engineered around ROAS, not reach.",
    tags: ["Meta Ads", "Google Ads", "TikTok Ads", "Email Marketing"],
    accentColor: "#34d399",
    glowRgb: "52,211,153",
    iconBg: "rgba(52,211,153,0.07)",
    iconBorder: "rgba(52,211,153,0.18)",
    badgeBg: "rgba(52,211,153,0.07)",
    badgeBorder: "rgba(52,211,153,0.20)",
    badgeText: "#34d399",
  },
  {
    id: 4,
    category: "MODERN DEVELOPMENT",
    Icon: ReactWPIcon,
    title: "React + WordPress Solutions",
    desc: "Headless CMS, React frontends, and custom WordPress builds — scalable architecture for brands that need more than a template.",
    tags: ["React.js", "WordPress", "Headless CMS", "API Integrations"],
    accentColor: "#a3e635",
    glowRgb: "163,230,53",
    iconBg: "rgba(163,230,53,0.07)",
    iconBorder: "rgba(163,230,53,0.18)",
    badgeBg: "rgba(163,230,53,0.07)",
    badgeBorder: "rgba(163,230,53,0.20)",
    badgeText: "#a3e635",
  },
];

// ── Feature tag ────────────────────────────────────────────────────────────────
function Tag({ label, accentColor }) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide uppercase whitespace-nowrap"
      style={{
        background: `${accentColor}0d`,
        border: `1px solid ${accentColor}22`,
        color: accentColor,
      }}
    >
      {label}
    </span>
  );
}

// ── Service card ───────────────────────────────────────────────────────────────
function ServiceCard({ service, cardRef, index }) {
  const {
    Icon, category, title, desc, tags,
    accentColor, glowRgb,
    iconBg, iconBorder,
    badgeBg, badgeBorder, badgeText,
  } = service;

  const arrowRef = useRef(null);

  const handleMouseEnter = useCallback((e) => {
    const el = e.currentTarget;
    el.style.transform = "translateY(-8px) scale(1.02)";
    el.style.borderColor = `rgba(${glowRgb},0.28)`;
    el.style.boxShadow = `0 24px 72px rgba(${glowRgb},0.12), 0 0 0 1px rgba(${glowRgb},0.18), 0 8px 32px rgba(0,0,0,0.5)`;
    // Arrow micro-animation
    if (arrowRef.current) {
      gsap.to(arrowRef.current, { x: 5, duration: 0.25, ease: "power2.out" });
    }
  }, [glowRgb]);

  const handleMouseLeave = useCallback((e) => {
    const el = e.currentTarget;
    el.style.transform = "translateY(0px) scale(1)";
    el.style.borderColor = "rgba(255,255,255,0.06)";
    el.style.boxShadow = "0 4px 32px rgba(0,0,0,0.35)";
    if (arrowRef.current) {
      gsap.to(arrowRef.current, { x: 0, duration: 0.22, ease: "power2.in" });
    }
  }, []);

  return (
    <div
      ref={(el) => (cardRef.current[index] = el)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col"
      style={{
        background: "linear-gradient(160deg,#0a110c 0%,#070d08 60%,#050905 100%)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "20px",
        boxShadow: "0 4px 32px rgba(0,0,0,0.35)",
        padding: "28px",
        transition: "transform 0.35s cubic-bezier(0.25,1,0.5,1), border-color 0.3s ease, box-shadow 0.35s ease",
        willChange: "transform",
        overflow: "hidden",
      }}
    >
      {/* Top accent glow line */}
      <div
        className="absolute top-0 left-8 right-8 h-[1px] rounded-full"
        style={{ background: `linear-gradient(90deg,transparent,${accentColor}50,transparent)` }}
      />

      {/* Corner glow blob */}
      <div
        className="absolute -top-12 -right-12 w-36 h-36 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle,rgba(${glowRgb},0.06) 0%,transparent 70%)` }}
      />

      {/* ── Category badge ── */}
      <div
        className="inline-flex items-center gap-1.5 self-start mb-5 px-3 py-1.5 rounded-full text-[9px] font-black tracking-[0.18em] uppercase"
        style={{
          background: badgeBg,
          border: `1px solid ${badgeBorder}`,
          color: badgeText,
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full shrink-0"
          style={{ background: accentColor }}
        />
        {category}
      </div>

      {/* ── Large icon container ── */}
      <div
        className="flex items-center justify-center mb-6 rounded-2xl"
        style={{
          width: "64px",
          height: "64px",
          background: iconBg,
          border: `1px solid ${iconBorder}`,
          color: accentColor,
          boxShadow: `0 0 24px rgba(${glowRgb},0.08)`,
        }}
      >
        <Icon />
      </div>

      {/* ── Title ── */}
      <h3 className="text-white font-bold text-[18px] leading-snug tracking-tight mb-3">
        {title}
      </h3>

      {/* ── Description ── */}
      <p className="text-gray-500 text-sm leading-[1.75] flex-1 mb-5">
        {desc}
      </p>

      {/* ── Feature tags ── */}
      <div className="flex flex-wrap gap-2 mb-5">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} accentColor={accentColor} />
        ))}
      </div>

      {/* ── Divider ── */}
      <div
        className="mb-5 h-px w-full"
        style={{ background: "linear-gradient(90deg,rgba(255,255,255,0.06),transparent)" }}
      />

      {/* ── Bottom CTA ── */}
      <a href="./shopify" className="inline-flex items-center gap-2 text-sm font-bold group cursor-pointer"
        style={{ color: accentColor }}
      >
        Explore Service
        <span
          ref={arrowRef}
          className="inline-flex"
          style={{ display: "inline-flex" }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </a>
    </div>
  );
}

// ── Main Section ───────────────────────────────────────────────────────────────
export default function Services() {
  const sectionRef = useRef(null);
  const headerRef  = useRef(null);
  const subRef     = useRef(null);
  const cardsRef   = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Header reveal
      gsap.fromTo(
        headerRef.current,
        { y: 36, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%" },
        }
      );

      // Subtext reveal
      gsap.fromTo(
        subRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        }
      );

      // Cards stagger
      gsap.fromTo(
        cardsRef.current.filter(Boolean),
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1,
          duration: 0.75, ease: "power3.out",
          stagger: { each: 0.12, from: "start" },
          scrollTrigger: { trigger: sectionRef.current, start: "top 74%" },
        }
      );

      // Subtle float loop — each card phase-offset
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.to(card, {
          y: i % 2 === 0 ? -5 : 4,
          duration: 3.2 + i * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2,
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative py-20 sm:py-28 px-4 overflow-hidden">

      {/* ── Atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-green-900/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[440px] h-[440px] bg-green-800/6 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-[#F5C518]/3 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: "radial-gradient(circle,#4ade80 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Top separator */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[55%] h-px"
          style={{ background: "linear-gradient(90deg,transparent,rgba(74,222,128,0.14),transparent)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div ref={headerRef} className="text-center mb-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/4 backdrop-blur-sm border border-green-500/25 text-green-400 text-[10px] font-black tracking-[0.22em] uppercase px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Our Expertise
          </div>

          {/* Heading */}
          <h2 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-tight tracking-tight">
            Comprehensive{" "}
            <span className="text-[#F5C518]">Digital Solutions</span>
          </h2>
        </div>

        {/* ── Sub ── */}
        <div ref={subRef} className="text-center mb-14">
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            End-to-end services designed to elevate your brand and drive{" "}
            <span className="text-gray-300 font-medium">measurable growth.</span>
          </p>
        </div>

        {/* ── 4-col cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
              cardRef={cardsRef}
            />
          ))}
        </div>

        {/* ── Bottom CTA strip ── */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-5 pt-8 border-t border-white/5">
          <p className="text-gray-500 text-sm text-center sm:text-left max-w-md">
            Need a custom solution?{" "}
            <span className="text-gray-300">
              Every service can be combined into a full-stack growth package tailored to your brand.
            </span>
          </p>
          <div className="flex gap-3 shrink-0">
            <button className="group bg-[#F5C518] text-[#071209] font-bold px-6 py-3.5 rounded-xl text-sm hover:bg-yellow-300 transition-all duration-200 hover:scale-105 flex items-center gap-2 shadow-[0_0_28px_rgba(245,197,24,0.15)]">
              Get a Free Consultation
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="border border-white/10 text-white font-semibold px-6 py-3.5 rounded-xl text-sm hover:bg-white/6 transition-all duration-200 flex items-center gap-2 group">
              View All Services
              <svg className="w-4 h-4 opacity-60 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}