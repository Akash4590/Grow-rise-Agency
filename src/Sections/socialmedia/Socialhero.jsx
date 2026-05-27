// src/components/socialmedia/SocialHero.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CHECKLIST = [
  "Content Strategy & Creation",
  "Daily Posting & Engagement",
  "Community Management",
  "Brand Growth & Awareness",
  "Performance Tracking",
];

// ── Platform icon SVGs ─────────────────────────────────────────────────────────
function InstagramIcon({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <defs>
        <radialGradient id="igGrad" cx="30%" cy="100%" r="120%">
          <stop offset="0%"   stopColor="#f9ce34" />
          <stop offset="25%"  stopColor="#ee2a7b" />
          <stop offset="55%"  stopColor="#9b26af" />
          <stop offset="100%" stopColor="#4c68d7" />
        </radialGradient>
      </defs>
      <rect width="60" height="60" rx="14" fill="url(#igGrad)" />
      <rect x="14" y="14" width="32" height="32" rx="8" stroke="white" strokeWidth="2.5" fill="none" />
      <circle cx="30" cy="30" r="8.5" stroke="white" strokeWidth="2.5" fill="none" />
      <circle cx="40" cy="19" r="2.2" fill="white" />
    </svg>
  );
}

function FacebookIcon({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <rect width="60" height="60" rx="14" fill="#1877f2" />
      <path d="M36 12h-4a8 8 0 00-8 8v4h-4v8h4v16h8V32h5l1-8h-6v-4a2 2 0 012-2h4V12z"
        fill="white" />
    </svg>
  );
}

function TikTokIcon({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <rect width="60" height="60" rx="14" fill="#010101" />
      <path d="M35 12c.5 5.5 4.5 8 9 8v7c-3.2 0-6.2-1-9-3v13a12 12 0 11-12-12c.4 0 .8 0 1.2.1V33c-.4-.1-.8-.1-1.2-.1a5 5 0 100 10 5 5 0 005-5V12h7z"
        fill="white" />
      <path d="M44 15c-1.5 0-3-.5-4.2-1.5" stroke="#fe2c55" strokeWidth="1.5" />
    </svg>
  );
}

function YouTubeIcon({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <rect width="60" height="60" rx="14" fill="#ff0000" />
      <path d="M48.5 21.5S48 18.5 46.5 17C44.7 15 42.7 15 41.8 14.9 35.7 14.5 27 14.5 27 14.5h-.1s-8.7 0-14.8.4C11.3 15 9.3 15 7.5 17 6 18.5 5.5 21.5 5.5 21.5S5 25 5 28.5v3.2c0 3.5.5 7 .5 7s.5 3 2 4.5c1.8 1.9 4.2 1.8 5.2 2 3.8.4 16.3.5 16.3.5s8.7 0 14.8-.4c.9-.1 2.9-.1 4.7-2 1.5-1.5 2-4.5 2-4.5s.5-3.5.5-7v-3.2c0-3.5-.5-7-.5-7z"
        fill="#ff0000" />
      <polygon points="24,22 38,30 24,38" fill="white" />
    </svg>
  );
}

function LinkedInIcon({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <rect width="60" height="60" rx="14" fill="#0a66c2" />
      <rect x="11" y="22" width="8" height="26" fill="white" />
      <circle cx="15" cy="14" r="5" fill="white" />
      <path d="M27 22h7.5v3.5h.1c1-2 3.5-4 7.4-4 8 0 9.5 5.2 9.5 12V48h-8V35c0-3 0-6.8-4.1-6.8-4.2 0-4.8 3.2-4.8 6.5V48H27V22z"
        fill="white" />
    </svg>
  );
}

// ── Growth chart mini SVG ─────────────────────────────────────────────────────
function GrowthChart() {
  return (
    <svg viewBox="0 0 180 80" fill="none" className="w-full">
      <defs>
        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#4ade80" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="chartLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#4ade80" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#4ade80" />
        </linearGradient>
        <filter id="cglow">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* Area fill */}
      <path d="M0 78 L20 65 L40 60 L60 48 L80 40 L100 28 L120 18 L140 10 L160 5 L180 2 L180 78 Z"
        fill="url(#chartFill)" />
      {/* Line */}
      <polyline
        points="0,78 20,65 40,60 60,48 80,40 100,28 120,18 140,10 160,5 180,2"
        stroke="url(#chartLine)" strokeWidth="2.5" fill="none"
        strokeLinecap="round" strokeLinejoin="round"
        filter="url(#cglow)" />
      {/* Arrow tip */}
      <polygon points="175,0 183,3 176,8" fill="#4ade80" filter="url(#cglow)" />
      {/* Dots */}
      {[[80,40],[120,18],[160,5]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill="#4ade80" filter="url(#cglow)" />
      ))}
    </svg>
  );
}

// ── Floating social icon wrapper ──────────────────────────────────────────────
function FloatingIcon({ children, top, left, right, bottom, floatRef }) {
  return (
    <div ref={floatRef} className="absolute z-20 drop-shadow-2xl cursor-default"
      style={{ top, left, right, bottom,
        filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.5))",
        willChange: "transform" }}>
      {children}
    </div>
  );
}

