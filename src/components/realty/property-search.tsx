import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

const locationData: Record<string, { name: string; states: Record<string, { name: string; cities: string[] }> }> = {
  india: {
    name: "India",
    states: {
      maharashtra: { name: "Maharashtra", cities: ["Mumbai", "Pune", "Nagpur", "Nashik"] },
      karnataka: { name: "Karnataka", cities: ["Bangalore", "Mysore", "Mangalore"] },
      delhi: { name: "Delhi", cities: ["New Delhi"] },
      telangana: { name: "Telangana", cities: ["Hyderabad", "Warangal"] },
      tamil_nadu: { name: "Tamil Nadu", cities: ["Chennai", "Coimbatore", "Madurai"] },
      gujarat: { name: "Gujarat", cities: ["Ahmedabad", "Surat", "Vadodara"] },
    }
  },
  usa: {
    name: "USA",
    states: {
      new_york: { name: "New York", cities: ["New York City", "Buffalo", "Rochester"] },
      california: { name: "California", cities: ["Los Angeles", "San Francisco", "San Diego", "Sacramento"] },
      texas: { name: "Texas", cities: ["Houston", "Dallas", "Austin", "San Antonio"] },
      florida: { name: "Florida", cities: ["Miami", "Orlando", "Tampa"] },
      illinois: { name: "Illinois", cities: ["Chicago", "Springfield"] },
    }
  },
  canada: {
    name: "Canada",
    states: {
      ontario: { name: "Ontario", cities: ["Toronto", "Ottawa", "Hamilton", "Mississauga"] },
      british_columbia: { name: "British Columbia", cities: ["Vancouver", "Victoria", "Kelowna"] },
      alberta: { name: "Alberta", cities: ["Calgary", "Edmonton", "Red Deer"] },
      quebec: { name: "Quebec", cities: ["Montreal", "Quebec City"] },
    }
  }
};

export function PropertySearch() {
  const navigate = useNavigate();
  const [country, setCountry] = useState<string>("");
  const [state, setState] = useState<string>("");

  const availableStates = country && locationData[country] ? locationData[country].states : {};
  const availableCities = state && availableStates[state] ? availableStates[state].cities : [];

  const handleSearch = () => {
    navigate({ to: "/search-results" });
  };

  return (
    <div className="hero-search w-full max-w-[1300px] hidden lg:flex">
      <div className="hero-search-field">
        <span className="hero-search-label">Property Type</span>
        <div className="hero-search-select-wrapper">
          <select aria-label="Property Type">
            <option value="">Any</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="commercial">Commercial</option>
          </select>
          <ChevronDown size={14} />
        </div>
      </div>
      
      <div className="hero-search-field">
        <span className="hero-search-label">Bedroom</span>
        <div className="hero-search-select-wrapper">
          <select aria-label="Bedroom">
            <option value="">Any</option>
            <option value="1">1 Bed</option>
            <option value="2">2 Beds</option>
            <option value="3">3 Beds</option>
            <option value="4+">4+ Beds</option>
          </select>
          <ChevronDown size={14} />
        </div>
      </div>

      <div className="hero-search-field">
        <span className="hero-search-label">Country</span>
        <div className="hero-search-select-wrapper">
          <select 
            aria-label="Country" 
            value={country} 
            onChange={(e) => {
              setCountry(e.target.value);
              setState(""); // Reset state and city when country changes
            }}
          >
            <option value="">Any</option>
            {Object.entries(locationData).map(([key, data]) => (
              <option key={key} value={key}>{data.name}</option>
            ))}
          </select>
          <ChevronDown size={14} />
        </div>
      </div>

      <div className="hero-search-field">
        <span className="hero-search-label">State</span>
        <div className="hero-search-select-wrapper">
          <select 
            aria-label="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
            disabled={!country}
          >
            <option value="">Any</option>
            {Object.entries(availableStates).map(([key, data]) => (
              <option key={key} value={key}>{data.name}</option>
            ))}
          </select>
          <ChevronDown size={14} />
        </div>
      </div>

      <div className="hero-search-field">
        <span className="hero-search-label">City</span>
        <div className="hero-search-select-wrapper">
          <select aria-label="City" disabled={!state}>
            <option value="">Any</option>
            {availableCities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          <ChevronDown size={14} />
        </div>
      </div>

      <div className="hero-search-field">
        <span className="hero-search-label">Starting From</span>
        <div className="hero-search-price-group">
          <div className="hero-search-select-wrapper" style={{ width: '60px' }}>
            <select aria-label="Currency">
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="CAD">CAD</option>
            </select>
            <ChevronDown size={14} />
          </div>
          <div className="hero-search-select-wrapper" style={{ flex: 1 }}>
            <select aria-label="Starting Price">
              <option value="">Any</option>
              <option value="500000">500,000</option>
              <option value="1000000">1,000,000</option>
              <option value="5000000">5,000,000</option>
            </select>
            <ChevronDown size={14} />
          </div>
        </div>
      </div>

      <button className="hero-search-btn flex items-center gap-2" onClick={handleSearch}>
        Search Properties
      </button>
    </div>
  );
}
