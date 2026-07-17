/* ============================================================
   ABOUT US PAGE — Colorado Legal Process & Investigations
   Design: Measured Authority
   ============================================================ */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Shield, CheckCircle, Award, Users, MapPin, ArrowRight,
  Phone, Star, Target, Eye, Lock
} from "lucide-react";

const teamMembers = [
  {
    name: "Robert J. Harmon",
    title: "Founder & Lead Process Server",
    bio: "With over 20 years serving Colorado's legal community, Robert founded the company with a single mission: to provide attorneys and law firms with a process serving partner they can trust completely. Licensed, certified, and deeply experienced in Colorado civil procedure.",
    initials: "RH",
  },
  {
    name: "Maria Elena Castillo",
    title: "Senior Investigator",
    bio: "A former law enforcement professional with 15 years of investigative experience. Maria leads our investigative division, specializing in skip tracing, surveillance, and background investigations for litigation support.",
    initials: "MC",
  },
  {
    name: "David K. Thornton",
    title: "Operations Manager",
    bio: "David coordinates our statewide network of process servers and ensures every assignment is handled with precision and accountability. His background in legal administration ensures our documentation meets the highest court standards.",
    initials: "DT",
  },
];

const credentials = [
  {
    icon: Shield,
    title: "Colorado Licensed Process Server",
    desc: "Fully licensed by the State of Colorado to serve legal process in all state and federal courts.",
  },
  {
    icon: Award,
    title: "NAPPS Member",
    desc: "Member of the National Association of Professional Process Servers — the gold standard in the industry.",
  },
  {
    icon: Shield,
    title: "COPSA Member",
    desc: "Active member of the Colorado Process Servers Association, upholding state-specific professional standards.",
  },
  {
    icon: Lock,
    title: "Fully Bonded & Insured",
    desc: "Comprehensive bonding and professional liability insurance protecting you and your clients on every assignment.",
  },
  {
    icon: CheckCircle,
    title: "E&O Insurance",
    desc: "Errors & Omissions coverage providing an additional layer of protection for your legal matters.",
  },
  {
    icon: Users,
    title: "Background-Checked Staff",
    desc: "All team members undergo thorough background checks and ongoing training to maintain our standards.",
  },
];

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
    title: "True Statewide Coverage",
    desc: "Unlike services that only cover the Denver metro, we have established networks in all 64 Colorado counties — from Telluride to Yuma, from Fort Collins to Pueblo.",
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
              For over two decades, we've been the process serving and investigative services company that Colorado's legal community relies on when accuracy, reliability, and discretion are non-negotiable.
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
                  Colorado Legal Process & Investigations was founded in 2004 by Robert J. Harmon, a former paralegal who recognized a critical gap in the market: Colorado's legal community needed a process serving company that combined the reliability of a large firm with the personal attention of a local partner.
                </p>
                <p>
                  Starting with just a handful of clients in the Denver metro area, we built our reputation one assignment at a time — through meticulous documentation, prompt communication, and an unwavering commitment to getting it right. Word spread quickly among Colorado's legal community, and our client base grew to include some of the state's most respected law firms.
                </p>
                <p>
                  Today, we serve all 64 Colorado counties with a network of licensed professionals who share our founding values. Whether it's a routine civil summons in Denver or a complex surveillance operation in a rural mountain county, we bring the same standard of excellence to every assignment.
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
                    { value: "20+", label: "Years" },
                    { value: "64", label: "Counties" },
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

      {/* ── TEAM ── */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Our Team</span>
            <h2
              className="text-[#0F2744] mt-2 mb-3"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.25rem", fontWeight: 700 }}
            >
              Experienced Legal Professionals
            </h2>
            <div className="gold-rule-center" />
            <p className="text-[#3D4F61] max-w-xl mx-auto text-base">
              Our team combines decades of experience in legal services, law enforcement, and investigative work to deliver results you can rely on.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <div
                key={member.name}
                className="bg-[#F4F5F7] rounded-lg border border-[#e8eaed] p-6 text-center animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div
                  className="w-16 h-16 rounded-full bg-[#0F2744] flex items-center justify-center mx-auto mb-4 text-[#B8963E] font-bold text-xl"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {member.initials}
                </div>
                <h3
                  className="font-bold text-[#0F2744] text-lg mb-0.5"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {member.name}
                </h3>
                <p className="text-[#B8963E] text-xs font-semibold uppercase tracking-wide mb-3">
                  {member.title}
                </p>
                <p className="text-[#3D4F61] text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS ── */}
      <section className="py-16 bg-[#F4F5F7]">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Licensing & Credentials</span>
            <h2
              className="text-[#0F2744] mt-2 mb-3"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.25rem", fontWeight: 700 }}
            >
              Fully Licensed, Bonded & Insured
            </h2>
            <div className="gold-rule-center" />
            <p className="text-[#3D4F61] max-w-xl mx-auto text-base">
              Our credentials ensure that every assignment is handled by qualified professionals and that your firm is protected on every engagement.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {credentials.map((cred, i) => {
              const Icon = cred.icon;
              return (
                <div
                  key={cred.title}
                  className="bg-white rounded-lg border border-[#e8eaed] p-5 border-t-4 border-t-[#B8963E] animate-fade-in-up"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon size={18} className="text-[#B8963E]" />
                    <h4 className="font-bold text-[#0F2744] text-sm">{cred.title}</h4>
                  </div>
                  <p className="text-[#3D4F61] text-sm leading-relaxed">{cred.desc}</p>
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
