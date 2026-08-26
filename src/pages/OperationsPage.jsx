import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const projectImage =
  "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-marriott-case-study/hero-weligama-bay-marriott-view-for-balcony.webp";

const transitionRows = [
  ["Complete guest rooms", "Inspect, equip and test rooms"],
  ["Finish kitchens", "Recruit chefs and test service"],
  ["Install hotel systems", "Configure reservations and reporting"],
  ["Complete public areas", "Rehearse guest journeys"],
  ["Procure equipment", "Receive, store and allocate supplies"],
  ["Resolve defects", "Establish maintenance procedures"],
  ["Test infrastructure", "Operate systems under realistic demand"],
];

const mobilisationRoles = [
  "Hotel management",
  "Food and beverage",
  "Revenue management",
  "Sales",
  "Housekeeping",
  "Engineering",
  "Security",
  "Spa and recreation",
  "Finance",
  "Human resources",
];

const operatingSystems = [
  "Reservations and room inventory",
  "Rate codes and distribution channels",
  "Guest billing",
  "Procurement and stock control",
  "Food safety",
  "Housekeeping standards",
  "Preventive maintenance",
  "Security and emergency response",
  "Staff training",
  "Financial reporting",
  "Brand compliance",
  "Guest feedback",
];

const positioningFactors = [
  "Local competitive set",
  "Relative room and facility quality",
  "Seasonal demand",
  "Group and tour-operator business",
  "Transient guests",
  "Marriott reservation channels",
  "International feeder markets",
  "Weddings and banqueting",
  "Food and beverage revenue",
];

const revenueFactors = [
  "Current occupancy",
  "Booking pace",
  "Length of stay",
  "Seasonality",
  "Group enquiries",
  "Channel costs",
  "Customer segment",
  "Remaining inventory",
  "Expected transient demand",
];

const demandSegments = [
  ["Tour operators", "Recurring base occupancy"],
  ["Groups", "Volume during defined periods"],
  ["Marriott channels", "Global reach and brand-led demand"],
  ["Direct bookings", "Lower distribution dependency"],
  ["Transient guests", "Higher-rate flexible demand"],
  ["Weddings and events", "Rooms, banqueting and food-and-beverage revenue"],
  ["Local market", "Dining, events and short-stay demand"],
];

const openingTests = [
  "Check-in and check-out",
  "Housekeeping turnaround",
  "Kitchen production",
  "Restaurant service",
  "Guest billing",
  "Elevators",
  "Hot water and drainage",
  "Internet connectivity",
  "Engineering response",
  "Staff communication",
];

const earlyIssues = [
  "Continued engineering work on guest elevators",
  "Temporary reliance on backup generators",
  "Doors requiring adjustment",
  "Missing guest room items",
  "Lighting and final-finishing defects",
  "Kitchen-equipment calibration",
  "Minor service inconsistencies",
];

const foodPriorities = [
  "Production in smaller batches",
  "Live cooking where appropriate",
  "Visibility of buffet consumption",
  "Separation of food-preparation categories",
  "Efficient staff circulation",
  "Reduced food waste",
  "Appropriate refrigeration and storage",
  "Consistent local and international menus",
];

const feedbackTopics = [
  "The bay and location",
  "Guest room design",
  "Service",
  "Food quality",
  "Maintenance",
  "Facilities",
  "Value for money",
];

const feedbackLoop = ["Guest experience", "Review and reporting", "Root cause", "Corrective action", "Verification"];

const occupancyStages = [
  ["~18%", "Opening occupancy", "Controlled initial load"],
  ["Ramp", "Early operating cycle", "Systems and teams developed"],
  ["100%", "Peak occupancy periods", "Capacity test, not stabilisation"],
  ["75%", "Stabilised occupancy", "Sustained market acceptance"],
];

const stabilisedMetrics = [
  ["USD 155", "Average daily rate", "Pricing consistent with the resort’s international positioning."],
  ["75%", "Occupancy", "Sustained demand beyond the opening period."],
  ["38%", "GOP margin", "Revenue converted into operating profit at asset level."],
];

const governanceRows = [
  ["Daily hotel management", "Asset-level performance"],
  ["Staffing and training", "Capital allocation"],
  ["Brand standards", "Budget review"],
  ["Reservations and distribution", "Financing obligations"],
  ["Sales and revenue management", "Major capital decisions"],
  ["Operating reporting", "Strategic direction"],
  ["Guest experience", "Hold or exit decision"],
];

