import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const checklistItems = [
  "Content Strategy & Creation",
  "Daily Posting & Engagement",
  "Community Management",
  "Brand Growth & Awareness",
  "Performance Tracking",
];

// SVG icons for social platforms
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <defs>
      <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#ig-grad)" />
    <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.5" fill="none" />
    <circle cx="17.5" cy="6.5" r="1" fill="white" />
    <rect x="2" y="2" width="20" height="20" rx="6" stroke="white" strokeWidth="1.2" fill="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <rect width="24" height="24" rx="6" fill="#1877F2" />
    <path d="M15.5 8H13.5C13.2 8 13 8.2 13 8.5V10.5H15.5L15.1 13H13V20H10V13H8V10.5H10V8.5C10 6.6 11.3 5 13.5 5H15.5V8Z" fill="white" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <rect width="24" height="24" rx="6" fill="#0A66C2" />
    <path d="M7 10H5V19H7V10ZM6 9C6.6 9 7 8.6 7 8C7 7.4 6.6 7 6 7C5.4 7 5 7.4 5 8C5 8.6 5.4 9 6 9ZM19 14C19 12 17.8 10 15.5 10C14.4 10 13.5 10.5 13 11.2V10H11V19H13V14.5C13 13.1 13.9 12 15 12C16.1 12 17 12.9 17 14.5V19H19V14Z" fill="white" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <rect width="24" height="24" rx="6" fill="#010101" />
    <path d="M17 8.5C16.2 8.5 15.5 8.1 15.1 7.5C14.7 6.9 14.5 6.2 14.5 5.5H12.5V14.7C12.5 15.7 11.7 16.5 10.7 16.5C9.7 16.5 9 15.7 9 14.8C9 13.8 9.8 13 10.7 13C10.9 13 11.1 13 11.3 13.1V11C11.1 11 10.9 11 10.7 11C8.6 11 7 12.7 7 14.8C7 16.9 8.6 18.5 10.7 18.5C12.8 18.5 14.5 16.8 14.5 14.7V9.9C15.3 10.4 16.1 10.7 17 10.7V8.5Z" fill="white" />
    <path d="M15.5 7C15.8 7.5 16.4 7.9 17 8V7.5C16.7 7.5 16.3 7.4 16 7.2C15.9 7.1 15.7 7 15.5 7Z" fill="#69C9D0" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <rect width="24" height="24" rx="6" fill="#FF0000" />
    <path d="M19.8 7.8C19.6 7.1 19 6.5 18.3 6.3C17 6 12 6 12 6C12 6 7 6 5.7 6.3C5 6.5 4.4 7.1 4.2 7.8C4 9.1 4 12 4 12C4 12 4 14.9 4.2 16.2C4.4 16.9 5 17.5 5.7 17.7C7 18 12 18 12 18C12 18 17 18 18.3 17.7C19 17.5 19.6 16.9 19.8 16.2C20 14.9 20 12 20 12C20 12 20 9.1 19.8 7.8ZM10.5 14.5V9.5L14.5 12L10.5 14.5Z" fill="white" />
  </svg>
);

