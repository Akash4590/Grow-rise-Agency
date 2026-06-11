// src/components/meta/MetaHero.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CHECKLIST = [
  "Audience Research & Targeting",
  "High-Converting Ad Creatives",
  "Campaign Setup & Management",
  "A/B Testing & Optimization",
  "Retargeting & Lookalike Audiences",
  "Performance Tracking & Reporting",
];

// Meta infinity logo SVG
function MetaLogo() {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="metaGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#0082fb" />
          <stop offset="50%"  stopColor="#0064e0" />
          <stop offset="100%" stopColor="#0082fb" />
        </linearGradient>
        <linearGradient id="metaGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#0082fb" />
          <stop offset="100%" stopColor="#00b8ff" />
        </linearGradient>
        <radialGradient id="metaGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%"   stopColor="#0082fb" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0082fb" stopOpacity="0" />
        </radialGradient>
        <filter id="metaBlur">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Background glow */}
      <ellipse cx="140" cy="80" rx="130" ry="70" fill="url(#metaGlow)" />

      {/* Meta ∞ — left loop */}
      <path
        d="M60 80 C60 52 78 38 96 38 C114 38 126 52 140 80 C126 108 114 122 96 122 C78 122 60 108 60 80 Z"
        stroke="url(#metaGrad1)" strokeWidth="16" fill="none"
        strokeLinecap="round" filter="url(#metaBlur)"
      />
      <path
        d="M60 80 C60 52 78 38 96 38 C114 38 126 52 140 80 C126 108 114 122 96 122 C78 122 60 108 60 80 Z"
        stroke="url(#metaGrad1)" strokeWidth="10" fill="none"
        strokeLinecap="round"
      />

      {/* Meta ∞ — right loop */}
      <path
        d="M140 80 C154 52 166 38 184 38 C202 38 220 52 220 80 C220 108 202 122 184 122 C166 122 154 108 140 80 Z"
        stroke="url(#metaGrad2)" strokeWidth="16" fill="none"
        strokeLinecap="round" filter="url(#metaBlur)"
      />
      <path
        d="M140 80 C154 52 166 38 184 38 C202 38 220 52 220 80 C220 108 202 122 184 122 C166 122 154 108 140 80 Z"
        stroke="url(#metaGrad2)" strokeWidth="10" fill="none"
        strokeLinecap="round"
      />

      {/* Instagram icon floating top right */}
      <g transform="translate(218, 20)">
        <rect width="36" height="36" rx="9" fill="url(#igMeta)" />
        <defs>
          <radialGradient id="igMeta" cx="30%" cy="100%" r="120%">
            <stop offset="0%"   stopColor="#f9ce34" />
            <stop offset="30%"  stopColor="#ee2a7b" />
            <stop offset="100%" stopColor="#4c68d7" />
          </radialGradient>
        </defs>
        <rect x="8" y="8" width="20" height="20" rx="5" stroke="white" strokeWidth="1.5" fill="none" />
        <circle cx="18" cy="18" r="5" stroke="white" strokeWidth="1.5" fill="none" />
        <circle cx="25" cy="11" r="1.3" fill="white" />
      </g>

      {/* Facebook icon floating bottom left */}
      <g transform="translate(18, 104)">
        <rect width="34" height="34" rx="9" fill="#1877f2" />
        <path d="M20 6h-2.5a4.5 4.5 0 00-4.5 4.5V13H10v5h3v10h5V18h3l.5-5H18v-2.5a1 1 0 011-1H22V6z"
          fill="white" />
      </g>

      {/* Small floating dots */}
      <circle cx="48"  cy="40"  r="3" fill="#0082fb" opacity="0.6" />
      <circle cx="235" cy="115" r="2.5" fill="#00b8ff" opacity="0.5" />
      <circle cx="250" cy="50"  r="2" fill="#0082fb" opacity="0.4" />
      <circle cx="28"  cy="68"  r="2" fill="#0082fb" opacity="0.4" />
    </svg>
  );
}

export default function MetaHero() {
  const sectionRef = useRef(null);
  const badgeRef   = useRef(null);
  const h1Ref      = useRef(null);
  const descRef    = useRef(null);
  const listRef    = useRef(null);
  const rightRef   = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(badgeRef.current,  { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
        .fromTo(h1Ref.current?.querySelectorAll(".word"),
          { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, stagger: 0.06 }, "-=0.25")
        .fromTo(descRef.current,   { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55 }, "-=0.35")
        .fromTo(listRef.current?.querySelectorAll(".ch-item"),
          { x: -18, opacity: 0 }, { x: 0, opacity: 1, duration: 0.45, stagger: 0.08 }, "-=0.3")
        .fromTo(rightRef.current,  { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9 }, "<-=0.7");

      // Float the logo
      gsap.to(rightRef.current, {
        y: -16, duration: 3, ease: "power1.inOut", repeat: -1, yoyo: true, delay: 1,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const words = ["Run", "High-Converting", "Meta", "Ads"];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-28 pb-16 px-4"
      style={{ background: "linear-gradient(180deg,#050505 0%,#050d18 60%,#050505 100%)" }}
    >
      {/* BG glow blobs */}
      <div className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: "rgba(0,130,251,0.08)" }} />
      <div className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full blur-[130px] pointer-events-none"
        style={{ background: "rgba(0,130,251,0.05)" }} />
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle,#0082fb 1px,transparent 1px)", backgroundSize: "36px 36px" }} />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT */}
          <div>
            <div ref={badgeRef}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-7 text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase"
              style={{ background: "rgba(0,130,251,0.09)", border: "1px solid rgba(0,130,251,0.35)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Meta Marketing
            </div>

            <h1 ref={h1Ref}
              className="font-extrabold text-white leading-[1.1] tracking-tight mb-5"
              style={{ fontSize: "clamp(30px,4.2vw,52px)" }}>
              {words.map((w, i) => (
                <span key={i} className="word inline-block mr-[0.28em]">{w}</span>
              ))}
            </h1>

            <p ref={descRef} className="text-gray-400 text-[15px] leading-relaxed mb-8 max-w-[420px]">
              We create and manage Meta Ads (Facebook &amp; Instagram) that generate leads and maximize ROI.
            </p>

            <ul ref={listRef} className="flex flex-col gap-3.5">
              {CHECKLIST.map((item) => (
                <li key={item} className="ch-item flex items-center gap-3">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full shrink-0"
                    style={{ background: "rgba(0,130,251,0.14)", border: "1px solid rgba(0,130,251,0.45)" }}>
                    <svg className="w-[10px] h-[10px] text-blue-400" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.9"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-gray-200 text-[14px] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — Meta logo visual */}
          <div ref={rightRef}
            className="relative flex items-center justify-center"
            style={{ minHeight: "300px", willChange: "transform" }}>
            {/* Blue glow behind */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="w-[320px] h-[320px] rounded-full"
                style={{ background: "radial-gradient(circle,rgba(0,130,251,0.2) 0%,transparent 70%)", filter: "blur(20px)" }} />
            </div>
            <div className="relative w-full max-w-[380px]">
              <MetaLogo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
