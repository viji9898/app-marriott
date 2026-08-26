import { useEffect } from "react";
import { Link } from "react-router-dom";

const projectImage =
  "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-marriott-case-study/hero-weligama-bay-marriott-view-for-balcony.webp";

const principalConsequences = [
  "Foundations preceded the final operator brief",
  "The room programme changed materially",
  "The brand positioning changed",
  "Restaurants and kitchens were enlarged",
  "The ballroom structure was revised",
  "Floor-to-ceiling dimensions were adjusted",
  "Additional back-of-house space was introduced",
  "Contractors were remobilised",
  "Completed work had to be reconsidered",
];

const sequenceRows = [
  [
    "Expand the room programme",
    "Greater operating scale",
    "Complete feasibility before design",
  ],
  [
    "Appoint Marriott",
    "International positioning and operating discipline",
    "Engage operator before construction",
  ],
  [
    "Revise the ballroom",
    "Column-free flexible space",
    "Resolve structure before foundations",
  ],
  [
    "Enlarge kitchens",
    "Improved operating capacity",
    "Complete area programme first",
  ],
  [
    "Add utility land",
    "Independent infrastructure",
    "Assess all services before acquisition",
  ],
  [
    "Introduce interior designers",
    "Stronger rooms and public areas",
    "Appoint during concept design",
  ],
  [
    "Procure internationally",
    "Improved value and specification",
    "Establish long-lead schedule earlier",
  ],
];

const operatorContributions = [
  "Feasibility and area programming",
  "Brand positioning",
  "Guestroom standards",
  "Kitchen and back-of-house planning",
  "Life-safety requirements",
  "Operating circulation",
  "Procurement access",
  "Revenue management",
  "Pre-opening mobilisation",
  "International distribution",
];

const preferredSequence = [
  ["Site control", "Secure conditional control"],
  ["Feasibility", "Test market and product"],
  ["Operator", "Engage potential operators"],
  ["Brand", "Agree the operating model"],
  ["Area programme", "Define the complete hotel"],
  ["Design", "Coordinate architecture and engineering"],
  ["Funding", "Finalise cost and capital"],
  ["Construction", "Mobilise with resolved information"],
];

const areaProgramme = [
  "Guestrooms and suites",
  "Restaurants and bars",
  "Banqueting",
  "Kitchens",
  "Spa and fitness",
  "Recreation",
  "Guest circulation",
  "Staff circulation",
  "Storage",
  "Housekeeping",
  "Laundry",
  "Engineering",
  "Loading and waste",
  "Offices",
  "Staff facilities",
];

const infrastructureRows = [
  [
    "Is sufficient power available?",
    "Confirmed capacity and connection programme",
  ],
  [
    "Can sewage be discharged?",
    "Municipal confirmation or private-system design",
  ],
  ["Is water supply reliable?", "Source, quality, volume and treatment tests"],
  [
    "Where will generators be located?",
    "Noise, vibration, access and fuel strategy",
  ],
  [
    "How will utilities reach the site?",
    "Rights of way and crossing approvals",
  ],
  [
    "Is there sufficient service land?",
    "Complete utility and back-of-house plan",
  ],
];

const flowGroups = [
  [
    "Guests",
    [
      "Arrival",
      "Guest elevators",
      "Restaurants",
      "Recreation",
      "Emergency egress",
    ],
  ],
  [
    "Staff",
    [
      "Staff access",
      "Housekeeping",
      "Service elevators",
      "Room service",
      "Maintenance",
    ],
  ],
  [
    "Goods and services",
    [
      "Deliveries",
      "Food storage",
      "Linen movement",
      "Waste removal",
      "Replacement equipment",
    ],
  ],
];

const contractComparison = [
  [
    "Services responsibility",
    "Separate specialist contractors",
    "Coordinated MEP contractor",
  ],
  ["Programme", "Trade-by-trade dependencies", "One integrated programme"],
  [
    "Interfaces",
    "Resolved directly by project team",
    "Contractually defined responsibility",
  ],
  [
    "Working information",
    "Package-specific shop drawings",
    "Coordinated shop drawings",
  ],
  [
    "Delay and change",
    "Frequent direct intervention",
    "Formal allocation and process",
  ],
];

