# Website Content Requirements — coloLP_website

**Context:** The site was generated from a template and is filled with **fabricated placeholder
content** — fake company history, fake founder/team, fake credentials, fake stats, fake
testimonials, and fake phone/email/address. This pass replaces placeholder content with **Buddy's
real, verifiable facts** and **removes anything not yet verifiable** until Buddy provides it.

**Guiding rule:** Never publish a claim we can't back up (years, credentials, counts, reviews).
When in doubt, remove it now; add it back once verified.

**Confirmed facts (from Rory):**
- In business **6 years** (replaces all "20+ years" / "two decades" / "since 2004").
- Serves **6 counties:** Adams, Arapahoe, Boulder, Denver, Douglas, Jefferson (replaces "64 counties" / "+52" / "statewide").
- Business hours **Mon–Sun, 8:00 AM – 5:00 PM**.
- Remove testimonials, all credentials, and the physical location/map for now.

---

## PART 1 — Changes being made now (no verification needed)

These follow directly from Rory's confirmed instructions and are being applied in this pass.

### Global
- [x] **Years:** every "20+", "two decades", "over a decade", "founded in 2004" → **6 years**.
- [x] **Counties:** every "all 64 counties", "+52", "statewide" → the **6 real counties** (or their names).
- [x] **Credentials removed** until real ones are supplied — this includes the "Licensed & Bonded",
      "NAPPS", "COPSA", "Bonded & Insured", "E&O" claims wherever they appear (Home, About, Services,
      Footer, Navbar, Quote). *(Flagged for re-add — see Part 2.)*
- [x] **Business hours** → Mon–Sun 8am–5pm (Contact, Footer, Quote).

### Home (`pages/Home.tsx`)
- [x] Stat tiles: "20+ Years" → 6, "64 Colorado Counties" → 6.
- [x] Remove the **Testimonials** section (3 fake quotes).
- [x] Remove the floating **"Our Credentials"** card.
- [x] Coverage section: county grid → 6 real counties; remove "+ All remaining 52".
- [x] Hero/why-us copy: "two decades" → 6 years; "all 64 counties"/"statewide" → 6 counties.

