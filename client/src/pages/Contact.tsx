/* ============================================================
   CONTACT PAGE — Colorado Legal Process & Investigations
   Design: Measured Authority
   ============================================================ */
import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { MapView } from "@/components/Map";

const coloradoCounties = [
  "Adams", "Arapahoe", "Boulder", "Denver", "Douglas", "Jefferson",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
            <span className="section-label">Contact Us</span>
            <h1
              className="text-white mt-2 mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}
            >
              Get in Touch
            </h1>
            <div className="gold-rule" />
            <p className="text-white/75 text-base leading-relaxed">
              Have a question or need to discuss a matter? Reach out by phone, email, or the contact form below. We respond promptly to all inquiries.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, transparent, #B8963E 20%, #B8963E 80%, transparent)" }} />
      </section>

      <section className="py-14">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* ── CONTACT INFO ── */}
            <div className="space-y-5">
              {/* Business info card */}
              <div className="bg-[#0F2744] rounded-lg p-6 text-white">
                <h3
                  className="font-bold text-lg mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <a href="tel:7205550192" className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded bg-[#B8963E]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone size={14} className="text-[#B8963E]" />
                    </div>
                    <div>
                      <div className="text-xs text-white/50 uppercase tracking-wide mb-0.5">Phone</div>
                      <div className="text-white group-hover:text-[#B8963E] transition-colors font-semibold">
                        (720) 555-0192
                      </div>
                    </div>
                  </a>
                  <a href="mailto:info@coloradolegalprocess.com" className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded bg-[#B8963E]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail size={14} className="text-[#B8963E]" />
                    </div>
                    <div>
                      <div className="text-xs text-white/50 uppercase tracking-wide mb-0.5">Email</div>
                      <div className="text-white group-hover:text-[#B8963E] transition-colors text-sm">
                        info@coloradolegalprocess.com
                      </div>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-[#B8963E]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={14} className="text-[#B8963E]" />
                    </div>
                    <div>
                      <div className="text-xs text-white/50 uppercase tracking-wide mb-0.5">Address</div>
                      <div className="text-white text-sm leading-relaxed">
                        1700 Lincoln Street, Suite 2000<br />
                        Denver, CO 80203
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business hours */}
              <div className="bg-white rounded-lg border border-[#e8eaed] p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={16} className="text-[#B8963E]" />
                  <h4 className="font-bold text-[#0F2744] text-sm uppercase tracking-wide">Business Hours</h4>
                </div>
                <div className="space-y-2 text-sm">
                  {[
                    { day: "Monday – Friday", hours: "7:00 AM – 7:00 PM" },
                    { day: "Saturday", hours: "8:00 AM – 4:00 PM" },
                    { day: "Sunday", hours: "Closed (Emergency only)" },
                  ].map((row) => (
                    <div key={row.day} className="flex justify-between items-center py-1.5 border-b border-[#e8eaed] last:border-0">
                      <span className="text-[#3D4F61]">{row.day}</span>
                      <span className="font-semibold text-[#0F2744]">{row.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 p-2.5 bg-[#B8963E]/10 rounded text-xs text-[#3D4F61]">
                  <span className="font-semibold text-[#B8963E]">Rush & Emergency Service</span> available outside business hours. Call for availability.
                </div>
              </div>

              {/* Service area */}
              <div className="bg-white rounded-lg border border-[#e8eaed] p-5">
                <h4 className="font-bold text-[#0F2744] mb-3 text-sm uppercase tracking-wide">
                  Areas Served
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {coloradoCounties.map((county) => (
                    <span
                      key={county}
                      className={`text-xs px-2 py-0.5 rounded border ${
                        county.startsWith("+")
                          ? "text-[#B8963E] font-semibold border-[#B8963E]/30 bg-[#B8963E]/5"
                          : "text-[#3D4F61] border-[#e8eaed] bg-[#F4F5F7]"
                      }`}
                    >
                      {county}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── CONTACT FORM + MAP ── */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Form */}
              <div className="bg-white rounded-lg border border-[#e8eaed] shadow-sm overflow-hidden">
                <div className="px-7 py-5 border-b border-[#e8eaed] bg-[#F4F5F7]">
                  <h3 className="font-bold text-[#0F2744] text-base" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Send Us a Message
                  </h3>
                </div>
                {submitted ? (
                  <div className="p-10 text-center">
                    <div className="w-14 h-14 rounded-full bg-[#2E6DA4]/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={28} className="text-[#2E6DA4]" />
                    </div>
                    <h3
                      className="text-[#0F2744] text-xl font-bold mb-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Message Sent
                    </h3>
                    <p className="text-[#3D4F61] text-sm mb-5">
                      Thank you for reaching out. We'll respond within one business hour during business hours.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="btn-secondary text-sm">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-7 space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                        <label className="form-label">Email Address <span className="text-red-500">*</span></label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="jane@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="(303) 555-0100"
                      />
                    </div>
                    <div>
                      <label className="form-label">Message <span className="text-red-500">*</span></label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        className="form-input resize-none"
                        rows={5}
                        placeholder="How can we help you? Please describe your needs..."
                        required
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                      <p className="text-xs text-[#6B7C8D]">
                        For urgent matters, please call us directly at (720) 555-0192.
                      </p>
                      <button type="submit" className="btn-primary shrink-0">
                        Send Message
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Map */}
              <div className="bg-white rounded-lg border border-[#e8eaed] overflow-hidden shadow-sm">
                <div className="px-7 py-5 border-b border-[#e8eaed] bg-[#F4F5F7]">
                  <h3 className="font-bold text-[#0F2744] text-base" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Our Location
                  </h3>
                  <p className="text-[#6B7C8D] text-xs mt-0.5">1700 Lincoln Street, Suite 2000 · Denver, CO 80203</p>
                </div>
                <div style={{ height: "300px" }}>
                  <MapView
                    onMapReady={(map) => {
                      const geocoder = new google.maps.Geocoder();
                      geocoder.geocode(
                        { address: "1700 Lincoln Street, Denver, CO 80203" },
                        (results, status) => {
                          if (status === "OK" && results && results[0]) {
                            const location = results[0].geometry.location;
                            map.setCenter(location);
                            map.setZoom(15);
                            new google.maps.Marker({
                              position: location,
                              map,
                              title: "Colorado Legal Process & Investigations",
                            });
                          }
                        }
                      );
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 bg-[#0F2744]">
        <div className="container text-center">
          <h2
            className="text-white text-2xl font-bold mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Get Started?
          </h2>
          <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">
            Submit a quote request online or call us directly for immediate assistance.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/quote" className="btn-primary">
              Request a Quote
              <ArrowRight size={15} />
            </Link>
            <a href="tel:7205550192" className="btn-outline-white">
              <Phone size={14} />
              (720) 555-0192
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
