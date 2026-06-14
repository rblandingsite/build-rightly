import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Restaurant Builders — Southern California Restaurant Contractors" },
      {
        name: "description",
        content:
          "Restaurant Builders specializes in new restaurant construction, remodels, tenant improvements, and build-outs throughout Southern California. Backed by Boulder Builders.",
      },
      { property: "og:title", content: "Restaurant Builders — Southern California Restaurant Contractors" },
      {
        property: "og:description",
        content:
          "New restaurant construction, remodels, and tenant improvements across Santa Clarita, Los Angeles, Ventura, and Orange County.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <Authority />
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
            Southern California Restaurant Contractors
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="tel:6617775000"
            className="hidden text-sm font-medium tracking-tight text-foreground transition-colors hover:text-secondary md:inline"
          >
            661.777.5000
          </a>
          <a
            href="#consultation"
            className="inline-flex items-center justify-center bg-primary px-5 py-3 text-[12px] font-medium uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-secondary"
          >
            Request Consultation
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section id="top" className="relative border-b border-hairline">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-36">
        <div className="lg:col-span-7">
          <p className="eyebrow">Est. Southern California</p>
          <h1 className="mt-8 font-display text-5xl leading-[1.02] tracking-tight text-primary sm:text-6xl lg:text-[88px]">
            Restaurant
            <br />
            Builders.
          </h1>
          <p className="mt-8 max-w-xl font-display text-xl italic text-secondary sm:text-2xl">
            New Restaurant Construction &amp; Remodels
          </p>

          <div className="mt-10 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span>Santa Clarita</span>
            <span className="text-hairline">/</span>
            <span>Los Angeles County</span>
            <span className="text-hairline">/</span>
            <span>Southern California</span>
          </div>

          <div className="mt-12 max-w-xl space-y-5 text-[15px] leading-[1.75] text-foreground/80">
            <p>
              Restaurant construction requires more than building walls and finishes.
              It requires coordination, regulatory awareness, and an understanding of
              how space, workflow, and guest experience come together in a working
              restaurant.
            </p>
            <p>
              Restaurant Builders specializes in new restaurant construction, restaurant
              remodels, tenant improvements, and restaurant build-outs for owners,
              operators, and developers throughout Southern California.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#consultation"
              className="inline-flex items-center justify-center bg-primary px-7 py-4 text-[12px] font-medium uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-secondary"
            >
              Request a Build Consultation
            </a>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Timelines · Budget Planning · Permit Readiness
            </p>
          </div>
        </div>

        {/* Right column — intentionally minimal */}
        <aside className="hidden lg:col-span-5 lg:block">
          <div className="relative h-full min-h-[520px] border-l border-hairline pl-12">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="eyebrow">Index</p>
                <ul className="mt-6 space-y-3 text-sm text-foreground/70">
                  {[
                    "01 — About",
                    "02 — Capabilities",
                    "03 — Services",
                    "04 — Approach",
                    "05 — Known For",
                    "06 — Consultation",
                  ].map((i) => (
                    <li key={i} className="font-display tracking-tight">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <div className="hairline" />
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="eyebrow">License</p>
                    <p className="mt-2 font-display text-lg text-primary">
                      CA General<br />Contractor
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow">Operated By</p>
                    <p className="mt-2 font-display text-lg text-primary">
                      Boulder<br />Builders
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
            <p className="eyebrow">01 — About</p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight text-primary sm:text-5xl">
              About Restaurant Builders
            </h2>
          </div>
          <div className="space-y-5 text-[15px] leading-[1.75] text-foreground/80 lg:col-span-7 lg:col-start-6">
            <p>
              This brief introduction provides an overview of who we are, how we work,
              and our approach to restaurant construction projects throughout Southern
              California.
            </p>
            <p>
              Restaurant Builders focuses exclusively on restaurant construction and
              remodels and is backed by the experience of Boulder Builders, a licensed
              California general contractor.
            </p>
          </div>
        </div>

        <div className="mt-16 lg:mt-20">
          <div className="relative aspect-video w-full overflow-hidden bg-primary">
            {playing ? (
              <iframe
                className="h-full w-full"
                src="about:blank"
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
            <p className="eyebrow">02 — Capabilities</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Building<br />
              Restaurants<br />
              <span className="italic text-secondary">That Work.</span>
            </h2>
          </div>

          <div className="space-y-6 text-[16px] leading-[1.8] text-foreground/80 lg:col-span-6 lg:col-start-7">
            <p>
              Every restaurant space requires careful coordination. Kitchen layouts,
              equipment placement, front-of-house flow, building requirements, and
              inspection readiness all directly impact how a restaurant performs once
              its doors open.
            </p>
            <p>
              Restaurant Builders approaches each project with a practical understanding
              of restaurant operations, construction sequencing, permitting requirements,
              and long-term functionality.
            </p>
            <p>
              Our goal is to help create restaurant environments that operate efficiently,
              support staff workflow, meet regulatory requirements, and reflect the
              vision behind the brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */

const services = [
  {
    n: "01",
    title: "Design-Build Coordination",
    body: "A collaborative approach that streamlines communication and helps reduce unnecessary delays.",
  },
  {
    n: "02",
    title: "Construction Management",
    body: "Oversight of scheduling, quality control, budgeting, and project execution.",
  },
  {
    n: "03",
    title: "Restaurant Build-Outs & Renovations",
    body: "Construction services for new restaurants, remodels, rebrands, and tenant improvements.",
  },
  {
    n: "04",
    title: "Kitchen Construction & Remodeling",
    body: "Commercial kitchen environments designed to support workflow, safety, and efficiency.",
  },
  {
    n: "05",
    title: "Interior & Exterior Improvements",
    body: "Construction improvements that support both operational requirements and brand presentation.",
  },
  {
    n: "06",
    title: "Tenant Improvements",
    body: "Restaurant-specific tenant improvement projects for new and existing commercial spaces.",
  },
];

function Services() {
  return (
    <section className="border-b border-hairline bg-muted">
      <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">03 — Services</p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight text-primary sm:text-5xl">
              Restaurant Construction Services
            </h2>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-16 gap-y-14 md:grid-cols-2 lg:mt-24 lg:gap-y-20">
          {services.map((s) => (
            <div key={s.n} className="border-t border-hairline pt-8">
              <div className="flex items-baseline gap-6">
                <span className="font-display text-sm tracking-tight text-secondary">{s.n}</span>
                <h3 className="font-display text-2xl leading-snug tracking-tight text-primary sm:text-[28px]">
                  {s.title}
                </h3>
              </div>
              <p className="ml-12 mt-5 max-w-md text-[15px] leading-[1.75] text-foreground/75">
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
  {
    n: "Step 01",
    title: "Consultation & Project Review",
    body: "We review the concept, location, goals, and project requirements.",
  },
  {
    n: "Step 02",
    title: "Pre-Construction & Planning",
    body: "Coordination, scheduling, permitting, and project preparation.",
  },
  {
    n: "Step 03",
    title: "Construction & Oversight",
    body: "Active management, trade coordination, quality control, and communication.",
  },
  {
    n: "Step 04",
    title: "Final Inspection & Turnover",
    body: "Project completion, inspections, and readiness for opening.",
  },
];

function Process() {
  return (
    <section className="border-b border-hairline">
      <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">04 — Approach</p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight text-primary sm:text-5xl">
              Our Approach
            </h2>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-8">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="hairline" />
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <span className="font-display text-base text-secondary">{s.n}</span>
                  {i < steps.length - 1 && (
                    <span className="hidden h-px flex-1 bg-hairline lg:block" />
                  )}
                </div>
                <h3 className="mt-6 font-display text-2xl leading-tight tracking-tight text-primary">
                  {s.title}
                </h3>
                <p className="mt-5 text-[14.5px] leading-[1.75] text-foreground/75">
                  {s.body}
                </p>
              </div>
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
  "Realistic project scheduling",
  "Restaurant-specific construction experience",
  "Coordination within active restaurant environments",
  "Clear communication and accountability",
  "Focus on operational functionality",
];

function Differentiators() {
  return (
    <section className="border-b border-hairline bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
              05 — Known For
            </p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Known For.
            </h2>
            <p className="mt-12 max-w-md text-[15px] leading-[1.8] text-white/75">
              Our reputation is built on transparency, responsiveness, and responsibility
              throughout every phase of construction.
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
        <p className="eyebrow">06 — Consultation</p>
        <h2 className="mt-8 font-display text-4xl leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-6xl">
          Planning a Restaurant<br />
          Build or <span className="italic text-secondary">Remodel?</span>
        </h2>
        <p className="mx-auto mt-10 max-w-xl text-[16px] leading-[1.8] text-foreground/75">
          Whether you're opening a new concept, expanding an existing operation, or
          planning a renovation, Restaurant Builders provides experienced restaurant
          construction services throughout Southern California.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <a
            href="mailto:hello@restaurantbuilders.com"
            className="inline-flex items-center justify-center bg-primary px-8 py-4 text-[12px] font-medium uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-secondary"
          >
            Request a Build Consultation
          </a>
          <a
            href="tel:6617775000"
            className="text-[12px] font-medium uppercase tracking-[0.18em] text-foreground transition-colors hover:text-secondary"
          >
            Call 661.777.5000
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
              Southern California<br />
              Restaurant Contractors
            </p>
            <a
              href="tel:6617775000"
              className="mt-6 inline-block text-sm font-medium text-foreground hover:text-secondary"
            >
              661.777.5000
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
              <li>Santa Clarita</li>
              <li>Los Angeles County</li>
              <li>Ventura County</li>
              <li>Orange County</li>
              <li>Southern California</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-hairline pt-10">
          <p className="max-w-3xl text-[12px] leading-[1.7] text-muted-foreground">
            Restaurant Builders is a service brand operated by Boulder Builders, a
            licensed and insured California general contractor. All contracts, permits,
            and construction work are executed by Boulder Builders in accordance with
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
