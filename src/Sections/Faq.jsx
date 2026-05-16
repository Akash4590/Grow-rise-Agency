import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "How quickly can I expect to see results?",
    a: "Most clients see measurable improvements in ROAS and conversion rates within the first 30 days. Significant revenue growth typically begins between 45–90 days as we optimize and scale campaigns.",
  },
  {
    q: "What's the minimum ad spend required?",
    a: "We work best with brands spending a minimum of $3,000/month on ads. This allows enough data to optimize campaigns and scale profitably without spreading budgets too thin.",
  },
  {
    q: "Do you work with Shopify stores only?",
    a: "We specialize in Shopify and WooCommerce brands, though we've worked with custom platforms too. If your store is converting and you have a solid product, we can scale it.",
  },
  {
    q: "What makes GrowRise different from other agencies?",
    a: "We're obsessed with profit, not just revenue. Most agencies optimize for top-line growth. We engineer full-funnel systems that make every dollar spent work harder — and scale sustainably.",
  },
  {
    q: "What does your onboarding process look like?",
    a: "After your free audit call, we run a 2-week deep audit of your ads, funnel, and store. Then we build a custom growth plan and begin execution in week 3. No fluff, no delays.",
  },
  {
    q: "Do you offer any guarantees?",
    a: "We don't promise specific numbers because every brand is different. What we do guarantee is transparency, data-driven decisions, and relentless optimization. We only win when you win.",
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  const bodyRef = useRef(null);

  useEffect(() => {
    if (!bodyRef.current) return;
    if (isOpen) {
      gsap.fromTo(bodyRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    } else {
      gsap.to(bodyRef.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
    }
  }, [isOpen]);

  return (
    <div className={`glass rounded-2xl border transition-all duration-300 ${isOpen ? "border-green-700/40" : "border-white/5"}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <span className={`font-semibold text-sm sm:text-base transition-colors ${isOpen ? "text-white" : "text-gray-300"}`}>
          {faq.q}
        </span>
        <span className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#F5C518] border-[#F5C518] rotate-45" : "border-white/20 text-gray-400"}`}>
          <svg className="w-3.5 h-3.5" fill="none" stroke={isOpen ? "#071209" : "currentColor"} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      <div ref={bodyRef} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
        <p className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">{faq.a}</p>
      </div>
    </div>
  );
}

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);

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

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass border border-green-500/30 text-green-400 text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
            FAQ
          </div>
          <h2 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl">
            Common Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;