/* ============================================================
   HOME PAGE — Colorado Legal Process & Investigations
   Design: Measured Authority
   Sections: Hero, Services Overview, Trust Signals, Testimonials,
             Counties, CTA Banner
   ============================================================ */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FileText, Search, Archive, Eye, UserSearch, Zap,
  CheckCircle, Phone, ArrowRight, Star, MapPin, Shield,
  Award, Clock, Users
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Process Serving",
    desc: "Civil summons, eviction notices, subpoenas, and small claims — served accurately and on time, every time.",
    href: "/services",
  },
  {
    icon: Search,
    title: "Skip Tracing",
    desc: "Locate hard-to-find individuals using professional investigative databases and field techniques.",
    href: "/services",
  },
  {
    icon: Archive,
    title: "Court Filing",
    desc: "Document preparation and filing with Colorado courts. We handle the paperwork so you can focus on your case.",
    href: "/services",
  },
  {
    icon: Eye,
    title: "Surveillance",
    desc: "Professional stakeout and surveillance services with documented, court-admissible evidence.",
    href: "/services",
  },
  {
    icon: UserSearch,
    title: "Background Investigations",
    desc: "Thorough background checks and asset searches for litigation support and due diligence.",
    href: "/services",
  },
  {
    icon: Zap,
    title: "Rush / Same-Day Service",
    desc: "Urgent matters require urgent action. Same-day and next-day service available statewide.",
    href: "/services",
  },
];

const trustStats = [
  { value: "6+", label: "Years in Business", icon: Award },
  { value: "6", label: "Colorado Counties", icon: MapPin },
  { value: "15,000+", label: "Documents Served", icon: FileText },
  { value: "98%", label: "On-Time Rate", icon: CheckCircle },
];

const testimonials = [
  {
    quote: "Colorado Legal Process has been our firm's go-to process server for over a decade. Their professionalism and reliability are unmatched in the state.",
    name: "Sarah M.",
    title: "Managing Partner, Denver Law Firm",
    stars: 5,
  },
  {
    quote: "When we needed same-day service on a time-sensitive eviction matter, they came through without hesitation. I won't use anyone else.",
    name: "James R.",
    title: "Real Estate Attorney, Colorado Springs",
    stars: 5,
  },
  {
    quote: "Their skip tracing work located a defendant we'd been trying to find for months. Thorough, discreet, and professional.",
    name: "Patricia L.",
    title: "Paralegal, Boulder County",
    stars: 5,
  },
];