### Services (`pages/Services.tsx`)
- [x] Remove the fake credential chip row (NAPPS / COPSA / 20+ Years / All 64 / Bonded).
- [x] "statewide" coverage copy → 6 counties.
- *(Service cards themselves kept pending Buddy's verification — see Part 2.)*

### Resources (`pages/Resources.tsx`)
- [x] Remove the **"Forms & Reference Guides" (Downloads)** section entirely.
- [x] "all 64 counties" copy in FAQ → 6 counties.

### About (`pages/About.tsx`)
- [x] Remove the fake **Team** section (Robert J. Harmon, Maria Castillo, David Thornton).
- [x] Remove the fake **Licensing & Credentials** section.
- [x] Remove "founded 2004", "two decades", "20+", "64 counties" from header/story/mission/stats.
- *(New Buddy-based story + bio still needed — see Part 2.)*

### Contact (`pages/Contact.tsx`)
- [x] Business hours → Mon–Sun 8am–5pm.
- [x] Remove the **address** block, the **"Our Location"** map, and the "+All 64" areas chip.
- [x] Counties chips → 6 real counties.

### Shared
- [x] **Footer:** remove credentials block; hours → Mon–Sun 8–5; counties → 6; "all 64/licensed" copy → real.
- [x] **Navbar:** "Serving All 64 Colorado Counties · Licensed & Bonded" → 6-county coverage line.
- [x] **Quote:** county dropdown → 6 counties; service-area copy → 6; hours → Mon–Sun 8–5; drop credential chips.


### GitHub Issues — Part 1

| # | Issue | Branch | Files touched |
|---|-------|--------|----------------|
| 1 | Correct years-in-business (→6) and counties served (→6) everywhere | `content/correct-years-and-counties` | Home, About, Services, Resources, Footer, Navbar, Quote, Contact |


| 2 | Remove fabricated trust content: testimonials, credentials, About team bios | `content/remove-fabricated-trust-content` | Home, Services, About, Footer, Navbar, Quote |


| 3 | Update business hours to Mon–Sun 8am–5pm | `content/update-business-hours` | Contact, Footer, Quote |


| 4 | Remove Contact page address + map | `content/remove-contact-address-map` | Contact.tsx (also drops the Google Maps/Forge API key dependency flagged earlier) |


| 5 | Remove Resources "Forms & Reference Guides" section | `content/remove-resources-downloads` | Resources.tsx |

---

## PART 2 — Blocked on verification (need input before I can finish)

Nothing below is being changed yisset — these need real values from Buddy/Rory.

| # | Item | What I need | Affects |
|---|------|-------------|---------|
| 1 | **Phone number** | Real business number (fake `(720) 555-0192` left in place until provided) | ~8 spots, all pages |
| 2 | **Email** | Real business email (fake `info@coloradolegalprocess.com` left in place) | ~4 spots |
| 3 | **Services offered** | Which of the 6 Buddy actually does (Process Serving, Skip Tracing, Court Filing, Surveillance, Background Investigations, Rush/Same-Day) | Home, Services, Footer, Quote |
| 4 | **Business name** | Keep "Colorado Legal Process & Investigations" or change? | Everything (logo, title, footer) |
| 5 | **Buddy's About profile** | Bio, background, what to highlight | About page rewrite |
| 6 | **Real credentials** | Actual license/bond/insurance/memberships to re-add | Home, About, Services, Footer, Navbar |
| 7 | **Home stats** | Real figures (or drop) for "15,000+ Documents Served" & "98% On-Time Rate" — fabricated | Home, About |
| 8 | **Real articles** | Links/text for real Resources articles (6 current ones are fabricated) | Resources |
| 9 | **Reviews/clients** | Real companies Buddy has worked with, for the future reviews feature | Home (new) |
| 10 | **"Icons" (Home)** | Clarify what change you want to the home-page icons | Home |

---

## Other observations
- Images use absolute `/manus-storage/...` paths — confirm those assets ship in the build or they'll 404. We will be using icons derived from RealWeb/coloLP_website/images/B&B_Solutions_Images


- Removing the Contact map removes the only Google Maps usage → resolves the `VITE_FRONTEND_FORGE_API_KEY` dependency.
- `%VITE_ANALYTICS_*%` script in `client/index.html` still needs real env vars or removal.


### Issue 1:
client/src/pages/Home.tsx
Line 134 — hero paragraph:

OLD: Professional process serving and investigative services across all 64 Colorado counties. Trusted by attorneys, law firms, and paralegals for over two decades.
NEW: Professional process serving and investigative services across Adams, Arapahoe, Boulder, Denver, Douglas, and Jefferson counties. Trusted by attorneys, law firms, and paralegals for 6 years.
Line 148 — quick trust indicators array:

OLD: ["Licensed & Bonded", "All 64 Counties", "Same-Day Available"]
NEW: ["Licensed & Bonded", "6 Colorado Counties", "Same-Day Available"]
Line 261 — Why Choose Us intro:

OLD: Our team brings over two decades of experience, deep knowledge of Colorado law, and an unwavering commitment to accuracy and timeliness.
NEW: Our team brings 6 years of experience, deep knowledge of Colorado law, and an unwavering commitment to accuracy and timeliness.
Lines 276–279 — Why Choose Us bullet item:

OLD:

icon: MapPin,
title: "Statewide Coverage",
desc: "All 64 Colorado counties covered — from Denver metro to rural mountain communities.",
NEW:

icon: MapPin,
title: "Denver Metro Coverage",
desc: "Adams, Arapahoe, Boulder, Denver, Douglas, and Jefferson counties covered.",
Lines 383–413 — Colorado Coverage section:

Heading Serving All of Colorado → Serving the Denver Metro Area
Paragraph From the Denver metro to Colorado's most remote mountain counties, we have the network and resources to serve documents and conduct investigations anywhere in the state. → We serve Adams, Arapahoe, Boulder, Denver, Douglas, and Jefferson counties with the same standard of care on every assignment.
County grid array → replace all 12 entries with just: "Adams County", "Arapahoe County", "Boulder County", "Denver County", "Douglas County", "Jefferson County"
Delete the line: <p className="text-[#B8963E] text-sm font-semibold">+ All remaining 52 Colorado counties</p>
alt="Colorado statewide coverage" → alt="Colorado Legal Process service area"
client/src/pages/About.tsx
Line 111 — header intro: For over two decades, → For 6 years,
Line 133 — story para 1 (partial fix — founder name stays for now): founded in 2004 by Robert J. Harmon → founded in 2020 by Robert J. Harmon
Line 139 — story para 3: Today, we serve all 64 Colorado counties ... a complex surveillance operation in a rural mountain county → Today, we serve Adams, Arapahoe, Boulder, Denver, Douglas, and Jefferson counties ... a background investigation in Boulder
Lines 155–158 — stats overlay: { value: "20+", label: "Years" }, { value: "64", label: "Counties" }, → { value: "6", label: "Years" }, { value: "6", label: "Counties" },
Lines 79–82 — whyChooseUs bullet:
OLD: title: "True Statewide Coverage", desc: "Unlike services that only cover the Denver metro, we have established networks in all 64 Colorado counties — from Telluride to Yuma, from Fort Collins to Pueblo."
NEW: title: "Focused Denver Metro Coverage", desc: "We serve Adams, Arapahoe, Boulder, Denver, Douglas, and Jefferson counties with deep local knowledge of each county's courts and procedures."
client/src/pages/Resources.tsx
Lines 87–88 — FAQ entry:
OLD: q: "Do you serve documents in rural Colorado counties?", a: "Yes. We serve all 64 Colorado counties, including rural and mountain communities. ... additional mileage fees, which will be disclosed upfront in your quote."
NEW: q: "Which Colorado counties do you serve?", a: "We currently serve Adams, Arapahoe, Boulder, Denver, Douglas, and Jefferson counties."
client/src/pages/Contact.tsx
Lines 12–17 — coloradoCounties array → replace entirely with: ["Adams", "Arapahoe", "Boulder", "Denver", "Douglas", "Jefferson"]
client/src/components/Footer.tsx
Line 63: serving all 64 counties statewide. → serving Adams, Arapahoe, Boulder, Denver, Douglas, and Jefferson counties.
Lines 26–30 — counties array → ["Denver", "Jefferson", "Arapahoe", "Adams", "Douglas", "Boulder"]
Lines 176–178 — delete the + All 64 Counties <span> block entirely (no remainder to show)
client/src/components/Navbar.tsx
Line 74: Serving All 64 Colorado Counties · Licensed & Bonded → Serving Adams, Arapahoe, Boulder, Denver, Douglas & Jefferson · Licensed & Bonded
client/src/pages/Quote.tsx
Lines 24–35 — coloradoCounties array (64-entry dropdown list) → replace entirely with: ["Adams", "Arapahoe", "Boulder", "Denver", "Douglas", "Jefferson"]
Line 420: available statewide. Select → available across our service area. Select
Line 430: We serve all 64 Colorado counties, including Denver, Jefferson, Arapahoe, Adams, Douglas, El Paso, Boulder, Larimer, Weld, Pueblo, Mesa, and all rural and mountain counties. → We serve Adams, Arapahoe, Boulder, Denver, Douglas, and Jefferson counties.
client/src/pages/Services.tsx (borderline — "statewide" framing tied to coverage, not credentials)
Line 52: county courts statewide. → county courts in our service area.
Line 110: Statewide rush coverage → Rush coverage across our 6 service counties

### Issue 2:
client/src/pages/Home.tsx
Deleted the testimonials const array (3 fake quotes) and the credentials const array.
Deleted the "Licensed, Bonded & Insured" bullet item from the Why Choose Us list.
Deleted the floating "Our Credentials" card.
Deleted the entire Testimonials section.
Trust indicators chip row: ["Licensed & Bonded", "6 Denver Metro Counties", "Same-Day Available"] → ["6 Denver Metro Counties", "Same-Day Available"]
Removed now-unused icon imports: Star, Shield


client/src/pages/Services.tsx
Deleted the entire Credentials section (NAPPS / COPSA / 20+ Years / All 64 / Bonded chips).
Removed now-unused icon import: Shield
client/src/pages/About.tsx


Deleted the teamMembers const array (Robert J. Harmon, Maria Elena Castillo, David K. Thornton).
Deleted the credentials const array.
Deleted the entire "── TEAM ──" section.
Deleted the entire "── CREDENTIALS ──" (Licensing & Credentials) section.
Removed now-unused icon imports: Shield, Award, Lock, CheckCircle, Users (also dropped Star, which was already unused before this ticket)


client/src/components/Footer.tsx
Deleted the "Credentials" column block (NAPPS/COPSA/Bonded list).
Line 61: Licensed, bonded, and serving Adams, Arapahoe, Boulder, Denver, Douglas, and Jefferson counties. → Serving Adams, Arapahoe, Boulder, Denver, Douglas, and Jefferson counties.
Removed now-unused icon import: Shield


client/src/components/Navbar.tsx
Line 74: Serving Adams, Arapahoe, Boulder, Denver, Douglas & Jefferson · Licensed & Bonded → Serving Adams, Arapahoe, Boulder, Denver, Douglas & Jefferson
client/src/pages/Quote.tsx
Intro bar chips: ["Licensed & Bonded", "GPS-Verified", "Court-Admissible"] → ["GPS-Verified", "Court-Admissible"]
Deleted the { icon: Shield, text: "Licensed & bonded professionals" } entry from the "What to Expect" list.
(Shield import kept — still used elsewhere in this file for the confidentiality note.)

Verified clean with `npx tsc --noEmit` — no unused-import or reference errors after all deletions.

### Issue 3+4 (combined — Update business hours to Mon–Sun 8am–5pm; Remove Contact page address + map):
client/src/pages/Contact.tsx
Lines 117–119 — business hours: replace the three-row list with one row:
OLD:
{ day: "Monday – Friday", hours: "7:00 AM – 7:00 PM" },
{ day: "Saturday", hours: "8:00 AM – 4:00 PM" },
{ day: "Sunday", hours: "Closed (Emergency only)" },
NEW:
{ day: "Monday – Sunday", hours: "8:00 AM – 5:00 PM" },
Delete lines 94–105 — the Address block (MapPin icon, "1700 Lincoln Street, Suite 2000, Denver, CO 80203").
Delete lines 245–275 — the entire "Map" block (MapView/geocoder usage).
Line 10 — remove the now-unused import: import { MapView } from "@/components/Map";
Line 9 — remove MapPin from the lucide-react import (only used in the address block being deleted):
OLD: import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react";
NEW: import { Phone, Mail, Clock, CheckCircle, ArrowRight } from "lucide-react";
Note: removing the Map block removes the site's only usage of the Google Maps MapView component, resolving the VITE_FRONTEND_FORGE_API_KEY dependency flagged earlier.
client/src/components/Footer.tsx
Line 78: <span>Mon–Fri: 7am–7pm<br />Sat: 8am–4pm</span> → <span>Mon–Sun: 8am–5pm</span>
client/src/pages/Quote.tsx
Line 95: <span className="font-semibold text-[#0F2744]">Response within 1 hour</span> · Mon–Fri 7am–7pm · Sat 8am–4pm → · Mon–Sun 8am–5pm
Line 375: Mon–Fri 7am–7pm · Sat 8am–4pm → Mon–Sun 8am–5pm

Issue 5 — Remove Resources "Forms & Reference Guides" section; replace article excerpts with TBD:
client/src/pages/Resources.tsx
Delete lines 100–125 — the downloads const array.
Delete lines 273–317 — the entire "── DOWNLOADS ──" section.
Line 9 import: remove FileText and Download (both become unused after the above deletion).
Articles: keep category, title, readTime, date, and slug for all 6 entries — only replace the excerpt value with "TBD" in each:
Line 18 — Process Serving / "What Is Proper Service of Process in Colorado?"
Line 26 — Process Serving / "How Long Does Process Serving Take in Colorado?"
Line 34 — Legal Procedures / "Colorado Eviction Process: A Step-by-Step Guide"
Line 42 — Skip Tracing / "When Can You Use Substituted Service in Colorado?"
Line 50 — Investigations / "What Is Skip Tracing and When Do You Need It?"
Line 58 — Legal Procedures / "Serving a Business Entity in Colorado: What You Need to Know"