const operatingLessons = [
  ["Mobilise the operator before completion", "Department heads can identify practical issues while they remain relatively inexpensive to correct."],
  ["Protect rate positioning", "Opening discounts can generate occupancy while weakening the long-term commercial position."],
  ["Use low occupancy as extended commissioning", "A controlled opening allows systems and teams to develop before peak demand."],
  ["Separate peak occupancy from stabilisation", "A full hotel tests capacity; sustained occupancy, ADR and margin prove the business."],
  ["Design food and beverage around operation", "Kitchen planning, service routes and waste control have a direct effect on GOP."],
  ["Treat feedback as operating data", "Repeated guest observations provide a practical quality-control system."],
  ["Maintain active asset management", "An international operator does not replace ownership oversight of performance, capital and strategy."],
];

function OperationsHeading({ number, label, title }) {
  return (
    <div className="operations-section-heading">
      <p className="eyebrow eyebrow-dark">{number} / {label}</p>
      <h2>{title}</h2>
    </div>
  );
}

function OperationsPage() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    const previousDescription = description?.getAttribute("content");
    const previousCanonical = canonical?.getAttribute("href");

    document.title = "Operations | Weligama Bay Marriott Development Record";
    description?.setAttribute(
      "content",
      "How the 198-key Weligama resort was mobilised, opened, operated and stabilised at 75% occupancy, USD 155 ADR and a 38% GOP margin.",
    );
    canonical?.setAttribute("href", "https://marriott.viji.com/operations");

    return () => {
      document.title = previousTitle;
      if (previousDescription) description?.setAttribute("content", previousDescription);
      if (previousCanonical) canonical?.setAttribute("href", previousCanonical);
    };
  }, []);

  return (
    <main className="operations-page">
      <section className="operations-hero">
        <img
          className="operations-hero-image"
          src={projectImage}
          alt="The operating Weligama resort overlooking the bay"
          fetchPriority="high"
        />
        <div className="page-width operations-hero-content">
          <p className="eyebrow">06 — OPERATIONS</p>
          <h1>The asset had to prove itself in operation.</h1>
          <div className="operations-hero-copy">
            <p>
              Physical completion did not establish the value of the development.
              The hotel needed to open reliably, build demand, protect its rate
              position and demonstrate sustainable operating margins.
            </p>
            <p>
              Marriott mobilised an experienced pre-opening team while the project
              retained active oversight through commissioning and the initial
              operating period. The hotel subsequently stabilised at 75% occupancy,
              USD 155 average daily rate and a 38% gross operating profit margin.
            </p>
          </div>
        </div>
        <div className="operations-signals">
          <div className="page-width">
            <span><strong>198</strong> Keys</span>
            <span><strong>75%</strong> Occupancy</span>
            <span><strong>USD 155</strong> ADR</span>
            <span><strong>38%</strong> GOP margin</span>
          </div>
        </div>
      </section>

      <section className="operations-transition page-width">
        <OperationsHeading number="01" label="FROM DEVELOPMENT TO OPERATION" title="The handover began before construction ended." />
        <p className="operations-intro">
          Marriott’s operating team entered while construction, procurement and
          commissioning were still underway. Practical changes could therefore be
          resolved before guests arrived.
        </p>
        <div className="operations-transition-table">
          <div className="operations-table-head"><span>Development activity</span><span>Operating activity</span></div>
          {transitionRows.map(([development, operation]) => (
            <div key={development}><strong>{development}</strong><ArrowRight size={15} /><p>{operation}</p></div>
          ))}
        </div>
      </section>

      <section className="operations-mobilisation">
        <div className="page-width operations-mobilisation-grid">
          <div>
            <OperationsHeading number="02" label="MARRIOTT MOBILISATION" title="An experienced team was assembled before opening." />
            <p>
              Department heads reviewed operational areas before opening, allowing
              equipment positions, workflows, storage and service requirements to
              be tested against daily operating needs.
            </p>
            <p>
              The pre-opening team was intended to remain through the early trading
              cycle, providing continuity from opening conditions to stable operation.
            </p>
          </div>
          <div className="operations-role-grid">
            {mobilisationRoles.map((role, index) => <span key={role}><b>{String(index + 1).padStart(2, "0")}</b>{role}</span>)}
          </div>
        </div>
      </section>

      <section className="operations-section page-width">
        <OperationsHeading number="03" label="PREPARING THE HOTEL TO TRADE" title="Every department required its own operating system." />
        <div className="operations-section-copy">
          <p>
            Opening preparation extended beyond recruitment. Marriott procedures
            had to be configured for the specific property while operating equipment
            was received, checked, stored and allocated within an active construction site.
          </p>
          <div className="operations-system-grid">
            {operatingSystems.map((system, index) => <span key={system}><b>{String(index + 1).padStart(2, "0")}</b>{system}</span>)}
          </div>
          <p className="operations-emphasis">
            The transition required close coordination between the project team,
            operator and remaining contractors.
          </p>
        </div>
      </section>

      <section className="operations-positioning">
        <div className="page-width operations-positioning-grid">
          <div>
            <OperationsHeading number="04" label="COMMERCIAL POSITIONING" title="Rate discipline took priority over occupancy alone." />
            <p>
              The central question was how quickly occupancy could be established
              without weakening the resort’s long-term rate position.
            </p>
            <p>
              Early public-rate discussions considered approximately USD 180–200.
              This was a positioning objective, not an achieved ADR. The verified
              stabilised ADR was USD 155.
            </p>
          </div>
          <div className="operations-factor-list">
            {positioningFactors.map((factor, index) => <div key={factor}><span>{String(index + 1).padStart(2, "0")}</span><p>{factor}</p></div>)}
          </div>
        </div>
      </section>

      <section className="operations-revenue page-width">
        <OperationsHeading number="05" label="REVENUE MANAGEMENT" title="Each room was treated as perishable inventory." />
        <div className="operations-revenue-grid">
          <div>
            <p>
              An unsold room could not be recovered after the night passed. A room
              sold too cheaply could increase occupancy while reducing margin and future pricing power.
            </p>
            <p>
              Discounted group demand was assessed against the probability of
              selling the same inventory individually at a higher rate. The objective
              was the strongest combination of occupancy, rate and total hotel revenue.
            </p>
          </div>
          <div className="operations-revenue-factors">
            {revenueFactors.map((factor) => <span key={factor}>{factor}</span>)}
          </div>
        </div>
        <div className="operations-equation" aria-label="Operating performance relationship">
          <strong>Occupancy</strong><b>+</b><strong>Rate</strong><b>+</b><strong>Other revenue</strong><b>−</b><strong>Operating cost</strong><b>=</b><strong>Operating performance</strong>
        </div>
      </section>

      <section className="operations-demand">
        <div className="page-width">
          <OperationsHeading number="06" label="BUILDING THE DEMAND BASE" title="The hotel required both base occupancy and higher-rated demand." />
          <div className="operations-demand-table">
            {demandSegments.map(([segment, role], index) => (
              <article key={segment}><span>{String(index + 1).padStart(2, "0")}</span><h3>{segment}</h3><p>{role}</p></article>
            ))}
          </div>
          <div className="operations-feeders">
            <span>Anticipated international feeder markets</span>
            <strong>India</strong><strong>China</strong><strong>Western Europe</strong>
          </div>
          <p className="operations-demand-note">
            Marriott supplied global and regional distribution, but property-specific
            demand still required dedicated local sales activity.
          </p>
        </div>
      </section>

      <section className="operations-opening page-width">
        <OperationsHeading number="07" label="A CONTROLLED OPENING" title="Initial occupancy created room to learn." />
        <div className="operations-opening-grid">
          <div className="operations-opening-stat">
            <strong>~18%</strong><span>Occupancy around opening</span><small>Narrative record</small>
          </div>
          <div>
            <p>
              The lower initial load functioned as an extension of commissioning.
              Problems could be identified and corrected before exposure to peak demand.
            </p>
            <div className="operations-opening-tests">
              {openingTests.map((test) => <span key={test}><Check size={14} strokeWidth={1.5} />{test}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="operations-issues">
        <div className="page-width operations-issues-grid">
          <div>
            <OperationsHeading number="08" label="EARLY OPERATING ISSUES" title="Real guests tested the complete system." />
            <p>
              A structured snagging process allowed operating and construction teams
              to resolve persistent engineering issues and smaller new-hotel defects concurrently.
            </p>
          </div>
          <div className="operations-issue-list">
            {earlyIssues.map((issue, index) => <div key={issue}><span>{String(index + 1).padStart(2, "0")}</span><p>{issue}</p></div>)}
          </div>
        </div>
      </section>

      <section className="operations-section page-width operations-food">
        <OperationsHeading number="09" label="FOOD AND BEVERAGE OPERATIONS" title="Design intent had to translate into daily efficiency." />
        <div className="operations-section-copy">
          <p>
            Food and beverage was both a guest-experience requirement and a material
            operating business. The kitchen infrastructure supported separate storage
            and preparation functions; operational discipline determined the margin.
          </p>
          <div className="operations-food-grid">
            {foodPriorities.map((priority, index) => <span key={priority}><b>{String(index + 1).padStart(2, "0")}</b>{priority}</span>)}
          </div>
          <p>
            Equipment positions, extraction, electrical connections and preparation
            workflows continued to be refined before and after opening.
          </p>
        </div>
      </section>

      <section className="operations-feedback">
        <div className="page-width">
          <OperationsHeading number="10" label="FEEDBACK AS AN OPERATING CONTROL" title="Guest response became part of quality management." />
          <div className="operations-feedback-grid">
            <div>
              <p>
                Reviews externally tested the development assumptions. Positive
                comments supported the central design decisions; recurring criticism
                identified service or maintenance failures requiring correction.
              </p>
              <div className="operations-feedback-topics">
                {feedbackTopics.map((topic) => <span key={topic}>{topic}</span>)}
              </div>
            </div>
            <div className="operations-feedback-loop">
              {feedbackLoop.map((step, index) => (
                <div key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong>{index < feedbackLoop.length - 1 && <ArrowRight size={15} />}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="operations-ramp page-width">
        <OperationsHeading number="11" label="SCALING OCCUPANCY" title="The systems were tested again as demand increased." />
        <p className="operations-intro">
          Higher occupancy placed materially greater pressure on housekeeping,
          food production, elevators, hot water, laundry, maintenance, reservations,
          circulation, staffing and stock levels.
        </p>
        <div className="operations-ramp-timeline">
          {occupancyStages.map(([value, label, note]) => (
            <article key={label}><strong>{value}</strong><h3>{label}</h3><p>{note}</p></article>
          ))}
        </div>
        <p className="operations-ramp-note">
          A period of 100% occupancy demonstrated peak demand and tested capacity.
          It was not the stabilised occupancy rate, which required sustained performance over time.
        </p>
      </section>

      <section className="operations-performance">
        <div className="page-width">
          <OperationsHeading number="12" label="STABILISED PERFORMANCE" title="The operating case was established." />
          <div className="operations-metrics">
            {stabilisedMetrics.map(([value, label, meaning]) => (
              <article key={label}><strong>{value}</strong><h3>{label}</h3><p>{meaning}</p></article>
            ))}
          </div>
          <p className="operations-performance-note">
            Together, rate, sustained demand and operating efficiency provided the
            evidence required to support valuation and an eventual transaction.
          </p>
        </div>
      </section>

      <section className="operations-governance page-width">
        <OperationsHeading number="13" label="OWNER AND OPERATOR ROLES" title="Brand management did not remove owner oversight." />
        <p className="operations-intro">
          Marriott managed the hospitality business. Ownership monitored asset
          performance against the investment case and retained responsibility for capital and strategy.
        </p>
        <div className="operations-governance-table">
          <div className="operations-table-head"><span>Operator responsibility</span><span>Ownership responsibility</span></div>
          {governanceRows.map(([operator, ownership]) => (
            <div key={operator}><strong>{operator}</strong><p>{ownership}</p></div>
          ))}
        </div>
      </section>

      <section className="operations-lessons page-width">
        <OperationsHeading number="14" label="OPERATING LESSONS" title="What the operating period established." />
        <div className="operations-lessons-list">
          {operatingLessons.map(([title, copy], index) => (
            <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="operations-close">
        <div className="page-width operations-close-grid">
          <div>
            <p className="eyebrow eyebrow-dark">THE FINAL STAGE</p>
            <h2>Stabilisation converted development risk into operating evidence.</h2>
          </div>
          <div>
            <p>
              The hotel moved from a newly completed asset to a functioning resort
              with sustained occupancy, established pricing and a 38% gross operating profit margin.
            </p>
            <p>
              That record made the asset easier to value, finance and assess as an
              acquisition. The final development stage was determining when and how to exit.
            </p>
            <Link className="operations-next" to="/exit">
              <span>Next chapter</span><strong>Exit</strong><ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default OperationsPage;