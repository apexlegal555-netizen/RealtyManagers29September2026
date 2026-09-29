import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/realty/reveal";
import { ShieldCheck, BadgeCheck, Filter, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/search-results")({
  component: SearchResultsPage
});

function SearchResultsPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="pt-32 pb-16 text-white relative overflow-hidden" style={{ backgroundColor: 'var(--brand-navy)' }}>
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl"></div>
        <div className="content-width relative z-10">
          <Reveal>
            <span className="eyebrow light-eyebrow"><span className="eyebrow-line" />YOUR NEXT INVESTMENT</span>
            <h1 className="text-4xl md:text-5xl font-semibold mt-4 mb-4">Search Results</h1>
            <p className="text-white/70 text-lg">We found 12 verified properties matching your criteria.</p>
          </Reveal>
        </div>
      </div>

      <section className="py-12 bg-gray-50">
        <div className="content-width">
          {/* Filters Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-10 gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
              <Filter size={16} /> Filtered by: <span className="bg-gray-100 px-3 py-1 rounded-full border border-gray-200">All Locations</span>
            </div>
            <div className="flex gap-2">
              <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 outline-none font-medium text-gray-700">
                <option>Sort by: Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "The Azure Residences", loc: "Bandra West, Mumbai", price: "₹4.5 Cr", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80", type: "India", beds: "3 Beds" },
              { name: "Whitefield Tech Villas", loc: "Whitefield, Bangalore", price: "₹3.2 Cr", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80", type: "India", beds: "4 Beds" },
              { name: "Golf Course Skydeck", loc: "Gurgaon, NCR", price: "₹6.8 Cr", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80", type: "India", beds: "5 Beds" },
              { name: "Central Park Tower", loc: "Manhattan, New York", price: "$4.5M", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", type: "USA", beds: "2 Beds" },
              { name: "Brickell Bay Estate", loc: "Miami, Florida", price: "$2.8M", img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80", type: "USA", beds: "4 Beds" },
              { name: "The Harbourfront", loc: "Downtown Toronto, ON", price: "$1.8M CAD", img: "https://images.unsplash.com/photo-1600566753086-00f18efc2291?auto=format&fit=crop&w=800&q=80", type: "Canada", beds: "3 Beds" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-gray-100 flex flex-col h-full">
                  <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <img src={item.img} alt="Property" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-green-700 flex items-center gap-1.5 shadow-sm">
                      {item.type === "India" ? <BadgeCheck size={14} /> : <ShieldCheck size={14} />} 
                      {item.type === "India" ? "RERA Verified" : "Title Cleared"}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900 line-clamp-1">{item.name}</h3>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-4">
                      <MapPin size={14} /> {item.loc}
                    </div>
                    <div className="flex items-center gap-4 text-sm font-medium text-gray-700 mb-6 border-b border-gray-100 pb-4">
                      <span className="bg-gray-50 px-2.5 py-1 rounded-md border border-gray-200">{item.beds}</span>
                      <span className="bg-gray-50 px-2.5 py-1 rounded-md border border-gray-200">{item.type}</span>
                    </div>
                    <div className="mt-auto flex justify-between items-center">
                      <p className="font-bold text-2xl text-gray-900">{item.price}</p>
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold">View Details</Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 text-center">
             <Button variant="outline" className="px-8 py-6 text-base font-semibold border-gray-300 text-gray-700 hover:bg-gray-100">Load More Properties</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
