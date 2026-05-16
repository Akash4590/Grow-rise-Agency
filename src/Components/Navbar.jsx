import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";

// Nav link data
const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Shopify", path: "/services", hot: true },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const btnRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  // ── GSAP: navbar fade down on mount ──────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Navbar slides down
      gsap.fromTo(
        navRef.current,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.2 }
      );
      // Stagger nav links
      gsap.fromTo(
        linksRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power2.out", delay: 0.5 }
      );
      // CTA button
      gsap.fromTo(
        btnRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)", delay: 1 }
      );
    });
    return () => ctx.revert();
  }, []);

  // ── Scroll: glassmorphism on scroll ───────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── GSAP: mobile menu slide in ────────────────
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (mobileOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.4, ease: "power3.out" }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        x: "100%", opacity: 0, duration: 0.3, ease: "power3.in",
      });
    }
  }, [mobileOpen]);

  // ── CTA hover glow ────────────────────────────
  const handleBtnEnter = () => {
    gsap.to(btnRef.current, { scale: 1.06, duration: 0.2, ease: "power2.out" });
  };
  const handleBtnLeave = () => {
    gsap.to(btnRef.current, { scale: 1, duration: 0.2, ease: "power2.out" });
  };

  return (
    <>
      {/* ── Main Navbar ── */}
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 px-4 pt-4 transition-all duration-300 ${scrolled ? "pt-2" : "pt-4"}`}
      >
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled
              ? "glass shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "bg-[#0d2414]/60 backdrop-blur-md border border-white/10"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="flex items-end gap-[3px]">
              <div className="w-[5px] h-3 bg-[#F5C518] rounded-sm" />
              <div className="w-[5px] h-5 bg-[#F5C518] rounded-sm" />
              <div className="w-[5px] h-4 bg-green-400 rounded-sm" />
            </div>
            <div>
              <p className="text-white font-extrabold text-lg leading-none tracking-tight">GrowRise</p>
              <p className="text-gray-500 text-[9px] tracking-[0.2em] uppercase leading-none mt-0.5">Agency</p>
            </div>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.label}
                to={link.path}
                ref={(el) => (linksRef.current[i] = el)}
                className={`relative text-sm font-medium transition-colors group flex items-center gap-1.5 ${
                  location.pathname === link.path ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
                {/* HOT badge */}
                {link.hot && (
                  <span className="bg-[#F5C518] text-[#071209] text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                    HOT
                  </span>
                )}
                {/* Underline hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#F5C518] group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* CTA button */}
          <button
            ref={btnRef}
            onMouseEnter={handleBtnEnter}
            onMouseLeave={handleBtnLeave}
            className="hidden lg:flex items-center gap-2 bg-[#F5C518] text-[#071209] font-bold px-5 py-2.5 rounded-xl text-sm yellow-glow hover:bg-yellow-300 transition-colors"
          >
            Get Free Audit
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 text-white"
          >
            <span className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </header>

      {/* ── Mobile Sidebar ── */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 h-full w-72 bg-[#060d08] border-l border-white/10 z-40 flex flex-col px-8 pt-24 gap-6"
        style={{ transform: "translateX(100%)" }}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            to={link.path}
            onClick={() => setMobileOpen(false)}
            className="text-gray-300 hover:text-white font-semibold text-lg transition-colors flex items-center gap-2"
          >
            {link.label}
            {link.hot && (
              <span className="bg-[#F5C518] text-[#071209] text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase">HOT</span>
            )}
          </Link>
        ))}
        <button className="mt-4 bg-[#F5C518] text-[#071209] font-bold px-6 py-3 rounded-xl text-sm w-full">
          Get Free Audit
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
        />
      )}
    </>
  );
}

export default Navbar;