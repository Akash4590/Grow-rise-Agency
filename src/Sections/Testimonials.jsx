import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AlexThompson from "../assets/Alex-Thompson.jpg";
import SarahMitchell from "../assets/Sarah-Mitchell.jpg";
import JamesLee from "../assets/James-Lee.jpg";
import PriyaSharma from "../assets/Priya-Sharma.jpg";

gsap.registerPlugin(ScrollTrigger);

// ── Testimonial data ──────────────────────────
const testimonials = [
  {
    name: "Alex Thompson",
    role: "Fashion Brand Owner",
    avatar: AlexThompson,
    text: "GrowRise took our store from $2K to $20K per month in just 8 weeks. Their ad strategy and funnel system is on another level. Best investment we've ever made for our brand.",
    roas: "4.1x",
    revenue: "$20K",
    avatarRing: "ring-emerald-500/50",
    border: "hover:border-emerald-500/30",
    glow: "hover:shadow-[0_8px_40px_rgba(16,185,129,0.12)]",
    badge: "Fashion",
    badgeCls: "bg-emerald-900/50 text-emerald-400 border-emerald-700/40",
    dotCls: "bg-emerald-400",
  },
  {
    name: "Sarah Mitchell",
    role: "Health & Wellness Brand",
    avatar: SarahMitchell,
    text: "Finally a team that cares about profit, not just ad spend. They rebuilt our entire funnel and our conversion rate went from 1.2% to 3.8%. The results speak for themselves.",
    roas: "3.8x",
    revenue: "$38K",
    avatarRing: "ring-purple-500/50",
    border: "hover:border-purple-500/30",
    glow: "hover:shadow-[0_8px_40px_rgba(139,92,246,0.12)]",
    badge: "Wellness",
    badgeCls: "bg-purple-900/50 text-purple-400 border-purple-700/40",
    dotCls: "bg-purple-400",
  },
  {
    name: "James Lee",
    role: "Home Decor Brand",
    avatar: JamesLee,
    text: "Our ROAS improved from 1.4x to 4.2x in just 60 days. The GrowRise team is responsive, data-driven, and they actually care about scaling profitably. Highly recommend.",
    roas: "4.2x",
    revenue: "$55K",
    avatarRing: "ring-blue-500/50",
    border: "hover:border-blue-500/30",
    glow: "hover:shadow-[0_8px_40px_rgba(59,130,246,0.12)]",
    badge: "Home Decor",
    badgeCls: "bg-blue-900/50 text-blue-400 border-blue-700/40",
    dotCls: "bg-blue-400",
  },
  {
    name: "Priya Sharma",
    role: "Beauty & Skincare Brand",
    avatar: PriyaSharma,
    text: "Switched from another agency and the difference is night and day. GrowRise actually understands eCommerce at a deep level. Our revenue tripled in just 3 months.",
    roas: "5.1x",
    revenue: "$72K",
    avatarRing: "ring-pink-500/50",
    border: "hover:border-pink-500/30",
    glow: "hover:shadow-[0_8px_40px_rgba(236,72,153,0.12)]",
    badge: "Beauty",
    badgeCls: "bg-pink-900/50 text-pink-400 border-pink-700/40",
    dotCls: "bg-pink-400",
  },
];

// ── 5 Star row ────────────────────────────────
function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className="w-3.5 h-3.5 text-[#F5C518]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ── Quote SVG ─────────────────────────────────
function Quote() {
  return (
    <svg className="w-9 h-9 text-[#F5C518]/15" fill="currentColor" viewBox="0 0 32 32">
      <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.5c0-1.38 1.12-2.5 2.5-2.5V8zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-6.5c0-1.38 1.12-2.5 2.5-2.5V8z" />
    </svg>
  );
}

