// src/components/shopify/ShopifyHero.jsx
// ─────────────────────────────────────────────────────────────────────────────
// UPGRADED:
//  • Image: object-contain, full visibility, no cropping, max-w-[600px]
//  • GSAP: floating y:-15 loop, stagger reveal, x:80 slide-in
//  • Premium: radial glow, floating particles, rotation ring
//  • Responsive: mobile stack, tablet balanced, desktop 2-col
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// ── Checklist items ───────────────────────────────────────────────────────────
const CHECKLIST = [
  "Custom Shopify Store Design",
  "Winning Product Research",
  "High-Converting Layouts",
  "Speed & SEO Optimization",
  "Apps & Integrations Setup",
  "Payment & Shipping Setup",
];

// ── Floating particle ─────────────────────────────────────────────────────────
function Particle({ style }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        background: "rgba(74,222,128,0.55)",
        boxShadow: "0 0 6px rgba(74,222,128,0.8)",
        ...style,
      }}
    />
  );
}

// ── Shopify bag SVG — improved proportions & readability ─────────────────────
function ShopifyBag() {
  return (
    <svg
      viewBox="0 0 400 420"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Bag gradient */}
        <linearGradient id="hbBagTop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#7ee83a" />
          <stop offset="45%"  stopColor="#3ea819" />
          <stop offset="100%" stopColor="#1d5c08" />
        </linearGradient>
        {/* Bag left face */}
        <linearGradient id="hbBagLeft" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"  stopColor="#1a5208" />
          <stop offset="100%" stopColor="#2e7a10" />
        </linearGradient>
        {/* Handle gradient */}
        <linearGradient id="hbHandle" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#a8f060" />
          <stop offset="100%" stopColor="#3ea819" />
        </linearGradient>
        {/* Screen gradient */}
        <linearGradient id="hbScreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#0a2015" />
          <stop offset="100%" stopColor="#060e08" />
        </linearGradient>
        {/* Floor glow */}
        <radialGradient id="hbFloor" cx="50%" cy="100%" r="50%">
          <stop offset="0%"   stopColor="#00ff88" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#00ff88" stopOpacity="0" />
        </radialGradient>
        {/* Ambient halo */}
        <radialGradient id="hbHalo" cx="50%" cy="55%" r="50%">
          <stop offset="0%"   stopColor="#00ff88" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#00ff88" stopOpacity="0" />
        </radialGradient>
        {/* Glow filter */}
        <filter id="hbGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        {/* Soft shadow */}
        <filter id="hbSoft">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── Ambient halo behind everything ── */}
      <ellipse cx="200" cy="230" rx="170" ry="140" fill="url(#hbHalo)" />

      {/* ── Phone / dashboard card behind bag ── */}
      <g transform="translate(232, 65) rotate(4)">
        <rect width="140" height="190" rx="16"
          fill="url(#hbScreen)"
          stroke="rgba(74,222,128,0.28)" strokeWidth="1.5"
          filter="url(#hbSoft)" />
        {/* Status bar */}
        <rect x="12" y="14" width="70" height="7" rx="3.5" fill="rgba(74,222,128,0.35)" />
        <rect x="12" y="26" width="50" height="5" rx="2.5" fill="rgba(255,255,255,0.12)" />
        {/* Chart bars */}
        <rect x="12"  y="80" width="14" height="28" rx="3" fill="rgba(74,222,128,0.25)" />
        <rect x="30"  y="68" width="14" height="40" rx="3" fill="rgba(74,222,128,0.4)" />
        <rect x="48"  y="54" width="14" height="54" rx="3" fill="rgba(74,222,128,0.6)" />
        <rect x="66"  y="44" width="14" height="64" rx="3" fill="#4ade80" />
        <rect x="84"  y="50" width="14" height="58" rx="3" fill="rgba(74,222,128,0.7)" />
        <rect x="102" y="36" width="14" height="72" rx="3" fill="#4ade80" />
        {/* Rising line */}
        <polyline
          points="19,104 37,95 55,80 73,70 91,74 109,58"
          stroke="#F5C518" strokeWidth="2.2" fill="none"
          strokeLinecap="round" strokeLinejoin="round"
          filter="url(#hbGlow)" />
        {/* Check circle */}
        <circle cx="70" cy="160" r="14"
          fill="rgba(74,222,128,0.12)" stroke="#4ade80" strokeWidth="1.5" />
        <path d="M63 160 L68 165 L77 154"
          stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* ── Main bag body ── */}
      {/* Handles */}
      <path
        d="M148 148 Q148 106 180 106 Q212 106 212 148"
        stroke="url(#hbHandle)"
        strokeWidth="13"
        fill="none"
        strokeLinecap="round"
        filter="url(#hbSoft)"
      />
      {/* Main face */}
      <path
        d="M100 148 L106 310 Q107 320 118 320 L270 320 Q280 320 281 310 L287 148 Z"
        fill="url(#hbBagTop)"
      />
      {/* Left darker face for 3D */}
      <path
        d="M100 148 L106 310 Q107 320 118 320 L155 320 L148 148 Z"
        fill="url(#hbBagLeft)"
        opacity="0.6"
      />
      {/* Bag fold/rim */}
      <path
        d="M100 172 L287 172"
        stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"
      />
      {/* Bag crease left */}
      <path
        d="M148 148 L142 320"
        stroke="rgba(0,0,0,0.12)" strokeWidth="2"
      />
      {/* Shine */}
      <ellipse cx="136" cy="205" rx="14" ry="32"
        fill="rgba(255,255,255,0.07)"
        transform="rotate(-12 136 205)" />

      {/* "S" logo */}
      <text
        x="193" y="270"
        textAnchor="middle"
        fontSize="96"
        fontWeight="900"
        fill="white"
        fontFamily="Arial, Helvetica, sans-serif"
        filter="url(#hbGlow)"
        style={{ letterSpacing: "-3px" }}
      >S</text>

      {/* ── Floor glow ── */}
      <ellipse cx="193" cy="318" rx="120" ry="14" fill="url(#hbFloor)" />
      {/* Neon ring */}
      <ellipse cx="193" cy="318" rx="118" ry="10"
        fill="none"
        stroke="#4ade80"
        strokeWidth="1.5"
        opacity="0.6"
        filter="url(#hbGlow)"
      />

      {/* ── Floating stat card — Revenue (top right) ── */}
      <g transform="translate(290, 72)">
        <rect width="96" height="52" rx="10"
          fill="rgba(6,18,10,0.95)" stroke="rgba(74,222,128,0.38)" strokeWidth="1"
          filter="url(#hbSoft)" />
        <text x="12" y="20" fontSize="9.5" fill="#6b7280" fontFamily="Arial" fontWeight="500">Revenue</text>
        <text x="12" y="36" fontSize="16" fontWeight="800" fill="#4ade80" fontFamily="Arial">$125K</text>
        <text x="12" y="47" fontSize="8.5" fill="#4ade80" fontFamily="Arial">▲ +104%</text>
      </g>

      {/* ── Floating stat card — ROAS (bottom left) ── */}
      <g transform="translate(16, 230)">
        <rect width="90" height="52" rx="10"
          fill="rgba(6,18,10,0.95)" stroke="rgba(245,197,24,0.38)" strokeWidth="1"
          filter="url(#hbSoft)" />
        <text x="12" y="20" fontSize="9.5" fill="#6b7280" fontFamily="Arial" fontWeight="500">ROAS</text>
        <text x="12" y="38" fontSize="20" fontWeight="800" fill="#F5C518" fontFamily="Arial">4.2x</text>
        <text x="12" y="49" fontSize="8.5" fill="#4ade80" fontFamily="Arial">▲ +80%</text>
      </g>
    </svg>
  );
}

