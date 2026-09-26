import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/realty/page-hero";
import hero from "@/assets/realty-hero.jpg";
import { Reveal } from "@/components/realty/reveal";

export const Route = createFileRoute("/managers")({
  head: () => ({
    meta: [
      { title: "Managers | Realty Managers" },
      { name: "description", content: "Meet the experts behind Realty Managers." },
    ]
  }),
  component: ManagersPage
});

function ManagersPage() {
  return (
    <main>
      <PageHero
        eyebrow="MANAGERS"
        title="Our Leadership"
        description="Meet the experienced professionals guiding Realty Managers."
        image={hero}
        imageAlt="Real estate building"
      />
      <section className="detail-intro">
        <div className="content-width detail-intro-grid">
          <Reveal><h2>Expert Guidance</h2></Reveal>
          <Reveal>
            <p>Our managers have decades of combined experience in the real estate sector. We pride ourselves on offering strategic, data-driven advice to help our clients succeed.</p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
