# Digits & Spots — Website Redesign

**Client:** Kathleen M. Elder, RDH, COM  
**Practice:** Digits & Spots — Orofacial Myofunctional Therapy  
**Location:** 8500 West 110th Street, Suite 205, Overland Park, KS 66210  
**Phone:** 913-206-4016  
**Original site:** https://www.digitsandspots.com/index-2.html  

---

## Project Overview

A complete ground-up redesign and rebuild of the Digits & Spots website. The original site was built in the early 2000s by MuddyPaws Creations and features a dated three-column layout with no mobile responsiveness, a broken page (404 on the Digit Sucking page), and a visual aesthetic that no longer reflects the professionalism of the practice.

The redesign modernizes the site while preserving the warmth and specialty focus of the practice. The new design is fully responsive, introduces a warm organic aesthetic, and expands the site from 4 pages (one broken) to 7 complete pages.

---

## Design Direction

**Aesthetic:** Warm organic boutique — approachable, trustworthy, and professional without feeling clinical or sterile.

**Typography:**
- Display / headings: `Lora` (Google Fonts) — serif, elegant, warm
- Body / UI: `DM Sans` (Google Fonts) — clean, readable, modern

**Color Palette:**

| Token | Hex | Usage |
|---|---|---|
| `--sage` | `#5a7a5c` | Primary brand color, buttons, accents |
| `--sage-light` | `#8aaa7c` | Borders, fact dots, step connectors |
| `--sage-pale` | `#eef3ea` | Section backgrounds, card fills |
| `--sage-deep` | `#3a5a3c` | Hover states, dark text on sage |
| `--cream` | `#faf7f2` | Page background |
| `--warm-tan` | `#e8e0d4` | Borders, dividers, secondary backgrounds |
| `--warm-dark` | `#2c2419` | Primary text, dark sections |
| `--warm-mid` | `#6b5c48` | Secondary text, body copy |
| `--warm-muted` | `#9a8a78` | Labels, captions, placeholder text |

**Motifs:**
- The polka-dot / circle pattern from the original site is modernized as subtle decorative SVG dot clusters in hero sections — a nod to "Spots" in the practice name
- The logo mark uses a circle with two smaller circles (spots) rendered in white on sage green

---

## File Structure

```
digits-and-spots/
├── index.html          — Home page
├── omd.html            — What is an OMD?
├── therapy.html        — Orofacial Myofunctional Therapy (OMT)
├── digit-sucking.html  — Digit Sucking Cessation (rebuilt from broken 404)
├── who-we-help.html    — Who We Help + Professional Referrals
├── about.html          — About Kathleen Elder
├── contact.html        — Contact & Appointment Request
├── css/
│   └── style.css       — Single shared stylesheet (all pages)
├── js/
│   └── main.js         — Shared JavaScript (nav, FAQ, form validation)
├── images/             — (create this folder — see Pending Tasks below)
└── README.md           — This file
```

---

## Pages

### `index.html` — Home
**Status:** Complete (stub)

- Hero with headline, location eyebrow, and two CTAs
- Three stat cards: First COM in Kansas, 20+ years, 80–90% effectiveness
- Trust bar (sage green band) with five key differentiators
- Four condition cards linking to interior pages
- Dark section featuring Kathleen's portrait and bio preview
- Closing CTA section

### `omd.html` — What is an OMD?
**Status:** Complete (stub)

- Hero band with page intro
- "The basics" — what an OMD is and how it presents
- "The mouth-body connection" — four cause cards (habits, airway, structural, neurological)
- Effects section — appearance and functional impacts in a two-column layout
- Kathleen pull quote
- CTAs to therapy page and contact

### `therapy.html` — Orofacial Myofunctional Therapy (OMT)
**Status:** Complete (stub)

- Hero band
- Three stat cards (effectiveness, all ages, long-lasting)
- What OMT does — children vs. adults cards
- Five-step therapy process with connected step indicator
- Therapy methods and Kathleen personal quote
- Team approach — four partner specialty cards (orthodontists, pediatric dentists, ENTs, speech therapists)

### `digit-sucking.html` — Digit Sucking Cessation
**Status:** Complete (stub) — *This page was a 404 on the original site and has been fully rebuilt*

- Hero band with Rose Van Norman training callout
- When sucking becomes a problem — four impact cards
- Kathleen's approach — positive, non-punitive method
- Bulleted treatment philosophy
- FAQ accordion (5 questions) with JS-powered open/close
- CTAs to contact and therapy pages