export default function SocialHero() {
  const sectionRef = useRef(null);
  const badgeRef   = useRef(null);
  const h1aRef     = useRef(null);
  const h1bRef     = useRef(null);
  const h1cRef     = useRef(null);
  const descRef    = useRef(null);
  const listRef    = useRef(null);
  const rightRef   = useRef(null);
  const igRef      = useRef(null);
  const fbRef      = useRef(null);
  const ttRef      = useRef(null);
  const ytRef      = useRef(null);
  const liRef      = useRef(null);
  const chartRef   = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Entrance timeline ──
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(badgeRef.current,  { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
        .fromTo(h1aRef.current,    { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.25")
        .fromTo(h1bRef.current,    { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.45")
        .fromTo(h1cRef.current,    { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.45")
        .fromTo(descRef.current,   { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55 }, "-=0.3")
        .fromTo(
          listRef.current?.querySelectorAll(".ch-item"),
          { x: -18, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.45, stagger: 0.08 }, "-=0.3"
        )
        .fromTo(rightRef.current,  { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9 }, "<-=0.6")
        .fromTo(chartRef.current,  { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4");

      // ── Floating icon loops ──
      const floats = [
        { ref: igRef, y: -15, dur: 3.0, delay: 0 },
        { ref: fbRef, y: -10, dur: 3.5, delay: 0.4 },
        { ref: ttRef, y: -18, dur: 2.8, delay: 0.7 },
        { ref: ytRef, y: -12, dur: 3.2, delay: 0.2 },
        { ref: liRef, y: -14, dur: 3.8, delay: 0.9 },
      ];

      floats.forEach(({ ref, y, dur, delay }) => {
        gsap.to(ref.current, {
          y, duration: dur, ease: "power1.inOut",
          repeat: -1, yoyo: true, delay,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-28 pb-16 px-4"
      style={{ background: "linear-gradient(180deg,#050505 0%,#071510 60%,#050505 100%)" }}
    >
      {/* BG glows */}
      <div className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: "rgba(74,222,128,0.07)" }} />
      <div className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full blur-[130px] pointer-events-none"
        style={{ background: "rgba(74,222,128,0.04)" }} />
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle,#4ade80 1px,transparent 1px)", backgroundSize: "36px 36px" }} />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── LEFT ── */}
          <div>
            {/* Badge */}
            <div ref={badgeRef}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-7 text-green-400 text-[10px] font-bold tracking-[0.2em] uppercase"
              style={{ background: "rgba(74,222,128,0.07)", border: "1px solid rgba(74,222,128,0.35)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Social Media Marketing
            </div>

            {/* Heading — 3 lines stagger */}
            <div className="mb-5">
              <div ref={h1aRef}>
                <h1 className="font-extrabold text-white leading-[1.08] tracking-tight"
                  style={{ fontSize: "clamp(32px,4.5vw,56px)" }}>
                  Build Your Brand.
                </h1>
              </div>
              <div ref={h1bRef}>
                <h1 className="font-extrabold text-white leading-[1.08] tracking-tight"
                  style={{ fontSize: "clamp(32px,4.5vw,56px)" }}>
                  Engage.
                </h1>
              </div>
              <div ref={h1cRef}>
                <h1 className="font-extrabold text-white leading-[1.08] tracking-tight"
                  style={{ fontSize: "clamp(32px,4.5vw,56px)" }}>
                  Grow.
                </h1>
              </div>
            </div>

            {/* Desc */}
            <p ref={descRef} className="text-gray-400 text-[15px] leading-relaxed mb-8 max-w-[400px]">
              We create result-driven social media strategies that build brand awareness and drive sales.
            </p>

            {/* Checklist */}
            <ul ref={listRef} className="flex flex-col gap-3">
              {CHECKLIST.map((item) => (
                <li key={item} className="ch-item flex items-center gap-3">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full shrink-0"
                    style={{ background: "rgba(74,222,128,0.14)", border: "1px solid rgba(74,222,128,0.45)" }}>
                    <svg className="w-[10px] h-[10px] text-green-400" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.9"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-gray-200 text-[14px] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── RIGHT ── */}
          <div ref={rightRef}
            className="relative flex items-center justify-center"
            style={{ minHeight: "360px", willChange: "transform" }}>

            {/* Radial glow behind icons */}
            <div className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(circle at 50% 50%, rgba(74,222,128,0.18) 0%, transparent 65%)",
                filter: "blur(20px)",
              }} />

            {/* Green chart line at bottom */}
            <div className="absolute bottom-0 left-0 right-0 px-6">
              <div ref={chartRef}><GrowthChart /></div>
            </div>

            {/* Instagram — center-right large */}
            <FloatingIcon top="8%" left="42%" floatRef={igRef}>
              <InstagramIcon size={68} />
            </FloatingIcon>

            {/* Facebook — top right */}
            <FloatingIcon top="2%" right="2%" floatRef={fbRef}>
              <FacebookIcon size={60} />
            </FloatingIcon>

            {/* TikTok — middle */}
            <FloatingIcon top="44%" left="32%" floatRef={ttRef}>
              <TikTokIcon size={56} />
            </FloatingIcon>

            {/* YouTube — right mid */}
            <FloatingIcon top="20%" right="4%" floatRef={ytRef}>
              <YouTubeIcon size={56} />
            </FloatingIcon>

            {/* LinkedIn — bottom right */}
            <FloatingIcon bottom="24%" right="8%" floatRef={liRef}>
              <LinkedInIcon size={52} />
            </FloatingIcon>
          </div>
        </div>
      </div>
    </section>
  );
}