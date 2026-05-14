const results = [
  {
    stat: "$3K → $25K/Month",
    highlight: "In 60 Days",
    label: "Revenue Growth",
    desc: "Revenue increased by 733% with our ad funnel strategy.",
  },
  {
    stat: "4.2x ROAS",
    highlight: "Achieved",
    label: "Return on Ad Spend",
    desc: "Consistent ROAS across multiple ad campaigns.",
  },
  {
    stat: "+120% Increase",
    highlight: "In Conversion Rate",
    label: "CRO Results",
    desc: "Through funnel & store optimization.",
  },
];

function ResultsSection() {
  return (
    <section className="bg-[#071209] py-16 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-white font-extrabold text-2xl sm:text-3xl lg:text-4xl text-center mb-12">
          Real Results for eCommerce Brands
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {results.map((item) => (
            <div key={item.stat} className="bg-[#0d2414] border border-[#1e4d2b] rounded-2xl px-6 py-7 flex flex-col gap-3">

              {/* Stat */}
              <div>
                <p className="text-white font-extrabold text-2xl sm:text-3xl leading-none">{item.stat}</p>
                <p className="text-[#F5C518] font-bold text-sm mt-1">{item.highlight}</p>
              </div>

              {/* Description + mini chart */}
              <div className="flex items-end justify-between gap-4">
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                <svg viewBox="0 0 40 24" className="w-8 h-5 shrink-0 opacity-80" fill="none">
                  <polyline points="0,20 10,14 20,16 30,6 40,2" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Label tag */}
              <span className="self-start text-[11px] font-semibold text-green-400 bg-green-900/40 border border-green-700/40 px-3 py-1 rounded-full">
                {item.label}
              </span>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ResultsSection;
