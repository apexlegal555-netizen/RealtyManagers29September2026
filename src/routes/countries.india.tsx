import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/realty/page-hero";
import hero from "@/assets/realty-hero.jpg";
import { Reveal } from "@/components/realty/reveal";

export const Route = createFileRoute("/countries/india")({
  head: () => ({
    meta: [
      { title: "India Real Estate | Realty Managers" },
      { name: "description", content: "Explore real estate opportunities in India." },
    ]
  }),
  component: IndiaPage
});

function IndiaPage() {
  return (
    <main>
      <PageHero
        eyebrow="INDIA"
        title="Opportunities in India"
        description="Discover emerging markets and established properties across India."
        image={hero}
        imageAlt="India real estate"
      />
      <section className="detail-intro">
        <div className="content-width detail-intro-grid">
          <Reveal><h2>A Dynamic Market</h2></Reveal>
          <Reveal>
            <p>From bustling metropolitan hubs to serene coastal developments, India offers a wide range of real estate possibilities. Let us guide you through the intricacies of the local market.</p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
