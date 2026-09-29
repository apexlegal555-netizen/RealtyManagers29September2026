import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/realty/page-hero";
import { Reveal } from "@/components/realty/reveal";
import { PropertySearch } from "@/components/realty/property-search";
import { ArrowUpRight, ShieldCheck, TrendingUp, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/realty/cta-band";

export const Route = createFileRoute("/countries/canada")({
  head: () => ({
    meta: [
      { title: "Canada Real Estate | Realty Managers" },
      { name: "description", content: "Explore premium real estate opportunities across Canada's most livable cities." },
    ]
  }),
  component: CanadaPage
});

function CanadaPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="relative">
        <PageHero
          eyebrow="CANADA MARKET"
          title="Invest in Canadian Real Estate"
          description="Consistently ranked among the best places to live, Canada offers a highly regulated, safe, and lucrative real estate environment driven by strong immigration and world-class infrastructure."
          image="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&w=1920&q=80"
          imageAlt="Canada real estate - Toronto Skyline"
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
              { city: "Toronto, ON", desc: "Canada's financial engine, featuring high-density luxury condos and rapid transit-oriented developments." },
              { city: "Vancouver, BC", desc: "A stunning coastal city with high property values, driven by limited land supply and international demand." },
              { city: "Calgary, AB", desc: "A rapidly diversifying economy offering excellent affordability and some of the highest rental yields in the country." }
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

      {/* Featured Properties Canada */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="content-width">
          <Reveal className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <span className="eyebrow"><span className="eyebrow-line" />CURATED PORTFOLIO</span>
              <h2 className="text-4xl md:text-5xl font-semibold mt-4 text-gray-900">Verified Canadian Properties</h2>
            </div>
            <Link className="text-link" to="/">View all Canada properties <ArrowUpRight /></Link>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "The Harbourfront", loc: "Downtown Toronto, ON", price: "$1.8M CAD", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" },
              { name: "Coal Harbour Estates", loc: "Vancouver, BC", price: "$2.4M CAD", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" },
              { name: "Beltline Towers", loc: "Calgary, AB", price: "$650K CAD", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <img src={item.img} alt="Property" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-brand-navy flex items-center gap-1.5 shadow-sm">
                      <ShieldCheck size={14} /> Title Cleared
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
              <h2 className="text-4xl md:text-5xl font-semibold mt-4 mb-6 leading-tight">Why Invest in Canada?</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                With a consistently growing population driven by progressive immigration policies, Canada faces strong, sustained housing demand. The market is highly regulated, offering transparency and excellent long-term security.
              </p>
            </Reveal>
            <div className="space-y-6">
              <Reveal delay={0.1}>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md flex items-center gap-4">
                  <TrendingUp className="text-orange-500" size={32} />
                  <div>
                    <h4 className="font-bold text-lg">Immigration-Driven Demand</h4>
                    <p className="text-sm text-white/60">Targeted population growth ensures continuous housing and rental demand.</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md flex items-center gap-4">
                  <ShieldCheck className="text-orange-500" size={32} />
                  <div>
                    <h4 className="font-bold text-lg">Stable Financial System</h4>
                    <p className="text-sm text-white/60">One of the world's most heavily regulated and stable banking sectors protects your investment.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Ready to explore the Canadian market?" description="Connect with our global network of verified brokers and legal advisors." />
    </main>
  );
}