### `who-we-help.html` — Who We Help
**Status:** Complete (stub)

- Hero band
- Two-column audience cards: Children & teens vs. Adults (with distinct conditions listed for each)
- Professional referral section with three specialty cards
- Referral CTA banner (dark) with phone number and form link

### `about.html` — About Kathleen
**Status:** Complete (stub)

- Hero band
- Two-column layout: portrait frame (photo placeholder) + credentials
- Credential pills: RDH, COM, IAOM Certified, CST Trained, KS Licensed since 1980
- Full biographical text
- Bulleted credential facts
- "Why Digits & Spots" name origin section
- Kathleen pull quote

### `contact.html` — Contact & Appointment Request
**Status:** Complete (stub)

- Hero band
- Two-column layout: contact details + appointment request form
- Contact details: phone, address, hours
- Google Maps placeholder (embed instructions in comments)
- Full appointment form with fields: name, phone, email, patient age, primary concern, referred by, message
- Form submission handled in `main.js` (client-side only — backend not yet wired)

---

## Shared Assets

### `css/style.css`
Single stylesheet shared across all pages. Organized into sections:
- CSS custom properties (design tokens)
- Navigation
- Layout & shared structure
- Hero band
- Trust bar
- Buttons
- Cards (2-col, 3-col grids)
- Stat cards
- Dark sections
- Pale/sage sections
- Process steps
- Facts/bullets
- Tags/pills
- Highlight/blockquote
- FAQ accordion
- Portrait/About layout
- Who We Help audience cards
- Referral banner
- Partners grid
- Contact layout
- Form elements
- Footer
- Home page specifics
- Responsive breakpoints (≤768px)

### `js/main.js`
Shared JavaScript for all pages:
- Mobile hamburger menu toggle with animated bars
- FAQ accordion (one open at a time)
- Active nav link highlighting based on current page filename
- Contact form client-side validation and success state

---

## Pending Tasks

### High Priority
- [ ] **Kathleen's photo** — obtain a professional headshot and save as `images/kathleen-elder.jpg`. The `about.html` file contains detailed comments showing exactly where to swap in the `<img>` tag to replace the placeholder.
- [ ] **Contact form backend** — wire up the form on `contact.html` to a real submission handler. Three options are documented in comments inside the form:
  - **Formspree** — easiest; no server required
  - **Netlify Forms** — if hosting on Netlify
  - **Custom fetch** — `main.js` already intercepts the submit event
- [ ] **Google Maps embed** — paste the Google Maps iframe embed code into the placeholder div on `contact.html`. Instructions are in the HTML comments.

### Medium Priority
- [ ] Add an `images/` folder and a favicon (`favicon.ico` or `favicon.svg`) using the logo mark
- [ ] Add Open Graph / social meta tags to all pages (`og:title`, `og:description`, `og:image`)
- [ ] Consider adding a `sitemap.xml` for SEO
- [ ] Add a `robots.txt`
- [ ] Review and finalize all page copy with Kathleen — content is drawn from the original site and the design brief but should be reviewed for accuracy and voice

### Low Priority / Future Enhancements
- [ ] FAQ section on the home page (many parents unfamiliar with OMT)
- [ ] Testimonials / patient stories section
- [ ] Blog or educational resource section
- [ ] Professional referral form (separate from patient appointment form)
- [ ] Accessibility audit (keyboard navigation, ARIA labels, color contrast verification)
- [ ] Analytics integration (Google Analytics or privacy-first alternative)

---

## Deployment Notes

The site is plain HTML/CSS/JS — no build step required. It can be hosted on any static hosting platform:

- **Netlify** — drag-and-drop deploy or connect to a Git repo. Netlify Forms works out of the box if that option is chosen for the contact form.
- **GitHub Pages** — free hosting directly from a GitHub repository.
- **Traditional web host** — upload files via FTP/SFTP to any web host's public directory.

The Google Fonts import in `style.css` requires an internet connection to render correctly. For production, consider self-hosting the Lora and DM Sans font files for performance and privacy.

---

## Version History

| Version | Date | Author | Summary |
|---|---|---|---|
| 0.1.0 | 2026-05-22 | Design session with Claude | Initial redesign — all 7 pages stubbed out. Shared CSS and JS created. Warm organic aesthetic established. Digit Sucking page rebuilt from broken 404. Mobile responsive nav implemented. |