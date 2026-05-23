import { useEffect, useRef } from "react";
import { gsap } from "gsap";


const FEATURES = [
  "Custom Shopify Store Design",
  "Winning Product Research",
  "High-Converting Layouts",
  "Speed & SEO Optimization",
  "Apps & Integrations Setup",
  "Payment & Shipping Setup",
];

// ── Green circle check icon (matches design) ──
function GreenCheckIcon() {
  return (
    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#22c55e] flex items-center justify-center mt-[1px]">
      <svg
        className="w-3 h-3 text-white"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 6l3 3 5-5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

// ── Shopify Bag SVG Illustration ──────────────
function ShopifyBagIllustration() {
  return (
    <div className="relative flex items-center justify-center w-full h-full select-none">
      {/* Outer glow ring */}
      <div className="absolute w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-full bg-[#1a5c1a]/30 blur-[60px]" />
      <div className="absolute w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-full bg-[#22c55e]/10 blur-[40px]" />

      {/* SVG Bag */}
      <svg
        viewBox="0 0 260 290"
        className="hero-bag relative z-10 w-[200px] h-[220px] md:w-[260px] md:h-[290px] drop-shadow-[0_20px_60px_rgba(34,197,94,0.3)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bag shadow */}
        <ellipse cx="130" cy="278" rx="80" ry="10" fill="#000" opacity="0.3" />

        {/* Bag body */}
        <rect x="22" y="80" width="216" height="185" rx="20" fill="#95BF47" />

        {/* Bag body lower shade */}
        <rect x="22" y="180" width="216" height="85" rx="0" fill="#7daa30" />
        <rect x="22" y="245" width="216" height="20" rx="20" fill="#7daa30" />

        {/* Top handle */}
        <path
          d="M88 82 Q88 28 130 28 Q172 28 172 82"
          fill="none"
          stroke="#4a7c14"
          strokeWidth="16"
          strokeLinecap="round"
        />
        {/* Handle highlight */}
        <path
          d="M92 80 Q92 38 130 38 Q168 38 168 80"
          fill="none"
          stroke="#6aab20"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* White S letter */}
        <text
          x="130"
          y="162"
          textAnchor="middle"
          fontSize="82"
          fontWeight="900"
          fill="white"
          fontFamily="Arial, sans-serif"
          opacity="0.95"
        >
          S
        </text>

        {/* Bar chart inside bag — bottom area */}
        <g opacity="0.6">
          <rect x="44" y="195" width="18" height="42" rx="4" fill="white" opacity="0.25" />
          <rect x="70" y="183" width="18" height="54" rx="4" fill="white" opacity="0.35" />
          <rect x="96" y="169" width="18" height="68" rx="4" fill="white" opacity="0.50" />
          <rect x="122" y="154" width="18" height="83" rx="4" fill="white" opacity="0.65" />
          <rect x="148" y="138" width="18" height="99" rx="4" fill="white" opacity="0.80" />
          <rect x="174" y="120" width="18" height="117" rx="4" fill="white" opacity="0.95" />
        </g>

        {/* Growth arrow line */}
        <polyline
          points="44,205 70,190 96,173 122,158 148,142 174,126 196,112"
          fill="none"
          stroke="#d4f86e"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
        {/* Arrow head */}
        <polygon points="196,104 208,118 184,118" fill="#d4f86e" opacity="0.9" />

        {/* Bag highlight (top-left gloss) */}
        <ellipse cx="70" cy="105" rx="22" ry="12" fill="white" opacity="0.08" transform="rotate(-30 70 105)" />
      </svg>

      {/* Floating badge — top right of bag */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-[#0d2210] border border-[#22c55e]/40 rounded-lg px-3 py-2 z-20 shadow-lg">
        <p className="text-[#22c55e] text-xs font-bold">+100 Stores</p>
        <p className="text-gray-400 text-[10px]">Successfully Built</p>
      </div>

      {/* Floating badge — bottom left of bag */}
      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-[#0d2210] border border-[#F5C518]/40 rounded-lg px-3 py-2 z-20 shadow-lg">
        <p className="text-[#F5C518] text-xs font-bold">4.8 ★ Rating</p>
        <p className="text-gray-400 text-[10px]">Client Satisfaction</p>
      </div>
    </div>
  );
}

// ── Main HeroSection Component ────────────────
export default function HeroSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge entrance
      gsap.fromTo(
        ".hero-badge",
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.1 }
      );

      // Headline
      gsap.fromTo(
        ".hero-headline",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.25 }
      );

      // Description
      gsap.fromTo(
        ".hero-desc",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.45 }
      );

      // Feature list items stagger
      gsap.fromTo(
        ".hero-feature-item",
        { opacity: 0, x: -24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.09,
          ease: "power2.out",
          delay: 0.6,
        }
      );

      // Bag illustration
      gsap.fromTo(
        ".hero-bag",
        { opacity: 0, scale: 0.75, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "back.out(1.5)",
          delay: 0.4,
        }
      );

      // Floating bag idle animation
      gsap.to(".hero-bag", {
        y: -12,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.4,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0B1A0D] overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full bg-[#1a4a1a]/40 blur-[120px]" />
        <div className="absolute bottom-[-60px] right-[-60px] w-[300px] h-[300px] rounded-full bg-[#1a4a1a]/30 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-12 pb-14 md:pt-16 md:pb-18">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">

          {/* ── LEFT COLUMN ── */}
          <div className="flex-1 flex flex-col">

            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2 self-start mb-6">
              <span className="flex items-center gap-2 border border-[#2a5c2a] bg-[#0d2210] text-[#7CFC00] text-[11px] font-bold uppercase tracking-[0.15em] px-4 py-[7px] rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#7CFC00] animate-pulse" />
                Shopify Store Setup
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-headline text-white font-extrabold leading-[1.12] mb-5">
              <span className="block text-[36px] md:text-[46px] lg:text-[50px]">
                Launch Your Profitable
              </span>
              <span className="block text-[36px] md:text-[46px] lg:text-[50px]">
                Shopify Store
              </span>
            </h1>

            {/* Description */}
            <p className="hero-desc text-gray-400 text-[14px] md:text-[15px] leading-[1.7] mb-8 max-w-[440px]">
              We build high-converting, mobile-friendly Shopify stores that
              drive sales and growth.
            </p>

            {/* Feature Checklist */}
            <ul className="flex flex-col gap-[10px]">
              {FEATURES.map((feature) => (
                <li
                  key={feature}
                  className="hero-feature-item flex items-start gap-3"
                >
                  <GreenCheckIcon />
                  <span className="text-gray-300 text-[14px] leading-[1.5]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── RIGHT COLUMN — Illustration ── */}
          <div className="flex-1 relative min-h-[280px] md:min-h-[360px] lg:min-h-[400px] flex items-center justify-center">
            <ShopifyBagIllustration />
          </div>

        </div>
      </div>
    </section>
  );
}