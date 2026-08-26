import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MoveRight } from "lucide-react";

const projectImage =
  "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-marriott-case-study/hero-weligama-bay-marriott-view-for-balcony.webp";

const designPriorities = [
  ["Preserve the ocean view", "Every guest room was oriented towards the bay."],
  ["Create a clear arrival", "The lobby opened directly towards the sea."],
  [
    "Support efficient operation",
    "Guest, staff, goods and service circulation were planned separately.",
  ],
  [
    "Accommodate a full resort programme",
    "Rooms, dining, recreation, banqueting and back-of-house functions were integrated.",
  ],
  [
    "Remain adaptable",
    "Structural decisions avoided unnecessary long-term constraints.",
  ],
];

const operatorChanges = [
  "Principal arrival elevation",
  "Restaurant and kitchen capacity",
  "Ballroom structure and column positions",
  "Floor-to-ceiling dimensions",
  "Guest and service circulation",
  "Back-of-house accommodation",
  "Health, safety and fire requirements",
  "Spa, gym and recreation planning",
];

const flowGroups = [
  ["Guests", "Arrival, public areas, rooms, recreation and dining"],
  ["Staff", "Service access, changing, circulation and work areas"],
  [
    "Goods and services",
    "Loading, storage, preparation, distribution and waste",
  ],
];

const flowImplications = [
  "Service entrances and loading",
  "Food storage and preparation areas",
  "Main and satellite kitchens",
  "Guest and service elevators",
  "Housekeeping and linen facilities",
  "Waste removal",
  "Staff circulation",
  "Engineering and maintenance access",
];

const structuralOutcomes = [
  "Column-free ballroom",
  "Larger public spaces",
  "Cleaner ceiling lines",
  "Improved floor-to-ceiling dimensions",
  "Less obstruction of the ocean view",
  "Greater flexibility in planning services",
];

const roomStandards = [
  [
    "The view",
    "Floor-to-ceiling glazing and the balcony maintained the visual connection with the bay.",
  ],
  [
    "The sense of space",
    "Sliding partitions allowed the bathroom and sleeping areas to become one continuous room or separate for privacy.",
  ],
  [
    "The operating standard",
    "The mock-up established the benchmark for joinery, sanitaryware, lighting, technology and finishes.",
  ],
];

const interiorDetails = [
  "Timber screens and patterned joinery",
  "Natural stone and hardwood",
  "Lathed columns informed by local colour",
  "Plantation-style screens",
  "Textiles, objects and decorative details",
  "A material palette designed to sit behind the ocean view",
];

const lobbyFunctions = [
  "Reception and check-out",
  "Concierge services",
  "Luggage handling",
  "Guest waiting and seating",
  "Access to elevators",
  "Connections to restaurants and bars",
  "Fire, security, ventilation and electrical systems",
];

const venues = [
  [
    "Weligama Kitchen",
    "High-capacity all-day dining with indoor and outdoor seating.",
  ],
  [
    "Big Fish",
    "A more intimate seafood restaurant with a darker maritime material palette.",
  ],
  ["Tides", "A lobby-level bar divided into active and quieter seating zones."],
  [
    "Pool and beach service",
    "Informal food and beverage provision connected to outdoor recreation.",
  ],
];

const landscapeElements = [
  "Pool and deck planning",
  "Direct visual connection to the beach",
  "Outdoor dining and seating",
  "Family recreation",
  "Retention and relocation of existing palms",
  "Introduction of mature planting",
  "Integration of the built form into the beachfront setting",
];

const valueProcess = [
  "Design intent",
  "Alternative sourcing",
  "Prototype or sample",
  "Marriott approval",
  "Implementation",
];

const designLessons = [
  [
    "Appoint the operator before fixing the design",
    "Late operator involvement required completed work to be reconsidered and contributed to delay.",
  ],
  [
    "Complete the area programme first",
    "Room counts, public areas, kitchens, servicing and back-of-house requirements should be resolved before design advances.",
  ],
  [
    "Design from operations outward",
    "Guest experience depends on service routes, preparation areas, storage and engineering systems that remain largely unseen.",
  ],
  [
    "Use full-scale mock-ups",
    "A completed reference room is more effective than drawings alone in controlling quality across repeated units.",
  ],
  [
    "Protect the defining proposition",
    "The sea-facing room configuration and arrival view remained intact through changes in scale, brand and specification.",
  ],
  [
    "Evaluate cost through value",
    "Higher material expenditure is justified only where it improves durability, operation, positioning or revenue potential.",
  ],
];

