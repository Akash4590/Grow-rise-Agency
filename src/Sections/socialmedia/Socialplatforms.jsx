import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const platforms = [
  {
    name: "Facebook",
    color: "#1877F2",
    glow: "rgba(24,119,242,0.4)",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect width="40" height="40" rx="10" fill="#1877F2" />
        <path d="M25 14H22.5C22.2 14 22 14.2 22 14.5V17H25L24.5 20H22V28H19V20H17V17H19V14.5C19 12.6 20.3 11 22.5 11H25V14Z" fill="white" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    color: "#fd5949",
    glow: "rgba(253,89,73,0.4)",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <defs>
          <radialGradient id="ig2" cx="30%" cy="107%" r="150%">
            <stop offset="0%" stopColor="#fdf497" />
            <stop offset="45%" stopColor="#fd5949" />
            <stop offset="60%" stopColor="#d6249f" />
            <stop offset="90%" stopColor="#285AEB" />
          </radialGradient>
        </defs>
        <rect width="40" height="40" rx="10" fill="url(#ig2)" />
        <circle cx="20" cy="20" r="7" stroke="white" strokeWidth="2.5" fill="none" />
        <circle cx="28" cy="12" r="1.8" fill="white" />
        <rect x="4" y="4" width="32" height="32" rx="10" stroke="white" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    color: "#69C9D0",
    glow: "rgba(105,201,208,0.4)",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect width="40" height="40" rx="10" fill="#010101" />
        <path d="M28 13.5C26.7 13.5 25.5 12.8 24.8 11.7C24.1 10.6 23.8 9.4 23.8 8.2H20.8V22.8C20.8 24.3 19.7 25.5 18.2 25.5C16.7 25.5 15.7 24.3 15.7 22.9C15.7 21.4 16.8 20.2 18.2 20.2C18.5 20.2 18.8 20.3 19.1 20.4V17.3C18.8 17.2 18.5 17.2 18.2 17.2C15.2 17.2 12.7 19.7 12.7 22.9C12.7 26.1 15.2 28.5 18.2 28.5C21.2 28.5 23.8 26 23.8 22.8V14.9C24.9 15.7 26.2 16.1 27.5 16.1C27.7 16.1 27.9 16.1 28 16.1V13.5Z" fill="white" />
        <path d="M24.5 11C24.9 11.7 25.7 12.2 26.5 12.4V12C26.2 12 25.9 11.9 25.5 11.7C25.2 11.5 24.8 11.3 24.5 11Z" fill="#69C9D0" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    color: "#FF0000",
    glow: "rgba(255,0,0,0.4)",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect width="40" height="40" rx="10" fill="#FF0000" />
        <path d="M33.5 13.5C33.2 12.4 32.3 11.5 31.2 11.2C29.2 10.7 20 10.7 20 10.7C20 10.7 10.8 10.7 8.8 11.2C7.7 11.5 6.8 12.4 6.5 13.5C6 15.5 6 20 6 20C6 20 6 24.5 6.5 26.5C6.8 27.6 7.7 28.5 8.8 28.8C10.8 29.3 20 29.3 20 29.3C20 29.3 29.2 29.3 31.2 28.8C32.3 28.5 33.2 27.6 33.5 26.5C34 24.5 34 20 34 20C34 20 34 15.5 33.5 13.5ZM17.5 24.2V15.8L25 20L17.5 24.2Z" fill="white" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    color: "#0A66C2",
    glow: "rgba(10,102,194,0.4)",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect width="40" height="40" rx="10" fill="#0A66C2" />
        <path d="M13 17H10V28H13V17ZM11.5 15.5C12.3 15.5 13 14.8 13 14C13 13.2 12.3 12.5 11.5 12.5C10.7 12.5 10 13.2 10 14C10 14.8 10.7 15.5 11.5 15.5ZM30 23C30 20.3 28.3 17 25 17C23.4 17 22.2 17.8 21.5 18.8V17H18.5V28H21.5V23.5C21.5 21.7 22.7 20 24.5 20C26.3 20 27 21.6 27 23.5V28H30V23Z" fill="white" />
      </svg>
    ),
  },
];

export default function SocialPlatforms() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current?.querySelector(".section-heading"), {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0a0f0a] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-2xl sm:text-3xl font-bold text-white text-center mb-10 sm:mb-14">
          Platforms We Manage
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {platforms.map((p, i) => (
            <div
              key={p.name}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative flex flex-col items-center justify-center gap-3 p-5 sm:p-6 rounded-2xl
                         bg-white/5 border border-white/10 backdrop-blur-sm cursor-pointer
                         transition-all duration-300 hover:-translate-y-1"
              style={{
                "--glow": p.glow,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 25px ${p.glow}, 0 0 50px ${p.glow.replace("0.4", "0.15")}`;
                e.currentTarget.style.borderColor = p.color + "66";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "";
              }}
            >
              {p.icon}
              <span className="text-white text-sm font-semibold">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}