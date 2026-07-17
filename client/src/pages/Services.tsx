/* ============================================================
   SERVICES PAGE — Colorado Legal Process & Investigations
   Design: Measured Authority
   ============================================================ */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FileText, Search, Archive, Eye, UserSearch, Zap,
  ArrowRight, CheckCircle, Phone, Clock, Shield
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Process Serving",
    subtitle: "Civil, Eviction, Subpoena & Small Claims",
    desc: "Our licensed process servers handle all types of legal document service throughout Colorado. We serve civil summons, complaints, eviction notices, subpoenas, small claims documents, restraining orders, and more. Every service attempt is documented with GPS-verified proof of service affidavits that meet Colorado court standards.",
    features: [
      "Civil summons & complaints",
      "Eviction / unlawful detainer notices",
      "Subpoenas (civil & criminal)",
      "Small claims court documents",
      "Restraining orders & TROs",
      "Divorce & family law documents",
      "GPS-verified proof of service",
      "Court-admissible affidavits",
    ],
    color: "#2E6DA4",
  },
  {
    icon: Search,
    title: "Skip Tracing",
    subtitle: "Locate Hard-to-Find Individuals",
    desc: "When a subject cannot be located at their last known address, our skip tracing service employs professional investigative databases, public records research, and field techniques to locate individuals for service of process or other legal purposes.",
    features: [
      "Professional database searches",
      "Public records research",
      "Social media investigation",
      "Employment verification",
      "Vehicle & asset searches",
      "Neighbor and associate interviews",
      "Comprehensive location reports",
      "Confidential & discreet",
    ],
    color: "#0F2744",
  },
  {
    icon: Archive,
    title: "Court Filing",
    subtitle: "Document Preparation & Filing",
    desc: "We handle the filing of legal documents with Colorado state and federal courts, including the Denver District Court, Colorado Court of Appeals, and county courts statewide. Our team ensures documents are properly formatted, filed on time, and conformed copies are returned promptly.",
    features: [
      "State court filings (all counties)",
      "Federal court filings",
      "E-filing services",
      "Document preparation review",
      "Conformed copies returned",
      "Filing fee management",
      "Rush filing available",
      "Filing confirmation receipts",
    ],
    color: "#2E6DA4",
  },
  {
    icon: Eye,
    title: "Stakeouts & Surveillance",
    subtitle: "Professional Investigative Surveillance",
    desc: "Our licensed investigators conduct professional surveillance operations for insurance fraud, domestic matters, workers' compensation cases, and litigation support. All surveillance is conducted legally and ethically, with court-admissible video and photographic documentation.",
    features: [
      "Video & photographic surveillance",
      "Insurance fraud investigation",
      "Workers' compensation cases",
      "Domestic & family law matters",
      "Activity verification",
      "Court-admissible documentation",
      "Detailed written reports",
      "Licensed investigators",
    ],
    color: "#0F2744",
  },
  {
    icon: UserSearch,
    title: "Background Investigations",
    subtitle: "Thorough Due Diligence & Litigation Support",
    desc: "Comprehensive background investigations for attorneys, businesses, and individuals. We conduct thorough research into criminal history, civil litigation records, employment history, financial background, and more to support your legal matters or business decisions.",
    features: [
      "Criminal background checks",
      "Civil litigation history",
      "Employment verification",
      "Education verification",
      "Financial & asset searches",
      "Reference checks",
      "Business entity research",
      "Comprehensive written reports",
    ],
    color: "#2E6DA4",
  },
  {
    icon: Zap,
    title: "Rush / Same-Day Service",
    subtitle: "Urgent Service When It Matters Most",
    desc: "Legal deadlines don't wait. Our rush service ensures time-sensitive documents are served the same day or next day, anywhere in Colorado. We prioritize urgent assignments and provide real-time status updates so you're never left wondering.",
    features: [
      "Same-day service available",
      "Next-day guaranteed service",
      "Real-time status updates",
      "After-hours availability",
      "Weekend service",
      "Statewide rush coverage",
      "Priority queue handling",
      "Immediate confirmation",
    ],
    color: "#B8963E",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Submit Your Request",
    desc: "Complete our online quote form or call us directly. Provide document details, recipient information, and urgency level.",
  },
  {
    step: "02",
    title: "We Confirm & Assign",
    desc: "Our team reviews your request, confirms details, and assigns a licensed process server or investigator in the appropriate county.",
  },
  {
    step: "03",
    title: "Service Attempted",
    desc: "Your assigned professional makes service attempts per Colorado law, with documented attempts and GPS verification.",
  },
  {
    step: "04",
    title: "Proof of Service Delivered",
    desc: "Upon successful service, you receive a notarized affidavit of service and all documentation required for court filing.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#F4F5F7]" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
      <Navbar />

      {/* ── PAGE HEADER ── */}
      <section
        className="pt-32 pb-16 relative"
        style={{ background: "linear-gradient(135deg, #0F2744 0%, #1a3a5c 100%)", borderBottom: "4px solid #B8963E" }}
      >
        <div className="container">
          <div className="max-w-2xl">
            <span className="section-label">Our Services</span>
            <h1
              className="text-white mt-2 mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}
            >
              Complete Legal Process & Investigative Services
            </h1>
            <div className="gold-rule" />
            <p className="text-white/75 text-base leading-relaxed">
              From standard process serving to complex investigative work, we offer a full range of legal support services for Colorado attorneys, law firms, and the public.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, transparent, #B8963E 20%, #B8963E 80%, transparent)" }} />
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="py-16 bg-[#F4F5F7]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="bg-white rounded-lg border border-[#e8eaed] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 animate-fade-in-up"
                  style={{ animationDelay: `${i * 60}ms`, borderLeftColor: svc.color, borderLeftWidth: "4px" }}
                >
                  <div className="p-7">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="w-12 h-12 rounded flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${svc.color}15` }}
                      >
                        <Icon size={22} style={{ color: svc.color }} />
                      </div>
                      <div>
                        <h3
                          className="text-[#0F2744] font-bold text-xl mb-0.5"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {svc.title}
                        </h3>
                        <p className="text-[#B8963E] text-xs font-semibold uppercase tracking-wide">
                          {svc.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-[#3D4F61] text-sm leading-relaxed mb-5">
                      {svc.desc}
                    </p>
                    <div className="grid grid-cols-2 gap-1.5 mb-6">
                      {svc.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-xs text-[#3D4F61]">
                          <CheckCircle size={11} className="text-[#2E6DA4] shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/quote"
                      className="btn-primary text-sm"
                      style={{ backgroundColor: svc.color === "#B8963E" ? "#B8963E" : "#2E6DA4" }}
                    >
                      Request Quote
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">How It Works</span>
            <h2
              className="text-[#0F2744] mt-2 mb-3"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.25rem", fontWeight: 700 }}
            >
              Simple, Reliable Process
            </h2>
            <div className="gold-rule-center" />
            <p className="text-[#3D4F61] max-w-xl mx-auto text-base">
              Getting documents served or investigations started is straightforward. Here's what to expect when you work with us.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={step.step} className="relative">
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-[#e8eaed] z-0" style={{ width: "calc(100% - 2rem)", left: "calc(50% + 1.5rem)" }} />
                )}
                <div className="relative z-10 text-center">
                  <div
                    className="w-16 h-16 rounded-full bg-[#0F2744] flex items-center justify-center mx-auto mb-4 text-[#B8963E] font-bold text-lg"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {step.step}
                  </div>
                  <h4 className="font-bold text-[#0F2744] mb-2 text-base">{step.title}</h4>
                  <p className="text-[#3D4F61] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RUSH SERVICE CALLOUT ── */}
      <section className="py-12 bg-[#0F2744]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#B8963E] flex items-center justify-center shrink-0">
                <Clock size={22} className="text-white" />
              </div>
              <div>
                <h3
                  className="text-white font-bold text-xl"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Need Rush or Same-Day Service?
                </h3>
                <p className="text-white/70 text-sm">
                  Call us directly for immediate assistance. We respond within the hour.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a href="tel:7205550192" className="btn-secondary">
                <Phone size={15} />
                (720) 555-0192
              </a>
              <Link href="/quote" className="btn-primary">
                Online Request
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS ── */}
      <section className="py-12 bg-[#F4F5F7]">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Shield, label: "Colorado Licensed Process Server" },
              { icon: Shield, label: "NAPPS Member" },
              { icon: Shield, label: "Fully Bonded & Insured" },
              { icon: Shield, label: "COPSA Member" },
              { icon: CheckCircle, label: "20+ Years Experience" },
              { icon: CheckCircle, label: "All 64 Counties" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2 bg-white border border-[#e8eaed] rounded px-4 py-2.5 text-sm font-semibold text-[#1C2B3A] shadow-sm"
                >
                  <Icon size={14} className="text-[#B8963E]" />
                  {item.label}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
