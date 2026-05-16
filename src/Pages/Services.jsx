import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: "Paid Ads Management",
    desc: "Meta & Google Ads campaigns engineered to bring high-intent buyers at maximum ROAS.",
    tags: ["Meta Ads", "Google Ads", "TikTok Ads"],
    color: "group-hover:border-blue-500/30 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]",
    iconColor: "text-blue-400 bg-blue-900/20 border-blue-800/30",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
    ),
    title: "Funnel Optimization",
    desc: "High-converting product pages, landing pages, and checkout flows built to turn visitors into buyers.",
    tags: ["Landing Pages", "Checkout", "Upsells"],
    color: "group-hover:border-purple-500/30 group-hover:shadow-[0_0_40px_rgba(168,85,247,0.08)]",
    iconColor: "text-purple-400 bg-purple-900/20 border-purple-800/30",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Conversion Rate Optimization",
    desc: "A/B testing, UX analysis, and offer engineering to squeeze maximum revenue from your existing traffic.",
    tags: ["A/B Testing", "UX Audit", "Heatmaps"],
    color: "group-hover:border-green-500/30 group-hover:shadow-[0_0_40px_rgba(74,222,128,0.08)]",
    iconColor: "text-green-400 bg-green-900/20 border-green-800/30",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Scaling Strategy",
    desc: "Data-driven scaling frameworks that increase budgets intelligently — without sacrificing profit margin.",
    tags: ["Budget Scaling", "ROAS Growth", "Forecasting"],
    color: "group-hover:border-yellow-500/30 group-hover:shadow-[0_0_40px_rgba(245,197,24,0.08)]",
    iconColor: "text-[#F5C518] bg-yellow-900/20 border-yellow-800/30",
  },
];

function Services() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 px-4 relative">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-green-900/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass border border-green-500/30 text-green-400 text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            What We Do
          </div>
          <h2 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            We Build <span className="text-[#F5C518]">Profit-Driven</span><br />
            eCommerce Growth Systems
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`group glass rounded-2xl p-6 border border-white/5 transition-all duration-400 cursor-pointer ${service.color}`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl border flex items-center justify-center mb-5 ${service.iconColor}`}>
                {service.icon}
              </div>

              <h3 className="text-white font-bold text-base mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-semibold text-gray-500 border border-white/10 px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="mt-5 flex items-center gap-1 text-gray-600 group-hover:text-[#F5C518] text-xs font-semibold transition-colors">
                Learn more
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;