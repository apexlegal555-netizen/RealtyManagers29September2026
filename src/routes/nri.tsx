import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/realty/page-hero";
import hero from "@/assets/realty-hero.jpg";
import { Reveal } from "@/components/realty/reveal";
import { ArrowUpRight, Plane, ShieldCheck, Lock, FileText, Home, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/nri")({
  head: () => ({
    meta: [
      { title: "NRI Investments | Realty Managers" },
      { name: "description", content: "Invest in Indian real estate from abroad with borderless confidence and zero hassle." },
    ]
  }),
  component: NRIPage
});

function NRIPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <PageHero
        eyebrow="GLOBAL INVESTORS"
        title="NRI Investments: Borderless Confidence, Zero Hassle"
        description="Investing in Indian real estate from abroad should not require navigating a maze of unverified claims, fragmented legalities, or unexpected travel. We have engineered a completely frictionless, end-to-end property ecosystem specifically for Non-Resident Indians."
        image={hero}
        imageAlt="NRI Real Estate Investments"
      >
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
          <p className="text-white/80 max-w-2xl leading-relaxed text-sm md:text-base text-center md:text-left">
            Your dedicated Realty Manager acts as your uncompromising on-ground proxy, securing every step of your transaction so you can invest with absolute certainty.
          </p>
          <Button variant="outlineLight" className="gap-2 whitespace-nowrap shrink-0">
            <Download size={16} /> NRI Guide PDF
          </Button>
        </div>
      </PageHero>

      {/* The NRI Advantage */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="content-width">
          <Reveal className="text-center mb-16">
            <span className="eyebrow mx-auto justify-center"><span className="eyebrow-line" />EXCLUSIVE BENEFITS</span>
            <h2 className="text-4xl md:text-5xl font-semibold mt-4 text-gray-900">The NRI Advantage</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 h-full flex flex-col hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center mb-6 rounded-xl" style={{ backgroundColor: 'var(--brand-navy)', color: 'var(--on-dark)' }}>
                  <Plane size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Zero-Travel Execution</h3>
                <p className="text-gray-600 leading-relaxed text-sm">From digital Power of Attorney (PoA) coordination to remote registration frameworks, we handle the local bureaucracy. You oversee the entire process from your dashboard without needing to board a flight.</p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 h-full flex flex-col hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center mb-6 rounded-xl" style={{ backgroundColor: 'var(--brand-navy)', color: 'var(--on-dark)' }}>
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Institutional Due Diligence</h3>
                <p className="text-gray-600 leading-relaxed flex-grow text-sm">Distance should never mean blind faith. Every prime listing and joint development land parcel undergoes a rigorous physical, legal, and regulatory (RERA) audit before it is presented to you.</p>
                <Button variant="outline" className="mt-6 gap-2 w-fit text-orange-600 border-orange-200 hover:bg-orange-50 h-8 text-xs">
                  <Download size={14} /> Audit PDF
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 h-full flex flex-col hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center mb-6 rounded-xl" style={{ backgroundColor: 'var(--brand-navy)', color: 'var(--on-dark)' }}>
                  <Lock size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bank-Backed Escrow Security</h3>
                <p className="text-gray-600 leading-relaxed flex-grow text-sm">We facilitate secure, transparent capital routing using established escrow safeguards to protect your funds from discovery all the way through to final registration.</p>
                <Button variant="outline" className="mt-6 gap-2 w-fit text-orange-600 border-orange-200 hover:bg-orange-50 h-8 text-xs">
                  <Download size={14} /> Escrow PDF
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 h-full flex flex-col hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center mb-6 rounded-xl" style={{ backgroundColor: 'var(--brand-navy)', color: 'var(--on-dark)' }}>
                  <FileText size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">FEMA & Taxation Compliance</h3>
                <p className="text-gray-600 leading-relaxed text-sm">Your Manager coordinates with specialized legal partners to ensure your investments, repatriations, and tax obligations strictly adhere to RBI and FEMA guidelines.</p>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 h-full flex flex-col hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center mb-6 rounded-xl" style={{ backgroundColor: 'var(--brand-navy)', color: 'var(--on-dark)' }}>
                  <Home size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Asset Lifecycle Management</h3>
                <p className="text-gray-600 leading-relaxed text-sm">Our commitment does not end at the sale. We provide ongoing property management, tenancy curation, and site maintenance to ensure your remote asset remains protected and profitable.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Your Remote Transaction Journey */}
      <section className="py-24 overflow-hidden relative" style={{ backgroundColor: 'var(--brand-navy)', color: 'var(--on-dark)' }}>
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
        <div className="content-width relative z-10">
          <Reveal className="mb-16">
            <span className="eyebrow light-eyebrow"><span className="eyebrow-line" />TRANSPARENT PROCESS</span>
            <h2 className="text-4xl md:text-5xl font-semibold mt-4 text-white">Your Remote Transaction Journey</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <Reveal delay={0.1}>
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md flex gap-6 items-start hover:bg-white/10 transition-colors h-full">
                <div className="bg-orange-600/20 text-orange-500 p-4 rounded-xl shrink-0 font-bold text-xl font-mono">01</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Strategic Alignment</h4>
                  <p className="text-white/70 leading-relaxed text-sm">Connect with your Realty Manager via video consultation to define your specific investment criteria, whether you are seeking high-yield commercial spaces, premium residential assets, or prime land for joint development.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md flex gap-6 items-start hover:bg-white/10 transition-colors h-full">
                <div className="bg-orange-600/20 text-orange-500 p-4 rounded-xl shrink-0 font-bold text-xl font-mono">02</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Live Virtual Audits</h4>
                  <p className="text-white/70 leading-relaxed text-sm">Experience real-time, guided video walkthroughs of verified properties and review comprehensive digital due diligence dossiers.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md flex gap-6 items-start hover:bg-white/10 transition-colors h-full">
                <div className="bg-orange-600/20 text-orange-500 p-4 rounded-xl shrink-0 font-bold text-xl font-mono">03</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 flex items-center justify-between flex-wrap gap-2">Secure Processing <Button variant="outlineLight" size="sm" className="h-7 text-xs gap-1 px-2"><Download size={12}/> PDF</Button></h4>
                  <p className="text-white/70 leading-relaxed text-sm">Capital is staged securely in escrow while our legal teams finalize the paperwork and compliance checks.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md flex gap-6 items-start hover:bg-white/10 transition-colors h-full">
                <div className="bg-orange-600/20 text-orange-500 p-4 rounded-xl shrink-0 font-bold text-xl font-mono">04</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Clearance & Handover</h4>
                  <p className="text-white/70 leading-relaxed text-sm">Final government registration is executed smoothly via local proxy or remote protocols, followed by immediate transition into our property management ecosystem.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden text-center bg-white border-t border-gray-100">
        <div className="content-width relative z-10">
          <Reveal>
            <span className="eyebrow mx-auto justify-center"><span className="eyebrow-line" />YOUR HOME AWAITS</span>
            <h2 className="text-4xl md:text-5xl font-semibold mt-6 mb-6 text-gray-900 max-w-3xl mx-auto">Secure your footprint back home, from anywhere in the world.</h2>
            <p className="text-xl text-gray-600 mb-10">Schedule a private virtual strategy session with an NRI Realty Manager today.</p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-8 text-lg font-bold rounded-none shadow-[0_4px_14px_0_rgba(234,88,12,0.39)] transition-all hover:shadow-[0_6px_20px_rgba(234,88,12,0.23)] gap-3 w-fit mx-auto">
              Book a Virtual Consultation <ArrowUpRight size={20} />
            </Button>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
