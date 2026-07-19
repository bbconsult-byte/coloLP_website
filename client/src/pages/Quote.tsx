/* ============================================================
   QUOTE REQUEST PAGE — Colorado Legal Process & Investigations
   Design: Measured Authority
   ============================================================ */
import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Upload, Phone, Clock, Shield, ArrowRight } from "lucide-react";

const serviceOptions = [
  { value: "process-serving", label: "Process Serving" },
  { value: "eviction-notice", label: "Eviction Notice Service" },
  { value: "subpoena", label: "Subpoena Service" },
  { value: "small-claims", label: "Small Claims Service" },
  { value: "skip-tracing", label: "Skip Tracing" },
  { value: "court-filing", label: "Court Filing" },
  { value: "surveillance", label: "Surveillance / Stakeout" },
  { value: "background-investigation", label: "Background Investigation" },
  { value: "rush-same-day", label: "Rush / Same-Day Service" },
  { value: "other", label: "Other (describe in notes)" },
];

const coloradoCounties = [
  "Adams", "Arapahoe", "Boulder", "Denver", "Douglas", "Jefferson",
];

export default function Quote() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "",
    service: "", county: "", urgency: "standard",
    recipientName: "", recipientAddress: "", recipientCity: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
            <span className="section-label">Request a Quote</span>
            <h1
              className="text-white mt-2 mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}
            >
              Get a Professional Quote
            </h1>
            <div className="gold-rule" />
            <p className="text-white/75 text-base leading-relaxed">
              Complete the form below and we'll respond within one business hour. Rush and same-day service available — call us directly for urgent matters.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, transparent, #B8963E 20%, #B8963E 80%, transparent)" }} />
      </section>

      <section className="py-14">
        <div className="container">
          {/* Intro bar */}
          <div className="flex flex-wrap items-center gap-6 mb-8 p-5 bg-white border border-[#e8eaed] rounded-lg shadow-sm" style={{ borderLeft: "4px solid #0F2744" }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#0F2744] flex items-center justify-center">
                <Phone size={16} className="text-[#B8963E]" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#B8963E] uppercase tracking-wide">Immediate Assistance</div>
                <a href="tel:7205550192" className="font-bold text-[#0F2744] text-base hover:text-[#2E6DA4] transition-colors">(720) 555-0192</a>
              </div>
            </div>
            <div className="w-px h-8 bg-[#e8eaed] hidden sm:block" />
            <div className="text-sm text-[#3D4F61]">
              <span className="font-semibold text-[#0F2744]">Response within 1 hour</span> · Mon–Sun 8am–5pm
            </div>
            <div className="ml-auto hidden md:flex items-center gap-4 text-xs text-[#6B7C8D]">
              {["GPS-Verified", "Court-Admissible"].map(t => (
                <span key={t} className="flex items-center gap-1.5"><CheckCircle size={11} className="text-[#2E6DA4]" />{t}</span>
              ))}
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">

            {/* ── FORM ── */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-lg border border-[#e8eaed] p-10 text-center shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-[#2E6DA4]/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={32} className="text-[#2E6DA4]" />
                  </div>
                  <h2
                    className="text-[#0F2744] text-2xl font-bold mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Quote Request Received
                  </h2>
                  <p className="text-[#3D4F61] text-base leading-relaxed mb-6 max-w-md mx-auto">
                    Thank you for your request. A member of our team will review your submission and respond within one business hour. For urgent matters, please call us directly.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <a href="tel:7205550192" className="btn-secondary">
                      <Phone size={15} />
                      (720) 555-0192
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-[#e8eaed] shadow-sm overflow-hidden">
                  {/* Section: Your Information */}
                  <div className="px-7 py-5 border-b border-[#e8eaed] bg-[#F4F5F7]">
                    <h3 className="font-bold text-[#0F2744] text-base" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Your Information
                    </h3>
                  </div>
                  <div className="p-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">Full Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Jane Smith"
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label">Company / Law Firm Name</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Smith & Associates, LLC"
                      />
                    </div>
                    <div>
                      <label className="form-label">Email Address <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="jane@smithlaw.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label">Phone Number <span className="text-red-500">*</span></label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="(303) 555-0100"
                        required
                      />
                    </div>
                  </div>

                  {/* Section: Service Details */}
                  <div className="px-7 py-5 border-t border-b border-[#e8eaed] bg-[#F4F5F7]">
                    <h3 className="font-bold text-[#0F2744] text-base" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Service Details
                    </h3>
                  </div>
                  <div className="p-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">Service Needed <span className="text-red-500">*</span></label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="form-input"
                        required
                      >
                        <option value="" disabled>Select a service...</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="form-label">County / Location <span className="text-red-500">*</span></label>
                      <select
                        name="county"
                        value={form.county}
                        onChange={handleChange}
                        className="form-input"
                        required
                      >
                        <option value="" disabled>Select county...</option>
                        {coloradoCounties.map((c) => (
                          <option key={c} value={c}>{c} County</option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="form-label">Urgency Level <span className="text-red-500">*</span></label>
                      <div className="grid grid-cols-3 gap-3 mt-1">
                        {[
                          { value: "standard", label: "Standard", sub: "3–5 business days" },
                          { value: "rush", label: "Rush", sub: "Next business day" },
                          { value: "same-day", label: "Same-Day", sub: "Call to confirm availability" },
                        ].map((opt) => (
                          <label
                            key={opt.value}
                            className={`flex flex-col items-center justify-center p-3 border-2 rounded cursor-pointer transition-all text-center ${
                              form.urgency === opt.value
                                ? "border-[#2E6DA4] bg-[#2E6DA4]/5"
                                : "border-[#e8eaed] hover:border-[#2E6DA4]/40"
                            }`}
                          >
                            <input
                              type="radio"
                              name="urgency"
                              value={opt.value}
                              checked={form.urgency === opt.value}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <span className={`font-bold text-sm ${form.urgency === opt.value ? "text-[#2E6DA4]" : "text-[#0F2744]"}`}>
                              {opt.label}
                            </span>
                            <span className="text-[#6B7C8D] text-xs mt-0.5">{opt.sub}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Section: Recipient Information */}
                  <div className="px-7 py-5 border-t border-b border-[#e8eaed] bg-[#F4F5F7]">
                    <h3 className="font-bold text-[#0F2744] text-base" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Recipient / Defendant Information
                    </h3>
                    <p className="text-[#6B7C8D] text-xs mt-0.5">Person or entity to be served (if applicable)</p>
                  </div>
                  <div className="p-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">Recipient Full Name</label>
                      <input
                        type="text"
                        name="recipientName"
                        value={form.recipientName}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="form-label">Street Address</label>
                      <input
                        type="text"
                        name="recipientAddress"
                        value={form.recipientAddress}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="123 Main St"
                      />
                    </div>
                    <div>
                      <label className="form-label">City / Town</label>
                      <input
                        type="text"
                        name="recipientCity"
                        value={form.recipientCity}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Denver"
                      />
                    </div>
                  </div>

                  {/* Section: Documents & Notes */}
                  <div className="px-7 py-5 border-t border-b border-[#e8eaed] bg-[#F4F5F7]">
                    <h3 className="font-bold text-[#0F2744] text-base" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Documents & Additional Notes
                    </h3>
                  </div>
                  <div className="p-7 space-y-5">
                    {/* File Upload */}
                    <div>
                      <label className="form-label">Upload Document (optional)</label>
                      <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-[#d1d5db] rounded cursor-pointer hover:border-[#2E6DA4] hover:bg-[#2E6DA4]/3 transition-colors">
                        <Upload size={20} className="text-[#6B7C8D] mb-2" />
                        {fileName ? (
                          <span className="text-sm text-[#2E6DA4] font-medium">{fileName}</span>
                        ) : (
                          <>
                            <span className="text-sm text-[#6B7C8D]">Click to upload or drag and drop</span>
                            <span className="text-xs text-[#6B7C8D] mt-0.5">PDF, DOC, DOCX up to 10MB</span>
                          </>
                        )}
                        <input type="file" className="sr-only" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                      </label>
                    </div>
                    <div>
                      <label className="form-label">Notes / Additional Details</label>
                      <textarea
                        name="notes"
                        value={form.notes}
                        onChange={handleChange}
                        className="form-input resize-none"
                        rows={4}
                        placeholder="Describe your case, any special instructions, known information about the recipient, or other relevant details..."
                      />
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-[#F4F5F7] rounded border border-[#e8eaed]">
                      <Shield size={16} className="text-[#B8963E] shrink-0 mt-0.5" />
                      <p className="text-xs text-[#3D4F61] leading-relaxed">
                        All information submitted is kept strictly confidential. We do not share client or case information with any third parties. Your privacy and the integrity of your legal matter are our top priorities.
                      </p>
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center text-base py-3.5">
                      Submit Quote Request
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* ── SIDEBAR ── */}
            <div className="space-y-5">
              {/* Quick contact */}
              <div className="bg-[#0F2744] rounded-lg p-6 text-white">
                <h3
                  className="font-bold text-lg mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Need Immediate Help?
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  For urgent matters, call us directly. We respond within the hour.
                </p>
                <a href="tel:7205550192" className="btn-secondary w-full justify-center mb-3">
                  <Phone size={15} />
                  (720) 555-0192
                </a>
                <p className="text-white/50 text-xs text-center">
                  Mon–Sun 8am–5pm
                </p>
              </div>

              {/* What to expect */}
              <div className="bg-white rounded-lg border border-[#e8eaed] p-6">
                <h4 className="font-bold text-[#0F2744] mb-4 text-sm uppercase tracking-wide">
                  What to Expect
                </h4>
                <div className="space-y-3">
                  {[
                    { icon: Clock, text: "Response within 1 business hour" },
                    { icon: CheckCircle, text: "Transparent, upfront pricing" },
                    { icon: CheckCircle, text: "GPS-verified proof of service" },
                    { icon: Clock, text: "Real-time status updates" },
                    { icon: CheckCircle, text: "Court-admissible affidavits" },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex items-center gap-2.5 text-sm text-[#3D4F61]">
                        <Icon size={13} className="text-[#2E6DA4] shrink-0" />
                        {item.text}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Rush service */}
              <div className="bg-[#B8963E]/10 border border-[#B8963E]/30 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={16} className="text-[#B8963E]" />
                  <span className="font-bold text-[#0F2744] text-sm">Rush Service Available</span>
                </div>
                <p className="text-[#3D4F61] text-xs leading-relaxed">
                  Same-day and next-day service available across our service area. Select "Same-Day" or "Rush" above, or call us directly to confirm availability in your county.
                </p>
              </div>

              {/* Service area */}
              <div className="bg-white rounded-lg border border-[#e8eaed] p-5">
                <h4 className="font-bold text-[#0F2744] mb-3 text-sm uppercase tracking-wide">
                  Service Area
                </h4>
                <p className="text-[#3D4F61] text-xs leading-relaxed">
                  We serve Adams, Arapahoe, Boulder, Denver, Douglas, and Jefferson counties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
