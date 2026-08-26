import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, MapPin } from "lucide-react";

const observations = [
  "Tourism growth followed the end of the conflict.",
  "Existing hotel inventory was ageing and operationally inefficient.",
  "Guest expectations had moved beyond much of the available product.",
  "International operators were assessing Sri Lanka but had limited representation.",
  "The leisure market remained strongly oriented towards coastal destinations.",
];

const productComparison = [
  {
    label: "Existing asset",
    items: [
      "Structural constraints",
      "Inefficient layouts",
      "Ageing infrastructure",
      "Limited repositioning potential",
    ],
  },
  {
    label: "Greenfield development",
    items: [
      "Control over room sizes",
      "Efficient guest and service circulation",
      "Modern building systems",
      "International brand compliance",
      "Greater long-term adaptability",
    ],
  },
];

const siteCriteria = [
  [
    "Direct beachfront",
    "The ocean needed to form part of the core guest experience.",
  ],
  [
    "Uninterrupted views",
    "The site had to support sea views from every guest room.",
  ],
  [
    "Sufficient frontage",
    "Wide frontage was required for a single-loaded room configuration.",
  ],
  [
    "Development capacity",
    "The land needed to accommodate rooms, public areas, recreation and servicing.",
  ],
  [
    "Accessible beach",
    "Visual appeal alone was insufficient without practical access to the water.",
  ],
  [
    "Improving connectivity",
    "Travel time from Colombo needed a credible path to improvement.",
  ],
  [
    "Freehold ownership",
    "Control of the land was important for financing and long-term value.",
  ],
  [
    "Expansion potential",
    "The site needed to support a project larger than the original boutique concept.",
  ],
];

const convictions = [
  "Sri Lanka’s tourism recovery would continue.",
  "The south coast would benefit from improving infrastructure and international demand.",
  "A suitably designed resort could attract a global operator once the development case was presented.",
];

const scaleEvolution = [
  ["50–60", "rooms", "Initial boutique resort concept"],
  ["145", "rooms", "Expanded branded-hotel feasibility"],
  ["198", "rooms", "Final development scale"],
];

function SectionHeading({ number, label, title }) {
  return (
    <div className="opportunity-section-heading">
      <p className="eyebrow eyebrow-dark">
        {number} / {label}
      </p>
      <h2>{title}</h2>
    </div>
  );
}

