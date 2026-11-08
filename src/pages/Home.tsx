import { useState } from "react";
import { ArrowRight, ArrowUpRight, Menu, X, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import interior from "@/assets/restaurant-interior.jpg";
import detail from "@/assets/restaurant-detail.jpg";
import kitchen from "@/assets/commercial-kitchen.jpg";
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


const services = [
  { n: "01", title: "Design-Build Coordination", body: "A collaborative approach that streamlines communication between owner, architect, and trades to keep your Los Angeles restaurant project moving." },
  { n: "02", title: "Construction Management", body: "Hands-on oversight of scheduling, quality control, budgeting, and execution from mobilization through final sign-off." },
  { n: "03", title: "Restaurant Build-Outs & Renovations", body: "New restaurant construction, remodels, rebrands, and tenant improvements across Los Angeles County." },
  { n: "04", title: "Commercial Kitchen Construction", body: "Kitchen environments engineered for workflow, code compliance, and the realities of high-volume restaurant service." },
  { n: "05", title: "Interior & Exterior Improvements", body: "Construction improvements that protect your brand and support day-to-day restaurant operations." },
  { n: "06", title: "Franchise & Multi-Unit Rollouts", body: "Repeatable, prototype-accurate restaurant construction for franchise operators and hospitality groups." },
];


const steps = [
  { n: "Step 01", title: "Consultation & Project Review", body: "We review the concept, location, goals, and project requirements." },
  { n: "Step 02", title: "Pre-Construction & Planning", body: "Coordination, scheduling, permitting, and project preparation." },
  { n: "Step 03", title: "Construction & Oversight", body: "Active management, trade coordination, quality control, and communication." },
  { n: "Step 04", title: "Final Inspection & Turnover", body: "Project completion, inspections, and readiness for opening." },
];


const knownFor = [
  "Cost-conscious planning and execution",
  "Realistic, opening-date-driven scheduling",
  "Restaurant-specific construction experience since 1987",
  "Coordination within active restaurant environments",
  "Clear communication and weekly owner reporting",
  "Focus on operational functionality",
];

const SECTIONS = [
  { id: "about", label: "About", index: "01 - About" },
  { id: "capabilities", label: "Capabilities", index: "02 - Capabilities" },
  { id: "brands", label: "Brands We've Built For", index: "03 - Brands We've Built For" },
  { id: "services", label: "Services", index: "04 - Services" },
  { id: "approach", label: "Approach", index: "05 - Approach" },
  { id: "known-for", label: "Known For", index: "06 - Known For" },
  { id: "consultation", label: "Free Estimate", index: "07 - Free Estimate" },
];

function SectionLink({ id, children, className = "", onNavigate }: { id: string; children: React.ReactNode; className?: string; onNavigate?: () => void }) {
  return <a href="#/" className={className} onClick={(event) => {
    event.preventDefault();
    onNavigate?.();
    document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }}>{children}</a>;
}

function CallLink({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <Button asChild className={`call-button ${className}`}><a href={PHONE_HREF}>{children}<ArrowUpRight aria-hidden="true" /></a></Button>;
}

export default function Home() {
  return <div className="site-shell"><Header /><main id="main-content"><Hero /><VideoSection /><Authority /><BrandsSection /><Services /><Process /><Differentiators /><FinalCTA /></main><Footer /></div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <>
    <a href="#/" className="skip-link" onClick={(e) => { e.preventDefault(); document.getElementById("main-content")?.focus(); document.getElementById("main-content")?.scrollIntoView(); }}>Skip to content</a>
    <header className="site-header">
      <div className="header-inner">
        <SectionLink id="top" className="wordmark"><span className="brand-mark" aria-hidden="true">R<span> B</span></span><span><strong>Restaurant Builders</strong><small>By Boulder Builders</small></span></SectionLink>
        <nav className="desktop-nav" aria-label="Main navigation">{SECTIONS.filter(s => ["about", "services", "approach"].includes(s.id)).map(s => <SectionLink key={s.id} id={s.id}>{s.label}</SectionLink>)}</nav>
        <div className="header-actions"><a className="header-phone" href={PHONE_HREF}>{PHONE_DISPLAY}</a><CallLink className="header-call">Call for a Free Estimate</CallLink><Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div>
      </div>
      {open && <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">{SECTIONS.map(s => <SectionLink key={s.id} id={s.id} onNavigate={() => setOpen(false)}>{s.label}<ArrowUpRight aria-hidden="true" /></SectionLink>)}<CallLink>Call {PHONE_DISPLAY}</CallLink></nav>}
    </header>
  </>;
}

function Hero() {
  return <>
    <section id="top" className="hero">
      <img src={interior} alt="Illustrative upscale restaurant interior with custom banquettes, a stone bar and architectural wood finishes" width={1920} height={1088} fetchPriority="high" className="hero-image" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="page-width hero-content">
        <p className="eyebrow hero-eyebrow"><span className="accent-line" />Serving Los Angeles County Since 1987</p>
        <h1>Los Angeles<br />Restaurant<br /><span>Contractors.</span></h1>
        <p className="hero-subtitle">New Restaurant Construction, Remodels &amp; Tenant Improvements</p>
        <div className="hero-actions"><CallLink>Call {PHONE_DISPLAY} - Free Estimate</CallLink><p>On-Time · On-Budget · Permit Ready</p></div>
        <div className="hero-bottom"><p>Los Angeles <span>/</span> Santa Clarita <span>/</span> Southern California</p><span className="image-disclosure">AI-generated illustrative interior. Not a completed project.</span></div>
      </div>
    </section>
    <section className="hero-intro page-width">
      <div className="intro-position"><p className="eyebrow">Los Angeles Restaurant Contractors</p><h2 className="intro-brand">Restaurant Builders</h2><p>By Boulder Builders</p></div>
      <div className="body-copy">
        <p>Restaurant Builders is the restaurant-focused division of Boulder Builders - one of the most trusted restaurant construction companies serving Los Angeles County and Southern California. National brands, franchise operators, and independent restaurateurs rely on us to deliver on schedule and on budget.</p>
        <p>From ground-up new restaurant construction to full remodels, kitchen build-outs, and multi-unit tenant improvements, our project managers bring deep restaurant-specific experience to every phase of the construction process.</p>
      </div>
      <div className="credentials"><div><span className="eyebrow">Building Since</span><strong>1987</strong></div><div><span className="eyebrow">License</span><p>CA General<br />Contractor</p></div></div>
    </section>
    <nav className="section-index page-width" aria-label="Page sections"><span className="eyebrow">Index</span>{SECTIONS.map(s => <SectionLink key={s.id} id={s.id}>{s.index}</SectionLink>)}</nav>
  </>;
}

function VideoSection() {
  const [playing, setPlaying] = useState(false);
  return <section id="about" className="about-section section-space">
    <div className="page-width">
      <div className="section-heading"><div><p className="eyebrow">01 - About</p><h2>About<br />Restaurant Builders</h2></div><div className="body-copy"><p>A short introduction to how we approach restaurant construction in Los Angeles - our team, our process, and what it looks like to partner with a contractor that builds restaurants for a living.</p><p>Restaurant Builders is operated by Boulder Builders, a licensed California general contractor that has been delivering restaurant projects across LA County since 1987.</p></div></div>
      <div className="video-frame">{playing ? <iframe src="https://www.youtube.com/embed/fPEL4lD4ISk?autoplay=1&rel=0" title="About Restaurant Builders" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> : <Button variant="ghost" onClick={() => setPlaying(true)} className="video-play" aria-label="Play company introduction video"><span className="video-monogram" aria-hidden="true">RB</span><span className="video-play-content"><span className="play-circle"><Play fill="currentColor" /></span><span>Play Introduction · 16:9</span></span></Button>}</div>
      <div className="video-caption"><span>Company Introduction</span><span>Restaurant Builders · 2025</span></div>
    </div>
  </section>;
}

function Authority() {
  return <section id="capabilities" className="capabilities-section section-space"><div className="page-width capabilities-grid">
    <figure className="detail-figure"><img src={detail} alt="AI-generated illustrative dining space with green banquettes, stone finishes and large architectural windows" width={1024} height={1280} loading="lazy" /><figcaption>AI-generated illustrative interior. Not a completed project.</figcaption></figure>
    <div className="capabilities-copy"><p className="eyebrow">02 - Capabilities</p><h2>Trusted<br />Restaurant<br /><span className="heading-accent">Builders in LA.</span></h2><div className="body-copy"><p>As one of the leading restaurant building contractors in Los Angeles County, our project managers are specialists - not generalists. They understand the realities of restaurant construction: kitchen workflow, hood and grease systems, Title 24, ADA, health-department sign-off, and the sequencing that keeps an opening date intact.</p><p>On every Los Angeles restaurant project, our project manager is the first on site and the last to leave. Weekly progress photos, reports, and submittals keep owners and architects fully informed at every phase of the construction process.</p><p>Whether you're a national franchise rolling out a new location or a local restaurateur opening your first concept, our goal is the same: far exceed the expectations of our clients, because we understand what your investment represents.</p></div></div>
  </div></section>;
}

function BrandsSection() {
  return <section id="brands" className="brands-section section-space"><div className="page-width"><div className="section-heading"><div><p className="eyebrow">03 - Brands We've Built For</p><h2>Built for Brands That<br /><span className="heading-accent">Can't Miss a Date.</span></h2></div><div className="body-copy"><p>National brands, franchise groups, and independent restaurateurs across Los Angeles County have trusted Boulder Builders to deliver restaurant construction projects on time and on budget.</p><p className="brand-intro">These are just a few of the restaurants we have worked with:</p></div></div><LogoMarquee /><div className="brands-contact"><p>Planning a new Los Angeles restaurant build, remodel, or multi-unit rollout? Speak directly with a project manager for a free estimate.</p><CallLink>Call {PHONE_DISPLAY}</CallLink></div></div></section>;
}

function LogoMarquee() {
  const [paused, setPaused] = useState(false);
  return <div className="logo-presentation"><div className={`logo-window ${paused ? "is-paused" : ""}`}><div className="logo-track">{[0,1].map(copy => <div className="logo-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>{BRANDS.map(b => <div className="logo-cell" key={b.name}><img src={b.src} alt={copy === 0 ? `${b.name} logo - restaurant client of Boulder Builders` : ""} width={176} height={96} loading="lazy" draggable={false} /></div>)}</div>)}</div></div><Button variant="ghost" size="icon" className="marquee-control" onClick={() => setPaused(!paused)} aria-label={paused ? "Resume logo scrolling" : "Pause logo scrolling"} title={paused ? "Resume logo scrolling" : "Pause logo scrolling"}>{paused ? <Play /> : <Pause />}</Button></div>;
}

function Services() {
  return <section id="services" className="services-section section-space"><div className="page-width"><div className="services-heading"><p className="eyebrow">04 - Services</p><h2>Los Angeles Restaurant<br />Construction Services</h2></div><figure className="kitchen-figure"><img src={kitchen} alt="AI-generated illustrative commercial kitchen showing stainless steel prep stations, ranges and hood ventilation" width={1536} height={1024} loading="lazy" /><figcaption>AI-generated illustrative commercial kitchen. Not a completed project.</figcaption></figure><div className="services-list">{services.map(s => <article key={s.n} className="service-item"><span className="service-number">{s.n}</span><div><h3>{s.title}</h3><p>{s.body}</p></div></article>)}</div><p className="services-closing">We regularly coordinate with architects, designers, engineers, equipment vendors, and ownership teams throughout every phase of construction.</p></div></section>;
}

function Process() {
  return <section id="approach" className="approach-section section-space"><div className="page-width"><div className="approach-heading"><div><p className="eyebrow">05 - Approach</p><h2>Our Approach</h2></div><ArrowRight aria-hidden="true" /></div><ol className="process-timeline">{steps.map((s,i) => <li key={s.n}><div className="process-number"><span>0{i+1}</span><span className="process-dot" /></div><p className="eyebrow">{s.n}</p><h3>{s.title}</h3><p>{s.body}</p></li>)}</ol></div></section>;
}

function Differentiators() {
  return <section id="known-for" className="known-section section-space"><div className="page-width known-grid"><div className="known-heading"><p className="eyebrow">06 - Known For</p><h2>Known For.</h2><p>Our reputation in Los Angeles is built on transparency, responsiveness, and accountability through every phase of restaurant construction.</p><span className="known-monogram" aria-hidden="true">RB<span>·</span></span></div><ol className="known-list">{knownFor.map((item,i) => <li key={item}><span>0{i+1}</span><h3>{item}</h3><ArrowUpRight aria-hidden="true" /></li>)}</ol></div></section>;
}

function FinalCTA() {
  return <section id="consultation" className="contact-section section-space"><div className="page-width"><p className="eyebrow">07 - Free Estimate</p><div className="contact-heading"><h2>Planning a Los Angeles<br />Restaurant <span>Build?</span></h2><ArrowUpRight aria-hidden="true" /></div><div className="contact-bottom"><div className="body-copy"><p>Whether you're opening a new concept, expanding an existing operation, or rolling out a franchise location, Restaurant Builders delivers experienced restaurant construction throughout Los Angeles County and Southern California. Call now for a free estimate.</p><CallLink>Call {PHONE_DISPLAY} - Free Estimate</CallLink></div><div className="contact-phone-block"><a href={PHONE_HREF} className="contact-phone">{PHONE_DISPLAY}</a><a href={PHONE_HREF} className="tap-call">Tap to Call Now <ArrowUpRight aria-hidden="true" /></a></div></div></div></section>;
}

function Footer() {
  return <footer className="site-footer"><div className="page-width"><div className="footer-grid"><div><SectionLink id="top" className="footer-brand">Restaurant Builders</SectionLink><p>Los Angeles<br />Restaurant Contractors</p><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></div><div><h3>Services</h3><ul>{["Restaurant Construction","Restaurant Remodels","Tenant Improvements","Build-Outs","Construction Management"].map(s => <li key={s}><SectionLink id="services">{s}</SectionLink></li>)}</ul></div><div><h3>Service Areas</h3><ul>{["Los Angeles County","Santa Clarita","Ventura County","Orange County","Southern California"].map(s => <li key={s}>{s}</li>)}</ul></div></div><div className="footer-legal"><p>Restaurant Builders is a service brand operated by Boulder Builders, a licensed and insured California general contractor building restaurants across Los Angeles County since 1987. All contracts, permits, and construction work are executed by Boulder Builders in accordance with California regulations. Learn more at <a href="https://boulderbuildersca.com">boulderbuildersca.com</a>.</p><p>© {new Date().getFullYear()} Restaurant Builders · Boulder Builders</p></div></div></footer>;
}