function DesignHeading({ number, label, title }) {
  return (
    <div className="design-section-heading">
      <p className="eyebrow eyebrow-dark">
        {number} / {label}
      </p>
      <h2>{title}</h2>
    </div>
  );
}

function DesignPage() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    const previousDescription = description?.getAttribute("content");
    const previousCanonical = canonical?.getAttribute("href");

    document.title = "Design | Weligama Bay Marriott Development Record";
    description?.setAttribute(
      "content",
      "How the bay, constrained site, Marriott standards and operating requirements shaped the design of the 198-key Weligama Bay resort.",
    );
    canonical?.setAttribute("href", "https://marriott.viji.com/design");

    return () => {
      document.title = previousTitle;
      if (previousDescription)
        description?.setAttribute("content", previousDescription);
      if (previousCanonical) canonical?.setAttribute("href", previousCanonical);
    };
  }, []);

  return (
    <main className="design-page">
      <section className="design-hero">
        <img
          className="design-hero-image"
          src={projectImage}
          alt="The completed Weligama resort extending along the edge of the bay"
          fetchPriority="high"
        />
        <div className="page-width design-hero-content">
          <p className="eyebrow">04 — DESIGN</p>
          <h1>The building was designed around the bay.</h1>
          <div className="design-hero-copy">
            <p>
              The central design decision was established before the operator or
              final room programme: every guest room would face the Indian
              Ocean.
            </p>
            <p>
              Delivering that proposition on a constrained beachfront site
              required a vertical building, single-loaded guest room corridors
              and carefully planned public areas. Architecture, interiors,
              engineering and landscape developed around that relationship with
              Weligama Bay.
            </p>
          </div>
        </div>
        <div className="design-signals">
          <div className="page-width">
            <span>198 sea-facing guest rooms</span>
            <span>Single-loaded configuration</span>
            <span>Triple-height lobby</span>
            <span>International design standards</span>
          </div>
        </div>
      </section>

      <section className="design-section page-width">
        <DesignHeading
          number="01"
          label="THE DESIGN BRIEF"
          title="Design had to support both experience and operation."
        />
        <div className="design-section-copy">
          <p>
            The project was conceived as a purpose-built five-star resort rather
            than a building subsequently adapted for hotel use.
          </p>
          <div className="design-priority-table">
            {designPriorities.map(([priority, response], index) => (
              <article key={priority}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{priority}</h3>
                <p>{response}</p>
              </article>
            ))}
          </div>
          <p className="design-emphasis">
            The objective was not to maximise decorative expenditure. Capital
            was directed towards decisions capable of influencing room rates,
            operating efficiency and long-term competitiveness.
          </p>
        </div>
      </section>

      <section className="design-site">
        <div className="page-width design-site-grid">
          <DesignHeading
            number="02"
            label="RESPONDING TO THE SITE"
            title="Limited land required a vertical solution."
          />
          <div>
            <p>
              The early concept considered a low-rise resort of approximately
              50–60 rooms, potentially arranged as separate villas. The 3.1-acre
              beachfront site could not support that approach once the project
              increased in scale.
            </p>
            <p className="design-emphasis">
              The design therefore moved upwards.
            </p>
            <p>
              Height accommodated a substantially larger room programme while
              preserving the relationship between the building and the bay. It
              also created elevated views that a flat beachfront site could not
              otherwise provide. The result was more prominent than the original
              concept, but supported the project’s operating and investment
              objectives.
            </p>
          </div>
        </div>
      </section>

      <section className="design-ocean page-width">
        <DesignHeading
          number="03"
          label="EVERY ROOM FACING THE OCEAN"
          title="The least efficient option supported the strongest proposition."
        />
        <div className="design-ocean-intro">
          <p>
            A conventional hotel floor places rooms on both sides of a central
            corridor. This reduces the floorplate but produces different room
            categories and views.
          </p>
          <p>
            Weligama used a single-loaded arrangement: guest rooms occupied the
            ocean side, with circulation running behind them. The additional
            construction area was accepted because the view was central to the
            product’s market position.
          </p>
        </div>
        <div
          className="design-corridor-comparison"
          aria-label="Diagrammatic corridor comparison, not to scale"
        >
          <article>
            <h3>Conventional configuration</h3>
            <div className="design-corridor conventional" aria-hidden="true">
              <div className="room-row">MIXED ORIENTATION</div>
              <div className="hall">CORRIDOR</div>
              <div className="room-row">MIXED ORIENTATION</div>
            </div>
            <ul>
              <li>Rooms on both sides of a corridor</li>
              <li>Smaller overall floorplate</li>
              <li>Greater spatial efficiency</li>
            </ul>
          </article>
          <article>
            <h3>Weligama configuration</h3>
            <div className="design-corridor weligama" aria-hidden="true">
              <div className="sea-row">WELIGAMA BAY</div>
              <div className="room-row">ALL GUEST ROOMS FACE THE OCEAN</div>
              <div className="hall">CORRIDOR</div>
            </div>
            <ul>
              <li>Rooms on one side of the corridor</li>
              <li>Larger floorplate per guest room</li>
              <li>Consistent ocean orientation</li>
            </ul>
          </article>
          <small>Diagrammatic — not to scale</small>
        </div>
      </section>

      <section className="design-operator">
        <div className="page-width design-operator-grid">
          <div>
            <DesignHeading
              number="04"
              label="INTEGRATING THE OPERATOR"
              title="Marriott’s appointment materially changed the brief."
            />
            <p>
              Early architectural work began before an operator had been
              secured. Initial discussions with Marriott were based on a
              Courtyard positioning before the project moved to the full
              Marriott Resort brand.
            </p>
            <p>
              The higher finish and more comprehensive programme introduced the
              operating discipline required for an internationally managed
              resort. Some work had already commenced, so revised standards also
              produced redesign, remobilisation, delay and additional cost.
            </p>
          </div>
          <div className="design-change-list">
            <p className="eyebrow">ELEMENTS RECONSIDERED</p>
            {operatorChanges.map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="design-flow page-width">
        <DesignHeading
          number="05"
          label="DESIGNING FOR FLOW"
          title="The hotel was planned as an operating system."
        />
        <p className="design-flow-intro">
          Guest, staff, and goods and service routes had to connect where
          operationally necessary without allowing back-of-house activity to
          interfere with the guest experience.
        </p>
        <div className="design-flow-groups">
          {flowGroups.map(([group, detail], index) => (
            <article key={group}>
              <span>0{index + 1}</span>
              <h3>{group}</h3>
              <p>{detail}</p>
              {index < flowGroups.length - 1 && <MoveRight size={18} />}
            </article>
          ))}
        </div>
        <div className="design-implications">
          {flowImplications.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <p className="design-flow-note">
          Restaurant kitchens were significantly replanned following Marriott’s
          involvement. Separate preparation areas for meat, fish, vegetables and
          bakery operations were supported by dedicated storage, refrigeration,
          washing and extraction systems.
        </p>
      </section>

      <section className="design-structure">
        <div className="page-width design-structure-grid">
          <DesignHeading
            number="06"
            label="THE STRUCTURAL RESPONSE"
            title="Open spaces required changes below the finishes."
          />
          <div>
            <p>
              A post-tensioned structural solution reduced internal columns and
              beams across the ballroom and major public areas, where
              flexibility and clear sightlines were important.
            </p>
            <div className="design-outcomes">
              {structuralOutcomes.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <p>
              A dedicated service floor accommodated pipework, ducting,
              chilled-water systems and central controls. Major engineering
              functions remained separate from guest rooms and accessible for
              maintenance.
            </p>
          </div>
        </div>
      </section>

      <section className="design-rooms page-width">
        <DesignHeading
          number="07"
          label="THE GUEST ROOMS"
          title="One room became the control standard."
        />
        <div className="design-rooms-grid">
          <div>
            <p>
              A full-scale mock-up room used the actual guest room dimensions so
              layouts, materials, furniture and fittings could be tested before
              repetition across the hotel. Marriott’s review and approval made
              the completed room the reference standard for delivery.
            </p>
            <p>
              The benchmark reduced interpretation on site and improved
              consistency across the completed inventory.
            </p>
          </div>
          <div className="design-room-standards">
            {roomStandards.map(([title, copy], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="design-interiors">
        <div className="page-width design-interiors-grid">
          <div>
            <DesignHeading
              number="08"
              label="INTERIOR DESIGN"
              title="Local character was expressed through material and detail."
            />
            <p>
              Wilson Associates served as a key interior-design consultant
              within Marriott’s review and approval process. The project team
              coordinated room concepts, material selections and individual
              public spaces.
            </p>
            <p>
              Local references were restrained rather than literal or heavily
              themed.
            </p>
          </div>
          <div className="design-material-list">
            {interiorDetails.map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="design-arrival page-width">
        <DesignHeading
          number="09"
          label="THE ARRIVAL EXPERIENCE"
          title="The lobby framed the principal asset."
        />
        <div className="design-arrival-grid">
          <div>
            <p>
              The triple-height lobby used full-height columns to frame the
              ocean view. Muted internal lighting increased contrast with the
              exterior, while a dark stone floor reflected the horizon.
            </p>
            <p className="design-emphasis">
              A larger-than-standard lobby was retained as a project decision
              because the arrival experience supported the resort’s positioning.
            </p>
            <p>Visual impact had to coexist with continuous operational use.</p>
          </div>
          <div className="design-lobby-functions">
            {lobbyFunctions.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="design-venues">
        <div className="page-width">
          <DesignHeading
            number="10"
            label="FOOD AND BEVERAGE SPACES"
            title="Each venue was given a distinct operating role."
          />
          <div className="design-venue-table">
            {venues.map(([venue, role], index) => (
              <article key={venue}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{venue}</h3>
                <p>{role}</p>
              </article>
            ))}
          </div>
          <p className="design-venue-note">
            Venue planning considered circulation, service speed, dwell time and
            revenue alongside visual identity. Weligama Kitchen used clear
            buffet and live-cooking zones; Big Fish used a more enclosed
            material palette while retaining the ocean relationship.
          </p>
        </div>
      </section>

      <section className="design-landscape page-width">
        <DesignHeading
          number="11"
          label="LANDSCAPE AND EXTERNAL AREAS"
          title="The external programme completed the resort."
        />
        <div className="design-landscape-grid">
          <div>
            <p>
              Belt Collins served as a key landscape consultant. Pool, terraces,
              planting and beachfront areas formed part of the core guest
              programme rather than residual space around the building.
            </p>
            <p>
              Mature trees and plants were selected in advance for relocation as
              construction approached completion, allowing the landscape to
              appear established when the hotel opened.
            </p>
          </div>
          <div className="design-landscape-list">
            {landscapeElements.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="design-value">
        <div className="page-width">
          <DesignHeading
            number="12"
            label="VALUE ENGINEERING"
            title="Cost discipline was applied without abandoning the brief."
          />
          <div className="design-value-intro">
            <p>
              Materials and components were assessed by performance, appearance,
              durability and guest relevance. Alternatives to disproportionately
              expensive specifications were sourced and submitted to Marriott
              for approval.
            </p>
            <p>
              Patterned timber screens became the principal example. When
              specialist quotations proved uneconomic, the project acquired CNC
              equipment and manufactured the screens directly. Completed
              components were approved by Marriott.
            </p>
          </div>
          <div className="design-value-process">
            {valueProcess.map((step, index) => (
              <div key={step}>
                <span>0{index + 1}</span>
                <strong>{step}</strong>
                {index < valueProcess.length - 1 && <ArrowRight size={16} />}
              </div>
            ))}
          </div>
          <p className="design-safety-note">
            Fire, life-safety and essential operating standards were not treated
            as value-engineering opportunities.
          </p>
        </div>
      </section>

      <section className="design-lessons page-width">
        <DesignHeading
          number="13"
          label="DESIGN LESSONS"
          title="What the process established."
        />
        <div className="design-lessons-list">
          {designLessons.map(([title, copy], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="design-close">
        <div className="page-width design-close-grid">
          <div>
            <p className="eyebrow eyebrow-dark">THE NEXT STAGE</p>
            <h2>Design converted the site into an operating proposition.</h2>
          </div>
          <div>
            <p>
              The completed design brought together a constrained beachfront
              site, 198 sea-facing guest rooms, a full resort programme and the
              requirements of an international operator.
            </p>
            <p>
              The next challenge was to convert the coordinated design into a
              completed asset while managing approvals, procurement,
              contractors, financing and construction risk.
            </p>
            <Link className="design-next" to="/construction">
              <span>Next chapter</span>
              <strong>Delivery and Construction</strong>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DesignPage;
