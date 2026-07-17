/* ============================================================
   FOOTER — Colorado Legal Process & Investigations
   Design: Measured Authority — deep navy, gold accents
   ============================================================ */
import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, Shield, Facebook, Linkedin, Twitter } from "lucide-react";

const serviceLinks = [
  { href: "/services", label: "Process Serving" },
  { href: "/services", label: "Skip Tracing" },
  { href: "/services", label: "Court Filing" },
  { href: "/services", label: "Surveillance" },
  { href: "/services", label: "Background Investigations" },
  { href: "/services", label: "Rush / Same-Day Service" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/quote", label: "Get a Quote" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const counties = [
  "Denver", "Jefferson", "Arapahoe", "Adams", "Douglas",
  "El Paso", "Boulder", "Larimer", "Weld", "Pueblo",
  "Mesa", "Garfield", "La Plata", "Fremont", "Montrose",
];

export default function Footer() {
  return (
    <footer
      className="bg-[#0F2744] text-white"
      style={{ fontFamily: "'Source Sans 3', sans-serif" }}
    >
      {/* Main footer content */}
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Brand + Contact */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/manus-storage/logo-shield_c5626bc0.png"
                alt="Colorado Legal Process"
                className="h-10 w-10 object-contain"
              />
              <div>
                <div
                  className="text-white font-bold text-sm leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Colorado Legal Process
                </div>
                <div className="text-[#B8963E] text-xs font-semibold tracking-widest uppercase">
                  & Investigations
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Colorado's trusted process serving and investigative services partner. Licensed, bonded, and serving all 64 counties statewide.
            </p>
            <div className="space-y-2.5 text-sm">
              <a href="tel:7205550192" className="flex items-center gap-2.5 text-white/70 hover:text-[#B8963E] transition-colors">
                <Phone size={14} className="text-[#B8963E] shrink-0" />
                (720) 555-0192
              </a>
              <a href="mailto:info@coloradolegalprocess.com" className="flex items-center gap-2.5 text-white/70 hover:text-[#B8963E] transition-colors">
                <Mail size={14} className="text-[#B8963E] shrink-0" />
                info@coloradolegalprocess.com
              </a>
              <div className="flex items-start gap-2.5 text-white/70">
                <MapPin size={14} className="text-[#B8963E] shrink-0 mt-0.5" />
                <span>Denver Metro Area<br />Colorado, USA</span>
              </div>
              <div className="flex items-start gap-2.5 text-white/70">
                <Clock size={14} className="text-[#B8963E] shrink-0 mt-0.5" />
                <span>Mon–Fri: 7am–7pm<br />Sat: 8am–4pm</span>
              </div>
            </div>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-5">
              <a href="#" className="w-8 h-8 rounded bg-white/10 hover:bg-[#B8963E] flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-white/10 hover:bg-[#B8963E] flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-white/10 hover:bg-[#B8963E] flex items-center justify-center transition-colors" aria-label="Twitter/X">
                <Twitter size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4 pb-2 border-b border-white/10">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#B8963E] text-sm transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#B8963E] text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4 pb-2 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#B8963E] text-sm transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#B8963E] text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Credentials */}
            <div className="mt-6">
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-3 pb-2 border-b border-white/10">
                Credentials
              </h4>
              <div className="space-y-2 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <Shield size={13} className="text-[#B8963E] shrink-0" />
                  Colorado Licensed Process Server
                </div>
                <div className="flex items-center gap-2">
                  <Shield size={13} className="text-[#B8963E] shrink-0" />
                  NAPPS Member
                </div>
                <div className="flex items-center gap-2">
                  <Shield size={13} className="text-[#B8963E] shrink-0" />
                  Fully Bonded & Insured
                </div>
                <div className="flex items-center gap-2">
                  <Shield size={13} className="text-[#B8963E] shrink-0" />
                  COPSA Member
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Service Area */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4 pb-2 border-b border-white/10">
              Colorado Counties Served
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {counties.map((county) => (
                <span
                  key={county}
                  className="text-xs text-white/60 bg-white/5 px-2 py-0.5 rounded border border-white/10"
                >
                  {county}
                </span>
              ))}
              <span className="text-xs text-[#B8963E] font-semibold px-2 py-0.5">
                + All 64 Counties
              </span>
            </div>
            <div className="mt-5 p-3 bg-[#B8963E]/10 border border-[#B8963E]/30 rounded text-sm">
              <p className="text-[#B8963E] font-semibold mb-1">Rush Service Available</p>
              <p className="text-white/60 text-xs">Same-day and next-day service available statewide. Call for availability.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Colorado Legal Process & Investigations. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/70 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