const GrowthChart = () => (
  <svg viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#22c55e" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
      </linearGradient>
    </defs>
    {/* Grid lines */}
    {[20, 40, 60, 80].map((y) => (
      <line key={y} x1="10" y1={y} x2="170" y2={y} stroke="#22c55e" strokeOpacity="0.1" strokeWidth="1" />
    ))}
    {/* Area fill */}
    <path d="M10 85 L40 70 L70 60 L100 45 L130 30 L160 15 L160 95 L10 95 Z" fill="url(#chartGrad)" />
    {/* Line */}
    <path d="M10 85 L40 70 L70 60 L100 45 L130 30 L160 15" stroke="#22c55e" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    {/* Dots */}
    {[[10,85],[40,70],[70,60],[100,45],[130,30],[160,15]].map(([x,y],i) => (
      <circle key={i} cx={x} cy={y} r="3.5" fill="#22c55e" stroke="#0a1a0a" strokeWidth="1.5" />
    ))}
    {/* Arrow up */}
    <path d="M155 10 L160 3 L165 10" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function SocialHero() {
  const headingRef = useRef(null);
  const checklistRef = useRef(null);
  const badgeRef = useRef(null);
  const descRef = useRef(null);
  const chartRef = useRef(null);
  const igRef = useRef(null);
  const fbRef = useRef(null);
  const ttRef = useRef(null);
  const liRef = useRef(null);
  const ytRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge
      gsap.from(badgeRef.current, { opacity: 0, y: -20, duration: 0.6, ease: "power2.out" });

      // Heading stagger
      const lines = headingRef.current?.querySelectorAll(".hero-line");
      if (lines) {
        gsap.from(lines, { opacity: 0, y: 30, duration: 0.7, stagger: 0.15, ease: "power3.out", delay: 0.2 });
      }

      // Description
      gsap.from(descRef.current, { opacity: 0, y: 20, duration: 0.6, delay: 0.6, ease: "power2.out" });

      // Checklist items stagger
      const items = checklistRef.current?.querySelectorAll(".checklist-item");
      if (items) {
        gsap.from(items, { opacity: 0, x: -20, duration: 0.5, stagger: 0.1, delay: 0.8, ease: "power2.out" });
      }

      // Chart fade reveal
      gsap.from(chartRef.current, { opacity: 0, scale: 0.85, duration: 0.9, delay: 0.4, ease: "back.out(1.5)" });

      // Floating icons
      const floatIcon = (ref, y, delay) => {
        gsap.to(ref.current, {
          y,
          repeat: -1,
          duration: 3,
          yoyo: true,
          ease: "sine.inOut",
          delay,
        });
      };

      floatIcon(igRef, -15, 0);
      floatIcon(fbRef, -10, 0.4);
      floatIcon(ttRef, -18, 0.2);
      floatIcon(liRef, -12, 0.6);
      floatIcon(ytRef, -14, 0.8);

      // Icon entrance
      [igRef, fbRef, ttRef, liRef, ytRef].forEach((ref, i) => {
        gsap.from(ref.current, { opacity: 0, scale: 0, duration: 0.5, delay: 0.5 + i * 0.1, ease: "back.out(2)" });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0a0f0a] overflow-hidden flex items-center">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-green-600/10 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-green-700/8 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div ref={badgeRef} className="inline-flex items-center gap-2 self-start">
              <span className="flex items-center gap-2 bg-green-900/30 border border-green-700/40 text-green-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Social Media Marketing
              </span>
            </div>

            {/* Heading */}
            <div ref={headingRef} className="flex flex-col gap-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
                <span className="hero-line block">Build Your Brand.</span>
                <span className="hero-line block text-green-400">Engage.</span>
                <span className="hero-line block">Grow.</span>
              </h1>
            </div>

            {/* Description */}
            <p ref={descRef} className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-md">
              We create result-driven social media strategies that build brand awareness and drive sales.
            </p>

            {/* Checklist */}
            <ul ref={checklistRef} className="flex flex-col gap-3 mt-2">
              {checklistItems.map((item) => (
                <li key={item} className="checklist-item flex items-center gap-3 text-white text-sm sm:text-base font-medium">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 12 12">
                      <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — social icons + chart */}
          <div className="relative flex items-center justify-center h-80 lg:h-[420px]">
            {/* Green radial glow behind icons */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 rounded-full bg-green-600/15 blur-[60px]" />
            </div>

            {/* Growth Chart */}
            <div ref={chartRef} className="absolute bottom-4 left-2 w-44 sm:w-52 opacity-90">
              <GrowthChart />
            </div>

            {/* Instagram */}
            <div ref={igRef} className="absolute top-6 right-12 w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_0_18px_rgba(225,48,108,0.7)] cursor-pointer">
              <InstagramIcon />
            </div>

            {/* Facebook */}
            <div ref={fbRef} className="absolute top-4 right-1/2 translate-x-1/2 w-14 h-14 sm:w-18 sm:h-18 drop-shadow-[0_0_18px_rgba(24,119,242,0.7)] cursor-pointer">
              <FacebookIcon />
            </div>

            {/* TikTok */}
            <div ref={ttRef} className="absolute top-1/2 right-4 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 drop-shadow-[0_0_18px_rgba(105,201,208,0.6)] cursor-pointer">
              <TikTokIcon />
            </div>

            {/* LinkedIn */}
            <div ref={liRef} className="absolute bottom-16 left-1/3 w-14 h-14 sm:w-16 sm:h-16 drop-shadow-[0_0_18px_rgba(10,102,194,0.7)] cursor-pointer">
              <LinkedInIcon />
            </div>

            {/* YouTube */}
            <div ref={ytRef} className="absolute top-12 left-1/4 w-12 h-12 sm:w-14 sm:h-14 drop-shadow-[0_0_18px_rgba(255,0,0,0.6)] cursor-pointer">
              <YouTubeIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}