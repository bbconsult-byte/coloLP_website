/* ============================================================
   RESOURCES PAGE — Colorado Legal Process & Investigations
   Design: Measured Authority
   ============================================================ */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  BookOpen, FileText, Download, Clock, ArrowRight,
  ChevronDown, ChevronUp, HelpCircle, Phone
} from "lucide-react";
import { useState } from "react";

const articles = [
  {
    category: "Process Serving",
    title: "What Is Proper Service of Process in Colorado?",
    excerpt: "Colorado law requires that legal documents be served in a specific manner to be legally valid. Understanding the rules of proper service is essential for attorneys and parties to ensure their cases proceed without procedural challenges.",
    readTime: "5 min read",
    date: "November 2024",
    slug: "proper-service-colorado",
  },
  {
    category: "Process Serving",
    title: "How Long Does Process Serving Take in Colorado?",
    excerpt: "Timelines for process serving in Colorado vary depending on the type of document, the county, and whether the recipient is cooperative. This guide explains standard timelines and what factors can affect service completion.",
    readTime: "4 min read",
    date: "October 2024",
    slug: "how-long-process-serving",
  },
  {
    category: "Legal Procedures",
    title: "Colorado Eviction Process: A Step-by-Step Guide",
    excerpt: "Navigating Colorado's eviction process requires strict adherence to statutory notice requirements and service rules. This guide walks landlords and their attorneys through the proper procedure from notice to judgment.",
    readTime: "7 min read",
    date: "September 2024",
    slug: "colorado-eviction-process",
  },
  {
    category: "Skip Tracing",
    title: "When Can You Use Substituted Service in Colorado?",
    excerpt: "When a defendant cannot be personally served, Colorado courts allow substituted service under certain conditions. Learn when substituted service is permitted and how to properly document it for court.",
    readTime: "4 min read",
    date: "August 2024",
    slug: "substituted-service-colorado",
  },
  {
    category: "Investigations",
    title: "What Is Skip Tracing and When Do You Need It?",
    excerpt: "Skip tracing is the process of locating a person who has 'skipped' their last known address. This article explains how professional skip tracing works, the databases and techniques used, and when it's appropriate to use this service.",
    readTime: "5 min read",
    date: "July 2024",
    slug: "what-is-skip-tracing",
  },
  {
    category: "Legal Procedures",
    title: "Serving a Business Entity in Colorado: What You Need to Know",
    excerpt: "Serving a corporation, LLC, or other business entity in Colorado has specific requirements under state law. This guide covers how to properly serve registered agents, officers, and what to do when a business has no registered agent.",
    readTime: "6 min read",
    date: "June 2024",
    slug: "serving-business-entity-colorado",
  },
];

const faqs = [
  {
    q: "What are the requirements for valid service of process in Colorado?",
    a: "In Colorado, service of process must be made by a person who is at least 18 years old and not a party to the action. Personal service is the preferred method, where documents are delivered directly to the individual named. Colorado Rules of Civil Procedure Rule 4 governs service requirements. Documents must be served within the applicable statute of limitations and any court-ordered deadlines.",
  },
  {
    q: "How many service attempts do you make before reporting non-service?",
    a: "We typically make a minimum of three service attempts at different times of day (morning, afternoon, and evening) and on different days of the week. For residential addresses, we also attempt service on weekends. If all attempts are unsuccessful, we provide a detailed non-service affidavit documenting each attempt with date, time, and observations.",
  },
  {
    q: "What is included in a Proof of Service affidavit?",
    a: "Our Proof of Service affidavits include: the name of the person served, the date and time of service, the address where service was made, a physical description of the person served (if personal service), the documents served, the name and signature of the process server, and notarization. All affidavits meet Colorado court requirements.",
  },
  {
    q: "Can you serve documents outside of normal business hours?",
    a: "Yes. We offer evening and weekend service for an additional fee. Same-day and rush service is available for urgent matters. For truly time-sensitive situations, call us directly at (720) 555-0192 to discuss availability and arrange immediate service.",
  },
  {
    q: "What happens if a defendant refuses to accept service?",
    a: "If a person refuses to accept documents, our process server will identify themselves and inform the person that service is being made. Under Colorado law, if a person is identified and refuses to accept documents, the server may leave the documents near the person. This constitutes valid service. The refusal and circumstances are documented in the affidavit.",
  },
  {
    q: "Do you serve documents in rural Colorado counties?",
    a: "Yes. We serve all 64 Colorado counties, including rural and mountain communities. We have a network of licensed process servers throughout the state. Note that service in remote areas may take longer and may incur additional mileage fees, which will be disclosed upfront in your quote.",
  },
  {
    q: "What is the difference between personal service and substituted service?",
    a: "Personal service means documents are delivered directly to the named individual. Substituted service is used when personal service cannot be achieved after reasonable attempts — it may involve leaving documents with a responsible person at the defendant's residence or place of business, or in some cases, service by publication. Substituted service requires court approval in some circumstances.",
  },
  {
    q: "Are your process servers licensed in Colorado?",
    a: "Yes. All of our process servers are licensed in accordance with Colorado law, bonded, and insured. They receive ongoing training on Colorado Rules of Civil Procedure and court requirements to ensure every service is legally valid and properly documented.",
  },
];

