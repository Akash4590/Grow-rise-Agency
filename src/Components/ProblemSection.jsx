const painCards = [
  {
    title: "Ads Not Profitable",
    desc: "Spending more on ads but making less profit.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Low Conversion Rates",
    desc: "Traffic comes in but your store doesn't convert.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "No Clear Strategy",
    desc: "No proven system to scale consistently.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
];

const bullets = [
  "Traffic comes, but sales don't follow.",
  "Your store isn't optimized for conversions.",
  "Scaling feels risky and unpredictable.",
];

function ProblemSection() {
  return (
    <section className="bg-[#0a1f0f]">

      {/* Top: Why brands fail */}
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
        <h2 className="text-white font-extrabold text-2xl sm:text-3xl lg:text-4xl text-center mb-12">
          Why Most eCommerce Brands Fail to Scale
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {painCards.map((card) => (
            <div key={card.title} className="flex flex-col items-center text-center gap-4 px-6">
              <div className="w-14 h-14 rounded-full border border-[#F5C518]/40 bg-[#F5C518]/10 flex items-center justify-center text-[#F5C518]">
                {card.icon}
              </div>
              <div>
                <h3 className="text-white font-bold text-sm mb-1">{card.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: Frustration block */}
      <div className="bg-gradient-to-r from-[#071209] to-[#0c2010] border-t border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-14 sm:py-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left text */}
          <div className="flex-1">
            <h3 className="text-white font-extrabold text-xl sm:text-2xl lg:text-3xl leading-snug mb-6">
              You're spending money on ads...<br />
              but not seeing real profit.
            </h3>
            <ul className="flex flex-col gap-4">
              {bullets.map((text) => (
                <li key={text} className="flex items-start gap-3 text-gray-300 text-sm sm:text-base">
                  <span className="text-[#F5C518] font-black text-lg leading-none mt-0.5 shrink-0">✕</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Illustration */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="w-[280px] sm:w-[320px] h-[220px] rounded-2xl bg-gradient-to-br from-[#0d2414] to-[#071209] border border-white/10 flex items-center justify-center">
              <svg viewBox="0 0 200 160" className="w-48 opacity-70" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Laptop body */}
                <rect x="40" y="90" width="120" height="70" rx="6" fill="#1a3a22" stroke="#2a5c35" strokeWidth="1.5" />
                <rect x="50" y="98" width="100" height="52" rx="3" fill="#0d2414" />
                <rect x="28" y="158" width="144" height="8" rx="4" fill="#1e4d2b" />
                {/* Red chart on screen */}
                <polyline points="62,138 82,122 102,130 122,112 142,120" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                {/* Person */}
                <circle cx="100" cy="58" r="20" fill="#2d5a3d" />
                <path d="M80 73 Q70 63 75 53 Q78 48 80 58" stroke="#2d5a3d" strokeWidth="8" strokeLinecap="round" fill="none" />
                <path d="M120 73 Q130 63 125 53 Q122 48 120 58" stroke="#2d5a3d" strokeWidth="8" strokeLinecap="round" fill="none" />
                {/* Face */}
                <circle cx="93" cy="55" r="2" fill="#4ade80" />
                <circle cx="107" cy="55" r="2" fill="#4ade80" />
                <path d="M93 66 Q100 61 107 66" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              </svg>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

export default ProblemSection;