const informationControls = [
  "One common data environment",
  "A controlled drawing register",
  "Unique revision numbers",
  "Formal issue dates",
  "Recorded recipients",
  "Defined review and approval status",
  "Immediate withdrawal of superseded drawings",
  "Coordinated architectural, structural and MEP information",
];

const mockupStandards = [
  "Dimensions",
  "Joinery",
  "Stone",
  "Sanitaryware",
  "Lighting",
  "Furniture",
  "Technology",
  "Alignment",
  "Finishing",
  "Overall guest experience",
];

const futureMockups = [
  "Guestrooms",
  "Bathrooms",
  "Facade sections",
  "Important public-area details",
];

const adaptabilityItems = [
  "Room dimensions",
  "Bathroom layouts",
  "Service risers",
  "Ceiling voids",
  "Electrical capacity",
  "Data infrastructure",
  "Public-area planning",
  "Restaurant concepts",
  "Furniture and partition systems",
  "Access for replacement equipment",
];

const valueTests = [
  "Does the alternative preserve the design intent?",
  "Does it meet the required performance?",
  "Is it sufficiently durable for hotel use?",
  "Does it meet operator standards?",
  "Does it affect safety or compliance?",
  "Would a guest recognise a material reduction in quality?",
  "Does the saving justify the procurement and execution risk?",
];

const changeCosts = [
  "Direct construction cost",
  "Consultant cost",
  "Contractor remobilisation",
  "Programme delay",
  "Additional interest",
  "Deferred revenue",
  "Effect on opening season",
  "Effect on funding requirements",
];

const leadershipBenefits = [
  "Resolve questions quickly",
  "Challenge disproportionate quotations",
  "Coordinate specialist trades",
  "Monitor material use",
  "Identify quality issues",
  "Maintain momentum",
  "Assess whether imperfections were material",
  "Connect individual decisions to the wider commercial objective",
];

const commissioningChecks = [
  "Fully occupied test floors",
  "Simultaneous elevator operation",
  "Peak hot-water demand",
  "Full kitchen loads",
  "Drainage testing under extreme rainfall",
  "Internet testing throughout",
  "Fire and emergency exercises",
  "Full housekeeping turnover",
  "Restaurant service rehearsals",
  "Guest billing and departure",
  "Backup-power operation",
  "Defect closure and retesting",
];

const rateRelationship = [
  "Occupancy",
  "Average daily rate",
  "Other hotel revenue",
  "Distribution cost",
  "Operating cost",
  "Gross operating profit",
];

const exitReadiness = [
  "Securing freehold land",
  "Appointing an internationally recognised operator",
  "Delivering a complete resort",
  "Establishing reliable infrastructure",
  "Maintaining clear corporate ownership",
  "Producing operating records",
  "Stabilising occupancy, rate and margin",
  "Preserving operator continuity",
];

const futureComparison = [
  [
    "Operator appointment",
    "After early construction began",
    "Before detailed design",
  ],
  [
    "Area programme",
    "Developed as the concept expanded",
    "Fixed before mobilisation",
  ],
  [
    "Infrastructure",
    "Some requirements identified after acquisition",
    "Complete technical due diligence",
  ],
  [
    "Building services",
    "Multiple separate contractors",
    "Coordinated MEP responsibility",
  ],
  [
    "Drawing control",
    "Fast but partly informal communication",
    "Formal common data environment",
  ],
  [
    "Mock-ups",
    "Highly effective once introduced",
    "Completed before repetitive work",
  ],
  [
    "Procurement",
    "Strong problem-solving, some late items",
    "Integrated long-lead schedule",
  ],
  [
    "Commissioning",
    "Intensive pre-opening correction",
    "Planned progressive commissioning",
  ],
  [
    "Site leadership",
    "Continuous direct involvement",
    "Retain with clearer delegated authority",
  ],
  [
    "Exit preparation",
    "Proven through completed performance",
    "Document from origination onward",
  ],
];

