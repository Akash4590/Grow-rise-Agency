const services = [
  {
    title: "Paid Ads Management",
    desc: "Meta & Google Ads campaigns that bring high-intent buyers.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    title: "Funnel Optimization",
    desc: "High-converting product pages, landing pages & checkout flows.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Conversion Rate Optimization",
    desc: "A/B testing, UX improvements & offer optimization.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Scaling Strategy",
    desc: "Data-driven scaling strategies to increase ROAS & profit.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

function ServicesSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-[#071209] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-center mb-12">
          We Build <span className="text-green-700">Profit-Driven</span> eCommerce Growth Systems
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#0a1f0f]/5 border border-[#0a1f0f]/10 flex items-center justify-center text-[#0a1f0f]">
                {service.icon}
              </div>
              <div>
                <h3 className="text-[#071209] font-bold text-[15px] mb-2">{service.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;