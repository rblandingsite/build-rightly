import { useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import mcdonalds from "@/assets/logos/mcdonalds-brand-logo-png-7.png";
import kfc from "@/assets/logos/kfc_PNG12.png";
import wendys from "@/assets/logos/wendys-logo-png_seeklogo-191327.png";
import elPolloLoco from "@/assets/logos/El_Pollo_Loco_Logo.jpg";
import baskin from "@/assets/logos/Baskin-Robbins-Logo.wine.png";
import yogurtland from "@/assets/logos/logo-yogurtland-tagline-large.png";
import togos from "@/assets/logos/Togo_s_Logo.png";
import teleferic from "@/assets/logos/teleferic_brentwood.png";
import royalEgg from "@/assets/logos/the_royal_egg.jpg";
import makenna from "@/assets/logos/main_makenna_logo_1743181988.webp";

const PHONE_DISPLAY = "661.777.5000";
const PHONE_HREF = "tel:6617775000";

const BRANDS: { name: string; src: string }[] = [
  { name: "McDonald's", src: mcdonalds },
  { name: "KFC", src: kfc },
  { name: "Wendy's", src: wendys },
  { name: "El Pollo Loco", src: elPolloLoco },
  { name: "Baskin-Robbins", src: baskin },
  { name: "Yogurtland", src: yogurtland },
  { name: "Togo's", src: togos },
  { name: "Telefèric Barcelona", src: teleferic },
  { name: "The Royal Egg Café", src: royalEgg },
  { name: "Makenna Koffee Company", src: makenna },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <Authority />
        <BrandsSection />
        <Services />
        <Process />
        <Differentiators />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Header ---------------- */

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <a href="#top" className="flex flex-col leading-tight">
          <span className="font-display text-[19px] tracking-tight text-primary">
            Restaurant Builders
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            By Boulder Builders
          </span>
        </a>

        <div className="hidden text-center lg:block">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Los Angeles Restaurant Contractors
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={PHONE_HREF}
            className="hidden text-sm font-medium tracking-tight text-foreground transition-colors hover:text-secondary md:inline"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-[0_6px_24px_-8px_rgba(11,60,93,0.55)] transition-all hover:bg-secondary hover:shadow-[0_10px_30px_-8px_rgba(11,60,93,0.65)]"
          >
            Call for a Free Estimate
            <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-hairline">
      <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-70" aria-hidden />
      <div className="pointer-events-none absolute inset-0 glow-backdrop" aria-hidden />
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-36">

        <div className="lg:col-span-7">
          <p className="eyebrow">Serving Los Angeles County Since 1987</p>
          <h1 className="mt-8 font-display text-5xl leading-[1.02] tracking-tight text-primary sm:text-6xl lg:text-[80px]">
            Los Angeles
            <br />
            Restaurant
            <br />
            <span className="text-accent">Contractors.</span>
          </h1>
          <p className="mt-8 max-w-xl font-display text-xl font-light tracking-tight text-secondary sm:text-2xl">
            New Restaurant Construction, Remodels &amp; Tenant Improvements
          </p>


          <div className="mt-10 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span>Los Angeles</span>
            <span className="text-hairline">/</span>
            <span>Santa Clarita</span>
            <span className="text-hairline">/</span>
            <span>Southern California</span>
          </div>

          <div className="mt-12 max-w-xl space-y-5 text-[15px] leading-[1.75] text-foreground/80">
            <p>
              Restaurant Builders is the restaurant-focused division of Boulder
              Builders - one of the most trusted restaurant construction companies
              serving Los Angeles County and Southern California. National brands,
              franchise operators, and independent restaurateurs rely on us to deliver
              on schedule and on budget.
            </p>
            <p>
              From ground-up new restaurant construction to full remodels, kitchen
              build-outs, and multi-unit tenant improvements, our project managers
              bring deep restaurant-specific experience to every phase of the
              construction process.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={PHONE_HREF}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-[0_14px_40px_-14px_rgba(11,60,93,0.6)] transition-all hover:bg-secondary hover:shadow-[0_18px_50px_-14px_rgba(11,60,93,0.75)]"
            >
              Call {PHONE_DISPLAY} - Free Estimate
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.25} />
            </a>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              On-Time · On-Budget · Permit Ready
            </p>
          </div>
        </div>

        <aside className="hidden lg:col-span-5 lg:block">
          <div className="relative h-full min-h-[520px] border-l border-hairline pl-12">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="eyebrow">Index</p>
                <ul className="mt-6 space-y-3 text-sm text-foreground/70">
                  {[
                    "01 - About",
                    "02 - Capabilities",
                    "03 - Brands We've Built For",
                    "04 - Services",
                    "05 - Approach",
                    "06 - Known For",
                    "07 - Free Estimate",
                  ].map((i) => (
                    <li key={i} className="font-display tracking-tight">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <div className="hairline" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-hairline bg-white/60 p-5 shadow-[0_1px_0_rgba(15,27,61,0.04),0_10px_30px_-18px_rgba(15,27,61,0.25)] backdrop-blur">
                    <p className="eyebrow">License</p>
                    <p className="mt-3 font-display text-base font-medium leading-tight text-primary">
                      CA General<br />Contractor
                    </p>
                  </div>
                  <div className="rounded-2xl border border-hairline bg-white/60 p-5 shadow-[0_1px_0_rgba(15,27,61,0.04),0_10px_30px_-18px_rgba(15,27,61,0.25)] backdrop-blur">
                    <p className="eyebrow">Building Since</p>
                    <p className="mt-2 font-display text-5xl font-semibold tracking-tight text-primary">
                      1987
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ---------------- Video ---------------- */

function VideoSection() {
  const [playing, setPlaying] = useState(false);
  return (
    <section className="border-b border-hairline bg-muted">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">01 - About</p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight text-primary sm:text-5xl">
              About Restaurant Builders
            </h2>
          </div>
          <div className="space-y-5 text-[15px] leading-[1.75] text-foreground/80 lg:col-span-7 lg:col-start-6">
            <p>
              A short introduction to how we approach restaurant construction in
              Los Angeles - our team, our process, and what it looks like to
              partner with a contractor that builds restaurants for a living.
            </p>
            <p>
              Restaurant Builders is operated by Boulder Builders, a licensed
              California general contractor that has been delivering restaurant
              projects across LA County since 1987.
            </p>
          </div>
        </div>

        <div className="mt-16 lg:mt-20">
          <div className="rounded-2xl border border-hairline bg-white p-2 shadow-[0_30px_80px_-40px_rgba(15,27,61,0.35)]">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-primary">
              {playing ? (
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/fPEL4lD4ISk?autoplay=1&rel=0"
                  title="About Restaurant Builders"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="group relative flex h-full w-full items-center justify-center bg-primary text-primary-foreground"
                  aria-label="Play company introduction video"
                >
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.18), transparent 60%), radial-gradient(circle at 75% 70%, rgba(255,255,255,0.08), transparent 60%)",
                    }}
                  />
                  <div className="relative flex flex-col items-center gap-6">
                    <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/40 transition-all group-hover:scale-105 group-hover:border-white">
                      <svg width="22" height="26" viewBox="0 0 22 26" fill="currentColor">
                        <path d="M0 0 L22 13 L0 26 Z" />
                      </svg>
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/80">
                      Play Introduction · 16:9
                    </span>
                  </div>
                </button>
              )}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span>Company Introduction</span>
            <span>Restaurant Builders · 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Authority ---------------- */

function Authority() {
  return (
    <section className="border-b border-hairline">
      <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow">02 - Capabilities</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Trusted<br />
              Restaurant<br />
              <span className="text-accent">Builders in LA.</span>
            </h2>
          </div>

          <div className="space-y-6 text-[16px] leading-[1.8] text-foreground/80 lg:col-span-6 lg:col-start-7">
            <p>
              As one of the leading restaurant building contractors in Los Angeles
              County, our project managers are specialists - not generalists. They
              understand the realities of restaurant construction: kitchen workflow,
              hood and grease systems, Title 24, ADA, health-department sign-off,
              and the sequencing that keeps an opening date intact.
            </p>
            <p>
              On every Los Angeles restaurant project, our project manager is the
              first on site and the last to leave. Weekly progress photos, reports,
              and submittals keep owners and architects fully informed at every
              phase of the construction process.
            </p>
            <p>
              Whether you're a national franchise rolling out a new location or a
              local restaurateur opening your first concept, our goal is the same:
              far exceed the expectations of our clients, because we understand
              what your investment represents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Brands Carousel ---------------- */

function BrandsSection() {
  return (
    <section className="border-b border-hairline bg-muted">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">03 - Brands We've Built For</p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight text-primary sm:text-5xl">
              Built for Brands That<br />
              <span className="text-accent">Can't Miss a Date.</span>
            </h2>
          </div>
          <div className="space-y-5 text-[15px] leading-[1.75] text-foreground/80 lg:col-span-6 lg:col-start-7">
            <p>
              National brands, franchise groups, and independent restaurateurs across
              Los Angeles County have trusted Boulder Builders to deliver restaurant
              construction projects on time and on budget.
            </p>
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              These are just a few of the restaurants we have worked with:
            </p>
          </div>
        </div>

        <div className="mt-14 lg:mt-20">
          <LogoMarquee />
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-hairline pt-8">
          <p className="max-w-xl text-[14px] leading-[1.7] text-foreground/70">
            Planning a new Los Angeles restaurant build, remodel, or multi-unit
            rollout? Speak directly with a project manager for a free estimate.
          </p>
          <a
            href={PHONE_HREF}
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-[0_12px_30px_-14px_rgba(11,60,93,0.55)] transition-all hover:bg-secondary hover:shadow-[0_16px_40px_-14px_rgba(11,60,93,0.7)]"
          >
            <Phone className="h-4 w-4" strokeWidth={2.25} />
            Call {PHONE_DISPLAY}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.25} />
          </a>
        </div>
      </div>
    </section>
  );
}

function LogoMarquee() {
  const loop = [...BRANDS, ...BRANDS];
  return (
    <div
      className="relative overflow-hidden border-y border-hairline bg-white py-10"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee items-center gap-12 px-8 lg:gap-20">
        {loop.map((b, i) => (
          <div
            key={`${b.name}-${i}`}
            className="flex h-24 w-44 shrink-0 items-center justify-center lg:h-28 lg:w-52"
            title={b.name}
          >
            <img
              src={b.src}
              alt={`${b.name} logo - restaurant client of Boulder Builders`}
              className="max-h-full max-w-full select-none object-contain"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Services ---------------- */

const services = [
  { n: "01", title: "Design-Build Coordination", body: "A collaborative approach that streamlines communication between owner, architect, and trades to keep your Los Angeles restaurant project moving." },
  { n: "02", title: "Construction Management", body: "Hands-on oversight of scheduling, quality control, budgeting, and execution from mobilization through final sign-off." },
  { n: "03", title: "Restaurant Build-Outs & Renovations", body: "New restaurant construction, remodels, rebrands, and tenant improvements across Los Angeles County." },
  { n: "04", title: "Commercial Kitchen Construction", body: "Kitchen environments engineered for workflow, code compliance, and the realities of high-volume restaurant service." },
  { n: "05", title: "Interior & Exterior Improvements", body: "Construction improvements that protect your brand and support day-to-day restaurant operations." },
  { n: "06", title: "Franchise & Multi-Unit Rollouts", body: "Repeatable, prototype-accurate restaurant construction for franchise operators and hospitality groups." },
];

function Services() {
  return (
    <section className="border-b border-hairline">
      <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">04 - Services</p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight text-primary sm:text-5xl">
              Los Angeles Restaurant<br />Construction Services
            </h2>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-24 lg:gap-8">
          {services.map((s) => (
            <div
              key={s.n}
              className="group rounded-2xl border border-hairline bg-white p-8 shadow-[0_1px_0_rgba(15,27,61,0.03),0_20px_50px_-30px_rgba(15,27,61,0.25)] transition-all hover:-translate-y-0.5 hover:border-secondary/40 hover:shadow-[0_1px_0_rgba(15,27,61,0.04),0_28px_60px_-28px_rgba(15,27,61,0.35)] lg:p-10"
            >
              <div className="flex items-baseline gap-5">
                <span className="font-display text-4xl font-semibold tracking-tight text-secondary/70 lg:text-5xl">
                  {s.n}
                </span>
                <h3 className="font-display text-2xl font-medium leading-snug tracking-tight text-primary sm:text-[26px]">
                  {s.title}
                </h3>
              </div>
              <p className="mt-6 text-[15px] leading-[1.75] text-foreground/75">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 max-w-2xl border-t border-hairline pt-10">
          <p className="text-[15px] leading-[1.8] text-foreground/75">
            We regularly coordinate with architects, designers, engineers, equipment
            vendors, and ownership teams throughout every phase of construction.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */

const steps = [
  { n: "Step 01", title: "Consultation & Project Review", body: "We review the concept, location, goals, and project requirements." },
  { n: "Step 02", title: "Pre-Construction & Planning", body: "Coordination, scheduling, permitting, and project preparation." },
  { n: "Step 03", title: "Construction & Oversight", body: "Active management, trade coordination, quality control, and communication." },
  { n: "Step 04", title: "Final Inspection & Turnover", body: "Project completion, inspections, and readiness for opening." },
];

function Process() {
  return (
    <section className="border-b border-hairline">
      <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">05 - Approach</p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight text-primary sm:text-5xl">
              Our Approach
            </h2>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-6">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-hairline bg-white p-7 shadow-[0_1px_0_rgba(15,27,61,0.03),0_18px_40px_-28px_rgba(15,27,61,0.25)] transition-all hover:-translate-y-0.5 hover:border-secondary/40"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-secondary">
                  {s.n}
                </span>
                <span className="font-display text-4xl font-semibold tracking-tight text-primary/10">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-medium leading-tight tracking-tight text-primary">
                {s.title}
              </h3>
              <p className="mt-4 text-[14.5px] leading-[1.7] text-foreground/75">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Differentiators ---------------- */

const knownFor = [
  "Cost-conscious planning and execution",
  "Realistic, opening-date-driven scheduling",
  "Restaurant-specific construction experience since 1987",
  "Coordination within active restaurant environments",
  "Clear communication and weekly owner reporting",
  "Focus on operational functionality",
];

function Differentiators() {
  return (
    <section className="border-b border-hairline bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
              06 - Known For
            </p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Known For.
            </h2>
            <p className="mt-12 max-w-md text-[15px] leading-[1.8] text-white/75">
              Our reputation in Los Angeles is built on transparency, responsiveness,
              and accountability through every phase of restaurant construction.
            </p>
          </div>

          <ul className="space-y-6 lg:col-span-6 lg:col-start-7">
            {knownFor.map((item, i) => (
              <li
                key={item}
                className="flex items-baseline gap-8 border-b border-white/15 pb-6"
              >
                <span className="font-display text-sm text-white/50">
                  0{i + 1}
                </span>
                <span className="font-display text-xl leading-snug tracking-tight sm:text-2xl">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */

function FinalCTA() {
  return (
    <section id="consultation" className="border-b border-hairline">
      <div className="mx-auto max-w-3xl px-6 py-32 text-center lg:py-44">
        <p className="eyebrow">07 - Free Estimate</p>
        <h2 className="mt-8 font-display text-4xl leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-6xl">
          Planning a Los Angeles<br />
          Restaurant <span className="text-accent">Build?</span>
        </h2>
        <p className="mx-auto mt-10 max-w-xl text-[16px] leading-[1.8] text-foreground/75">
          Whether you're opening a new concept, expanding an existing operation, or
          rolling out a franchise location, Restaurant Builders delivers experienced
          restaurant construction throughout Los Angeles County and Southern California.
          Call now for a free estimate.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center bg-primary px-8 py-4 text-[12px] font-medium uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-secondary"
          >
            Call {PHONE_DISPLAY} - Free Estimate
          </a>
          <a
            href={PHONE_HREF}
            className="text-[12px] font-medium uppercase tracking-[0.18em] text-foreground transition-colors hover:text-secondary"
          >
            Tap to Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
          <div>
            <p className="font-display text-xl tracking-tight text-primary">
              Restaurant Builders
            </p>
            <p className="mt-4 text-sm leading-relaxed text-foreground/70">
              Los Angeles<br />
              Restaurant Contractors
            </p>
            <a
              href={PHONE_HREF}
              className="mt-6 inline-block text-sm font-medium text-foreground hover:text-secondary"
            >
              {PHONE_DISPLAY}
            </a>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-secondary">
              Services
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/75">
              <li>Restaurant Construction</li>
              <li>Restaurant Remodels</li>
              <li>Tenant Improvements</li>
              <li>Build-Outs</li>
              <li>Construction Management</li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-secondary">
              Service Areas
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/75">
              <li>Los Angeles County</li>
              <li>Santa Clarita</li>
              <li>Ventura County</li>
              <li>Orange County</li>
              <li>Southern California</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-hairline pt-10">
          <p className="max-w-3xl text-[12px] leading-[1.7] text-muted-foreground">
            Restaurant Builders is a service brand operated by Boulder Builders, a
            licensed and insured California general contractor building restaurants
            across Los Angeles County since 1987. All contracts, permits, and
            construction work are executed by Boulder Builders in accordance with
            California regulations. Learn more at{" "}
            <a
              href="https://boulderbuildersca.com"
              className="underline underline-offset-4 hover:text-secondary"
            >
              boulderbuildersca.com
            </a>
            .
          </p>
          <p className="mt-6 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            © {new Date().getFullYear()} Restaurant Builders · Boulder Builders
          </p>
        </div>
      </div>
    </footer>
  );
}
