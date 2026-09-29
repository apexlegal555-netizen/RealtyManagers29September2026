import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/realty/page-hero";
import hero from "@/assets/realty-hero.jpg";
import { Reveal } from "@/components/realty/reveal";
import { ArrowUpRight, ShieldCheck, UserCheck, Scale, Compass, Video, FileText, Download, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/managers")({
  head: () => ({
    meta: [
      { title: "Managers | Realty Managers" },
      { name: "description", content: "Not Just Agents. Dedicated Realty Managers." },
    ]
  }),
  component: ManagersPage
});

function ManagersPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <PageHero
        eyebrow="YOUR ON-GROUND PARTNER"
        title="Not Just Agents. Dedicated Realty Managers."
        description="Traditional real estate relies on transactional agents focused on closing a quick deal. We operate on a foundation of dedicated relationship management. A Realty Manager is your exclusive, on-ground partner assigned to navigate your entire property journey—from initial discovery to secure, finalized registration."
        image={hero}
        imageAlt="Realty Manager"
      />

      {/* The Realty Manager Difference */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="content-width">
          <Reveal className="text-center mb-16">
            <span className="eyebrow mx-auto justify-center"><span className="eyebrow-line" />THE REALTY MANAGER DIFFERENCE</span>
            <h2 className="text-4xl md:text-5xl font-semibold mt-4 text-gray-900">More than just property viewing.</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">Your Manager does not just show properties; they orchestrate our entire ecosystem of trust.</p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div className="p-10 bg-gray-50 rounded-2xl border border-gray-100 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 flex items-center justify-center mb-6 rounded-xl" style={{ backgroundColor: 'var(--brand-navy)', color: 'var(--on-dark)' }}>
                  <UserCheck size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Single-Point Accountability</h3>
                <p className="text-gray-600 leading-relaxed">No bouncing between brokers, lawyers, and builders. Your Manager coordinates the entire process, acting as your steadfast advocate and project manager.</p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-10 bg-gray-50 rounded-2xl border border-gray-100 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 flex items-center justify-center mb-6 rounded-xl" style={{ backgroundColor: 'var(--brand-navy)', color: 'var(--on-dark)' }}>
                  <ShieldCheck size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">End-to-End Protection</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">They oversee the Institutional Due Diligence process, ensuring every property passes rigorous legal, RERA, and physical audits before you ever see it.</p>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Button variant="outline" className="text-orange-600 border-orange-200 hover:bg-orange-50 gap-2 w-fit">
                    <Download size={16} /> Download PDF Guide
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="p-10 bg-gray-50 rounded-2xl border border-gray-100 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 flex items-center justify-center mb-6 rounded-xl" style={{ backgroundColor: 'var(--brand-navy)', color: 'var(--on-dark)' }}>
                  <Scale size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Escrow Facilitation</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">Your Manager directly guides you through our 100% Secure Transactions framework, actively managing the bank-backed escrow safeguards from discovery to registration.</p>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Button variant="outline" className="text-orange-600 border-orange-200 hover:bg-orange-50 gap-2 w-fit">
                    <Download size={16} /> Escrow PDF Guide
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="p-10 bg-gray-50 rounded-2xl border border-gray-100 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 flex items-center justify-center mb-6 rounded-xl" style={{ backgroundColor: 'var(--brand-navy)', color: 'var(--on-dark)' }}>
                  <Compass size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Zero-Bias Advisory</h3>
                <p className="text-gray-600 leading-relaxed">Because Managers operate within our secure ecosystem rather than chasing fragmented open-market commissions, their sole objective is your transactional safety and satisfaction.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Your On-Ground Proxy for Borderless Investment */}
      <section className="py-24 overflow-hidden relative" style={{ backgroundColor: 'var(--brand-navy)', color: 'var(--on-dark)' }}>
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
        <div className="content-width relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="eyebrow light-eyebrow"><span className="eyebrow-line" />NRI & REMOTE INVESTORS</span>
              <h2 className="text-4xl md:text-5xl font-semibold mt-4 mb-6 leading-tight">Your On-Ground Proxy for Borderless Investment</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                For NRI clients and remote investors, a Realty Manager provides the exact on-ground verification required to invest with absolute certainty, delivering true Borderless Confidence.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-6 rounded-none gap-2 shadow-[0_0_20px_rgba(234,88,12,0.3)]">
                <Download size={18} /> Borderless Investment PDF
              </Button>
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={0.1}>
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md flex gap-6 items-start hover:bg-white/10 transition-colors duration-300">
                  <div className="bg-orange-600/20 text-orange-500 p-3 rounded-lg shrink-0">
                    <Video size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Remote Strategy Sessions</h4>
                    <p className="text-white/60 leading-relaxed">Detailed virtual consultations to align with your investment criteria or joint development goals.</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md flex gap-6 items-start hover:bg-white/10 transition-colors duration-300">
                  <div className="bg-orange-600/20 text-orange-500 p-3 rounded-lg shrink-0">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Live Virtual Audits</h4>
                    <p className="text-white/60 leading-relaxed">Real-time, guided video walk-throughs of verified properties, construction progress, and prime land parcels.</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md flex gap-6 items-start hover:bg-white/10 transition-colors duration-300">
                  <div className="bg-orange-600/20 text-orange-500 p-3 rounded-lg shrink-0">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Documentation Management</h4>
                    <p className="text-white/60 leading-relaxed">Seamless, secure coordination of clearance certificates, power of attorney protocols, and remote registration processes.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* The End-to-End Journey */}
      <section className="py-24 bg-white">
        <div className="content-width">
          <Reveal className="text-center mb-20">
            <span className="eyebrow mx-auto justify-center"><span className="eyebrow-line" />TRANSPARENT PROCESS</span>
            <h2 className="text-4xl md:text-5xl font-semibold mt-4 text-gray-900">The End-to-End Journey</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-[48px] left-0 right-0 h-0.5 bg-gray-200 z-0"></div>
            
            {[
              { step: "01", title: "Consult & Curate", desc: "We align on your specific goals (buying, selling, or joint-venture development) and present only fully verified opportunities." },
              { step: "02", title: "Audit & Verify", desc: "Your Manager initiates the legal, regulatory, and physical vetting of your chosen asset." },
              { step: "03", title: "Secure & Transact", desc: "Escrow accounts are established. Capital is protected. Contracts are finalized." },
              { step: "04", title: "Clear & Transfer", desc: "Final government registration is completed, and a seamless handover is executed with total transparency." }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative z-10 bg-white p-8 rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/40 hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold mb-6 text-lg border-4 border-white shadow-sm">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed flex-grow">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden text-center" style={{ backgroundColor: 'var(--brand-deep)', color: 'var(--on-dark)' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-20 w-[600px] h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
        <div className="content-width relative z-10">
          <Reveal>
            <span className="eyebrow mx-auto justify-center light-eyebrow"><span className="eyebrow-line" />LET'S CONNECT</span>
            <h2 className="text-4xl md:text-6xl font-semibold mt-6 mb-6 text-white max-w-3xl mx-auto">Let's make the next move count.</h2>
            <p className="text-xl text-white/70 mb-10">Start a conversation with a dedicated Realty Manager today.</p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-8 text-lg font-bold rounded-none shadow-[0_0_40px_rgba(234,88,12,0.4)] transition-all hover:shadow-[0_0_60px_rgba(234,88,12,0.6)] gap-3 w-fit mx-auto asChild">
              <Link to="/contact" className="flex items-center gap-2">Connect With a Manager <ArrowUpRight size={20} /></Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
