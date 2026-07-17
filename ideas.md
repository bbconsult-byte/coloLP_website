# Colorado Legal Process & Investigations — Design Brief

## Three Stylistic Approaches

### Approach A — "The Courthouse"
Classic American legal gravitas. Think carved stone, dark wood paneling, and brass fixtures. Deep navy with warm cream and gold accents. Serif-heavy typography. Probability: 0.07

### Approach B — "Measured Authority"
Modern professional services meets institutional trust. Clean, restrained, and confident. Charcoal and deep navy with steel-blue accents and crisp white. A hybrid of serif display type and geometric sans-serif body copy. Probability: 0.04

### Approach C — "Rocky Mountain Law"
Colorado-grounded professionalism. Deep forest green and charcoal with gold accents, evoking the state's landscape and legal heritage. Strong, structured layout with a sense of permanence. Probability: 0.02

---

## Selected Approach: **B — "Measured Authority"**

### Design Movement
American Institutional Modernism — the visual language of established law firms, federal courthouses, and professional services companies that have earned their reputation over decades. Not flashy, not minimal — authoritative.

### Core Principles
1. **Restraint signals credibility** — every element earns its place; nothing decorative without purpose
2. **Structure over flair** — asymmetric but disciplined layouts that feel organized and trustworthy
3. **Typography carries the weight** — type hierarchy does the heavy lifting; color and decoration are secondary
4. **Whitespace as confidence** — generous spacing communicates that the firm is not trying too hard

### Color Philosophy
- **Primary Navy**: `#0F2744` — deep institutional navy, the color of authority and trust
- **Charcoal**: `#1C2B3A` — near-black for body text and dark sections
- **Steel Blue Accent**: `#2E6DA4` — approachable authority, used for CTAs and links
- **Gold Accent**: `#B8963E` — understated prestige, used for decorative rules, badges, and highlights
- **Light Gray Background**: `#F4F5F7` — clean, professional page background
- **White**: `#FFFFFF` — card surfaces and content areas
- **Warm Cream**: `#FAF8F4` — hero section background warmth

### Layout Paradigm
Left-anchored asymmetric layouts. Hero sections use a strong left-aligned text block with a visual element on the right. Service cards use a structured 3-column grid. No centered-everything layouts. Navigation is top-anchored and sticky with a persistent CTA button.

### Signature Elements
1. **Gold horizontal rule** — a thin 2px gold line used as a section divider and decorative accent under headings
2. **Navy sidebar strip** — a dark navy left-border on cards and callout blocks to signal authority
3. **Badge/seal motifs** — circular credential badges with thin borders for trust signals

### Interaction Philosophy
Deliberate and responsive. Hover states are subtle (slight elevation, border color shift). No bouncy animations. Transitions are fast (150–200ms) and ease-out. The site should feel like it responds to the user, not performs for them.

### Animation
- Entrance animations: fade-in-up at 200ms ease-out, staggered 50ms per card
- Hover: `translateY(-2px)` + subtle box-shadow increase on cards
- Nav: background transitions from transparent to navy/white on scroll
- Button press: `scale(0.97)` at 120ms
- No parallax, no looping animations

### Typography System
- **Display/Headings**: `Playfair Display` — authoritative serif with legal gravitas
- **Body/UI**: `Source Sans 3` — clean, highly legible professional sans-serif
- **Accent/Labels**: `Source Sans 3` semibold, uppercase, letter-spaced
- H1: 3.5rem / bold / Playfair Display
- H2: 2.25rem / bold / Playfair Display
- H3: 1.5rem / semibold / Source Sans 3
- Body: 1rem / regular / Source Sans 3
- Small/Label: 0.8125rem / semibold / Source Sans 3 / uppercase / 0.08em letter-spacing

### Brand Essence
Colorado's most trusted process serving and investigative partner — for legal professionals who can't afford mistakes.
**Adjectives**: Reliable. Discreet. Thorough.

### Brand Voice
Headlines are declarative and confident. CTAs are direct, not salesy. Microcopy is precise and professional.
- Example headline: "Served. Filed. Done Right."
- Example CTA: "Request a Quote — We Respond Within the Hour"
- Banned phrases: "Welcome to our website", "Get started today", "We're passionate about..."

### Wordmark & Logo
A bold shield/scales-of-justice hybrid mark — a simplified geometric shield with a thin inner border, rendered in navy with a gold accent line. The company name set in Playfair Display next to it.

### Signature Brand Color
Deep Institutional Navy `#0F2744`

---

## Style Decisions
- Use Playfair Display for all H1/H2 headings; Source Sans 3 for all body and UI text
- Gold accent lines appear under section headings and on card left-borders
- All primary CTAs use steel-blue background with white text; secondary CTAs use navy outline
- Card hover: translateY(-2px) + shadow-md increase, 180ms ease-out
- Mobile nav: full-screen overlay in navy with white text
- Gold is an accent color only: use it for rules, seals, badges, key numerals, and rare emphasis; primary CTAs use steel blue with white text
- Section transitions are rectilinear and institutional; no soft waves, blobs, or decorative curves
- The dominant page rhythm is left-anchored and editorial, with centered layouts reserved only for short testimonial, mission, or final CTA moments
- All page headers have a 4px gold bottom border for consistent institutional identity
