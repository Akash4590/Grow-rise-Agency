import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Alex Thompson",
    brand: "Fashion Brand Owner",
    initials: "AT",
    color: "bg-emerald-600",
    text: "GrowRise took our store from $2K to $20K per month in just 8 weeks. Their ad strategy and funnel system is on another level. Best investment we've made.",
    roas: "4.1x ROAS",
    revenue: "$20K/mo",
  },
  {
    name: "Sarah Mitchell",
    brand: "Health & Wellness Brand",
    initials: "SM",
    color: "bg-purple-600",
    text: "Finally a team that cares about profit, not just spend. They rebuilt our entire funnel and our conversion rate went from 1.2% to 3.8%. Insane results.",
    roas: "3.8x ROAS",
    revenue: "$38K/mo",
  },
  {
    name: "James Lee",
    brand: "Home Decor Brand",
    initials: "JL",
    color: "bg-blue-600",
    text: "Our ROAS improved from 1.4x to 4.2x in 60 days. The team is responsive, data-driven, and they actually care about scaling profitably. Highly recommend.",
    roas: "4.2x ROAS",
    revenue: "$55K/mo",
  },
  {
    name: "Priya Sharma",
    brand: "Beauty & Skincare Brand",
    initials: "PS",
    color: "bg-pink-600",
    text: "Switched from another agency and the difference is night and day. GrowRise actually understands eCommerce. Our revenue tripled in 3 months.",
    roas: "5.1x ROAS",
    revenue: "$72K/mo",
  },
];

function Stars() {
  return (
    <div className="flex gap-1">
      {[1,2,3,4,5].map(i => (
        <svg key={i} className="w-4 h-4 text-[#F5C518]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const cardRef = useRef(null);
  const sectionRef = useRef(null);

  // ── Autoplay ──────────────────────────────
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // ── GSAP: card swap animation ─────────────
  useEffect(() => {
    if (!cardRef.current) return;
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 20, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out" }
    );
  }, [active]);

  // ── ScrollTrigger reveal ──────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
    });
    return () => ctx.revert();
  }, []);

  const t = testimonials[active];

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 px-4 relative">
      <div className="absolute left-0 bottom-0 w-[400px] h-[300px] bg-green-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass border border-green-500/30 text-green-400 text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
            Client Stories
          </div>
          <h2 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
        </div>

        {/* Active testimonial card */}
        <div ref={cardRef} className="glass rounded-3xl p-8 sm:p-12 border border-white/5 mb-8">
          <Stars />
          <p className="text-white text-lg sm:text-xl leading-relaxed mt-6 mb-8 font-medium">
            "{t.text}"
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            {/* Client */}
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold`}>
                {t.initials}
              </div>
              <div>
                <p className="text-white font-bold">– {t.name}</p>
                <p className="text-gray-400 text-sm">{t.brand}</p>
              </div>
            </div>
            {/* Stats */}
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-[#F5C518] font-extrabold text-lg">{t.roas}</p>
                <p className="text-gray-500 text-xs">Return on Ad Spend</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <p className="text-green-400 font-extrabold text-lg">{t.revenue}</p>
                <p className="text-gray-500 text-xs">Monthly Revenue</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dots nav */}
        <div className="flex items-center justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 rounded-full ${
                i === active ? "w-8 h-2 bg-[#F5C518]" : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;