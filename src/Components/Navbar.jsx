import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";

// Nav link data
const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Shopify", path: "/shopify", hot: true },
  { label: "SocialMedia", path: "/SocialMedia" },
  { label: "About", path: "/about" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contact", path: "#contact" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);
  const linksRef = useRef([]);
  const btnRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const location = useLocation();

  // Navbar animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.2,
        }
      );

      gsap.fromTo(
        linksRef.current,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.5,
        }
      );

      gsap.fromTo(
        btnRef.current,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          delay: 1,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (mobileOpen) {
      gsap.to(mobileMenuRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.4,
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.3,
      });
    }
  }, [mobileOpen]);

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-300 ${
          scrolled ? "pt-2" : "pt-4"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto flex justify-between items-center px-5 py-3 rounded-2xl transition-all ${
            scrolled
              ? "glass shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "bg-[#0d2414]/60 backdrop-blur-md border border-white/10"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="text-white font-bold text-xl">
            GrowRise
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-7">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={link.label}
                to={link.path}
                ref={(el) => (linksRef.current[index] = el)}
                className={`relative text-sm font-medium group ${
                  location.pathname === link.path
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}

                {link.hot && (
                  <span className="ml-2 text-[9px] px-2 py-[2px] rounded-full bg-[#F5C518] text-black font-bold">
                    HOT
                  </span>
                )}

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#F5C518] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <button
            ref={btnRef}
            className="hidden lg:flex bg-[#F5C518] px-5 py-2 rounded-xl text-black font-bold"
          >
            Get Free Audit
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        ref={mobileMenuRef}
        className="fixed right-0 top-0 h-full w-72 bg-[#061109] z-50 p-8 lg:hidden"
        style={{
          transform: "translateX(100%)",
        }}
      >
        <div className="flex flex-col gap-6 mt-20">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className="text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;