import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/realty/page-hero";
import hero from "@/assets/realty-hero.jpg";
import { Reveal } from "@/components/realty/reveal";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us | Realty Managers" },
      { name: "description", content: "Welcome to India’s First Certified Property Ecosystem." },
    ]
  }),
  component: AboutUsPage
});

function AboutUsPage() {
  const TRUST_STACK = [
    ["01", "Certified Listing Workflow", "We conduct deep government record checks, integrating directly with state RERA systems and land records before a property is ever approved."],
    ["02", "Geo-Tagged Physical Inspections", "Our trained district-level inspectors utilize proprietary mobile tech to capture GPS-stamped photos, room measurements, and red-flag checklists."],
    ["03", "Bank-Partnered Escrow", "We eliminate financial anxiety. Buyer funds are held securely in scheduled commercial bank escrow accounts and are only released when document transfers and legal sign-offs are complete."],
    ["04", "Title Insurance Integration", "We partner with leading insurers to offer title insurance on screened deals, providing an ultimate safety net for your investment."],
    ["05", "Expert Legal Handholding", "From document review to final registration, our empaneled local lawyers provide a 48-hour turnaround SLA to ensure your transaction is airtight."]
  ];

  return (
    <main>
      <PageHero
        eyebrow="ABOUT US"
        title="Welcome to India’s First Certified Property Ecosystem"
        description="Buying or selling property shouldn't feel like a gamble. Yet, in a market where 70% of listings lack proper verification and millions of transactions happen through untrained intermediaries, the real estate journey is often defined by chaos and risk."
        image={hero}
        imageAlt="Real estate building"
      />
      <section className="detail-intro">
        <div className="content-width detail-intro-grid">
          <Reveal><h2>Built to change exactly that.</h2></Reveal>
          <Reveal>
            <p>We are not just a listing portal; we are a complete, end-to-end verification ecosystem. We turn the unpredictable secondary property market into a safe, bank-backed environment. Whether you are a first-time buyer, an NRI investor, or a property seller, we provide the ultimate roadmap to a secure transaction.</p>
          </Reveal>
        </div>
      </section>

      <section className="detail-intro" style={{ paddingTop: 0 }}>
        <div className="content-width detail-intro-grid">
          <Reveal><h2>The Problem We Solve</h2></Reveal>
          <Reveal>
            <p>For decades, the Indian real estate market has suffered from a profound trust crisis. Buyers face high transaction risks, title disputes, and misrepresentation, particularly in Tier-2 and Tier-3 cities. Existing platforms only offer listings—they do not take responsibility for what happens on the ground.</p>
            <p>We realized that to truly fix real estate, you have to control the physical verification, secure the funds, and provide legal certainty.</p>
          </Reveal>
        </div>
      </section>

      <section className="detail-list">
        <div className="content-width">
          <Reveal className="section-heading">
            <div>
              <span className="eyebrow"><span className="eyebrow-line" />OUR SOLUTION</span>
              <h2>The 5-Part Trust Stack</h2>
              <p>We built a defensible moat against property fraud. Every property that enters the Realty Managers ecosystem must pass through our rigorous certification process:</p>
            </div>
          </Reveal>
          {TRUST_STACK.map(([n, t, d]) => (
            <Reveal key={n}>
              <div className="detail-row">
                <strong>{n}</strong>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="detail-intro">
        <div className="content-width detail-intro-grid">
          <Reveal><h2>Powered by Local Ownership</h2></Reveal>
          <Reveal>
            <p>Realty Managers operates through a highly vetted, district-level master franchise network. Our Franchisees aren't just brokers; they are certified local operators equipped with our standard operating procedures, proprietary inspection apps, and bank rails. Because they own their territory, they are deeply invested in maintaining the absolute highest standard of service.</p>
            <p>Every property we verify earns a unique, QR-linked Verification Certificate—a tamper-proof audit trail that guarantees peace of mind.</p>
          </Reveal>
        </div>
      </section>

      <section className="detail-intro" style={{ paddingTop: 0, paddingBottom: '120px' }}>
        <div className="content-width detail-intro-grid">
          <Reveal><h2>Our Vision</h2></Reveal>
          <Reveal>
            <p>To transform India’s real estate market from a chaotic landscape into a structured, certified ecosystem where every property is a verified, secure asset.</p>
            <p style={{ fontWeight: 700, color: 'var(--brand-navy)' }}>Your Territory. Your Business. Your Peace of Mind.</p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
