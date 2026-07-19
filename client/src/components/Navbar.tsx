/* ============================================================
   NAVBAR — Colorado Legal Process & Investigations
   Design: Measured Authority — sticky, transparent → navy on scroll
   ============================================================ */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navBg = isHome && !scrolled
    ? "bg-transparent"
    : "bg-[#0F2744] shadow-lg";

  const textColor = "text-white";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
        style={{ fontFamily: "'Source Sans 3', sans-serif" }}
      >
        {/* Top utility bar */}
        <div
          className={`border-b transition-all duration-300 ${
            isHome && !scrolled
              ? "border-white/10 bg-black/20"
              : "border-white/10 bg-[#0a1e36]"
          }`}
        >
          <div className="container flex items-center justify-between py-1.5">
            <div className="flex items-center gap-4 text-white/70 text-xs">
              <span className="hidden sm:flex items-center gap-1.5">
                <Phone size={11} />
                (720) 555-0192
              </span>
              <span className="hidden sm:block">|</span>
              <span className="hidden sm:block">info@coloradolegalprocess.com</span>
              <span className="sm:hidden flex items-center gap-1.5">
                <Phone size={11} />
                (720) 555-0192
              </span>
            </div>
            <div className="text-white/60 text-xs hidden md:block">
              Serving Adams, Arapahoe, Boulder, Denver, Douglas & Jefferson · Licensed & Bonded
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="container flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/manus-storage/logo-shield_c5626bc0.png"
              alt="Colorado Legal Process Shield"
              className="h-10 w-10 object-contain"
            />
            <div>
              <div
                className="text-white font-bold text-base leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Colorado Legal Process
              </div>
              <div className="text-[#B8963E] text-xs font-semibold tracking-widest uppercase">
                & Investigations
              </div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-semibold rounded transition-colors duration-150 ${
                    active
                      ? "text-[#B8963E]"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/quote"
              className="hidden sm:inline-flex items-center gap-2 bg-[#B8963E] hover:bg-[#9a7c31] text-white text-sm font-bold px-5 py-2.5 rounded transition-colors duration-150"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Get a Quote
            </Link>
            <button
              className="lg:hidden text-white p-2 rounded hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#0F2744]"
          style={{ fontFamily: "'Source Sans 3', sans-serif" }}
        >
          <div className="flex flex-col h-full pt-24 px-6 pb-8">
            <nav className="flex flex-col gap-1 flex-1">
              {navLinks.map((link) => {
                const active = location === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`py-4 text-xl font-semibold border-b border-white/10 transition-colors ${
                      active ? "text-[#B8963E]" : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-8 space-y-3">
              <Link
                href="/quote"
                className="block w-full text-center bg-[#B8963E] hover:bg-[#9a7c31] text-white font-bold py-4 rounded text-lg transition-colors"
              >
                Get a Quote
              </Link>
              <a
                href="tel:7205550192"
                className="flex items-center justify-center gap-2 text-white/70 hover:text-white text-base transition-colors"
              >
                <Phone size={16} />
                (720) 555-0192
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
