import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const results = [
  { from: "$3K", to: "$25K/Month", label: "In 60 Days", desc: "Revenue grew 733% using our ad funnel system.", change: "+733%", color: "border-green-700/40", glow: "shadow-[0_0_40px_rgba(74,222,128,0.06)]" },
  { from: "1.1x", to: "4.2x ROAS", label: "Achieved Consistently", desc: "Consistent ROAS across multiple ad campaigns.", change: "+4.2x", color: "border-[#F5C518]/30", glow: "shadow-[0_0_40px_rgba(245,197,24,0.06)]" },
  { from: "2.1%", to: "+120% CVR", label: "Conversion Rate", desc: "Through funnel CRO and store optimization.", change: "▲ 120%", color: "border-blue-700/40", glow: "shadow-[0_0_40px_rgba(59,130,246,0.06)]" },
];

function MiniChart({ color }) {
  return (
    <svg viewBox="0 0 80 36" className="w-16 h-8" fill="none">
      <polyline
        points="0,30 16,22 32,26 48,12 64,8 80,2"
        stroke={color} strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round"
      />
      <circle cx="80" cy="2" r="3" fill={color} />
    </svg>
  );
}

function Results() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const chartColors = ["#4ade80", "#F5C518", "#60a5fa"];

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 px-4 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-green-900/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass border border-green-500/30 text-green-400 text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
            Real Results
          </div>
          <h2 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Numbers Don't Lie.<br />
            <span className="text-[#F5C518]">Our Clients' Results Do.</span>
          </h2>
        </div>

        {/* Result cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {results.map((r, i) => (
            <div
              key={r.to}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`glass rounded-2xl p-7 border ${r.color} ${r.glow} card-hover`}
            >
              {/* From → To */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-500 text-sm font-medium line-through">{r.from}</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-white font-extrabold text-2xl">{r.to}</span>
              </div>

              <p className="text-[#F5C518] font-bold text-sm mb-4">{r.label}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{r.desc}</p>

              {/* Chart + change */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <MiniChart color={chartColors[i]} />
                <span className={`text-sm font-bold ${i === 0 ? "text-green-400" : i === 1 ? "text-[#F5C518]" : "text-blue-400"}`}>
                  {r.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <div className="mt-12 glass rounded-2xl p-6 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <p className="text-gray-400 text-sm max-w-md">
            These aren't cherry-picked numbers. Every result above comes from a real GrowRise client campaign.
          </p>
          <button className="shrink-0 bg-[#F5C518] text-[#071209] font-bold px-6 py-3 rounded-xl text-sm hover:bg-yellow-300 transition-colors yellow-glow">
            See All Case Studies →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Results;