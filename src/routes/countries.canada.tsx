import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/realty/page-hero";
import hero from "@/assets/realty-hero.jpg";
import { Reveal } from "@/components/realty/reveal";

export const Route = createFileRoute("/countries/canada")({
  head: () => ({
    meta: [
      { title: "Canada Real Estate | Realty Managers" },
      { name: "description", content: "Explore real estate opportunities in Canada." },
    ]
  }),
  component: CanadaPage
});

function CanadaPage() {
  return (
    <main>
      <PageHero
        eyebrow="CANADA"
        title="Opportunities in Canada"
        description="Discover properties and investments across Canada."
        image={hero}
        imageAlt="Canada real estate"
      />
      <section className="detail-intro">
        <div className="content-width detail-intro-grid">
          <Reveal><h2>A Growing Market</h2></Reveal>
          <Reveal>
            <p>Canada offers robust and stable real estate opportunities. Our network can help you identify prime residential and commercial options from coast to coast.</p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