// ── Particle positions ────────────────────────────────────────────────────────
const PARTICLES = [
  { w:  4, h:  4, top: "12%",  left: "8%",  opacity: 0.7, animDelay: "0s",    animDur: "3.8s"  },
  { w:  3, h:  3, top: "25%",  left: "92%", opacity: 0.5, animDelay: "0.6s",  animDur: "4.5s"  },
  { w:  5, h:  5, top: "72%",  left: "5%",  opacity: 0.6, animDelay: "1.1s",  animDur: "3.2s"  },
  { w:  3, h:  3, top: "85%",  left: "88%", opacity: 0.4, animDelay: "0.3s",  animDur: "5.0s"  },
  { w:  4, h:  4, top: "48%",  left: "96%", opacity: 0.55,animDelay: "1.8s",  animDur: "4.0s"  },
  { w:  2, h:  2, top: "18%",  left: "55%", opacity: 0.35,animDelay: "2.2s",  animDur: "5.5s"  },
  { w:  3, h:  3, top: "90%",  left: "40%", opacity: 0.45,animDelay: "0.9s",  animDur: "3.6s"  },
  { w:  4, h:  4, top: "60%",  left: "2%",  opacity: 0.5, animDelay: "1.5s",  animDur: "4.2s"  },
];

// ── Main component ────────────────────────────────────────────────────────────
export default function ShopifyHero() {
  const sectionRef  = useRef(null);
  const badgeRef    = useRef(null);
  const word1Ref    = useRef(null);
  const word2Ref    = useRef(null);
  const descRef     = useRef(null);
  const listRef     = useRef(null);
  const ctaRef      = useRef(null);
  const imgWrapRef  = useRef(null);
  const glowRef     = useRef(null);
  const ringRef     = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Entrance timeline ──────────────────────────────────────────────────
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Badge fade up
      tl.fromTo(badgeRef.current,
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55 }
      )
      // Heading line 1
      .fromTo(word1Ref.current,
        { y: 44, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 }, "-=0.25"
      )
      // Heading line 2
      .fromTo(word2Ref.current,
        { y: 44, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 }, "-=0.5"
      )
      // Description
      .fromTo(descRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }, "-=0.45"
      )
      // Checklist stagger
      .fromTo(
        listRef.current?.querySelectorAll(".check-item"),
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.07 },
        "-=0.35"
      )
      // CTA button
      .fromTo(ctaRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45 }, "-=0.25"
      )
      // Image slides in from right
      .fromTo(imgWrapRef.current,
        { x: 80, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.0, ease: "power2.out" },
        "<-=0.9" // start near beginning
      );

      // ── Floating animation (continuous) ───────────────────────────────────
      gsap.to(imgWrapRef.current, {
        y: -15,
        duration: 3,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: 0.8,
      });

      // ── Slow glow rotation ─────────────────────────────────────────────────
      if (ringRef.current) {
        gsap.to(ringRef.current, {
          rotation: 360,
          duration: 18,
          ease: "none",
          repeat: -1,
          transformOrigin: "center center",
        });
      }

      // ── Glow pulse ────────────────────────────────────────────────────────
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          opacity: 0.35,
          scale: 1.12,
          duration: 2.8,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // ── Button hover ─────────────────────────────────────────────────────────
  const onBtnEnter = (e) => {
    gsap.to(e.currentTarget, { scale: 1.06, duration: 0.22, ease: "power2.out",
      boxShadow: "0 0 32px rgba(245,197,24,0.45), 0 8px 20px rgba(245,197,24,0.2)" });
  };
  const onBtnLeave = (e) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.22, ease: "power2.in",
      boxShadow: "0 0 16px rgba(245,197,24,0.2)" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative pt-24 sm:pt-28 pb-16 px-4 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #050505 0%, #071510 55%, #050505 100%)",
        minHeight: "100vh",
      }}
    >
      {/* ── Background atmosphere ── */}

      {/* Top-right blob */}
      <div
        className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(74,222,128,0.09) 0%, transparent 65%)", filter: "blur(40px)" }}
      />
      {/* Bottom-left blob */}
      <div
        className="absolute -bottom-10 -left-20 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 70%)", filter: "blur(50px)" }}
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(74,222,128,0.18) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          opacity: 0.022,
        }}
      />

      {/* ── Floating particles ── */}
      {PARTICLES.map((p, i) => (
        <Particle
          key={i}
          style={{
            width: p.w,
            height: p.h,
            top: p.top,
            left: p.left,
            opacity: p.opacity,
            animation: `floatParticle ${p.animDur} ease-in-out ${p.animDelay} infinite alternate`,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center min-h-[calc(100vh-112px)]">

          {/* ════════════════════════════════
              LEFT — Text content
          ════════════════════════════════ */}
          <div className="flex flex-col justify-center py-8 lg:py-0">

            {/* Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 self-start rounded-full px-4 py-2 mb-7 text-green-400 text-[10px] font-bold tracking-[0.22em] uppercase"
              style={{
                background: "rgba(74,222,128,0.07)",
                border: "1px solid rgba(74,222,128,0.35)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-green-400"
                style={{ animation: "pulseDot 1.8s ease-in-out infinite" }}
              />
              Shopify Store Setup
            </div>

            {/* Heading — line 1 */}
            <div ref={word1Ref} className="overflow-hidden">
              <h1
                className="font-extrabold text-white leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(30px,4.2vw,52px)" }}
              >
                Launch Your Profitable
              </h1>
            </div>
            {/* Heading — line 2 */}
            <div ref={word2Ref} className="overflow-hidden mb-6">
              <h1
                className="font-extrabold text-white leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(30px,4.2vw,52px)" }}
              >
                Shopify Store
              </h1>
            </div>

            {/* Description */}
            <p
              ref={descRef}
              className="text-gray-400 leading-relaxed mb-8 max-w-[420px]"
              style={{ fontSize: "clamp(14px,1.2vw,15px)" }}
            >
              We build high-converting, mobile-friendly Shopify stores that drive sales and growth.
            </p>

            {/* Checklist */}
            <ul ref={listRef} className="flex flex-col gap-3 mb-9">
              {CHECKLIST.map((item) => (
                <li key={item} className="check-item flex items-center gap-3">
                  <span
                    className="flex items-center justify-center w-[22px] h-[22px] rounded-full shrink-0"
                    style={{
                      background: "rgba(74,222,128,0.12)",
                      border: "1px solid rgba(74,222,128,0.45)",
                    }}
                  >
                    <svg className="w-[11px] h-[11px] text-green-400" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-gray-200 font-medium" style={{ fontSize: "14px" }}>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA button */}
            <div ref={ctaRef}>
              <button
                onMouseEnter={onBtnEnter}
                onMouseLeave={onBtnLeave}
                className="inline-flex items-center gap-2 bg-[#F5C518] text-[#050505] font-bold rounded-xl transition-colors hover:bg-yellow-300"
                style={{
                  padding: "14px 32px",
                  fontSize: "14px",
                  boxShadow: "0 0 16px rgba(245,197,24,0.2)",
                  letterSpacing: "0.01em",
                }}
              >
                Get Your Free Shopify Audit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* ════════════════════════════════
              RIGHT — Shopify visual
          ════════════════════════════════ */}
          <div
            ref={imgWrapRef}
            className="relative flex items-center justify-center lg:justify-end"
            style={{ willChange: "transform" }}
          >
            {/* Deep radial glow — behind image */}
            <div
              ref={glowRef}
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(circle at 50% 60%, rgba(74,222,128,0.22) 0%, rgba(74,222,128,0.08) 40%, transparent 70%)",
                filter: "blur(32px)",
                opacity: 0.25,
                borderRadius: "50%",
                transform: "scale(1)",
              }}
            />

            {/* Subtle rotating ring decoration */}
            <div
              ref={ringRef}
              className="absolute pointer-events-none"
              style={{
                width: "480px",
                height: "480px",
                borderRadius: "50%",
                border: "1px solid rgba(74,222,128,0.07)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            >
              {/* Ring dot accent */}
              <div
                className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                style={{ background: "rgba(74,222,128,0.5)", boxShadow: "0 0 8px rgba(74,222,128,0.6)" }}
              />
            </div>

            {/* Second ring */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: "360px",
                height: "360px",
                borderRadius: "50%",
                border: "1px dashed rgba(74,222,128,0.06)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            />

            {/* Glow blur layer — cyan tint */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: "320px",
                height: "320px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(0,255,136,0.14) 0%, transparent 65%)",
                filter: "blur(24px)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            />

            {/* ── Image — object-contain, full visibility ── */}
            <div
              className="relative z-10 w-full mx-auto"
              style={{ maxWidth: "560px" }}
            >
              <ShopifyBag />
            </div>
          </div>

        </div>
      </div>

      {/* ── Keyframes injected inline ── */}
      <style>{`
        @keyframes floatParticle {
          0%   { transform: translateY(0px) scale(1);   opacity: 0.3; }
          50%  { transform: translateY(-12px) scale(1.2); opacity: 0.8; }
          100% { transform: translateY(-20px) scale(0.8); opacity: 0.2; }
        }
        @keyframes pulseDot {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.35; transform:scale(0.65); }
        }
      `}</style>
    </section>
  );
}