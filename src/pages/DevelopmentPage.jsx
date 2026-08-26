import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, MapPin } from "lucide-react";

const projectImage =
  "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-marriott-case-study/hero-weligama-bay-marriott-view-for-balcony.webp";

const primaryCriteria = [
  ["Road frontage", "Clear access for guests, construction and servicing."],
  ["Sea frontage", "Direct connection to the resort’s principal amenity."],
  [
    "Uninterrupted views",
    "The ability to make the bay central to the guest experience.",
  ],
];

const searchChecks = [
  "Beach and swimming conditions",
  "Road access and arrival experience",
  "Views and orientation",
  "Available development area",
  "Surrounding buildings and infrastructure",
  "Electricity and water availability",
  "Potential operating season",
  "Ability to support a larger resort if the concept expanded",
];

const siteConstraints = [
  "It was not a headland site.",
  "The available beachfront parcel was limited.",
  "The area’s electricity supply could not support a large hotel.",
  "The southern highway remained under construction.",
  "A taller building would be visually prominent within a low-rise setting.",
];

const acquisitionFacts = [
  ["Beachfront land", "Approximately 3.1 acres"],
  ["Purchase price", "Approximately USD 1.5 million"],
  ["Completion date", "7 March 2011"],
  ["International operator", "Not yet appointed"],
  ["Initial concept", "Approximately 50–60 rooms"],
];

const utilityUses = [
  "Sewage treatment",
  "Backup generators",
  "Supporting utility infrastructure",
  "Functions that could not be accommodated appropriately on the beachfront site",
];

const scaleStages = [
  ["50–60", "rooms", "Initial boutique concept"],
  ["~100", "rooms", "Early expansion"],
  ["~200", "rooms", "Larger resort proposition"],
  ["198", "keys", "Final completed programme"],
];

const lessons = [
  [
    "Control the defining asset",
    "The land was secured before the project had been fully de-risked because the site itself was considered irreplaceable.",
  ],
  [
    "Test sites physically",
    "Maps and title records could not establish beach conditions, views, arrival experience or local ownership history.",
  ],
  [
    "Assess infrastructure early",
    "Sewage, electricity and backup generation materially affected the land requirement and capital plan.",
  ],
  [
    "Separate product ambition from feasibility",
    "The transition from a 50-room concept to a 198-key resort created value, but also increased complexity and made coordinated planning more important.",
  ],
  [
    "Preserve the central proposition",
    "The decision to give every guest room an ocean view survived changes in scale, design and operator requirements.",
  ],
];

function ChapterHeading({ number, label, title }) {
  return (
    <div className="development-section-heading">
      <p className="eyebrow eyebrow-dark">
        {number} / {label}
      </p>
      <h2>{title}</h2>
    </div>
  );
}