function LessonsHeading({ number, label, title, light = false }) {
  return (
    <div className="lessons-section-heading">
      <p className={`eyebrow ${light ? "" : "eyebrow-dark"}`}>
        {number} / {label}
      </p>
      <h2>{title}</h2>
    </div>
  );
}

function NumberedList({ items, className = "lessons-numbered-list" }) {
  return (
    <div className={className}>
      {items.map((item, index) => (
        <div key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}

function LessonsPage() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    const previousDescription = description?.getAttribute("content");
    const previousCanonical = canonical?.getAttribute("href");

    document.title = "Lessons | Weligama Bay Marriott Development Record";
    description?.setAttribute(
      "content",
      "A candid record of the planning, sequencing, coordination, commissioning and operating lessons established by the Weligama resort development.",
    );
    canonical?.setAttribute("href", "https://marriott.viji.com/lessons");

    return () => {
      document.title = previousTitle;
      if (previousDescription)
        description?.setAttribute("content", previousDescription);
      if (previousCanonical) canonical?.setAttribute("href", previousCanonical);
    };
  }, []);

  return (
    <main className="lessons-page">
      <section className="lessons-hero">
        <img
          className="lessons-hero-image"
          src={projectImage}
          alt="Completed Weligama resort viewed from a guestroom balcony"
          fetchPriority="high"
        />
        <div className="page-width lessons-hero-content">
          <p className="eyebrow">08 — LESSONS</p>
          <h1>The outcome does not remove the mistakes.</h1>
          <div className="lessons-hero-copy">
            <p>
              The project completed the full cycle from greenfield origination
              to institutional exit. It also exposed weaknesses in planning,
              sequencing, consultant appointments, information control and
              contractor coordination.
            </p>
            <p>
              The central lesson was straightforward: decisive execution
              matters, but early decisions determine how much corrective
              execution will later be required.
            </p>
          </div>
        </div>
        <div className="lessons-hero-line">
          <div className="page-width">
            <span>Plan earlier</span>
            <span>Appoint the operator sooner</span>
            <span>Control information</span>
            <span>Design for operation</span>
            <span>Protect adaptability</span>
          </div>
        </div>
      </section>

      <section className="lessons-principal page-width">
        <LessonsHeading
          number="01"
          label="THE PRINCIPAL LESSON"
          title="Define the complete project before starting construction."
        />
        <div className="lessons-principal-grid">
          <div>
            <p>
              The project began as a boutique resort of approximately 50–60
              rooms and ultimately became a 198-key Marriott Resort. That
              evolution created a stronger asset, but the final scale, operator
              requirements and complete area programme were not fixed before
              early construction began.
            </p>
            <p className="lessons-delay">
              <strong>At least one year</strong>
              <span>Delay attributed by the source record to late changes</span>
            </p>
          </div>
          <NumberedList items={principalConsequences} />
        </div>
        <p className="lessons-principle-note">
          The lesson is not that a project should remain static. Fundamental
          commercial, operating and spatial decisions should be resolved before
          physical work reduces the ability to change them efficiently.
        </p>
      </section>

      <section className="lessons-sequence">
        <div className="page-width">
          <LessonsHeading
            number="02"
            label="SEQUENCE MATTERS"
            title="The correct decisions made late can still be expensive."
            light
          />
          <p className="lessons-dark-intro">
            Several decisions improved the completed hotel. Their timing
            nevertheless increased cost and complexity.
          </p>
          <div
            className="lessons-comparison-table"
            role="table"
            aria-label="Decision timing comparison"
          >
            <div className="lessons-table-head" role="row">
              <span>Decision</span>
              <span>Project outcome</span>
              <span>Better sequence</span>
            </div>
            {sequenceRows.map(([decision, outcome, better]) => (
              <div role="row" key={decision}>
                <strong data-label="Decision">{decision}</strong>
                <p data-label="Project outcome">{outcome}</p>
                <p data-label="Better sequence">{better}</p>
              </div>
            ))}
          </div>
          <p className="lessons-dark-note">
            A development programme should identify both what must be decided
            and the latest point at which each decision can be made without
            creating rework.
          </p>
        </div>
      </section>

      <section className="lessons-operator page-width">
        <LessonsHeading
          number="03"
          label="APPOINT THE OPERATOR EARLY"
          title="Brand involvement should precede detailed design."
        />
        <div className="lessons-operator-grid">
          <div>
            <p>
              Marriott contributed substantial operational and commercial
              discipline, but joined after design and construction work had
              already progressed.
            </p>
            <NumberedList
              items={operatorContributions}
              className="lessons-compact-list"
            />
          </div>
          <div className="lessons-preferred-sequence">
            <p>Preferred sequence for a future branded development</p>
            {preferredSequence.map(([stage, action], index) => (
              <article key={stage}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{stage}</h3>
                <p>{action}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lessons-area">
        <div className="page-width lessons-area-grid">
          <div>
            <LessonsHeading
              number="04"
              label="COMPLETE THE AREA PROGRAMME"
              title="Room count alone does not define a hotel."
              light
            />
            <p>
              Each additional guestroom creates requirements elsewhere.
              Expanding inventory without recalculating those relationships can
              produce undersized kitchens, storage, servicing and public areas.
            </p>
          </div>
          <div className="lessons-area-system">
            <span className="lessons-area-core">
              Complete hotel
              <br />
              operating system
            </span>
            {areaProgramme.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="lessons-infrastructure page-width">
        <LessonsHeading
          number="05"
          label="INFRASTRUCTURE IS PART OF THE SITE"
          title="Land assessment must include what cannot be seen."
        />
        <div className="lessons-infrastructure-intro">
          <p>
            Additional land was required for sewage treatment, water treatment,
            backup generation and utility equipment because surrounding
            infrastructure could not support the completed resort.
          </p>
          <strong>
            ~ USD 600,000<small>Additional utility-land acquisition</small>
          </strong>
        </div>
        <div
          className="lessons-evidence-table"
          role="table"
          aria-label="Infrastructure due diligence"
        >
          <div className="lessons-table-head" role="row">
            <span>Infrastructure question</span>
            <span>Required evidence</span>
          </div>
          {infrastructureRows.map(([question, evidence]) => (
            <div role="row" key={question}>
              <strong data-label="Infrastructure question">{question}</strong>
              <p data-label="Required evidence">{evidence}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lessons-flow">
        <div className="page-width">
          <LessonsHeading
            number="06"
            label="DESIGN FROM OPERATIONS OUTWARD"
            title="Flow affects both service and profit."
            light
          />
          <p className="lessons-dark-intro">
            A hotel is an operating system in which recurring guest, staff and
            service movements must be tested together. Poor circulation
            increases labour, delays service and creates front-of-house and
            back-of-house conflict.
          </p>
          <div className="lessons-flow-grid">
            {flowGroups.map(([group, movements], index) => (
              <article key={group}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{group}</h3>
                {movements.map((movement) => (
                  <p key={movement}>{movement}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lessons-contract page-width">
        <LessonsHeading
          number="07"
          label="COORDINATED CONTRACT PACKAGES"
          title="Multiple specialists created unmanaged interfaces."
        />
        <p className="lessons-intro">
          Separate water, electrical, mechanical and other services packages
          provided direct control but left the project team responsible for
          frequent dependencies between trades. Future physical installation
          responsibility should be unambiguous.
        </p>
        <div
          className="lessons-comparison-table lessons-light-table"
          role="table"
          aria-label="Contract packaging comparison"
        >
          <div className="lessons-table-head" role="row">
            <span>Control</span>
            <span>Weligama</span>
            <span>Future structure</span>
          </div>
          {contractComparison.map(([control, current, future]) => (
            <div role="row" key={control}>
              <strong data-label="Control">{control}</strong>
              <p data-label="Weligama">{current}</p>
              <p data-label="Future structure">{future}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lessons-information">
        <div className="page-width lessons-information-grid">
          <div>
            <LessonsHeading
              number="08"
              label="CONTROL THE INFORMATION"
              title="Construction cannot run on several versions of the truth."
            />
            <p>
              Design changes were not always reflected consistently across every
              contractor’s working information, creating occasions where trades
              used different drawing revisions.
            </p>
            <p className="lessons-information-note">
              Messaging applications can report defects and accelerate
              decisions. They should not become the contractual record of design
              information.
            </p>
          </div>
          <NumberedList
            items={informationControls}
            className="lessons-control-list"
          />
        </div>
      </section>

      <section className="lessons-mockups page-width">
        <LessonsHeading
          number="09"
          label="BUILD PHYSICAL STANDARDS"
          title="A mock-up communicates more clearly than a specification."
        />
        <div className="lessons-mockup-grid">
          <div>
            <p>
              The completed guestroom mock-up became one of the project’s most
              effective quality controls. Contractors could inspect a completed
              reference rather than interpret drawings independently.
            </p>
            <div className="lessons-standard-list">
              {mockupStandards.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="lessons-future-label">
              Approve before repetitive work
            </p>
            {futureMockups.map((item, index) => (
              <div className="lessons-future-mockup" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </div>
            ))}
            <p className="lessons-mockup-note">
              The standard should be agreed, documented and priced before full
              production.
            </p>
          </div>
        </div>
      </section>

      <section className="lessons-adaptability">
        <div className="page-width lessons-adaptability-grid">
          <div>
            <LessonsHeading
              number="10"
              label="BUILD FOR ADAPTATION"
              title="Today’s specification will not remain current."
              light
            />
            <p>
              The objective is not to predict every future requirement. It is to
              avoid making refurbishment or repositioning unnecessarily
              difficult or expensive.
            </p>
          </div>
          <NumberedList
            items={adaptabilityItems}
            className="lessons-adaptability-list"
          />
        </div>
      </section>

      <section className="lessons-value page-width">
        <LessonsHeading
          number="11"
          label="SEPARATE QUALITY FROM COST"
          title="Higher expenditure does not automatically produce higher value."
        />
        <div className="lessons-value-grid">
          <div>
            <p>
              The project encountered specifications whose additional cost would
              not have produced a corresponding improvement in rate, durability
              or guest experience.
            </p>
            <p className="lessons-example">
              <span>Verified example</span>
              Direct production of the patterned timber screens reduced cost
              while preserving the approved design and quality.
            </p>
          </div>
          <div className="lessons-value-tests">
            {valueTests.map((question, index) => (
              <div key={question}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{question}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="lessons-principle-note">
          Value engineering should be evidence-based. It should not justify
          reductions in life safety, essential systems or long-term durability.
        </p>
      </section>

      <section className="lessons-time">
        <div className="page-width">
          <LessonsHeading
            number="12"
            label="TIME IS A CAPITAL COST"
            title="Delay should be priced like any other construction item."
            light
          />
          <p className="lessons-dark-intro">
            Design changes, late procurement and contractor remobilisation
            extended financing costs and delayed operating revenue.
          </p>
          <div className="lessons-cost-equation">
            {changeCosts.map((cost, index) => (
              <div key={cost}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{cost}</strong>
                {index < changeCosts.length - 1 && <b>+</b>}
              </div>
            ))}
          </div>
          <p className="lessons-dark-note">
            Programme governance should sit alongside cost governance. A change
            that appears inexpensive in isolation may be costly once time and
            financing are included.
          </p>
        </div>
      </section>

      <section className="lessons-leadership page-width">
        <LessonsHeading
          number="13"
          label="MAINTAIN DECISION-MAKERS ON SITE"
          title="Continuous leadership prevented routine issues from becoming delays."
        />
        <div className="lessons-leadership-grid">
          <div>
            <p>
              A small core team retained detailed knowledge of the complete
              project and remained available to make decisions at the point of
              execution.
            </p>
            <p>
              Authority need not remain fully centralised. Delegated approval
              limits, escalation routes and decision timeframes should be
              established before construction.
            </p>
          </div>
          <NumberedList items={leadershipBenefits} />
        </div>
      </section>

      <section className="lessons-commissioning">
        <div className="page-width">
          <LessonsHeading
            number="14"
            label="COMMISSION BEFORE OPENING"
            title="Physical completion is not operational readiness."
          />
          <p className="lessons-intro">
            Problems emerged when guestrooms, elevators, kitchens, drainage,
            power and staff operated together. Lower opening occupancy provided
            a useful final commissioning period; a future project should plan
            that approach explicitly.
          </p>
          <div className="lessons-checklist">
            {commissioningChecks.map((check, index) => (
              <span key={check}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                {check}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="lessons-rate page-width">
        <LessonsHeading
          number="15"
          label="PROTECT THE RATE"
          title="Occupancy is not the only measure of success."
        />
        <div className="lessons-rate-grid">
          <div>
            <p>
              Discounting could have filled rooms faster while weakening the
              long-term rate. The relevant relationship combined demand,
              pricing, revenue and cost.
            </p>
            <div className="lessons-rate-relationship">
              {rateRelationship.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="lessons-rate-metrics">
            <article>
              <strong>75%</strong>
              <span>Stabilised occupancy</span>
            </article>
            <article>
              <strong>USD 155</strong>
              <span>ADR</span>
            </article>
            <article>
              <strong>38%</strong>
              <span>GOP margin</span>
            </article>
          </div>
        </div>
      </section>

      <section className="lessons-exit-readiness">
        <div className="page-width lessons-exit-grid">
          <div>
            <LessonsHeading
              number="16"
              label="BUILD WITH THE EXIT IN MIND"
              title="Exit value is created long before the transaction."
              light
            />
            <p>
              The eventual USD 57 million enterprise value reflected decisions
              made across the project rather than the transaction process alone.
              Exit planning should begin during origination even without a fixed
              intention to sell.
            </p>
          </div>
          <NumberedList items={exitReadiness} className="lessons-exit-list" />
        </div>
      </section>

      <section className="lessons-change page-width">
        <LessonsHeading
          number="17"
          label="WHAT WOULD CHANGE"
          title="The next development would begin from a different structure."
        />
        <div
          className="lessons-comparison-table lessons-change-table"
          role="table"
          aria-label="Weligama and future development comparison"
        >
          <div className="lessons-table-head" role="row">
            <span>Project area</span>
            <span>Weligama approach</span>
            <span>Future approach</span>
          </div>
          {futureComparison.map(([area, current, future]) => (
            <div role="row" key={area}>
              <strong data-label="Project area">{area}</strong>
              <p data-label="Weligama approach">{current}</p>
              <p data-label="Future approach">{future}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lessons-close">
        <div className="page-width lessons-close-grid">
          <div>
            <p className="eyebrow eyebrow-dark">THE COMPLETE RECORD</p>
            <h2>The process is repeatable because the lessons are specific.</h2>
          </div>
          <div>
            <p>
              The project established the ability to identify a site, structure
              capital, secure an operator, deliver a complex resort, stabilise
              the business and complete an exit.
            </p>
            <p>
              Its greater value as a reference point lies in the decisions that
              would now be made differently: define the project earlier, involve
              the operator sooner, coordinate services under clearer
              responsibility and control design information more formally.
            </p>
            <p>
              The next development would not remove uncertainty. It would enter
              that uncertainty with a more complete operating model, clearer
              sequence and stronger controls.
            </p>
            <Link className="lessons-overview-link" to="/overview">
              <span>Full project record</span>
              <strong>Overview</strong>
              <b>→</b>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LessonsPage;
