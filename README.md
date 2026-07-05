# Hearwell Speech & Hearing Centre

[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)

A premium, highly interactive digital platform engineered for **Hearwell Speech & Hearing Centre**. This application is designed with a patient-first focus, bridging clinical excellence with state-of-the-art web engineering to deliver a flawless user experience.

---

## 🩺 Overview & Mission

**Hearwell** is a leading diagnostic and therapeutic centre specializing in comprehensive hearing care and speech therapy, with a legacy dating back to 2014. The platform serves as a modern digital gateway for new and returning patients to explore specialized services, meet the clinical team, and seamlessly gain access to clinic routing.

Our primary goal is to convert worried visitors into confident patients. The website communicates clinical excellence (16+ years experience, advanced diagnostics, personalized hearing aid fitting, evidence-led speech therapy) while making the first step easy: book an appointment or call. 

We currently operate two clinics in Kerala:
- **Perumbavoor**
- **Perinjanam**

> [!IMPORTANT]
> The site implements our bespoke **"Editorial Precision"** design system. By relying on organic `framer-motion` animations, an `Outfit`/`Inter` font duo, and fluid HSL color tokens, the UI communicates absolute medical trust without feeling generic or overly clinical.

---

## 👥 Target Audience & Brand Personality

**Target Audience:** Families with children experiencing speech delays or hearing difficulties, and older adults navigating hearing loss. They are seeking reassurance that expert, compassionate care is accessible close to home.

**Brand Personality:** *Modern, confident, premium.* 
We speak with clarity and warmth. We avoid sterile clinical jargon, stock-photo hospital clichés, or overly pushy "startup" sales copy. Our design choices reflect human warmth, precision, and medical authority.

---

## ✨ Key Features & Architecture

### 🏥 Multi-Branch Navigation & Routing
Integrated smart **Location Cards** strategically route users. With 1-click Google Maps **"Get Directions"** and native **"Call Clinic"** (`tel:`) hooks, users seamlessly switch between our branches without friction.

### 👨‍⚕️ Clinical Team Showcase
A dedicated **Our Specialists** section highlighting the clinic’s multidisciplinary team. Features the Chief Audiologist and Speech Language Pathologist alongside dedicated Audiologists and Special Educators. Profiles structurally highlight CRR numbers, clinical tenure, and core specializations.

### 👂 Audiology & Diagnostics Services
Detailed service landing pages breaking down:
- Pure Tone Audiometry and specialist OAE (Newborn Screening).
- Precision fitting for next-generation digital hearing aid technologies. 
- Integrated tinnitus assessments.

### 🗣️ Pediatric & Speech Development
Dedicated architectural spaces addressing Child Development Programs:
- Occupational Therapy and Individualized Education Programs (IEP).
- AVT (Auditory Verbal Therapy) interventions for speech restoration.

---

## 🚀 Technical Stack & Optimizations

This repository leverages the cutting edge of the modern web ecosystem to guarantee maximal performance and stellar SEO:

* **Engine:** [React 19](https://react.dev/) running atop [Vite 8](https://vitejs.dev/).
* **Styling Engine:** Custom-configured [Tailwind CSS v4](https://tailwindcss.com/) handling dynamic theming and utility constraints.
* **Animation Hub:** [Framer Motion v12](https://motion.dev/) orchestrating "Living UI" micro-interactions (`SectionReveal`, `StaggerContainer`, custom float routines).
* **Smooth Scrolling:** Integrated [Lenis](https://lenis.studiofreight.com/) for a buttery-smooth vertical scrolling experience.
* **Asset Optimization:** Integrated [Vite Imagetools](https://github.com/JonasKruckenberg/imagetools) resolving raw photography to perfectly sized, responsive `webp` `srcSets` dynamically to prevent Cumulative Layout Shifts (CLS).
* **Navigation:** Pure SPA routing handled natively by [React Router v7](https://reactrouter.com/).
* **Iconography:** Feather-light, crisp vector SVGs implemented via [Lucide React](https://lucide.dev/).

### ⚡ Performance & Security 
- **WebP Image Pipeline**: All static PNG assets are aggressively compressed and converted.
- **Intelligent Code Splitting**: Route-level lazy loading (`React.lazy` + `Suspense`) ensures minimal initial bundle sizes.
- **Vercel Edge Configuration**: A strictly defined `vercel.json` applies critical security headers (`Content-Security-Policy`, `X-Frame-Options`, `X-XSS-Protection`).
- **SEO Ready**: `react-helmet-async` manages dynamic meta tags per route, alongside robust `LocalBusiness` JSON-LD schema for local search visibility.

---

## ♿ Accessibility & Inclusion

We believe healthcare digital products must be accessible to everyone, especially elderly users and those with impairments:
- **WCAG AA Compliance:** Strict 4.5:1 minimum contrast ratios across all typography.
- **Legibility:** Base body text is generously sized (≥16px) with optimal line heights.
- **Screen Reader Support:** Full semantic HTML, ARIA landmarks, and robust image alt-texts.
- **Reduced Motion:** Automatic support for `prefers-reduced-motion` to respect users sensitive to heavy animations.
- **Mobile First:** Touch targets are strictly ≥44px, ensuring frictionless navigation for elderly users with reduced dexterity.

---

## 📁 Repository Structure

```text
src/
├── assets/           # Raw images automatically processed by Vite Imagetools
├── components/       # Heavy lifters (layout, features, SEO, reusable UI)
│   ├── common/       # SEO tags, Loaders, Buttons
│   ├── features/     # WhatsApp CTA, specialized widgets
│   └── layout/       # Navbar, Footer, Error Boundaries
├── hooks/            # Custom reusable React hooks
├── pages/            # Core routing pages
│   ├── Home/
│   ├── About/
│   ├── Services/
│   ├── HearingAids/
│   ├── Doctor/
│   ├── Locations/
│   ├── Booking/
│   ├── Contact/
│   └── Blog/
├── utils/            # Motion variants, helpers, constants
├── index.css         # Tailwind V4 layers and global resets
└── App.tsx           # Global routing, Lenis scroll context, ethereal background
```

---

## 💻 Local Development Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v20+ recommended)
- `npm` or `yarn`

### Quick Start
1. **Clone the repository:**
   ```bash
   git clone https://github.com/UmerRizwan03/Hearwell-2.0.git
   cd "Hearwell - Speech and Hearing Centre"
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Build for production:**
   ```bash
   npm run build
   ```
   *(This generates highly minified, cache-busted static assets into the `dist/` directory)*

---

## 📬 Contact & Links

**Hearwell Speech & Hearing Centre**  
📧 **Official Email:** [hearwellspeechandhearing@gmail.com](mailto:hearwellspeechandhearing@gmail.com)  
📞 **Primary Contact:** +91 9633626656 / +91 9947314906  

*(Internal Project Repository. All rights reserved by Hearwell Speech & Hearing Centre).*