const downloads = [
  {
    title: "Colorado Process Serving Checklist",
    desc: "A practical checklist for attorneys and paralegals to ensure all service requirements are met.",
    type: "PDF",
    size: "124 KB",
  },
  {
    title: "Proof of Service Affidavit Template",
    desc: "A Colorado-compliant proof of service affidavit template for use in state court proceedings.",
    type: "DOCX",
    size: "48 KB",
  },
  {
    title: "Colorado County Court Directory",
    desc: "Contact information and filing requirements for all Colorado county and district courts.",
    type: "PDF",
    size: "312 KB",
  },
  {
    title: "Eviction Notice Requirements by County",
    desc: "A reference guide to notice requirements and service rules for eviction proceedings by county.",
    type: "PDF",
    size: "186 KB",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e8eaed] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-4 text-left"
      >
        <span className="font-semibold text-[#0F2744] text-sm leading-snug">{q}</span>
        {open
          ? <ChevronUp size={16} className="text-[#B8963E] shrink-0 mt-0.5" />
          : <ChevronDown size={16} className="text-[#6B7C8D] shrink-0 mt-0.5" />
        }
      </button>
      {open && (
        <div className="pb-4 text-[#3D4F61] text-sm leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

export default function Resources() {
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
            <span className="section-label">Resources</span>
            <h1
              className="text-white mt-2 mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}
            >
              Legal Process Serving Resources
            </h1>
            <div className="gold-rule" />
            <p className="text-white/75 text-base leading-relaxed">
              Educational guides, frequently asked questions, and downloadable resources for attorneys, paralegals, and members of the public navigating Colorado's legal process.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, transparent, #B8963E 20%, #B8963E 80%, transparent)" }} />
      </section>

      {/* ── ARTICLES ── */}
      <section className="py-16 bg-[#F4F5F7]">
        <div className="container">
          <div className="max-w-xl mb-10">
            <span className="section-label">Articles & Guides</span>
            <h2
              className="text-[#0F2744] mt-2 mb-3"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700 }}
            >
              Understanding Legal Process in Colorado
            </h2>
            <div className="gold-rule" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((article, i) => (
              <div
                key={article.slug}
                className="resource-card animate-fade-in-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="p-5 border-b border-[#e8eaed] bg-[#F4F5F7]">
                  <span className="text-xs font-bold text-[#2E6DA4] uppercase tracking-wide">
                    {article.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3
                    className="text-[#0F2744] font-bold text-base mb-2 leading-snug"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-[#3D4F61] text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-[#6B7C8D]">
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {article.readTime}
                      </span>
                      <span>{article.date}</span>
                    </div>
                    <button className="text-[#2E6DA4] text-xs font-semibold hover:text-[#0F2744] transition-colors flex items-center gap-1">
                      Read More <ArrowRight size={11} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            <div>
              <span className="section-label">FAQ</span>
              <h2
                className="text-[#0F2744] mt-2 mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700 }}
              >
                Frequently Asked Questions
              </h2>
              <div className="gold-rule" />
              <p className="text-[#3D4F61] text-sm leading-relaxed mb-6">
                Answers to the most common questions about process serving, skip tracing, and investigative services in Colorado.
              </p>
              <div className="p-5 bg-[#0F2744] rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <HelpCircle size={16} className="text-[#B8963E]" />
                  <span className="text-white font-semibold text-sm">Have a specific question?</span>
                </div>
                <p className="text-white/60 text-xs mb-3">
                  Our team is happy to answer questions about your specific situation.
                </p>
                <a href="tel:7205550192" className="btn-secondary text-sm w-full justify-center">
                  <Phone size={13} />
                  Call Us
                </a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-[#e8eaed] px-6 py-2">
                {faqs.map((faq, i) => (
                  <FAQItem key={i} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DOWNLOADS ── */}
      <section className="py-16 bg-[#F4F5F7]">
        <div className="container">
          <div className="max-w-xl mb-10">
            <span className="section-label">Downloads</span>
            <h2
              className="text-[#0F2744] mt-2 mb-3"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700 }}
            >
              Forms & Reference Guides
            </h2>
            <div className="gold-rule" />
            <p className="text-[#3D4F61] text-sm leading-relaxed">
              Downloadable resources for attorneys, paralegals, and legal professionals working with Colorado courts.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {downloads.map((dl, i) => (
              <div
                key={dl.title}
                className="bg-white rounded-lg border border-[#e8eaed] p-5 flex items-start gap-4 hover:shadow-md transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="w-10 h-10 rounded bg-[#0F2744]/8 flex items-center justify-center shrink-0">
                  <FileText size={18} className="text-[#2E6DA4]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-[#0F2744] text-sm mb-1">{dl.title}</h4>
                  <p className="text-[#3D4F61] text-xs leading-relaxed mb-2">{dl.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#6B7C8D]">{dl.type} · {dl.size}</span>
                    <button className="flex items-center gap-1.5 text-xs font-semibold text-[#2E6DA4] hover:text-[#0F2744] transition-colors">
                      <Download size={12} />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[#6B7C8D] text-xs mt-4 text-center">
            * Downloadable forms are provided as general references only and do not constitute legal advice. Consult an attorney for guidance on your specific situation.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 bg-[#0F2744]">
        <div className="container text-center">
          <h2
            className="text-white text-2xl font-bold mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Need Professional Assistance?
          </h2>
          <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">
            Our team is ready to help with your process serving and investigative needs. Request a quote or contact us today.
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
