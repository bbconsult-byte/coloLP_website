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

---

## PART 2 — Blocked on verification (need input before I can finish)

Nothing below is being changed yet — these need real values from Buddy/Rory.

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
