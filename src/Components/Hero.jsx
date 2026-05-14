function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#071209] via-[#0a1f0f] to-[#0c2212] overflow-hidden pt-28 pb-20 px-4">

      {/* Background glow blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-800/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-900/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #4ade80 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-14 lg:gap-10">

        {/* LEFT: Text content */}
        <div className="flex-1 text-center lg:text-left">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-green-500/40 bg-green-900/30 text-green-400 text-[11px] font-bold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            Ecommerce Growth Agency
          </div>

          {/* Heading */}
          <h1 className="text-white font-extrabold leading-[1.1] mb-5 text-[38px] sm:text-[46px] lg:text-[52px]">
            Scale Your eCommerce<br />
            Brand to <span className="text-[#F5C518]">$10K–$100K/Month</span><br />
            Profitably
          </h1>

          {/* Sub text */}
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-[420px] mx-auto lg:mx-0 mb-9">
            We build high-converting ad funnels that turn traffic into consistent revenue.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
            <button className="bg-[#F5C518] text-[#071209] font-bold px-7 py-3 rounded-md text-sm hover:bg-yellow-300 transition-colors">
              Get Free Store Audit
            </button>
            <button className="border border-white/40 text-white font-bold px-7 py-3 rounded-md text-sm hover:bg-white/10 transition-colors">
              See Case Studies
            </button>
          </div>
        </div>

        {/* RIGHT: Chart card */}
        <div className="flex-1 w-full max-w-[480px] lg:max-w-none relative">
          <div className="relative bg-[#0d2414]/60 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">

            {/* SVG Chart */}
            <svg viewBox="0 0 310 200" className="w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="neonGlow">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1e4d2b" />
                  <stop offset="100%" stopColor="#0d2414" />
                </linearGradient>
              </defs>

              {/* Bars */}
              {[
                [15, 115, 65], [55, 98, 82], [95, 108, 72],
                [135, 78, 102], [175, 88, 92], [215, 48, 132], [255, 28, 152],
              ].map(([x, y, h], i) => (
                <rect key={i} x={x} y={y} width="26" height={h} rx="4" fill="url(#barGrad)" stroke="#2a5c35" strokeWidth="1" />
              ))}

              {/* Neon line */}
              <polyline
                points="28,158 68,140 108,130 148,100 188,86 228,58 285,24"
                fill="none" stroke="#4ade80" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"
                filter="url(#neonGlow)"
              />

              {/* Arrow */}
              <polygon points="278,15 295,24 278,33" fill="#4ade80" filter="url(#neonGlow)" />

              {/* Dots on line */}
              {[[28,158],[68,140],[108,130],[148,100],[188,86],[228,58]].map(([cx,cy],i) => (
                <circle key={i} cx={cx} cy={cy} r="3.5" fill="#4ade80" filter="url(#neonGlow)" />
              ))}
            </svg>

            {/* Revenue floating card */}
            <div className="absolute -top-6 -right-2 sm:-right-6 bg-[#0a1f0f]/90 border border-white/10 rounded-xl px-4 py-3 shadow-xl backdrop-blur-sm min-w-[130px]">
              <p className="text-gray-400 text-[11px] mb-1">Total Revenue</p>
              <p className="text-white font-extrabold text-xl leading-none">$125,430</p>
              <p className="text-green-400 text-xs font-semibold mt-1">▲ +120%</p>
            </div>

            {/* ROAS floating card */}
            <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-[#0a1f0f]/90 border border-white/10 rounded-xl px-4 py-3 shadow-xl backdrop-blur-sm min-w-[130px]">
              <p className="text-gray-400 text-[11px] mb-1">ROAS</p>
              <p className="text-white font-extrabold text-xl leading-none">4.2x</p>
              <p className="text-green-400 text-xs font-semibold mt-1">▲ +80%</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;