import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/realty/page-hero";
import { CtaBand } from "@/components/realty/cta-band";
import { Reveal } from "@/components/realty/reveal";
import building from "@/assets/realty-building.jpg";
import { ShieldCheck, Search, Scale, FileCheck2, Fingerprint, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/rera-verification")({ head: () => ({ meta: [
  { title: "RERA Verification & Due Diligence | Realty Managers" }, 
  { name: "description", content: "Understand RERA registration details and institutional due diligence before making a property decision with Realty Managers." },
] }), component: ReraPage });

function ReraPage() { 
  return (
    <main className="bg-gray-50 min-h-screen">
      <PageHero 
        eyebrow="01 / PROJECT CONFIDENCE" 
        title="Clarity begins with verification." 
        description="Understand the facts behind a project before moving forward. RERA registration is just the beginning of our Institutional Due Diligence process." 
        image={building} 
        imageAlt="Contemporary residential building exterior" 
      />

      <section className="py-24 bg-white border-b border-gray-100">
        <div className="content-width">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="eyebrow"><span className="eyebrow-line" />BEYOND THE LISTING</span>
              <h2 className="text-4xl md:text-5xl font-semibold mt-4 text-gray-900 mb-6">Look beyond the listing.</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">RERA (Real Estate Regulatory Authority) registration is an important starting point for evaluating a real estate project. We help you focus on the information worth checking, so you can approach your decision with a clearer view.</p>
              <p className="text-gray-600 text-lg leading-relaxed">Verification is a review of available records, not a guarantee of a project’s outcome. Official regulator records remain the source of truth, and our experts ensure you know exactly how to read them.</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <Fingerprint className="text-orange-600 mb-4" size={32} />
                  <h4 className="font-bold text-gray-900 text-xl mb-2">Promoter Background</h4>
                  <p className="text-gray-600 text-sm">Verify the developer's track record, financial standing, and past project delivery timelines.</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <Scale className="mb-4" size={32} style={{ color: 'var(--brand-navy)' }} />
                  <h4 className="font-bold text-gray-900 text-xl mb-2">Legal Encumbrances</h4>
                  <p className="text-gray-600 text-sm">Ensure the land title is absolute and clear of any ongoing litigation or financial liens.</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <Building2 className="text-orange-600 mb-4" size={32} />
                  <h4 className="font-bold text-gray-900 text-xl mb-2">Project Approvals</h4>
                  <p className="text-gray-600 text-sm">Review municipal clearances, environmental NOCs, and sanctioned building plans.</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <FileCheck2 className="mb-4" size={32} style={{ color: 'var(--brand-navy)' }} />
                  <h4 className="font-bold text-gray-900 text-xl mb-2">Allotment Terms</h4>
                  <p className="text-gray-600 text-sm">Scrutinize the builder-buyer agreement for standard clauses and penalty metrics.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 overflow-hidden relative" style={{ backgroundColor: 'var(--brand-navy)', color: 'var(--on-dark)' }}>
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
        <div className="content-width relative z-10">
          <Reveal className="text-center mb-16">
            <span className="eyebrow mx-auto justify-center light-eyebrow"><span className="eyebrow-line" />THE ESSENTIAL CHECKS</span>
            <h2 className="text-4xl md:text-5xl font-semibold mt-4 text-white">What to look for.</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mt-4">Our Institutional Due Diligence framework covers every critical aspect of a real estate transaction.</p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-white/5 border border-white/10 p-10 rounded-2xl backdrop-blur-md h-full flex flex-col hover:bg-white/10 transition-colors">
                <div className="text-orange-500 font-mono text-5xl font-bold mb-6 opacity-50">01</div>
                <h3 className="text-2xl font-bold text-white mb-4">Registration Details</h3>
                <p className="text-white/70 leading-relaxed">Compare the project’s registration number and promoter details with the relevant state RERA portal to ensure absolute authenticity.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-white/5 border border-white/10 p-10 rounded-2xl backdrop-blur-md h-full flex flex-col hover:bg-white/10 transition-colors">
                <div className="text-orange-500 font-mono text-5xl font-bold mb-6 opacity-50">02</div>
                <h3 className="text-2xl font-bold text-white mb-4">Project Disclosures</h3>
                <p className="text-white/70 leading-relaxed">Review published timelines, layout approvals, and financial documentation where available to gauge project health.</p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="bg-white/5 border border-white/10 p-10 rounded-2xl backdrop-blur-md h-full flex flex-col hover:bg-white/10 transition-colors">
                <div className="text-orange-500 font-mono text-5xl font-bold mb-6 opacity-50">03</div>
                <h3 className="text-2xl font-bold text-white mb-4">Informed Next Steps</h3>
                <p className="text-white/70 leading-relaxed">Use verified information to frame the right questions before committing capital to any developer or land parcel.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand title="See the full picture first." description="Tell us what you’re considering and we’ll help you identify the right next questions." />
    </main>
  ); 
}
