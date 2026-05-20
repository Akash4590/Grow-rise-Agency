import { useEffect, useRef } from "react";

// ─── Service Data ─────────────────────────────────────────────────────────────

const services = [
  {
    id: 1,
    badge: "Shopify",
    title: "Shopify Development Solutions",
    description:
      "High-converting Shopify experiences built for ecommerce growth.",
    features: [
      "Shopify Store Development",
      "Shopify Theme Customization",
      "Conversion Optimization",
      "Mobile Responsive Design",
      "Store Speed Optimization",
      "Product Page Optimization",
    ],
    accent: "#eab308",          // yellow
    accentMuted: "rgba(234,179,8,0.12)",
    accentBorder: "rgba(234,179,8,0.28)",
    accentGlow: "rgba(234,179,8,0.08)",
    Icon: () => (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M20 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
        <path d="M16 2v4M12 2v4" />
        <path d="M9 12h10M9 16h6" />
        <circle cx="19" cy="19" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: 2,
    badge: "Web Dev",
    title: "Website Development Solutions",
    description:
      "Modern business websites built for conversions, branding, and scalability.",
    features: [
      "Business Websites",
      "Landing Pages",
      "Performance Optimization",
      "SEO Friendly Structure",
      "Responsive Design",
      "Custom UI Development",
    ],
    accent: "#38bdf8",          // blue
    accentMuted: "rgba(56,189,248,0.10)",
    accentBorder: "rgba(56,189,248,0.26)",
    accentGlow: "rgba(56,189,248,0.07)",
    Icon: () => (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="5" width="22" height="16" rx="2" />
        <path d="M9 21v2M19 21v2M6 24h16" />
        <path d="M9 11l3 3-3 3M14 17h5" />
      </svg>
    ),
  },
  {
    id: 3,
    badge: "Marketing",
    title: "Performance Marketing Solutions",
    description:
      "Performance campaigns engineered for traffic, leads, and revenue.",
    features: [
      "Meta Ads",
      "Google Ads",
      "Funnel Optimization",
      "Audience Targeting",
      "Analytics Tracking",
      "Campaign Optimization",
    ],
    accent: "#4ade80",          // green
    accentMuted: "rgba(74,222,128,0.10)",
    accentBorder: "rgba(74,222,128,0.26)",
    accentGlow: "rgba(74,222,128,0.07)",
    Icon: () => (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polyline points="4 20 10 13 15 17 24 7" />
        <polyline points="18 7 24 7 24 13" />
        <path d="M4 24h20" />
      </svg>
    ),
  },
  {
    id: 4,
    badge: "Engineering",
    title: "Modern Development Solutions",
    description:
      "Frontend engineering and CMS solutions built for scalable systems.",
    features: [
      "React JS Development",
      "WordPress Development",
      "Responsive UI",
      "Component Architecture",
      "CMS Solutions",
      "Fast Performance Optimization",
    ],
    accent: "#a78bfa",          // purple
    accentMuted: "rgba(167,139,250,0.10)",
    accentBorder: "rgba(167,139,250,0.26)",
    accentGlow: "rgba(167,139,250,0.07)",
    Icon: () => (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polyline points="7 9 3 14 7 19" />
        <polyline points="21 9 25 14 21 19" />
        <line x1="17" y1="6" x2="11" y2="22" />
      </svg>
    ),
  },
];

// ─── Check Icon ───────────────────────────────────────────────────────────────

const CheckIcon = ({ color }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
  >
    <polyline points="3 8 6.5 12 13 4" />
  </svg>
);

// ─── Single Service Card ──────────────────────────────────────────────────────

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const onMove = (e) => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const cx = r.width / 2;
      const cy = r.height / 2;
      const rx = ((y - cy) / cy) * -5;
      const ry = ((x - cx) / cx) * 5;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px) scale(1.015)`;
    };

    const onLeave = () => {
      card.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)";
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const { badge, title, description, features, accent, accentMuted, accentBorder, accentGlow, Icon } = service;

  return (
    <div
      ref={cardRef}
      className="service-card group relative rounded-2xl overflow-hidden"
      style={{
        transition: "transform 0.28s cubic-bezier(0.23,1,0.32,1), box-shadow 0.28s ease",
        background:
          "linear-gradient(155deg, rgba(13,20,13,0.97) 0%, rgba(6,10,6,0.99) 100%)",
        border: `1px solid rgba(255,255,255,0.06)`,
        boxShadow: `0 8px 48px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.04) inset`,
        backdropFilter: "blur(20px)",
        willChange: "transform",
      }}
    >
      {/* Hover border glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          border: `1px solid ${accentBorder}`,
          boxShadow: `0 0 40px ${accentGlow}, inset 0 0 30px ${accentGlow}`,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Floating glow background blob */}
      <div
        className="absolute pointer-events-none opacity-0 group-hover:opacity-100"
        style={{
          top: "-20%",
          right: "-10%",
          width: "55%",
          height: "55%",
          background: `radial-gradient(ellipse, ${accentGlow} 0%, transparent 70%)`,
          filter: "blur(30px)",
          transition: "opacity 0.5s ease",
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${accent} 50%, transparent 100%)`,
          opacity: 0.5,
        }}
      />

      <div className="relative p-7 md:p-8 lg:p-9 flex flex-col h-full">

        {/* Header row: icon + badge */}
        <div className="flex items-start justify-between mb-6">
          {/* Icon */}
          <div
            className="flex items-center justify-center w-14 h-14 rounded-xl flex-shrink-0"
            style={{
              background: accentMuted,
              border: `1px solid ${accentBorder}`,
              color: accent,
              boxShadow: `0 0 22px ${accentGlow}`,
            }}
          >
            <Icon />
          </div>

          {/* Service badge */}
          <span
            className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
            style={{
              background: accentMuted,
              border: `1px solid ${accentBorder}`,
              color: accent,
              fontFamily: "'Syne', sans-serif",
            }}
          >
            {badge}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug"
          style={{
            fontFamily: "'Syne', sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-7"
          style={{ color: "rgba(170,190,170,0.6)", fontFamily: "'DM Sans', sans-serif" }}
        >
          {description}
        </p>

        {/* Divider */}
        <div
          className="mb-6 h-px w-full"
          style={{
            background: "linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
          }}
        />

        {/* Features */}
        <ul className="flex flex-col gap-3 mb-8 flex-1">
          {features.map((feat) => (
            <li key={feat} className="flex items-start gap-2.5">
              <CheckIcon color={accent} />
              <span
                className="text-sm"
                style={{
                  color: "rgba(200,215,200,0.75)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {feat}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-auto">
          <button
            className="group/btn w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300"
            style={{
              background: accentMuted,
              border: `1px solid ${accentBorder}`,
              color: accent,
              fontFamily: "'Syne', sans-serif",
              letterSpacing: "0.03em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = accent;
              e.currentTarget.style.color = "#060a06";
              e.currentTarget.style.boxShadow = `0 0 28px ${accentBorder}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = accentMuted;
              e.currentTarget.style.color = accent;
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Learn More
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 translate-x-0 group-hover/btn:translate-x-1 transition-transform duration-200">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── Main Services Section ────────────────────────────────────────────────────

const Services = () => {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const gridRef = useRef(null);
  const blobRef = useRef(null);

  useEffect(() => {
    let ctx;

    const initGSAP = async () => {
      const { gsap } = await import(
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
      );
      const { ScrollTrigger } = await import(
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
      );
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {

        // ── Parallax ambient blob ──
        gsap.to(blobRef.current, {
          y: -80,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        });

        // ── Header reveal timeline ──
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        });

        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: 24, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: "back.out(1.6)" }
        )
          .fromTo(
            headingRef.current,
            { opacity: 0, y: 36 },
            { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" },
            "-=0.35"
          )
          .fromTo(
            subRef.current,
            { opacity: 0, y: 22 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
            "-=0.4"
          );

        // ── Cards stagger reveal ──
        const cards = gridRef.current?.querySelectorAll(".service-card");
        if (cards?.length) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 60, scale: 0.92 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              stagger: 0.14,
              ease: "power3.out",
              scrollTrigger: {
                trigger: gridRef.current,
                start: "top 80%",
                once: true,
              },
            }
          );

          // ── Subtle idle float per card ──
          cards.forEach((card, i) => {
            gsap.to(card, {
              y: i % 2 === 0 ? -7 : 7,
              duration: 3.2 + i * 0.3,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: i * 0.22,
            });
          });
        }
      }, sectionRef);
    };

    initGSAP().catch(() => {
      // Graceful fallback
      [badgeRef, headingRef, subRef].forEach((r) => {
        if (r.current) r.current.style.opacity = "1";
      });
      gridRef.current?.querySelectorAll(".service-card").forEach((c) => {
        c.style.opacity = "1";
      });
    });

    return () => ctx?.revert?.();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-24 md:py-32 lg:py-36"
      style={{ background: "#060a06" }}
    >
      {/* ── Background effects ── */}

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Top gradient vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(21,85,21,0.15) 0%, transparent 65%)",
        }}
      />

      {/* Ambient center blob */}
      <div
        ref={blobRef}
        className="absolute pointer-events-none"
        style={{
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1100px",
          height: "600px",
          background:
            "radial-gradient(ellipse at 40% 50%, rgba(234,179,8,0.05) 0%, rgba(74,222,128,0.05) 40%, rgba(56,189,248,0.04) 70%, transparent 100%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Section Header ── */}
        <div className="text-center mb-16 md:mb-20">

          {/* Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2.5 mb-7"
            style={{ opacity: 0 }}
          >
            <span
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase"
              style={{
                background: "linear-gradient(135deg, rgba(21,43,21,0.85), rgba(10,20,10,0.9))",
                border: "1px solid rgba(74,222,128,0.25)",
                color: "#4ade80",
                boxShadow: "0 0 24px rgba(74,222,128,0.07)",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"
                style={{ boxShadow: "0 0 7px rgba(74,222,128,0.9)", animation: "svc-pulse 2s ease-in-out infinite" }}
              />
              Comprehensive Digital Solutions
            </span>
          </div>

          {/* Heading */}
          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-white leading-tight mb-6"
            style={{
              opacity: 0,
              fontFamily: "'Syne', sans-serif",
              letterSpacing: "-0.028em",
            }}
          >
            Everything You Need To{" "}
            <span
              style={{
                background: "linear-gradient(130deg, #eab308 0%, #fde68a 55%, #eab308 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Scale Your Business
            </span>{" "}
            Online
          </h2>

          {/* Subtext */}
          <p
            ref={subRef}
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{
              opacity: 0,
              color: "rgba(175,195,175,0.58)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            From ecommerce growth systems to high-converting websites and
            performance marketing —{" "}
            <span style={{ color: "rgba(74,222,128,0.75)", fontWeight: 500 }}>
              we build digital systems designed for growth.
            </span>
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 lg:gap-7"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* ── Bottom trust bar ── */}
        <div className="mt-16 md:mt-20 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {[
            { label: "Shopify Partners", dot: "#eab308" },
            { label: "Meta Business Partner", dot: "#38bdf8" },
            { label: "Google Ads Certified", dot: "#4ade80" },
            { label: "React & WordPress Experts", dot: "#a78bfa" },
          ].map(({ label, dot }) => (
            <div key={label} className="flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full inline-block flex-shrink-0"
                style={{ background: dot, boxShadow: `0 0 6px ${dot}` }}
              />
              <span
                className="text-xs font-medium tracking-wide"
                style={{
                  color: "rgba(175,195,175,0.45)",
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "0.04em",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Inline keyframes ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,400;0,500;1,400&display=swap');
        @keyframes svc-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.45; transform: scale(0.7); }
        }
      `}</style>
    </section>
  );
};

export default Services;