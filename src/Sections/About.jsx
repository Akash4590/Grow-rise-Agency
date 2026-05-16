import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "100+", label: "Brands Scaled", icon: "🚀" },
  { value: "4.2x", label: "Average ROAS", icon: "📈" },
  { value: "$2M+", label: "Revenue Generated", icon: "💰" },
];

const bullets = [
  "Paid media strategy that actually converts",
  "Full-funnel optimization from ad to checkout",
  "Data-driven decisions — no guessing",
  "Dedicated growth team for every client",
];

function About() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left content fade up
      gsap.fromTo(
        leftRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
      // Stats cards stagger
      gsap.fromTo(
        cardsRef.current,
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );
      // Floating loop on cards
      cardsRef.current.forEach((card, i) => {
        gsap.to(card, {
          y: -8, duration: 2.5 + i * 0.4, repeat: -1, yoyo: true,
          ease: "sine.inOut", delay: i * 0.3,
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 px-4 relative overflow-hidden">
      {/* BG glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-green-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* LEFT */}
        <div ref={leftRef} className="flex-1">
          <div className="inline-flex items-center gap-2 glass border border-green-500/30 text-green-400 text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Who We Are
          </div>

          <h2 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
            We're Not an Agency.<br />
            <span className="text-[#F5C518]">We're Your Growth Partner.</span>
          </h2>

          <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg">
            GrowRise is a performance-first eCommerce growth agency. We combine paid media mastery, conversion science, and scaling systems to take brands from stuck to scaling — profitably.
          </p>

          <ul className="flex flex-col gap-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-gray-300 text-sm">
                <span className="w-5 h-5 rounded-full bg-green-900/60 border border-green-700/50 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: Stats */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-5 w-full max-w-sm lg:max-w-xs mx-auto">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              ref={(el) => (cardsRef.current[i] = el)}
              className="glass rounded-2xl p-6 text-center green-glow"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <p className="text-white font-extrabold text-3xl mb-1">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;