import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BadgeCheck, Building2, Landmark, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/realty/reveal";
import { CtaBand } from "@/components/realty/cta-band";
import hero from "@/assets/realty-hero.jpg";
import building from "@/assets/realty-building.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Realty Managers | Real Estate, With More Certainty" },
    { name: "description", content: "Realty Managers brings together RERA verification, district-level franchise opportunities, and bank-backed escrow guidance for more confident real estate decisions." },
    { property: "og:title", content: "Realty Managers | Real Estate, With More Certainty" },
    { property: "og:description", content: "Discover a more considered real estate ecosystem: RERA verification, district franchises, and escrow guidance." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});

const offerings = [
  { number: "01", title: "Institutional Due Diligence", description: "Every property is subjected to a rigorous legal, regulatory (RERA), and physical audit before it reaches you.", icon: BadgeCheck, to: "/rera-verification" as const },
  { number: "02", title: "100% Secure Transactions", description: "From discovery to registration, we facilitate the entire purchase process using bank-backed escrow safeguards.", icon: Landmark, to: "/escrow" as const },
  { number: "03", title: "Borderless Confidence", description: "Whether you are buying locally or investing as an NRI, we provide the on-ground verification required to invest with absolute certainty.", icon: Building2, to: "/about-us" as const },
];

function HomePage() {
  return <main>
    <section className="hero" aria-label="Realty Managers introduction">
      <img src={hero} alt="Contemporary residential architecture overlooking an Indian coastal city" className="hero-image" width={1920} height={1088} fetchPriority="high" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-content"><Reveal><span className="eyebrow light-eyebrow"><span className="eyebrow-line" />A NEW STANDARD IN REAL ESTATE</span><h1>Real estate,<br />with more<br />certainty.</h1><p>Where informed decisions, trusted partnerships, and stronger safeguards come together.</p><Link className="hero-link" to="/rera-verification">Explore our approach <ArrowUpRight /></Link></Reveal></div>
      <div className="hero-search">
        <div className="hero-search-field">
          <span className="hero-search-label">Property Type</span>
          <div className="hero-search-select-wrapper">
            <select aria-label="Property Type">
              <option value="">Any</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="commercial">Commercial</option>
            </select>
            <ChevronDown size={14} />
          </div>
        </div>
        
        <div className="hero-search-field">
          <span className="hero-search-label">Bedroom</span>
          <div className="hero-search-select-wrapper">
            <select aria-label="Bedroom">
              <option value="">Any</option>
              <option value="1">1 Bed</option>
              <option value="2">2 Beds</option>
              <option value="3">3 Beds</option>
              <option value="4+">4+ Beds</option>
            </select>
            <ChevronDown size={14} />
          </div>
        </div>

        <div className="hero-search-field">
          <span className="hero-search-label">Country</span>
          <div className="hero-search-select-wrapper">
            <select aria-label="Country">
              <option value="">Any</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
            </select>
            <ChevronDown size={14} />
          </div>
        </div>

        <div className="hero-search-field">
          <span className="hero-search-label">Starting From</span>
          <div className="hero-search-price-group">
            <div className="hero-search-select-wrapper" style={{ width: '60px' }}>
              <select aria-label="Currency">
                <option value="INR">INR</option>
                <option value="USD">USD</option>
                <option value="CAD">CAD</option>
              </select>
              <ChevronDown size={14} />
            </div>
            <div className="hero-search-select-wrapper" style={{ flex: 1 }}>
              <select aria-label="Starting Price">
                <option value="">Any</option>
                <option value="500000">500,000</option>
                <option value="1000000">1,000,000</option>
                <option value="5000000">5,000,000</option>
              </select>
              <ChevronDown size={14} />
            </div>
          </div>
        </div>

        <button className="hero-search-btn">Search Properties</button>
      </div>

      <div className="hero-bottom"><div className="content-width hero-bottom-inner"><span className="hero-scroll">Scroll to discover</span><span className="hero-caption">BUILT ON TRUST. MADE FOR PROGRESS.</span></div></div><div className="hero-pagination" aria-hidden="true" />
    </section>
    <section className="intro-section"><div className="content-width intro-grid"><Reveal><span className="eyebrow"><span className="eyebrow-line" />THE REALTY MANAGERS PERSPECTIVE</span></Reveal><Reveal delay={0.1}><h2>Confidence should be the foundation of every property decision.</h2><p>Real estate is about more than a place. It is about the people, processes, and protections that stand behind it. We bring those elements together in one considered ecosystem—helping buyers, partners, and communities move forward with clarity.</p><Link className="text-link" to="/contact">Connect with us <ArrowUpRight /></Link></Reveal></div></section>
    <section className="offerings-section"><div className="content-width"><Reveal className="section-heading"><div><span className="eyebrow"><span className="eyebrow-line" />OUR ECOSYSTEM</span><h2>Built around what matters.</h2></div><p>Three connected pillars. One more confident way to navigate the real estate landscape.</p></Reveal><div className="offerings-grid">{offerings.map((item, index) => <Reveal key={item.number} delay={index * 0.08}><article className="offering-card"><div className="offering-icon"><item.icon aria-hidden="true" /></div><span className="offering-number">{item.number} / 03</span><h3>{item.title}</h3><p>{item.description}</p><Link className="text-link" to={item.to}>Discover more <ArrowUpRight /></Link></article></Reveal>)}</div></div></section>
    <section className="image-feature"><div className="image-feature-media"><img src={building} alt="Refined contemporary residential building framed by trees" width={1408} height={1008} loading="lazy" /></div><div className="image-feature-copy"><Reveal><span className="eyebrow light-eyebrow"><span className="eyebrow-line" />A BETTER WAY FORWARD</span><h2>Every detail deserves a closer look.</h2><p>From the credibility of a project to the structure of a transaction, the right information changes everything. We believe transparency is not an extra—it is essential.</p><Link className="text-link" to="/rera-verification">Explore verification <ArrowUpRight /></Link></Reveal></div></section>
    <section className="process-section"><div className="content-width"><Reveal className="section-heading"><div><span className="eyebrow"><span className="eyebrow-line" />HOW WE THINK</span><h2>Grounded in trust.<br />Focused on tomorrow.</h2></div></Reveal><div className="process-grid"><Reveal><div className="process-item"><strong>01 / CLARITY</strong><h3>Know what matters</h3><p>Bring important project and transaction details into focus before taking the next step.</p></div></Reveal><Reveal delay={0.1}><div className="process-item"><strong>02 / CONNECTION</strong><h3>Grow locally</h3><p>Connect district-level insight with the strength of a broader real estate network.</p></div></Reveal><Reveal delay={0.2}><div className="process-item"><strong>03 / CONFIDENCE</strong><h3>Move responsibly</h3><p>Explore safeguards and processes that support a more considered property journey.</p></div></Reveal></div></div></section>
    <CtaBand />
  </main>;
}
