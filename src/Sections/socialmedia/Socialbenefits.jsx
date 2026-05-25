import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    title: "Increase Brand Awareness",
    desc: "Get discovered by the right audience.",
    icon: (
      <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="M16 4V2M16 30V28M4 16H2M30 16H28M7.8 7.8L6.4 6.4M25.6 25.6L24.2 24.2M24.2 7.8L25.6 6.4M6.4 25.6L7.8 24.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Boost Engagement & Followers",
    desc: "Build a loyal community around your brand.",
    icon: (
      <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 32 32">
        <path d="M10 20C10 20 8 18 8 15C8 11.7 10.7 9 14 9C15.5 9 16.8 9.6 17.8 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 12C22 12 24 14 24 17C24 20.3 21.3 23 18 23C16.5 23 15.2 22.4 14.2 21.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M11 27L14 24H18L21 27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="5" r="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Drive Website Traffic",
    desc: "More traffic, more leads, more sales.",
    icon: (
      <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 32 32">
        <path d="M6 24L12 16L18 20L26 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 10H26V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Improve Customer Trust",
    desc: "Social proof builds brand credibility.",
    icon: (
      <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 32 32">
        <path d="M16 4L18.5 11H26L20 15.5L22.5 22.5L16 18L9.5 22.5L12 15.5L6 11H13.5L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function SocialBenefits() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current?.querySelector(".section-heading"), {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.65,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0a0f0a] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-2xl sm:text-3xl font-bold text-white text-center mb-4">
          Why Social Media Marketing?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative flex flex-col items-center text-center gap-4 p-6 rounded-2xl
                         bg-white/5 border border-white/10 backdrop-blur-sm cursor-pointer
                         transition-all duration-300 hover:-translate-y-2 hover:border-green-700/50
                         hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]"
            >
              <div className="w-14 h-14 rounded-full bg-green-900/30 border border-green-700/30 flex items-center justify-center">
                {b.icon}
              </div>
              <h3 className="text-white font-bold text-base leading-snug">{b.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}