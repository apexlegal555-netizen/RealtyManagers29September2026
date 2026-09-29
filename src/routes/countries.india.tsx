import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/realty/page-hero";
import hero from "@/assets/realty-hero.jpg";
import { Reveal } from "@/components/realty/reveal";
import { PropertySearch } from "@/components/realty/property-search";
import { ArrowUpRight, BadgeCheck, TrendingUp, Building, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/realty/cta-band";

export const Route = createFileRoute("/countries/india")({
  head: () => ({
    meta: [
      { title: "India Real Estate | Realty Managers" },
      { name: "description", content: "Explore premium real estate opportunities across India's booming metropolitan hubs." },
    ]
  }),
  component: IndiaPage
});

function IndiaPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="relative">
        <PageHero
          eyebrow="INDIA MARKET"
          title="Invest in India's Growth Story"
          description="From bustling metropolitan hubs to serene coastal developments, India offers unparalleled real estate potential. Our RERA-verified portfolio ensures absolute transparency."
          image={hero}
          imageAlt="India real estate"
        >
          <div className="mt-12 hidden md:block opacity-0">Spacer for absolute positioned search</div>
        </PageHero>
        <PropertySearch />
      </div>

      {/* Popular Regions */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="content-width">
          <Reveal className="mb-12">
            <span className="eyebrow"><span className="eyebrow-line" />PRIME LOCATIONS</span>
            <h2 className="text-4xl md:text-5xl font-semibold mt-4 text-gray-900">Featured Markets</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { city: "Mumbai", desc: "The financial capital, offering ultra-luxury sea-facing apartments and premium commercial spaces." },
              { city: "Bangalore", desc: "India's Silicon Valley, driving high rental yields in tech corridors and gated villa communities." },
              { city: "Delhi NCR", desc: "Rapidly expanding infrastructure with high-appreciation plotted developments and luxury condos." }
            ].map((loc, i) => (
              <Reveal key={loc.city} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all h-full">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{loc.city}</h3>
                  <p className="text-gray-600 leading-relaxed">{loc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties India */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="content-width">
          <Reveal className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <span className="eyebrow"><span className="eyebrow-line" />CURATED PORTFOLIO</span>
              <h2 className="text-4xl md:text-5xl font-semibold mt-4 text-gray-900">Verified Indian Properties</h2>
            </div>
            <Link className="text-link" to="/">View all India properties <ArrowUpRight /></Link>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "The Azure Residences", loc: "Bandra West, Mumbai", price: "₹4.5 Cr", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" },
              { name: "Whitefield Tech Villas", loc: "Whitefield, Bangalore", price: "₹3.2 Cr", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" },
              { name: "Golf Course Skydeck", loc: "Gurgaon, NCR", price: "₹6.8 Cr", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <img src={item.img} alt="Property" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-green-700 flex items-center gap-1.5 shadow-sm">
                      <BadgeCheck size={14} /> RERA Verified
                    </div>
                  </div>
                  <div className="p-6 bg-white/80 backdrop-blur-xl absolute bottom-0 left-0 right-0 border-t border-white/40">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{item.loc}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-xl text-gray-900">{item.price}</p>
                      </div>
                    </div>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold">View Details</Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden" style={{ backgroundColor: 'var(--brand-navy)' }}>
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
        <div className="content-width relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="eyebrow light-eyebrow"><span className="eyebrow-line" />MARKET INTELLIGENCE</span>
              <h2 className="text-4xl md:text-5xl font-semibold mt-4 mb-6 leading-tight">Why Invest in India?</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                India is the world's fastest-growing major economy. With progressive regulatory reforms like RERA and substantial infrastructure investments, the real estate sector is highly formalized, transparent, and primed for long-term appreciation.
              </p>
            </Reveal>
            <div className="space-y-6">
              <Reveal delay={0.1}>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md flex items-center gap-4">
                  <TrendingUp className="text-orange-500" size={32} />
                  <div>
                    <h4 className="font-bold text-lg">High Rental Yields</h4>
                    <p className="text-sm text-white/60">Strong demand in IT hubs ensures steady passive income.</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md flex items-center gap-4">
                  <BadgeCheck className="text-orange-500" size={32} />
                  <div>
                    <h4 className="font-bold text-lg">RERA Protection</h4>
                    <p className="text-sm text-white/60">Strict government regulations protect buyer interests and ensure delivery.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Ready to explore the Indian market?" description="Connect with our local experts for a tailored investment strategy." />
    </main>
  );
}
