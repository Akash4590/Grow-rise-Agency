import { useEffect, useRef } from "react";

// ─── Icon Components ──────────────────────────────────────────────────────────

const TrendingUpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);

const ConversionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const DashboardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
  </svg>
);

const FunnelIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

// ─── Card Data ────────────────────────────────────────────────────────────────

const cards = [
  {
    id: 1,
    title: "Revenue Focused",
    description: "We optimize for profit, revenue growth, and long-term scalability.",
    Icon: TrendingUpIcon,
    accentDelay: "0ms",
  },
  {
    id: 2,
    title: "Data Driven Decisions",
    description: "Every strategy is backed by analytics, customer behavior, and performance metrics.",
    Icon: AnalyticsIcon,
    accentDelay: "80ms",
  },
  {
    id: 3,
    title: "Conversion Optimization",
    description: "We improve store performance to maximize every visitor.",
    Icon: ConversionIcon,
    accentDelay: "160ms",
  },
  {
    id: 4,
    title: "Transparent Reporting",
    description: "Real dashboards. Real metrics. Real performance visibility.",
    Icon: DashboardIcon,
    accentDelay: "240ms",
  },
  {
    id: 5,
    title: "Funnel Optimization",
    description: "We improve customer journey from click to purchase.",
    Icon: FunnelIcon,
    accentDelay: "320ms",
  },
  {
    id: 6,
    title: "Scalable Growth Systems",
    description: "Systems designed to support long-term ecommerce scaling.",
    Icon: RocketIcon,
    accentDelay: "400ms",
  },
];

// ─── Single Card ──────────────────────────────────────────────────────────────

const FeatureCard = ({ title, description, Icon, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotateX = ((y - cy) / cy) * -6;
      const rotateY = ((x - cx) / cx) * 6;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.02)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="why-card group relative rounded-2xl p-7 cursor-default"
      style={{
        transition: "transform 0.25s cubic-bezier(0.23,1,0.32,1), box-shadow 0.25s ease",
        background: "linear-gradient(145deg, rgba(15,22,15,0.95) 0%, rgba(8,14,8,0.98) 100%)",
        border: "1px solid rgba(74,222,128,0.10)",
        boxShadow: "0 4px 32px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.03)",
        backdropFilter: "blur(16px)",
        willChange: "transform",
      }}
    >
      {/* Hover border glow overlay */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          border: "1px solid rgba(234,179,8,0.35)",
          boxShadow: "0 0 28px rgba(74,222,128,0.12), inset 0 0 20px rgba(234,179,8,0.04)",
          transition: "opacity 0.35s ease",
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-8 right-8 h-px rounded-full opacity-0 group-hover:opacity-100"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(234,179,8,0.7), transparent)",
          transition: "opacity 0.35s ease",
        }}
      />

      {/* Icon container */}
      <div className="relative mb-5 inline-flex">
        <div
          className="flex items-center justify-center w-14 h-14 rounded-xl"
          style={{
            background: "linear-gradient(135deg, rgba(21,43,21,0.9) 0%, rgba(10,26,10,0.95) 100%)",
            border: "1px solid rgba(74,222,128,0.18)",
            boxShadow: "0 0 18px rgba(74,222,128,0.08)",
          }}
        >
          <span
            className="text-green-400 group-hover:text-yellow-400"
            style={{ transition: "color 0.3s ease" }}
          >
            <Icon />
          </span>
        </div>
        {/* Icon pulse dot */}
        <span
          className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-0 group-hover:opacity-100"
          style={{
            transition: "opacity 0.3s ease",
            boxShadow: "0 0 8px rgba(234,179,8,0.8)",
          }}
        />
      </div>

      {/* Content */}
      <h3
        className="text-white font-semibold text-lg mb-3 leading-snug"
        style={{ fontFamily: "'Syne', 'Space Grotesk', sans-serif", letterSpacing: "-0.01em" }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "rgba(180,200,180,0.65)" }}
      >
        {description}
      </p>

      {/* Bottom accent bar */}
      <div
        className="absolute bottom-0 left-6 right-6 h-px rounded-full"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(74,222,128,0.15), transparent)",
        }}
      />
    </div>
  );
};

