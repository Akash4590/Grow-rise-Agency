import { useEffect, useRef } from "react";
import painpointImg from "../assets/painpoint.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const painCards = [
  {
    icon: "📉",
    title: "Low ROAS",
    desc: "You're spending on ads but the return doesn't justify the spend. Every dollar feels like a gamble.",
    color: "border-red-900/40",
    glow: "hover:shadow-[0_0_30px_rgba(239,68,68,0.1)]",
  },
  {
    icon: "🛒",
    title: "Poor Conversion",
    desc: "Traffic lands on your store but doesn't buy. Visitors scroll, click away, and never return.",
    color: "border-orange-900/40",
    glow: "hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]",
  },
  {
    icon: "🧭",
    title: "No Scaling Strategy",
    desc: "You have no proven system. Scaling feels risky, unpredictable, and completely overwhelming.",
    color: "border-yellow-900/40",
    glow: "hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]",
  },
];

const bullets = [
  "Traffic comes in — but sales don't follow",
  "Your store isn't built to convert visitors",
  "Your ads burn budget without a clear ROI",
  "Scaling feels chaotic and unpredictable",
];

function PainPoints() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const blockRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards stagger
      gsap.fromTo(cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
      // Block slide up
      gsap.fromTo(blockRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: blockRef.current, start: "top 80%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 px-4 relative">
      {/* BG glow */}
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-red-950/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass border border-red-900/40 text-red-400 text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
            The Problem
          </div>
          <h2 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Why Most eCommerce Brands<br />
            <span className="text-[#F5C518]">Fail To Scale</span>
          </h2>
        </div>

        {/* Pain cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          {painCards.map((card, i) => (
            <div
              key={card.title}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`glass rounded-2xl p-7 border ${card.color} ${card.glow} transition-all duration-300 card-hover`}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-white font-bold text-lg mb-3">{card.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Dark frustration block */}
        <div ref={blockRef} className="glass rounded-3xl p-8 sm:p-12 border border-white/5 flex flex-col lg:flex-row items-center gap-12">
          {/* Left bullets */}
          <div className="flex-1">
            <h3 className="text-white font-extrabold text-2xl sm:text-3xl leading-snug mb-8">
              You're spending money on ads...<br />
              <span className="text-gray-400 font-semibold">but not seeing real profit.</span>
            </h3>
            <ul className="flex flex-col gap-4">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-gray-300 text-sm sm:text-base">
                  <span className="text-[#F5C518] text-xl leading-none mt-0.5 shrink-0">✕</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Right visual card */}
          <div className="flex-1 w-full max-w-sm">
            <div className="glass rounded-3xl overflow-hidden border border-red-900/30 shadow-xl">
              <img
                src={painpointImg}
                alt="eCommerce pain point"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default PainPoints;