const credentials = [
  "Colorado Licensed Process Server",
  "NAPPS Member",
  "Fully Bonded & Insured",
  "COPSA Member",
  "20+ Years Experience",
  "Statewide Coverage",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F5F7]" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          background: "linear-gradient(135deg, #0F2744 0%, #1a3a5c 50%, #0d2035 100%)",
        }}
      >
        {/* Background image overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/manus-storage/hero-courthouse_e8a70c36.jpg')" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2744]/90 via-[#0F2744]/70 to-transparent" />

        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-2xl">
            <div className="section-label mb-4 animate-fade-in-up">
              Colorado's Trusted Legal Services Partner
            </div>
            <h1
              className="text-white mb-6 animate-fade-in-up animate-delay-100"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Served. Filed.{" "}
              <span className="text-[#B8963E]">Done Right.</span>
            </h1>
            <div className="gold-rule animate-fade-in-up animate-delay-200" />
            <p
              className="text-white/80 text-lg leading-relaxed mb-8 animate-fade-in-up animate-delay-200"
              style={{ maxWidth: "520px" }}
            >
              Professional process serving and investigative services across Adams, Arapahoe, Boulder, Denver, Douglas, and Jefferson counties. Trusted by attorneys, law firms, and paralegals for 6 years.
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-in-up animate-delay-300">
              <Link href="/quote" className="btn-primary">
                Get a Quote
                <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn-outline-white">
                Our Services
              </Link>
            </div>

            {/* Quick trust indicators */}
            <div className="flex flex-wrap gap-4 mt-10 animate-fade-in-up animate-delay-400">
              {["Licensed & Bonded", "6 Denver Metro Counties", "Same-Day Available"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/70 text-sm">
                  <CheckCircle size={14} className="text-[#B8963E]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rectilinear gold accent bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, transparent, #B8963E 20%, #B8963E 80%, transparent)" }} />
      </section>

      {/* ── TRUST STATS ── */}
      <section className="py-12 bg-[#F4F5F7]">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {trustStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="trust-badge animate-fade-in-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <Icon size={24} className="text-[#B8963E] mb-2" />
                  <div
                    className="text-3xl font-bold text-[#0F2744] mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-[#6B7C8D] uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="py-16 bg-white" style={{ borderTop: "4px solid #0F2744" }}>
        <div className="container">
          <div className="max-w-xl mb-12">
            <span className="section-label">What We Do</span>
            <h2
              className="text-[#0F2744] mt-2 mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.25rem", fontWeight: 700 }}
            >
              Comprehensive Legal Support Services
            </h2>
            <div className="gold-rule" />
            <p className="text-[#3D4F61] text-base leading-relaxed">
              From routine process serving to complex investigative work, we provide the legal support services Colorado attorneys and law firms rely on. Every assignment is handled with precision, discretion, and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="service-card card-navy-border animate-fade-in-up"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="w-10 h-10 rounded bg-[#0F2744]/8 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#2E6DA4]" />
                  </div>
                  <h3
                    className="text-[#0F2744] font-semibold text-lg mb-2"
                    style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    {svc.title}
                  </h3>
                  <p className="text-[#3D4F61] text-sm leading-relaxed mb-4">{svc.desc}</p>
                  <Link
                    href={svc.href}
                    className="text-[#2E6DA4] text-sm font-semibold hover:text-[#0F2744] transition-colors flex items-center gap-1"
                  >
                    Learn More <ArrowRight size={13} />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn-secondary">
              View All Services
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-16 bg-[#F4F5F7]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">Why Choose Us</span>
              <h2
                className="text-[#0F2744] mt-2 mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.25rem", fontWeight: 700 }}
              >
                The Standard for Legal Process Services in Colorado
              </h2>
              <div className="gold-rule" />
              <p className="text-[#3D4F61] text-base leading-relaxed mb-6">
                When legal matters are on the line, you need a process server you can trust completely. Our team brings 6 years of experience, deep knowledge of Colorado law, and an unwavering commitment to accuracy and timeliness.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: Shield,
                    title: "Licensed, Bonded & Insured",
                    desc: "Full credentials and coverage so your firm is always protected.",
                  },
                  {
                    icon: Clock,
                    title: "Reliable & On-Time",
                    desc: "98% on-time service rate with real-time status updates on every assignment.",
                  },
                  {
                    icon: MapPin,
                    title: "Denver Metro Coverage",
                    desc: "Adams, Arapahoe, Boulder, Denver, Douglas, and Jefferson counties covered.",
                  },
                  {
                    icon: Users,
                    title: "Experienced Professionals",
                    desc: "Our servers and investigators are trained, vetted, and held to the highest standards.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-9 h-9 rounded bg-[#0F2744] flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={16} className="text-[#B8963E]" />
                      </div>
                      <div>
                        <div className="font-semibold text-[#0F2744] text-sm mb-0.5">{item.title}</div>
                        <div className="text-[#3D4F61] text-sm">{item.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 flex gap-3">
                <Link href="/about" className="btn-secondary">
                  About Our Company
                </Link>
                <Link href="/contact" className="btn-primary">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Image + credentials */}
            <div className="relative">
              <div className="rounded overflow-hidden shadow-xl">
                <img
                  src="/manus-storage/process-serving_203f2aaa.jpg"
                  alt="Professional legal process serving"
                  className="w-full h-72 object-cover"
                />
              </div>
              {/* Floating credentials card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded shadow-xl p-5 max-w-xs border-t-4 border-[#B8963E]">
                <div className="text-xs font-bold text-[#B8963E] uppercase tracking-widest mb-3">
                  Our Credentials
                </div>
                <div className="space-y-1.5">
                  {credentials.map((cred) => (
                    <div key={cred} className="flex items-center gap-2 text-xs text-[#1C2B3A]">
                      <CheckCircle size={12} className="text-[#2E6DA4] shrink-0" />
                      {cred}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Client Testimonials</span>
            <h2
              className="text-[#0F2744] mt-2 mb-3"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.25rem", fontWeight: 700 }}
            >
              Trusted by Colorado Legal Professionals
            </h2>
            <div className="gold-rule-center" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="testimonial-card animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex gap-0.5 mb-4 mt-2">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={14} className="text-[#B8963E] fill-[#B8963E]" />
                  ))}
                </div>
                <p className="text-[#3D4F61] text-sm leading-relaxed mb-5 italic">
                  "{t.quote}"
                </p>
                <div className="border-t border-[#e8eaed] pt-4">
                  <div className="font-semibold text-[#0F2744] text-sm">{t.name}</div>
                  <div className="text-[#6B7C8D] text-xs">{t.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLORADO COVERAGE ── */}
      <section className="py-16 bg-[#0F2744]" style={{ borderTop: "4px solid #B8963E" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label" style={{ color: "#B8963E" }}>Service Area</span>
              <h2
                className="text-white mt-2 mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.25rem", fontWeight: 700 }}
              >
                Serving the Denver Metro Area
              </h2>
              <div className="gold-rule" />
              <p className="text-white/70 text-base leading-relaxed mb-6">
                We serve Adams, Arapahoe, Boulder, Denver, Douglas, and Jefferson counties with the same standard of care on every assignment.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {[
                  "Adams County", "Arapahoe County", "Boulder County",
                  "Denver County", "Douglas County", "Jefferson County",
                ].map((county) => (
                  <div key={county} className="flex items-center gap-2 text-white/70 text-sm">
                    <MapPin size={12} className="text-[#B8963E] shrink-0" />
                    {county}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded overflow-hidden shadow-2xl">
              <img
                src="/manus-storage/colorado-mountains_5be37104.jpg"
                alt="Colorado Legal Process service area"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-16 bg-[#F4F5F7]">
        <div className="container">
          <div className="bg-white rounded-lg shadow-lg border border-[#e8eaed] p-10 text-center max-w-3xl mx-auto">
            <span className="section-label">Ready to Get Started?</span>
            <h2
              className="text-[#0F2744] mt-2 mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700 }}
            >
              Request a Quote — We Respond Within the Hour
            </h2>
            <p className="text-[#3D4F61] text-base leading-relaxed mb-7 max-w-xl mx-auto">
              Submit your service request online and receive a prompt, professional response. Rush and same-day service available. No case is too complex or too urgent.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/quote" className="btn-primary">
                Request a Quote
                <ArrowRight size={16} />
              </Link>
              <a href="tel:7205550192" className="btn-secondary">
                <Phone size={15} />
                Call (720) 555-0192
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
