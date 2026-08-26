import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, MoveRight } from "lucide-react";

const projectImage =
  "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-marriott-case-study/hero-weligama-bay-marriott-view-for-balcony.webp";

const deliveryComparison = [
  ["Reduced contractor mark-ups", "Greater management responsibility"],
  ["Direct access to labour", "More contractor interfaces"],
  ["Faster site decisions", "Increased reliance on the core team"],
  ["Direct material purchasing", "Greater procurement workload"],
  ["Detailed cost visibility", "Less transfer of delivery risk"],
];

const dailyControls = ["Review", "Decide", "Assign", "Verify"];

const structuralOutcomes = [
  "Column-free ballroom",
  "Larger uninterrupted floorplates",
  "Improved ceiling heights",
  "Clearer ocean views",
  "More flexible public spaces",
  "Better integration of building services",
];

const designProgression = [
  "Early concept",
  "Courtyard proposal",
  "Full Marriott Resort",
];

const constructionChanges = [
  "Remodelling the front of the building",
  "Enlarging restaurants and kitchens",
  "Revising the ballroom structure",
  "Adjusting floor-to-ceiling dimensions",
  "Expanding back-of-house accommodation",
  "Relocating spa and fitness functions",
  "Revising guest and service circulation",
  "Incorporating more extensive operator standards",
];

const infrastructure = [
  ["Sewage treatment", "Private treatment plant on additional land"],
  ["Water treatment", "On-site treatment and testing systems"],
  ["Primary electricity", "New supply connection from the Galle area"],
  ["Backup electricity", "Two 750 kW generators"],
  ["Utility distribution", "Dedicated service floor and central controls"],
  ["Railway crossing", "Eight utility pipes installed beneath the railway"],
];

const tradePackages = [
  "Structure",
  "Mechanical",
  "Electrical",
  "Plumbing",
  "Façade",
  "Interiors",
  "Kitchens",
  "Landscape",
];

const coordinationControls = [
  "Daily site walks",
  "Area-by-area task lists",
  "Photographic issue reporting",
  "Direct contractor communication",
  "Rapid core-team decisions",
  "Regular Marriott design reviews",
  "Mock-ups and approved physical references",
];

const informationControls = [
  "Controlled drawing register",
  "Clear revision numbering",
  "Formal distribution records",
  "Coordinated architectural and services drawings",
  "Defined approval authority",
  "Immediate withdrawal of superseded information",
];

const procurementSteps = [
  "Design",
  "Approval",
  "Manufacture",
  "Shipping",
  "Customs",
  "Storage",
  "Installation",
];

const procuredItems = [
  "Stone and sanitaryware",
  "Joinery and decorative screens",
  "Guest room furniture",
  "Televisions and technology",
  "Commercial kitchen equipment",
  "Lighting and electrical components",
  "Mechanical systems",
  "Restaurant equipment and operating supplies",
];

const costPressures = [
  "Design revision",
  "Contractor remobilisation",
  "Late procurement",
  "Extended preliminaries",
  "Additional infrastructure",
  "Financing and interest during delay",
  "A materially larger hotel than originally conceived",
];

const qualityStandards = [
  "Dimensions and alignment",
  "Stone and flooring",
  "Joinery",
  "Sanitaryware",
  "Lighting",
  "Furniture",
  "Technology",
  "Decorative details and final finishing",
];

const qualityCriteria = [
  "Structure",
  "Safety",
  "Operation",
  "Durability",
  "Guest impact",
  "Commercial relevance",
];

const transitionRows = [
  ["Build the rooms", "Test every room"],
  ["Install the kitchen", "Operate the kitchen"],
  ["Connect the systems", "Test systems under load"],
  ["Complete public areas", "Run guest journeys"],
  ["Resolve visible defects", "Identify operational failures"],
  ["Finish the asset", "Prepare the hotel to trade"],
];

const commissioningChecks = [
  "Water pressure and hot-water response",
  "Shower falls and drainage",
  "Electrical systems and guest room safety",
  "Furniture and fittings",
  "Internet connectivity",
  "Elevators",
  "Kitchens and food service",
  "Housekeeping and staff circulation",
  "Water quality",
  "Emergency systems",
];

