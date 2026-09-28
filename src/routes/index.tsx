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
    <section className="intro-section">
      <div className="content-width intro-grid">
        <Reveal>
          <span className="eyebrow"><span className="eyebrow-line" />THE REALTY MANAGERS PERSPECTIVE</span>
          <video autoPlay loop muted playsInline src="/generated_video.mp4" style={{ width: '100%', borderRadius: '4px', marginTop: '30px', objectFit: 'cover' }} aria-label="Realty Managers Perspective" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2>Confidence should be the foundation of every property decision.</h2>
          <p>Real estate is about more than a place. It is about the people, processes, and protections that stand behind it. We bring those elements together in one considered ecosystem—helping buyers, partners, and communities move forward with clarity.</p>
          <Link className="text-link" to="/contact">Connect with us <ArrowUpRight /></Link>
        </Reveal>
      </div>
    </section>
    <section className="offerings-section"><div className="content-width"><Reveal className="section-heading"><div><span className="eyebrow"><span className="eyebrow-line" />OUR ECOSYSTEM</span><h2>Built around what matters.</h2></div><p>Three connected pillars. One more confident way to navigate the real estate landscape.</p></Reveal><div className="offerings-grid">{offerings.map((item, index) => <Reveal key={item.number} delay={index * 0.08}><article className="offering-card"><div className="offering-icon"><item.icon aria-hidden="true" /></div><span className="offering-number">{item.number} / 03</span><h3>{item.title}</h3><p>{item.description}</p><Link className="text-link" to={item.to}>Discover more <ArrowUpRight /></Link></article></Reveal>)}</div></div></section>
    
    {/* Featured RERA-Verified Properties */}
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="content-width">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <span className="eyebrow"><span className="eyebrow-line" />CURATED PORTFOLIO</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 text-gray-900">Featured Properties</h2>
            </div>
            <Link className="text-link" to="/">View all properties <ArrowUpRight /></Link>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Reveal key={item} delay={item * 0.1}>
              <div className="relative rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" alt="Property" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-green-700 flex items-center gap-1.5 shadow-sm">
                    <BadgeCheck size={14} /> RERA Verified
                  </div>
                </div>
                <div className="p-6 bg-white/80 backdrop-blur-xl absolute bottom-0 left-0 right-0 border-t border-white/40">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">The Azure Residences</h3>
                      <p className="text-sm text-gray-600 mt-1">Bandra West, Mumbai</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-xl text-gray-900">₹4.5 Cr</p>
                    </div>
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow-[0_4px_14px_0_rgba(234,88,12,0.39)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.23)] transition-all">View Details</Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Section 2: Joint Development Hub */}
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="content-width">
        <Reveal className="text-center mb-16">
          <span className="eyebrow mx-auto justify-center"><span className="eyebrow-line" />COLLABORATIVE DEVELOPMENT</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 text-gray-900">Joint Development Hub</h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">Unlocking value through strategic partnerships. Whether you hold land or build on it, our ecosystem is designed for mutual growth.</p>
        </Reveal>
        
        <div className="grid md:grid-cols-2 gap-0 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="p-12 md:p-16 bg-gray-50 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-200">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">For Landowners</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">Monetize prime parcels with absolute security. Partner with reputed A-grade developers through structured joint ventures that maximize your asset's value while minimizing execution risk.</p>
            <Button className="w-fit bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 rounded-none text-base font-semibold shadow-[0_4px_14px_0_rgba(234,88,12,0.39)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.23)] transition-all">Explore Land Monetization</Button>
          </div>
          <div className="p-12 md:p-16 flex flex-col justify-center" style={{ backgroundColor: 'var(--brand-navy)' }}>
            <h3 className="text-3xl font-bold mb-4 text-white">For Builders</h3>
            <p className="text-white/70 mb-8 leading-relaxed">Access legally cleared, high-potential land parcels. Our rigorous due diligence ensures you can focus on what you do best—building exceptional spaces—without the regulatory overhead.</p>
            <Button className="w-fit bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 rounded-none text-base font-semibold border-none shadow-[0_4px_14px_0_rgba(234,88,12,0.39)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.23)] transition-all">View Joint Ventures</Button>
          </div>
        </div>
      </div>
    </section>

    {/* Section 4: Franchise Network Expansion */}
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--brand-deep)', color: 'var(--on-dark)' }}>
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
      
      <div className="content-width relative z-10">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center">
            <span className="eyebrow mx-auto justify-center light-eyebrow"><span className="eyebrow-line" />MASTER FRANCHISE</span>
            <h2 className="text-4xl md:text-6xl font-semibold mt-6 mb-8 text-white">Join the Realty Managers Network</h2>
            <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Elevate your real estate business by becoming an exclusive district franchise partner. Access our institutional-grade inventory, secure transaction protocols, and established brand authority.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12 text-left">
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h4 className="font-semibold text-white mb-2 text-lg">Exclusive Territory</h4>
                <p className="text-white/60 text-sm">Command a dedicated district with full operational rights and lead exclusivity.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h4 className="font-semibold text-white mb-2 text-lg">Verified Inventory</h4>
                <p className="text-white/60 text-sm">Access to premium, 100% RERA-verified projects and pre-launch opportunities.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h4 className="font-semibold text-white mb-2 text-lg">Tech Infrastructure</h4>
                <p className="text-white/60 text-sm">Comprehensive CRM, marketing collateral, and escrow-backed transaction support.</p>
              </div>
            </div>
            
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-6 text-lg font-bold rounded-none shadow-[0_0_40px_rgba(234,88,12,0.4)] transition-all hover:shadow-[0_0_60px_rgba(234,88,12,0.6)]">Partner With Us</Button>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="image-feature"><div className="image-feature-media"><img src={building} alt="Refined contemporary residential building framed by trees" width={1408} height={1008} loading="lazy" /></div><div className="image-feature-copy"><Reveal><span className="eyebrow light-eyebrow"><span className="eyebrow-line" />A BETTER WAY FORWARD</span><h2>Every detail deserves a closer look.</h2><p>From the credibility of a project to the structure of a transaction, the right information changes everything. We believe transparency is not an extra—it is essential.</p><Link className="text-link" to="/rera-verification">Explore verification <ArrowUpRight /></Link></Reveal></div></section>
    <section className="process-section"><div className="content-width"><Reveal className="section-heading"><div><span className="eyebrow"><span className="eyebrow-line" />HOW WE THINK</span><h2>Grounded in trust.<br />Focused on tomorrow.</h2></div></Reveal><div className="process-grid"><Reveal><div className="process-item"><strong>01 / CLARITY</strong><h3>Know what matters</h3><p>Bring important project and transaction details into focus before taking the next step.</p></div></Reveal><Reveal delay={0.1}><div className="process-item"><strong>02 / CONNECTION</strong><h3>Grow locally</h3><p>Connect district-level insight with the strength of a broader real estate network.</p></div></Reveal><Reveal delay={0.2}><div className="process-item"><strong>03 / CONFIDENCE</strong><h3>Move responsibly</h3><p>Explore safeguards and processes that support a more considered property journey.</p></div></Reveal></div></div></section>
    <CtaBand />
  </main>;
}
