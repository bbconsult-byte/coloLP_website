/* ============================================================
   ABOUT US PAGE — Colorado Legal Process & Investigations
   Design: Measured Authority
   ============================================================ */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MapPin, ArrowRight,
  Phone, Target, Eye
} from "lucide-react";

const whyChooseUs = [
  {
    icon: Target,
    title: "Accuracy You Can Count On",
    desc: "Every service attempt is documented with GPS verification, timestamps, and detailed notes. Our affidavits are prepared to meet Colorado court standards and withstand legal scrutiny.",
  },
  {
    icon: Eye,
    title: "Discretion in Every Assignment",
    desc: "We understand that sensitive legal matters require absolute confidentiality. Our team handles every case with the discretion your clients deserve.",
  },
  {
    icon: MapPin,
    title: "Focused Denver Metro Coverage",
    desc: "We serve Adams, Arapahoe, Boulder, Denver, Douglas, and Jefferson counties with deep local knowledge of each county's courts and procedures.",
  },
  {
    icon: Phone,
    title: "Responsive Communication",
    desc: "You'll never be left wondering about the status of your assignment. We provide real-time updates and respond to all inquiries within one business hour.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#F4F5F7]" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
      <Navbar />

      {/* ── PAGE HEADER ── */}
      <section
        className="pt-32 pb-14 relative"
        style={{ background: "linear-gradient(135deg, #0F2744 0%, #1a3a5c 100%)", borderBottom: "4px solid #B8963E" }}
      >
        <div className="container">
          <div className="max-w-2xl">
            <span className="section-label">About Us</span>
            <h1
              className="text-white mt-2 mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}
            >
              Colorado's Trusted Legal Process Partner
            </h1>
            <div className="gold-rule" />
            <p className="text-white/75 text-base leading-relaxed">
              For 6 years, we've been the process serving and investigative services company that Colorado's legal community relies on when accuracy, reliability, and discretion are non-negotiable.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, transparent, #B8963E 20%, #B8963E 80%, transparent)" }} />
      </section>

      {/* ── COMPANY STORY ── */}
      <section className="py-16 bg-[#F4F5F7]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">Our Story</span>
              <h2
                className="text-[#0F2744] mt-2 mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.25rem", fontWeight: 700 }}
              >
                Built on a Foundation of Trust
              </h2>
              <div className="gold-rule" />
              <div className="space-y-4 text-[#3D4F61] text-base leading-relaxed">
                <p>
                  Colorado Legal Process & Investigations was founded in 2020 by Robert J. Harmon, a former paralegal who recognized a critical gap in the market: Colorado's legal community needed a process serving company that combined the reliability of a large firm with the personal attention of a local partner.
                </p>
                <p>
                  Starting with just a handful of clients in the Denver metro area, we built our reputation one assignment at a time — through meticulous documentation, prompt communication, and an unwavering commitment to getting it right. Word spread quickly among Colorado's legal community, and our client base grew to include some of the state's most respected law firms.
                </p>
                <p>
                  Today, we serve Adams, Arapahoe, Boulder, Denver, Douglas, and Jefferson counties with a network of licensed professionals who share our founding values. Whether it's a routine civil summons in Denver or a background investigation in Boulder, we bring the same standard of excellence to every assignment.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded overflow-hidden shadow-xl">
                <img
                  src="/manus-storage/investigations_c6b65d8a.jpg"
                  alt="Professional investigative services"
                  className="w-full h-80 object-cover"
                />
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -right-4 bg-[#0F2744] rounded-lg p-5 shadow-xl">
                <div className="grid grid-cols-2 gap-4 text-center">
                  {[
                    { value: "6", label: "Years" },
                    { value: "6", label: "Counties" },
                    { value: "15K+", label: "Served" },
                    { value: "98%", label: "On-Time" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div
                        className="text-[#B8963E] text-2xl font-bold"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-white/60 text-xs uppercase tracking-wide">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-14 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label">Our Mission</span>
            <h2
              className="text-[#0F2744] mt-2 mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.25rem", fontWeight: 700 }}
            >
              Reliability. Discretion. Results.
            </h2>
            <div className="gold-rule-center" />
            <blockquote
              className="text-[#1C2B3A] text-xl leading-relaxed italic mt-6 mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              "Our mission is to provide Colorado's legal community with process serving and investigative services of the highest professional standard — delivered with the accuracy, timeliness, and discretion that legal matters demand."
            </blockquote>
            <p className="text-[#6B7C8D] text-sm">— Robert J. Harmon, Founder</p>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-16 bg-[#F4F5F7]">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Why Choose Us</span>
            <h2
              className="text-[#0F2744] mt-2 mb-3"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.25rem", fontWeight: 700 }}
            >
              The Difference Is in the Details
            </h2>
            <div className="gold-rule-center" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-lg border border-[#e8eaed] p-6 card-gold-border animate-fade-in-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-[#0F2744] flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#B8963E]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0F2744] text-base mb-1.5">{item.title}</h3>
                      <p className="text-[#3D4F61] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-[#0F2744]">
        <div className="container text-center">
          <h2
            className="text-white text-2xl font-bold mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Work With Us?
          </h2>
          <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">
            Join hundreds of Colorado attorneys and law firms who trust us with their most important legal matters.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/quote" className="btn-primary">
              Request a Quote
              <ArrowRight size={15} />
            </Link>
            <Link href="/contact" className="btn-outline-white">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