// ─── Main Section ─────────────────────────────────────────────────────────────

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const gridRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    let ctx;

    const initGSAP = async () => {
      // Dynamically import GSAP + ScrollTrigger
      const { gsap } = await import("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js");
      const { ScrollTrigger } = await import("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // ── Ambient glow parallax on scroll ──
        gsap.to(glowRef.current, {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });

        // ── Header stagger reveal ──
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        });

        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: 20, scale: 0.92 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.4)" }
        )
          .fromTo(
            headingRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
            "-=0.3"
          )
          .fromTo(
            subRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
            "-=0.35"
          );

        // ── Cards stagger reveal ──
        const cards = gridRef.current?.querySelectorAll(".why-card");
        if (cards?.length) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 50, scale: 0.94 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.65,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: gridRef.current,
                start: "top 82%",
                once: true,
              },
            }
          );

          // ── Floating idle animation per card ──
          cards.forEach((card, i) => {
            gsap.to(card, {
              y: i % 2 === 0 ? -6 : 6,
              duration: 2.8 + i * 0.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: i * 0.18,
            });
          });
        }
      }, sectionRef);
    };

    initGSAP().catch(() => {
      // Fallback: just make everything visible if GSAP fails
      [badgeRef, headingRef, subRef].forEach((r) => {
        if (r.current) r.current.style.opacity = "1";
      });
      gridRef.current?.querySelectorAll(".why-card").forEach((c) => {
        c.style.opacity = "1";
      });
    });

    return () => ctx?.revert?.();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-24 md:py-32"
      style={{ background: "#060a06" }}
    >
      {/* ── Background texture ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(21,85,21,0.13) 0%, transparent 70%)",
        }}
      />

      {/* ── Ambient glow blob ── */}
      <div
        ref={glowRef}
        className="absolute pointer-events-none"
        style={{
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "500px",
          background:
            "radial-gradient(ellipse at center, rgba(34,197,94,0.07) 0%, rgba(234,179,8,0.04) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* ── Grid noise overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Header ── */}
        <div className="text-center mb-16 md:mb-20">
          {/* Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 mb-6"
            style={{ opacity: 0 }}
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                background: "linear-gradient(135deg, rgba(21,43,21,0.9), rgba(10,22,10,0.95))",
                border: "1px solid rgba(74,222,128,0.28)",
                color: "#4ade80",
                boxShadow: "0 0 20px rgba(74,222,128,0.08)",
                fontFamily: "'Syne', sans-serif",
                letterSpacing: "0.18em",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"
                style={{ boxShadow: "0 0 6px rgba(74,222,128,0.8)" }}
              />
              Why Choose Growrise
            </span>
          </div>

          {/* Heading */}
          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight mb-6"
            style={{
              opacity: 0,
              fontFamily: "'Syne', 'Space Grotesk', sans-serif",
              letterSpacing: "-0.025em",
              textShadow: "0 2px 40px rgba(0,0,0,0.8)",
            }}
          >
            Why Leading{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4ade80 0%, #eab308 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              eCommerce Brands
            </span>{" "}
            Choose Us
          </h2>

          {/* Subtext */}
          <p
            ref={subRef}
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{
              opacity: 0,
              color: "rgba(180,200,180,0.6)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            We don't focus on vanity metrics. We build{" "}
            <span style={{ color: "rgba(234,179,8,0.85)", fontWeight: 500 }}>
              revenue systems
            </span>{" "}
            that increase ROAS, improve conversion rates, and create scalable growth.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {cards.map((card, index) => (
            <FeatureCard
              key={card.id}
              title={card.title}
              description={card.description}
              Icon={card.Icon}
              index={index}
            />
          ))}
        </div>

        {/* ── Bottom CTA strip ── */}
        <div className="mt-16 md:mt-20 text-center">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium"
            style={{
              background: "linear-gradient(135deg, rgba(21,43,21,0.7), rgba(10,22,10,0.8))",
              border: "1px solid rgba(74,222,128,0.15)",
              color: "rgba(180,200,180,0.55)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <span
              className="w-2 h-2 rounded-full bg-green-400 inline-block"
              style={{
                boxShadow: "0 0 8px rgba(74,222,128,0.9)",
                animation: "pulse-dot 2s ease-in-out infinite",
              }}
            />
            Trusted by 100+ eCommerce brands worldwide
            <span
              className="w-2 h-2 rounded-full bg-yellow-400 inline-block"
              style={{
                boxShadow: "0 0 8px rgba(234,179,8,0.9)",
                animation: "pulse-dot 2s ease-in-out infinite 0.5s",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Inline keyframes ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.75); }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;