function DevelopmentPage() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    const previousDescription = description?.getAttribute("content");
    const previousCanonical = canonical?.getAttribute("href");

    document.title =
      "Development / Origination | Weligama Bay Marriott Development Record";
    description?.setAttribute(
      "content",
      "How the Weligama Bay Marriott market thesis became a controlled development site through coastal search, land assembly and acquisition.",
    );
    canonical?.setAttribute("href", "https://marriott.viji.com/development");

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
    <main className="development-page">
      <section className="development-hero">
        <img
          className="development-hero-image"
          src={projectImage}
          alt="Weligama Bay viewed from the beachfront development site"
          fetchPriority="high"
        />
        <div className="page-width development-hero-content">
          <p className="eyebrow">03 — DEVELOPMENT / ORIGINATION</p>
          <h1>From a market thesis to a controlled site.</h1>
          <div className="development-hero-copy">
            <p>
              The project began without an operator, an architect or a fixed
              room count. The first task was to identify a site capable of
              supporting an internationally positioned resort, and to secure it
              before the development proposition had been fully de-risked.
            </p>
            <p>
              The search covered approximately 70 locations around Sri Lanka’s
              coastline. Weligama emerged as the strongest combination of
              beachfront, views, accessibility and long-term development
              potential.
            </p>
          </div>
        </div>
        <div className="development-signals">
          <div className="page-width">
            <span>70 sites assessed</span>
            <span>3.1-acre beachfront assembled</span>
            <span>Acquired 7 March 2011</span>
            <span>Land secured before brand</span>
          </div>
        </div>
      </section>

      <section className="development-section page-width">
        <ChapterHeading
          number="01"
          label="DEFINING THE SEARCH"
          title="The site criteria came before the site."
        />
        <div className="development-section-copy">
          <p>
            The initial concept was a five-star beachfront resort of
            approximately 50–60 rooms. Both existing hotels and undeveloped land
            were considered, but the preference increasingly moved towards a
            greenfield development.
          </p>
          <div className="development-primary-criteria">
            {primaryCriteria.map(([requirement, significance], index) => (
              <article key={requirement}>
                <span>0{index + 1}</span>
                <h3>{requirement}</h3>
                <p>{significance}</p>
              </article>
            ))}
          </div>
          <p className="development-emphasis">
            A viable site also needed a usable beach, sufficient land,
            dependable utilities and a credible route to improved access from
            Colombo.
          </p>
        </div>
      </section>

      <section className="development-search">
        <div className="page-width development-search-grid">
          <div>
            <ChapterHeading
              number="02"
              label="THE SEARCH PROCESS"
              title="Approximately 70 coastal sites were assessed."
            />
            <p>
              The search began in Colombo and proceeded around Sri Lanka’s
              coastline. Sites were inspected physically rather than assessed
              from maps alone. Several promising locations were revisited two or
              three times; very few met the complete development brief.
            </p>
          </div>
          <div className="development-search-data">
            <div className="development-seventy">
              <strong>70</strong>
              <span>Locations assessed over several months</span>
            </div>
            <ul>
              {searchChecks.map((item) => (
                <li key={item}>
                  <Check size={14} strokeWidth={1.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="development-section page-width development-selection">
        <ChapterHeading
          number="03"
          label="SELECTING WELIGAMA"
          title="One location consistently survived the tests."
        />
        <div className="development-section-copy">
          <div className="development-location-label">
            <MapPin size={22} strokeWidth={1.3} />
            <span>Central Weligama Bay / A2 road and beach frontage</span>
          </div>
          <p>
            The site occupied a central position within Weligama Bay, with
            direct frontage to both the A2 road and the beach. The bay provided
            a broad, uninterrupted outlook, a gently shelving sandy beach and
            conditions suitable for beginner surfing.
          </p>
          <div className="development-constraints">
            <h3>Material constraints</h3>
            <ul>
              {siteConstraints.map((constraint) => (
                <li key={constraint}>{constraint}</li>
              ))}
            </ul>
          </div>
          <p>
            These issues appeared capable of being addressed through design,
            infrastructure investment and the anticipated improvement in road
            connectivity. The site was revisited five or six times before the
            acquisition recommendation was presented to Nahil Wijesuriya.
          </p>
        </div>
      </section>

      <section className="development-design">
        <div className="page-width">
          <ChapterHeading
            number="04"
            label="THE PRINCIPAL DESIGN RESPONSE"
            title="Limited frontage shaped the building."
          />
          <div className="development-design-intro">
            <p>
              The original preference had been for a low-rise resort distributed
              across a larger site. Weligama did not provide enough land for
              that approach at the scale under consideration. Building
              vertically became the practical response.
            </p>
            <p>
              Every guest room would face the ocean. The additional building
              area of a single-loaded configuration was accepted because the bay
              view was considered fundamental to the product and its future rate
              position.
            </p>
          </div>
          <div
            className="development-corridors"
            aria-label="Schematic comparison of corridor configurations"
          >
            <article>
              <div className="development-diagram-label">
                <span>01</span>
                <h3>Conventional double-loaded corridor</h3>
              </div>
              <div
                className="corridor-diagram corridor-double"
                aria-hidden="true"
              >
                <div className="corridor-rooms corridor-rooms-top" />
                <div className="corridor-path">CORRIDOR</div>
                <div className="corridor-rooms corridor-rooms-bottom" />
              </div>
              <p>Rooms face in two directions, reducing the area per key.</p>
            </article>
            <article>
              <div className="development-diagram-label">
                <span>02</span>
                <h3>Weligama single-loaded configuration</h3>
              </div>
              <div
                className="corridor-diagram corridor-single"
                aria-hidden="true"
              >
                <div className="corridor-sea">WELIGAMA BAY</div>
                <div className="corridor-rooms corridor-rooms-top" />
                <div className="corridor-path">CORRIDOR</div>
              </div>
              <p>Every room faces the bay, with service circulation behind.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="development-assembly page-width">
        <div>
          <ChapterHeading
            number="05"
            label="ASSEMBLING THE BEACHFRONT"
            title="The acquisition required three ownership interests."
          />
          <div className="development-assembly-copy">
            <p>
              The beachfront site was divided among three separate ownership
              groups. One was based in Sri Lanka; the others were located in
              London and Toronto.
            </p>
            <p>
              Land-title records were supplemented by local due diligence.
              Neighbours and community representatives were consulted to
              establish ownership history, boundaries and potential disputes.
            </p>
            <p>
              The central plot was acquired first because control of it
              materially reduced the standalone development value of the
              adjoining parcels and protected the overall assembly strategy.
            </p>
          </div>
        </div>
        <figure className="development-parcels">
          <div className="parcel parcel-west">
            <span>02</span>
            <strong>Adjoining parcel</strong>
          </div>
          <div className="parcel parcel-central">
            <span>01</span>
            <strong>Central parcel</strong>
            <small>Secured first</small>
          </div>
          <div className="parcel parcel-east">
            <span>03</span>
            <strong>Remaining parcel</strong>
          </div>
          <figcaption>
            Schematic acquisition sequence, not a surveyed site plan.
          </figcaption>
        </figure>
      </section>

      <section className="development-acquisition">
        <div className="page-width">
          <ChapterHeading
            number="06"
            label="THE ACQUISITION"
            title="Control was secured before the operator."
          />
          <div className="development-acquisition-grid">
            <dl>
              {acquisitionFacts.map(([term, value]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <div>
              <p>
                Acquiring the land before securing an international operator
                increased the project’s early exposure. There was no brand
                commitment and the final feasibility had not yet been
                established.
              </p>
              <p className="development-emphasis">
                The decision preserved control of a site considered difficult to
                replicate.
              </p>
              <p>
                It also provided a tangible development proposition that could
                later be presented to architects, consultants, lenders and hotel
                operators.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="development-section page-width development-utilities">
        <ChapterHeading
          number="07"
          label="WHAT EMERGED AFTER ACQUISITION"
          title="Site control exposed requirements that had not been fully anticipated."
        />
        <div className="development-section-copy">
          <p>
            Once architectural planning began, it became clear that the initial
            beachfront parcel could not accommodate all the infrastructure
            required by the expanding hotel.
          </p>
          <p>
            Weligama did not have a municipal sewage system capable of
            supporting the proposed development. The project therefore required
            its own treatment plant. Backup electricity generation also needed
            to be positioned away from guest rooms and public areas.
          </p>
          <p className="development-utility-cost">
            <span>Additional land</span>
            <strong>USD 600,000</strong>
            <small>Approximately, across the road and railway line</small>
          </p>
          <div className="development-utility-list">
            {utilityUses.map((use, index) => (
              <div key={use}>
                <span>0{index + 1}</span>
                <p>{use}</p>
              </div>
            ))}
          </div>
          <p>
            These acquisitions increased the land cost, but allowed the main
            site to remain focused on guest rooms, public areas and the
            beachfront experience.
          </p>
        </div>
      </section>

      <section className="development-scale">
        <div className="page-width">
          <ChapterHeading
            number="08"
            label="FROM SITE TO DEVELOPMENT BRIEF"
            title="The concept expanded before it stabilised."
          />
          <p className="development-scale-intro">
            The expansion was not the result of a single decision. It developed
            through successive feasibility, design and operator discussions.
          </p>
          <div className="development-scale-timeline">
            {scaleStages.map(([value, unit, label]) => (
              <article key={label}>
                <div>
                  <strong>{value}</strong>
                  <span>{unit}</span>
                </div>
                <p>{label}</p>
              </article>
            ))}
          </div>
          <p className="development-scale-note">
            The larger programme created greater operating and investment
            potential, but also increased complexity. Some early work later had
            to be revised when Marriott’s requirements were incorporated,
            contributing to redesign, remobilisation and delay.
          </p>
        </div>
      </section>

      <section className="development-lessons page-width">
        <ChapterHeading
          number="09"
          label="ORIGINATION LESSONS"
          title="What the process established."
        />
        <div className="development-lessons-list">
          {lessons.map(([title, copy], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="development-close">
        <div className="page-width development-close-grid">
          <div>
            <p className="eyebrow eyebrow-dark">THE NEXT STAGE</p>
            <h2>The site was controlled. The project was not yet de-risked.</h2>
          </div>
          <div>
            <p>
              By March 2011, the development had secured its defining asset: a
              central beachfront position within Weligama Bay.
            </p>
            <p>
              The next stage required the early concept to be translated into an
              approved, technically viable and financeable hotel. That meant
              resolving planning constraints, defining the building programme
              and securing an international operator.
            </p>
            <Link className="development-next" to="/design">
              <span>Next chapter</span>
              <strong>Brand and Product Definition</strong>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DevelopmentPage;
