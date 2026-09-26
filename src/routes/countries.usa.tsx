import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/realty/page-hero";
import hero from "@/assets/realty-hero.jpg";
import { Reveal } from "@/components/realty/reveal";

export const Route = createFileRoute("/countries/usa")({
  head: () => ({
    meta: [
      { title: "USA Real Estate | Realty Managers" },
      { name: "description", content: "Explore real estate opportunities in the USA." },
    ]
  }),
  component: USAPage
});

function USAPage() {
  return (
    <main>
      <PageHero
        eyebrow="USA"
        title="Opportunities in the USA"
        description="Discover diverse properties across the United States."
        image={hero}
        imageAlt="USA real estate"
      />
      <section className="detail-intro">
        <div className="content-width detail-intro-grid">
          <Reveal><h2>A Vast Landscape</h2></Reveal>
          <Reveal>
            <p>The US real estate market is incredibly varied. Whether you are looking for commercial investments in major cities or residential properties, we have the expertise you need.</p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
