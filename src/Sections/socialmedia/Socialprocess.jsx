import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "1",
    title: "Strategy",
    desc: "We create a custom social media strategy.",
  },
  {
    number: "2",
    title: "Content Creation",
    desc: "We develop content that engages your audience.",
  },
  {
    number: "3",
    title: "Management",
    desc: "Daily posting & community engagement.",
  },
  {
    number: "4",
    title: "Growth",
    desc: "We grow your audience & improve results.",
  },
];

const ArrowRight = () => (
  <svg className="w-8 h-8 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 32 32">
    <path d="M8 16H24M24 16L17 9M24 16L17 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowDown = () => (
  <svg className="w-8 h-8 text-green-500 mx-auto" fill="none" viewBox="0 0 32 32">
    <path d="M16 8V24M16 24L9 17M16 24L23 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function SocialProcess() {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current?.querySelector(".section-heading"), {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      gsap.from(stepsRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0a0f0a] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-2xl sm:text-3xl font-bold text-white text-center mb-12 sm:mb-16">
          Our Process
        </h2>

        {/* Desktop: horizontal */}
        <div className="hidden lg:flex items-start justify-center gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex items-start">
              {/* Step card */}
              <div
                ref={(el) => (stepsRef.current[i] = el)}
                className="flex flex-col items-center text-center w-44 xl:w-52 gap-4"
              >
                {/* Number bubble */}
                <div className="w-14 h-14 rounded-full bg-[#0a1a0a] border-2 border-green-500 flex flex-col items-center justify-center relative">
                  <span className="text-[10px] text-green-400 font-semibold absolute -top-3 bg-[#0a0f0a] px-1">
                    {step.number}
                  </span>
                  <span className="text-green-400 text-xl font-bold">{step.number}</span>
                </div>
                <h3 className="text-white font-bold text-base">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed px-2">{step.desc}</p>
              </div>

              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <div className="flex items-start pt-6 px-2">
                  <ArrowRight />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile/Tablet: vertical */}
        <div className="flex lg:hidden flex-col items-center gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-col items-center w-full max-w-xs">
              <div
                ref={(el) => (stepsRef.current[i + steps.length] = el)}
                className="flex flex-col items-center text-center gap-3 px-6 py-4 w-full"
              >
                <div className="w-12 h-12 rounded-full bg-[#0a1a0a] border-2 border-green-500 flex items-center justify-center">
                  <span className="text-green-400 text-lg font-bold">{step.number}</span>
                </div>
                <h3 className="text-white font-bold text-base">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="py-2">
                  <ArrowDown />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}