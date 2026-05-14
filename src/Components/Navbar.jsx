import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "Services", "Case Studies", "About Us"];

  return (
    <header className="w-full absolute top-0 left-0 z-50 px-4 pt-4">

      {/* Main nav bar */}
      <div className="max-w-6xl mx-auto flex items-center justify-between bg-[#0d2414]/80 backdrop-blur-md border border-white/10 rounded-xl px-5 py-3">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-end gap-[2px]">
            <div className="w-[5px] h-3 bg-[#F5C518] rounded-sm" />
            <div className="w-[5px] h-5 bg-[#F5C518] rounded-sm" />
            <div className="w-[5px] h-4 bg-green-400 rounded-sm" />
          </div>
          <div>
            <p className="text-white font-extrabold text-lg leading-none cursor-pointer">GrowRise</p>
            <p className="text-gray-400 text-[9px] tracking-[0.2em] uppercase leading-none mt-0.5">Agency</p>
          </div>
        </div>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link} href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              {link}
            </a>
          ))}
        </nav>

        {/* Desktop CTA button */}
        <button className="hidden md:block bg-[#F5C518] text-[#071209] font-bold px-5 py-2 rounded-md text-sm hover:bg-yellow-300 transition-colors">
          Get Free Audit
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 bg-[#0d2414] border border-white/10 rounded-xl px-5 py-5">
          <div className="flex flex-col gap-4 mb-4">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-gray-300 hover:text-white text-sm font-medium">
                {link}
              </a>
            ))}
          </div>
          <button className="w-full bg-[#F5C518] text-[#071209] font-bold py-2 rounded-md text-sm">
            Get Free Audit
          </button>
        </div>
      )}

    </header>
  );
}

export default Navbar;