// ── Single card ───────────────────────────────
function TestimonialCard({ t, cardRef, index }) {
  const initials = t.name.split(" ").map((n) => n[0]).join("");

  return (
    <div
      ref={(el) => (cardRef.current[index] = el)}
      className={`
        relative flex flex-col
        bg-[#080f0a] border border-white/6 rounded-2xl overflow-hidden
        transition-all duration-300
        ${t.border} ${t.glow}
      `}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5C518]/30 to-transparent" />

      <div className="flex flex-col flex-1 p-6 gap-5">

        {/* ── Row 1: Quote + Stars ── */}
        <div className="flex items-center justify-between">
          <Quote />
          <Stars />
        </div>

        {/* ── Row 2: Review text ── */}
        <p className="text-gray-400 text-sm leading-relaxed flex-1">
          "{t.text}"
        </p>

        {/* ── Row 3: ROAS + Revenue stats ── */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/3 border border-white/5 rounded-xl px-3 py-3 text-center">
            <p className="text-[#F5C518] font-extrabold text-2xl leading-none">{t.roas}</p>
            <p className="text-gray-600 text-[10px] uppercase tracking-widest mt-1.5">ROAS</p>
          </div>
          <div className="bg-white/3 border border-white/5 rounded-xl px-3 py-3 text-center">
            <p className="text-green-400 font-extrabold text-2xl leading-none">{t.revenue}</p>
            <p className="text-gray-600 text-[10px] uppercase tracking-widest mt-1.5">Monthly</p>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-white/5" />

        {/* ── Row 4: Avatar + Name + Badge ── */}
        <div className="flex items-center gap-3">

          {/* Avatar with ring + online dot */}
          <div className={`relative shrink-0 w-12 h-12 rounded-full ring-2 ring-offset-[3px] ring-offset-[#080f0a] ${t.avatarRing}`}>
            <img
              src={t.avatar}
              alt={t.name}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement.querySelector(".avatar-fallback").style.display = "flex";
              }}
            />
            {/* Fallback initials */}
            <div className="avatar-fallback w-12 h-12 rounded-full bg-gray-700 absolute inset-0 items-center justify-center text-white font-bold text-sm hidden">
              {initials}
            </div>
            {/* Online indicator */}
            <span className={`absolute bottom-0 right-0 w-3.5 h-3.5 ${t.dotCls} rounded-full border-2 border-[#080f0a]`} />
          </div>

          {/* Name + role */}
          <div className="flex-1 min-w-0">
            <p className="text-white font-bold text-sm leading-tight truncate">{t.name}</p>
            <p className="text-gray-500 text-xs mt-0.5 truncate">{t.role}</p>
          </div>

          {/* Industry badge */}
          <span className={`shrink-0 text-[10px] font-bold border px-2.5 py-1 rounded-full ${t.badgeCls}`}>
            {t.badge}
          </span>
        </div>

      </div>
    </div>
  );
}

// ── Main Section ──────────────────────────────
function Testimonials() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Heading slides up
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      // Cards stagger — alternating from left/right
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          {
            y: 70,
            opacity: 0,
            scale: 0.92,
            rotateY: i % 2 === 0 ? -6 : 6,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
            duration: 0.8,
            delay: i * 0.14,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 74%" },
          }
        );
      });

      // Subtle float loop — alternating up/down per card
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.to(card, {
          y: i % 2 === 0 ? -7 : 5,
          duration: 3.2 + i * 0.35,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.3,
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 px-4 relative overflow-hidden">

      {/* Background ambient glow */}
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-900/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -right-32 top-1/3 w-[420px] h-[420px] bg-[#F5C518]/4 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* ── Heading ── */}
        <div ref={headingRef} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white/4 backdrop-blur-sm border border-green-500/30 text-green-400 text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Client Stories
          </div>
          <h2 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Real results from real eCommerce brands we've scaled profitably.
          </p>
        </div>

        {/* ── 4 Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} cardRef={cardsRef} />
          ))}
        </div>

        {/* ── Bottom trust row ── */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Stacked avatars + rating */}
          <div className="flex items-center gap-4">
            <div className="flex items-center -space-x-3">
              {testimonials.map((t, i) => (
                <img
                  key={t.name}
                  src={t.avatar}
                  alt={t.name}
                  className="w-9 h-9 rounded-full border-2 border-[#060d08] object-cover"
                  style={{ zIndex: 4 - i }}
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-3 h-3 text-[#F5C518]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-gray-400 text-xs font-bold ml-1">5.0</span>
              </div>
              <p className="text-gray-500 text-xs">100+ brands scaled successfully</p>
            </div>
          </div>

          <p className="text-gray-600 text-sm text-center sm:text-right max-w-xs">
            Verified results across fashion, wellness, beauty & home decor.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