const constructionLessons = [
  [
    "Fix the operator brief before mobilisation",
    "Late brand and area-programme changes caused redesign, remobilisation and delay.",
  ],
  [
    "Use a coordinated services structure",
    "Separate mechanical, electrical and plumbing contractors created avoidable interface risk.",
  ],
  [
    "Maintain permanent site leadership",
    "Immediate access to decision-makers prevented routine issues from becoming extended delays.",
  ],
  [
    "Control drawing revisions formally",
    "Fast communication is valuable, but every contractor must use the same approved information.",
  ],
  [
    "Procure against the programme",
    "Long-lead items must be designed, approved and ordered before the installation area is ready.",
  ],
  [
    "Build mock-ups early",
    "Physical reference standards improve consistency and reduce interpretation across repeated units.",
  ],
  [
    "Commission the hotel as an operating system",
    "Completion requires testing people, equipment and services together, not merely finishing construction.",
  ],
];

function ConstructionHeading({ number, label, title }) {
  return (
    <div className="construction-section-heading">
      <p className="eyebrow eyebrow-dark">
        {number} / {label}
      </p>
      <h2>{title}</h2>
    </div>
  );
}

function ConstructionPage() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    const previousDescription = description?.getAttribute("content");
    const previousCanonical = canonical?.getAttribute("href");

    document.title = "Construction | Weligama Bay Marriott Development Record";
    description?.setAttribute(
      "content",
      "The direct-control delivery, specialist coordination, infrastructure, procurement and commissioning of the 198-key Weligama resort.",
    );
    canonical?.setAttribute("href", "https://marriott.viji.com/construction");

    return () => {
      document.title = previousTitle;
      if (previousDescription)
        description?.setAttribute("content", previousDescription);
      if (previousCanonical) canonical?.setAttribute("href", previousCanonical);
    };
  }, []);

  return (
    <main className="construction-page">
      <section className="construction-hero">
        <img
          className="construction-hero-image"
          src={projectImage}
          alt="The completed Weligama resort viewed along the bay"
          fetchPriority="high"
        />
        <div className="page-width construction-hero-content">
          <p className="eyebrow">05 — CONSTRUCTION</p>
          <h1>Delivery required continuous control on site.</h1>
          <div className="construction-hero-copy">
            <p>
              The project was delivered through a hands-on construction model
              rather than a conventional single-main-contractor structure.
            </p>
            <p>
              Structural work used an internal construction capability, while
              specialist contractors delivered building services, façade,
              interiors, kitchens, landscape and supporting infrastructure.
              Daily site leadership coordinated the programme and kept decisions
              moving.
            </p>
          </div>
        </div>
        <div className="construction-signals">
          <div className="page-width">
            <span>198 keys</span>
            <span>Approximately six years on site</span>
            <span>Multiple specialist trades</span>
            <span>International operator standards</span>
          </div>
        </div>
      </section>

      <section className="construction-section page-width">
        <ConstructionHeading
          number="01"
          label="THE DELIVERY MODEL"
          title="The project retained direct control of construction."
        />
        <div className="construction-section-copy">
          <p>
            Structural works were undertaken directly rather than through a main
            contractor managing the complete build. Permanent staff and
            specialist subcontractors supported an internal construction
            capability.
          </p>
          <p>
            The model reduced layers of contractor margin and provided direct
            control over labour, materials and sequencing, while transferring
            coordination, programme and problem-solving responsibility to the
            project.
          </p>
          <div className="construction-delivery-table">
            <div className="construction-table-head">
              <span>Direct-control advantage</span>
              <span>Delivery consequence</span>
            </div>
            {deliveryComparison.map(([advantage, consequence]) => (
              <div key={advantage}>
                <strong>{advantage}</strong>
                <p>{consequence}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="construction-leadership">
        <div className="page-width construction-leadership-grid">
          <div>
            <ConstructionHeading
              number="02"
              label="PERMANENT SITE LEADERSHIP"
              title="The development was managed from Weligama."
            />
            <p>
              The distance from Colombo made occasional site visits impractical.
              Senior project leadership therefore relocated to Weligama and
              maintained a continuous presence through the main construction
              period.
            </p>
            <p>
              A small core team retained detailed knowledge of the complete
              development, allowing issues to be assessed in the context of the
              wider project rather than as isolated packages.
            </p>
          </div>
          <div className="construction-control-cycle">
            <p className="eyebrow">DAILY CONTROL</p>
            {dailyControls.map((step, index) => (
              <div key={step}>
                <span>0{index + 1}</span>
                <strong>{step}</strong>
                {index < dailyControls.length - 1 && <ArrowRight size={17} />}
              </div>
            ))}
            <ul>
              <li>Progress by area</li>
              <li>Design and construction queries</li>
              <li>Material availability</li>
              <li>Workmanship and defects</li>
              <li>Expenditure and material use</li>
              <li>Dependencies between trades</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="construction-structure page-width">
        <ConstructionHeading
          number="03"
          label="FROM FOUNDATIONS TO STRUCTURE"
          title="The building began as a direct-build operation."
        />
        <div className="construction-structure-grid">
          <div>
            <p>
              Early works included site clearance, relocation of viable palm
              trees and phased foundation pours under direct project-team
              supervision.
            </p>
            <p>
              As the design evolved, post-tensioned floor slabs reduced columns
              and beams in important public areas. The structural frame became
              the platform for a materially more complex hotel than the original
              concept.
            </p>
          </div>
          <div className="construction-outcomes">
            {structuralOutcomes.map((item, index) => (
              <span key={item}>
                <b>0{index + 1}</b>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="construction-change">
        <div className="page-width">
          <ConstructionHeading
            number="04"
            label="BUILDING THROUGH DESIGN CHANGE"
            title="Construction began before the final brief was fixed."
          />
          <div className="construction-progression">
            {designProgression.map((stage, index) => (
              <div key={stage}>
                <span>0{index + 1}</span>
                <strong>{stage}</strong>
                {index < designProgression.length - 1 && (
                  <MoveRight size={18} />
                )}
              </div>
            ))}
          </div>
          <div className="construction-change-grid">
            <div className="construction-change-list">
              {constructionChanges.map((item, index) => (
                <div key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div>
              <p>
                The move from the original concept through a Courtyard proposal
                and ultimately to a full Marriott Resort required material
                changes while early works were underway.
              </p>
              <p>
                Some contractors had to be remobilised and completed work
                reconsidered.
              </p>
              <p className="construction-delay">
                The source record attributes at least one year of delay to late
                design and operator changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="construction-infrastructure page-width">
        <ConstructionHeading
          number="05"
          label="INFRASTRUCTURE BEYOND THE BUILDING"
          title="The resort required infrastructure that did not exist locally."
        />
        <div className="construction-infrastructure-table">
          {infrastructure.map(([system, response], index) => (
            <article key={system}>
              <span>0{index + 1}</span>
              <h3>{system}</h3>
              <p>{response}</p>
            </article>
          ))}
        </div>
        <figure className="construction-utility-diagram">
          <div className="utility-hotel">
            <span>01</span>
            <strong>Hotel site</strong>
            <small>Guest rooms and public areas</small>
          </div>
          <div className="utility-crossing">
            <span>A2 ROAD</span>
            <span className="utility-rail-line" />
            <span>ACTIVE RAILWAY</span>
            <b>8 UTILITY PIPES</b>
          </div>
          <div className="utility-site">
            <span>02</span>
            <strong>Utility site</strong>
            <small>Treatment plant and generators</small>
          </div>
          <figcaption>Diagrammatic — not to scale</figcaption>
        </figure>
        <p className="construction-infrastructure-note">
          Treatment and generator facilities occupied additional land across the
          road and railway. Horizontal boring installed eight steel pipes
          beneath the active railway without interrupting operations.
        </p>
      </section>

      <section className="construction-trades">
        <div className="page-width">
          <ConstructionHeading
            number="06"
            label="COORDINATING SPECIALIST TRADES"
            title="Interfaces became the principal management risk."
          />
          <p className="construction-trades-intro">
            Separate specialist packages created frequent dependencies. A delay
            by one contractor could prevent several others from accessing or
            completing an area.
          </p>
          <div className="construction-trade-grid">
            {tradePackages.map((trade, index) => (
              <span key={trade}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                {trade}
              </span>
            ))}
          </div>
          <div className="construction-coordination">
            {coordinationControls.map((item) => (
              <span key={item}>
                <Check size={14} strokeWidth={1.5} />
                {item}
              </span>
            ))}
          </div>
          <p className="construction-trades-note">
            Daily coordination kept decisions moving, but the absence of a
            single building-services contractor made interface management more
            difficult.
          </p>
        </div>
      </section>

      <section className="construction-information page-width">
        <ConstructionHeading
          number="07"
          label="CONTROLLING INFORMATION"
          title="Current drawings were as important as physical progress."
        />
        <div className="construction-information-grid">
          <div>
            <p>
              Continuous design change created a risk that separate trades would
              construct against incompatible drawing revisions. Minor
              dimensional discrepancies could then affect finishes, services and
              adjoining packages.
            </p>
            <p className="construction-emphasis">
              Informal communication resolved daily defects, but could not
              replace disciplined design-information control.
            </p>
          </div>
          <div className="construction-control-list">
            {informationControls.map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="construction-procurement">
        <div className="page-width">
          <ConstructionHeading
            number="08"
            label="PROCUREMENT AS PART OF CONSTRUCTION"
            title="Delivery depended on sourcing well before installation."
          />
          <p className="construction-procurement-intro">
            Materials and systems unavailable locally at the required quantity,
            specification or cost required international sourcing and Marriott
            approval.
          </p>
          <div className="construction-procurement-flow">
            {procurementSteps.map((step, index) => (
              <div key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
                {index < procurementSteps.length - 1 && (
                  <ArrowRight size={15} />
                )}
              </div>
            ))}
          </div>
          <div className="construction-procured-items">
            {procuredItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="construction-section page-width construction-cost">
        <ConstructionHeading
          number="09"
          label="MANAGING COST AND TIME"
          title="Delay became a direct capital cost."
        />
        <div className="construction-section-copy">
          <p>
            The initial estimate increased as room count, operator standards,
            infrastructure and programme expanded. Pressure came from cumulative
            delivery effects rather than uncontrolled decorative expenditure.
          </p>
          <div className="construction-cost-list">
            {costPressures.map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <p className="construction-emphasis">
            Construction and financing had to be managed together. Physical
            progress made the asset easier for lenders and investors to evaluate
            as completion approached.
          </p>
        </div>
      </section>

      <section className="construction-quality">
        <div className="page-width construction-quality-grid">
          <div>
            <ConstructionHeading
              number="10"
              label="QUALITY CONTROL"
              title="Repetition required a physical standard."
            />
            <p>
              The approved guest room mock-up became the principal
              quality-control reference. Contractors could inspect a completed
              room rather than interpret drawings and specifications
              independently.
            </p>
            <div className="construction-quality-criteria">
              {qualityCriteria.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="construction-quality-list">
            <p className="eyebrow">REFERENCE STANDARD</p>
            {qualityStandards.map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="construction-transition page-width">
        <ConstructionHeading
          number="11"
          label="APPROACHING COMPLETION"
          title="Construction gradually became hotel operation."
        />
        <div className="construction-transition-intro">
          <p>
            As physical completion approached, Marriott’s operational team
            became increasingly involved. Kitchen review and procurement
            expanded from construction materials to operating equipment, linen
            and guest supplies.
          </p>
          <p>
            The building could not be considered complete merely because visible
            work had finished. It needed to operate consistently under realistic
            conditions.
          </p>
        </div>
        <div className="construction-transition-table">
          <div className="construction-table-head">
            <span>Construction phase</span>
            <span>Pre-opening phase</span>
          </div>
          {transitionRows.map(([construction, operation]) => (
            <div key={construction}>
              <strong>{construction}</strong>
              <ArrowRight size={15} />
              <p>{operation}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="construction-commissioning">
        <div className="page-width construction-commissioning-grid">
          <div>
            <ConstructionHeading
              number="12"
              label="TESTING AND COMMISSIONING"
              title="The final test was occupancy without paying guests."
            />
            <p>
              Marriott personnel occupied and tested guest rooms over an
              intensive commissioning period. The process exposed issues not
              apparent during normal construction testing.
            </p>
          </div>
          <div>
            <div className="construction-commissioning-list">
              {commissioningChecks.map((item) => (
                <span key={item}>
                  <Check size={14} strokeWidth={1.5} />
                  {item}
                </span>
              ))}
            </div>
            <div className="construction-issues">
              <article>
                <span>01</span>
                <h3>Electrical load</h3>
                <p>
                  Guest elevators produced electrical trips when operated under
                  load.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Monsoon drainage</h3>
                <p>
                  Heavy rain revealed external drainage deficiencies near the
                  all-day restaurant and children’s facilities.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="construction-lessons page-width">
        <ConstructionHeading
          number="13"
          label="CONSTRUCTION LESSONS"
          title="What the delivery process established."
        />
        <div className="construction-lessons-list">
          {constructionLessons.map(([title, copy], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="construction-close">
        <div className="page-width construction-close-grid">
          <div>
            <p className="eyebrow eyebrow-dark">THE NEXT STAGE</p>
            <h2>
              Construction delivered the asset. Commissioning prepared it to
              trade.
            </h2>
          </div>
          <div>
            <p>
              The completed resort combined 198 guest rooms, multiple food and
              beverage venues, banqueting, recreation, extensive back-of-house
              facilities and privately developed utility infrastructure.
            </p>
            <p>
              The next stage was to recruit the operating team, complete
              Marriott’s pre-opening process and establish the hotel in the
              market.
            </p>
            <Link className="construction-next" to="/operations">
              <span>Next chapter</span>
              <strong>Opening and Operations</strong>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ConstructionPage;