function OpportunityPage() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    const previousDescription = description?.getAttribute("content");
    const previousCanonical = canonical?.getAttribute("href");

    document.title =
      "The Opportunity | Weligama Bay Marriott Development Record";
    description?.setAttribute(
      "content",
      "The market, product and site thesis behind the Weligama Bay Marriott development before land acquisition, brand agreement and final design.",
    );
    canonical?.setAttribute("href", "https://marriott.viji.com/opportunity");

    return () => {
      document.title = previousTitle;
      if (previousDescription) {
        description?.setAttribute("content", previousDescription);
      }
      if (previousCanonical) {
        canonical?.setAttribute("href", previousCanonical);
      }
    };
  }, []);

  return (
    <main className="opportunity-page">
      <section className="opportunity-hero">
        <div className="opportunity-hero-image" aria-hidden="true" />
        <div className="page-width opportunity-hero-content">
          <p className="eyebrow">02 — THE OPPORTUNITY</p>
          <h1>A market growing faster than its hotel supply.</h1>
          <div className="opportunity-hero-copy">
            <p>
              Following the end of Sri Lanka’s civil war in 2009, international
              tourism began to recover rapidly. Demand was increasing, room
              rates were strengthening and much of the country’s existing hotel
              inventory was dated.
            </p>
            <p>
              The opportunity was to develop a new, internationally branded
              resort capable of meeting changing guest expectations, and to do
              so outside the established Colombo hotel market.
            </p>
          </div>
        </div>
        <div className="opportunity-signals">
          <div className="page-width">
            <span>Post-war tourism growth</span>
            <span>Outdated supply</span>
            <span>Limited international brands</span>
            <span>Undeveloped beachfront locations</span>
          </div>
        </div>
      </section>

      <section className="opportunity-section page-width opportunity-market">
        <SectionHeading
          number="01"
          label="THE MARKET RESET"
          title="Sri Lanka entered a new tourism cycle."
        />
        <div className="opportunity-section-copy">
          <p>
            The end of the civil war materially changed the country’s investment
            outlook. Airlines increased capacity, visitor demand grew and
            established hotels began achieving stronger occupancy and room
            rates.
          </p>
          <p>
            Supply had not yet adjusted. Much of the available inventory had
            been developed decades earlier, while leading international hotel
            groups remained cautious about committing to projects outside
            Colombo.
          </p>
          <p className="opportunity-lead">
            This created a temporary imbalance: demand was accelerating faster
            than credible, internationally positioned hotel supply could be
            delivered.
          </p>
          <div className="opportunity-observations">
            <h3>Key observations</h3>
            <ul>
              {observations.map((observation) => (
                <li key={observation}>
                  <Check size={15} strokeWidth={1.5} />
                  <span>{observation}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="opportunity-product">
        <div className="page-width">
          <SectionHeading
            number="02"
            label="THE PRODUCT GAP"
            title="Renovating the past or building for the next cycle."
          />
          <div className="opportunity-product-intro">
            <p>
              The initial question was whether to acquire and reposition an
              existing hotel or develop a new asset.
            </p>
            <p>
              Existing properties carried structural limitations: smaller rooms,
              inefficient layouts, ageing infrastructure and design standards
              that were difficult to correct through refurbishment alone.
              Renovation could require substantial capital without producing a
              genuinely competitive product.
            </p>
          </div>
          <div className="opportunity-comparison">
            {productComparison.map(({ label, items }, index) => (
              <article key={label}>
                <span>0{index + 1}</span>
                <h3>{label}</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="opportunity-conclusion">
            The development thesis therefore moved towards a purpose-built,
            five-star resort rather than the acquisition of an existing hotel.
          </p>
        </div>
      </section>

      <section className="opportunity-section page-width opportunity-coast">
        <SectionHeading
          number="03"
          label="WHY THE SOUTH COAST"
          title="A leisure destination with room to develop."
        />
        <div className="opportunity-section-copy">
          <p>
            The search focused on Sri Lanka’s coastline. The market was
            predominantly leisure-led, with many international visitors
            combining cultural travel with a coastal stay.
          </p>
          <p>
            The south coast offered several advantages: established natural
            appeal, proximity to Galle, improving road access from Colombo and
            the potential to serve both international leisure demand and
            domestic travel.
          </p>
          <p className="opportunity-lead">
            The objective was not simply to find beachfront land. The site
            needed to support a resort of sufficient quality and scale to become
            a rate leader within its market.
          </p>
        </div>
      </section>

      <section className="opportunity-criteria">
        <div className="page-width">
          <SectionHeading
            number="04"
            label="SITE CRITERIA"
            title="What the development required."
          />
          <div className="opportunity-criteria-list">
            {siteCriteria.map(([criterion, rationale], index) => (
              <article key={criterion}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{criterion}</h3>
                <p>{rationale}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="opportunity-weligama page-width">
        <div className="opportunity-location-mark" aria-hidden="true">
          <MapPin size={28} strokeWidth={1.2} />
          <span>5°58′N / 80°26′E</span>
        </div>
        <SectionHeading
          number="05"
          label="WHY WELIGAMA"
          title="A location ahead of institutional hospitality investment."
        />
        <div className="opportunity-weligama-copy">
          <p>
            Weligama combined a broad bay, an accessible beach and sufficient
            development potential for a substantial resort. It was close enough
            to Galle to participate in the south coast tourism circuit, while
            remaining comparatively undeveloped.
          </p>
          <p>
            The principal concern was its distance from Colombo. The developing
            southern highway provided a credible answer to that constraint and
            materially improved the long-term accessibility case.
          </p>
          <p>
            At the time, Weligama was not an established institutional hotel
            market. The opportunity was to secure a strong beachfront position
            before international hotel development and land values fully
            reflected the area’s potential, without assuming that future growth
            was guaranteed.
          </p>
        </div>
      </section>

      <section className="opportunity-decision">
        <div className="page-width opportunity-decision-grid">
          <div>
            <p className="eyebrow">06 / THE EARLY INVESTMENT DECISION</p>
            <h2>The land came before the brand.</h2>
            <p className="opportunity-decision-lead">
              The beachfront site was acquired before any commitment from an
              international operator.
            </p>
            <p>
              This reversed the conventional sequence in which a developer first
              obtains preliminary brand interest and then completes the land
              acquisition. It introduced risk, but it also preserved control
              over a site considered difficult to replicate.
            </p>
          </div>
          <div className="opportunity-convictions">
            <p className="eyebrow">THREE CONVICTIONS</p>
            {convictions.map((conviction, index) => (
              <article key={conviction}>
                <span>0{index + 1}</span>
                <p>{conviction}</p>
              </article>
            ))}
            <p className="opportunity-brand-note">
              Marriott International was approached later. Brand negotiations
              lasted approximately twelve months and ultimately resulted in a
              full Marriott Resort positioning.
            </p>
          </div>
        </div>
      </section>

      <section className="opportunity-scale page-width">
        <SectionHeading
          number="07"
          label="FROM THESIS TO ASSET"
          title="The opportunity was refined through feasibility."
        />
        <p className="opportunity-scale-intro">
          The original concept was a boutique resort of approximately 50–60
          rooms. As feasibility, operating efficiency and the potential value of
          the site were examined, the project increased in scale.
        </p>
        <div className="opportunity-scale-timeline">
          {scaleEvolution.map(([value, unit, description]) => (
            <article key={value}>
              <div className="opportunity-scale-value">
                <strong>{value}</strong>
                <span>{unit}</span>
              </div>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <p className="opportunity-conclusion">
          The final configuration reflected the requirements of the site, brand
          standards, operating economies and the asset’s potential institutional
          value.
        </p>
      </section>

      <section className="opportunity-close">
        <div className="page-width opportunity-close-grid">
          <div>
            <p className="eyebrow eyebrow-dark">THE NEXT TEST</p>
            <h2>What had to be proven.</h2>
          </div>
          <div>
            <p>
              The opportunity was visible, but it was not yet de-risked. The
              next stage required control of the land, a viable planning
              strategy, an international operator, an investable financial
              structure and a product capable of justifying its scale.
            </p>
            <p>Those questions shaped the origination phase that followed.</p>
            <Link className="opportunity-next" to="/development">
              <span>Next chapter</span>
              <strong>Origination</strong>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default OpportunityPage;
