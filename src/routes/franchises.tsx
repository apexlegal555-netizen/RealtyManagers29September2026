import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/realty/page-hero";
import { CtaBand } from "@/components/realty/cta-band";
import { Reveal } from "@/components/realty/reveal";
import city from "@/assets/realty-city.jpg";
import { Map, Building, Briefcase, Ruler, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/franchises")({ 
  head: () => ({ 
    meta: [
      { title: "Franchise Opportunities | Realty Managers" }, 
      { name: "description", content: "Explore state-level Master Franchise and district-level Regional Franchise opportunities within the Realty Managers ecosystem." },
      { property: "og:title", content: "Franchise Opportunities | Realty Managers" }, 
      { property: "og:description", content: "Grow a locally rooted real estate business within a connected, trust-led two-tier franchise network." }, 
      { property: "og:type", content: "website" }, 
      { name: "twitter:card", content: "summary_large_image" },
    ] 
  }), 
  component: FranchisePage 
});

function FranchisePage() { 
  return (
    <main className="bg-gray-50 min-h-screen">
      <PageHero 
        eyebrow="02 / LOCAL OPPORTUNITY" 
        title="Local Knowledge. National Scale." 
        description="Our network is built on a strategic two-tier hierarchy: a dedicated Master Franchise for every state, overseeing specialized Regional Franchises for each district. Join a connected ecosystem designed around credibility and thoughtful growth." 
        image={city} 
        imageAlt="Modern residential district at blue hour" 
      />

      <section className="py-24 bg-white border-b border-gray-100">
        <div className="content-width">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="eyebrow"><span className="eyebrow-line" />THE STRUCTURE</span>
              <h2 className="text-4xl md:text-5xl font-semibold mt-4 text-gray-900 mb-6">A hierarchical network of trust.</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">Every territory has its own rhythm and real estate potential. To capture this effectively, Realty Managers employs a two-tier franchise model.</p>
              <p className="text-gray-600 text-lg leading-relaxed">Each state is spearheaded by a single <strong>Master Franchise</strong>, which serves as the central hub of operations, strategy, and compliance. Beneath the Master Franchise operates a network of <strong>Regional Franchises</strong>, each dedicated to a specific district, ensuring deep, hyper-local market penetration and relationship management.</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-gray-50 p-10 rounded-2xl border border-gray-200 shadow-sm">
                 <div className="flex flex-col gap-4">
                    <div className="bg-brand-navy text-white p-6 rounded-xl flex items-center gap-4 shadow-lg" style={{ backgroundColor: 'var(--brand-navy)' }}>
                       <Map size={32} className="text-orange-400" />
                       <div>
                         <h4 className="font-bold text-xl">State Level</h4>
                         <p className="text-white/70 text-sm">Master Franchise</p>
                       </div>
                    </div>
                    <div className="flex justify-center -my-2"><div className="w-0.5 h-8 bg-gray-300"></div></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-200 p-4 rounded-xl flex items-center gap-3 shadow-sm">
                         <Building size={20} className="text-brand-navy" style={{ color: 'var(--brand-navy)' }} />
                         <div>
                           <h4 className="font-bold text-sm text-gray-900">District 1</h4>
                           <p className="text-gray-500 text-xs">Regional Franchise</p>
                         </div>
                      </div>
                      <div className="bg-white border border-gray-200 p-4 rounded-xl flex items-center gap-3 shadow-sm">
                         <Building size={20} className="text-brand-navy" style={{ color: 'var(--brand-navy)' }} />
                         <div>
                           <h4 className="font-bold text-sm text-gray-900">District 2</h4>
                           <p className="text-gray-500 text-xs">Regional Franchise</p>
                         </div>
                      </div>
                    </div>
                 </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="content-width">
          <Reveal className="text-center mb-16">
            <span className="eyebrow mx-auto justify-center"><span className="eyebrow-line" />REQUIREMENTS</span>
            <h2 className="text-4xl md:text-5xl font-semibold mt-4 text-gray-900">Partnership Criteria</h2>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Master Franchise */}
            <Reveal delay={0.1}>
              <div className="bg-white p-10 md:p-12 rounded-3xl border border-gray-200 shadow-sm h-full relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-2 relative z-10">Master Franchise</h3>
                <p className="text-orange-600 font-semibold mb-8 relative z-10">State-Level Operations Hub</p>
                
                <p className="text-gray-600 mb-10 relative z-10">The Master Franchise oversees the entire state's operations, manages the Regional Franchises, and ensures institutional-grade compliance and strategy execution.</p>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--brand-navy)' }}><Ruler size={18} /></div>
                    <div>
                      <h4 className="font-bold text-gray-900">Space Area</h4>
                      <p className="text-gray-600 text-sm mt-1">Minimum 1,500 - 2,500 sq.ft. of premium commercial office space in a tier-1 city.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--brand-navy)' }}><GraduationCap size={18} /></div>
                    <div>
                      <h4 className="font-bold text-gray-900">Qualification</h4>
                      <p className="text-gray-600 text-sm mt-1">MBA or equivalent professional degree. RERA certification mandatory.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--brand-navy)' }}><Briefcase size={18} /></div>
                    <div>
                      <h4 className="font-bold text-gray-900">Experience</h4>
                      <p className="text-gray-600 text-sm mt-1">10+ years in real estate brokerage, development, or wealth management with a proven leadership track record.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Regional Franchise */}
            <Reveal delay={0.2}>
              <div className="bg-white p-10 md:p-12 rounded-3xl border border-gray-200 shadow-sm h-full relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-2 relative z-10">Regional Franchise</h3>
                <p className="font-semibold mb-8 relative z-10" style={{ color: 'var(--brand-navy)' }}>District-Level Operations</p>
                
                <p className="text-gray-600 mb-10 relative z-10">Operating under the Master Franchise, Regional Franchises handle hyper-local client relationships, district-level project sourcing, and on-ground execution.</p>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--brand-navy)' }}><Ruler size={18} /></div>
                    <div>
                      <h4 className="font-bold text-gray-900">Space Area</h4>
                      <p className="text-gray-600 text-sm mt-1">Minimum 500 - 1,000 sq.ft. of accessible commercial space within the operating district.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--brand-navy)' }}><GraduationCap size={18} /></div>
                    <div>
                      <h4 className="font-bold text-gray-900">Qualification</h4>
                      <p className="text-gray-600 text-sm mt-1">Graduate degree in any discipline. Active local RERA agent registration.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--brand-navy)' }}><Briefcase size={18} /></div>
                    <div>
                      <h4 className="font-bold text-gray-900">Experience</h4>
                      <p className="text-gray-600 text-sm mt-1">3-5 years of local real estate experience, with a strong established district network.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-gray-100">
        <div className="content-width">
          <Reveal className="mb-16">
            <div>
              <span className="eyebrow"><span className="eyebrow-line" />A CONNECTED APPROACH</span>
              <h2 className="text-4xl md:text-5xl font-semibold mt-4 text-gray-900">Built to grow together.</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              ["01", "Strategic Focus", "Whether managing a state or a district, bring a deep understanding of your market and the people who shape it."],
              ["02", "Shared Standards", "Operate with an emphasis on Institutional Due Diligence, transparency, and strict RERA compliance."],
              ["03", "Mutual Opportunity", "Explore a multi-tiered partnership model fully aligned with long-term, sustainable ecosystem growth."]
            ].map(([n,t,d], i) => (
              <Reveal key={n} delay={i * 0.1}>
                <div className="border-t-2 pt-6" style={{ borderColor: 'var(--brand-navy)' }}>
                  <strong className="text-orange-600 font-bold block mb-4">{n}</strong>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{t}</h3>
                  <p className="text-gray-600 leading-relaxed">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Let’s build a network of trust." description="Tell us where you work and what tier of partnership you’re looking to build." />
    </main>
  ); 
}
