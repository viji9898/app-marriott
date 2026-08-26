import { useEffect } from "react";

const projectImage =
  "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-marriott-case-study/hero-weligama-bay-marriott-view-for-balcony.webp";

const readinessStages = [
  ["01", "Land assembled", "Beachfront ownership consolidated"],
  ["02", "Planning resolved", "Approvals and infrastructure addressed"],
  ["03", "Marriott appointed", "International operator secured"],
  ["04", "Construction completed", "198-key resort delivered"],
  ["05", "Hotel opened", "Operating systems commissioned"],
  ["06", "Operations stabilised", "Actual performance established"],
];

const transactionRows = [
  ["Exit date", "19 April 2019"],
  ["Transaction structure", "Share sale"],
  ["Buyer", "Hotel Properties Limited, Singapore"],
  ["Enterprise value", "USD 57 million"],
  ["Hotel inventory", "198 keys"],
  ["Reported per-key value", "USD 287,000"],
  ["Total development cost", "USD 42 million"],
  ["Equity invested", "USD 15 million"],
  ["Reported profit", "USD 15 million"],
  ["Reported ROI", "120%", "reported"],
  ["Operator following completion", "Marriott International"],
];

const transferableComponents = [
  "Freehold beachfront land",
  "Completed 198-key resort",
  "Direct ocean views from every guestroom",
  "Marriott operating infrastructure",
  "Established workforce",
  "Tested building and utility systems",
  "Existing distribution and reservation channels",
  "Demonstrated occupancy and room-rate performance",
  "Food, beverage, banqueting and recreation facilities",
];

const continuityItems = [
  "Brand identity",
  "Reservations",
  "Distribution",
  "Management systems",
  "Staff procedures",
  "Guest bookings",
  "Revenue management",
  "Supplier relationships",
  "Operating standards",
];

const cycleStages = [
  ["Originate", "Beachfront site identified and assembled"],
  ["Define", "Concept expanded to a 198-key resort"],
  ["Brand", "Marriott secured as international operator"],
  ["Finance", "Equity and institutional debt structured"],
  ["Design", "Resort planned around sea-facing guestrooms"],
  ["Build", "Complex multi-year construction delivered"],
  ["Operate", "Hotel opened and stabilised"],
  ["Exit", "Share sale completed at USD 57m enterprise value"],
];

const exitLessons = [
  [
    "Operational evidence supports valuation",
    "Actual occupancy, ADR and margin provide a stronger valuation basis than development forecasts alone.",
  ],
  [
    "Operator continuity supports transferability",
    "Retaining Marriott allowed ownership to change without requiring an operational reset.",
  ],
  [
    "Enterprise value differs from equity proceeds",
    "Asset value, debt repayment, shareholder proceeds and investment return are related but distinct calculations.",
  ],
  [
    "Per-key value is useful but incomplete",
    "The measure supports comparison but does not capture differences in land, facilities, profitability or capital structure.",
  ],
  [
    "Exit timing should be described factually",
    "The transaction preceded later disruption; the record does not establish that those events were anticipated.",
  ],
  [
    "A realised exit completes the track record",
    "Development capability is demonstrated when value is converted into an executed transaction.",
  ],
];

function ExitHeading({ number, label, title }) {
  return (
    <div className="exit-section-heading">
      <p className="eyebrow eyebrow-dark">
        {number} / {label}
      </p>
      <h2>{title}</h2>
    </div>
  );
}

function ExitPage() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    const previousDescription = description?.getAttribute("content");
    const previousCanonical = canonical?.getAttribute("href");

    document.title = "Exit | Weligama Bay Marriott Development Record";
    description?.setAttribute(
      "content",
      "The 19 April 2019 share sale of the 198-key Weligama resort at a USD 57 million enterprise value, with Marriott retained as operator.",
    );
    canonical?.setAttribute("href", "https://marriott.viji.com/exit");

    return () => {
      document.title = previousTitle;
      if (previousDescription)
        description?.setAttribute("content", previousDescription);
      if (previousCanonical) canonical?.setAttribute("href", previousCanonical);
    };
  }, []);

  return (
    <main className="exit-page">
      <section className="exit-hero">
        <img
          className="exit-hero-image"
          src={projectImage}
          alt="The completed Weligama resort overlooking the bay"
          fetchPriority="high"
        />
        <div className="page-width exit-hero-content">
          <p className="eyebrow">07 — EXIT</p>
          <h1>The completed asset was converted into a realised outcome.</h1>
          <div className="exit-hero-copy">
            <p>
              Following development and operating stabilisation, the project was
              sold through a share transaction to Hotel Properties Limited of
              Singapore.
            </p>
            <p>
              The transaction completed on 19 April 2019 at an enterprise value
              of USD 57 million. Marriott International remained in place as the
              hotel operator following the change of ownership.
            </p>
          </div>
        </div>
        <div className="exit-hero-facts">
          <div className="page-width">
            <span>19 April 2019</span>
            <span>Share sale</span>
            <span>USD 57m enterprise value</span>
            <span>Operator retained</span>
          </div>
        </div>
      </section>

      <section className="exit-readiness page-width">
        <ExitHeading
          number="01"
          label="ESTABLISHING EXIT READINESS"
          title="The transaction followed operating proof."
        />
        <p className="exit-intro">
          The sale followed the principal stages of development risk. The buyer
          was acquiring an operating hotel with an established international
          operator, rather than an uncompleted development proposition.
        </p>
        <div className="exit-readiness-grid">
          {readinessStages.map(([number, title, detail]) => (
            <article key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
        <div
          className="exit-operating-proof"
          aria-label="Verified stabilised operating metrics"
        >
          <span>Verified stabilised performance</span>
          <strong>
            75% <small>Occupancy</small>
          </strong>
          <strong>
            USD 155 <small>ADR</small>
          </strong>
          <strong>
            38% <small>GOP margin</small>
          </strong>
        </div>
      </section>

      <section className="exit-transaction">
        <div className="page-width exit-transaction-grid">
          <div>
            <ExitHeading
              number="02"
              label="TRANSACTION SUMMARY"
              title="A share sale completed the development cycle."
            />
            <p>
              The transaction transferred ownership of the project company while
              preserving continuity in hotel operations and brand management.
            </p>
          </div>
          <div
            className="exit-transaction-table"
            role="table"
            aria-label="Verified transaction record"
          >
            {transactionRows.map(([item, value, status]) => (
              <div role="row" key={item}>
                <span role="cell">{item}</span>
                <strong role="cell">
                  {value}
                  {status && <small>{status}</small>}
                </strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="exit-transferable page-width">
        <ExitHeading
          number="03"
          label="TRANSFERABLE ASSET"
          title="Value extended beyond the completed building."
        />
        <div className="exit-transferable-grid">
          <p>
            The project had moved beyond construction risk. Its value could be
            considered using operating performance, replacement cost, land
            position and future cash-flow potential.
          </p>
          <div className="exit-component-list">
            {transferableComponents.map((component, index) => (
              <div key={component}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{component}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="exit-valuation">
        <div className="page-width">
          <ExitHeading
            number="04"
            label="VALUATION"
            title="The transaction valued the asset at USD 57 million."
          />
          <div
            className="exit-value-bridge"
            aria-label="Enterprise value bridge"
          >
            <article>
              <span>Development cost</span>
              <strong>USD 42m</strong>
            </article>
            <b>+</b>
            <article>
              <span>Difference</span>
              <strong>USD 15m</strong>
            </article>
            <b>=</b>
            <article>
              <span>Enterprise value</span>
              <strong>USD 57m</strong>
            </article>
          </div>
          <div className="exit-value-measures">
            <article>
              <strong>35.7%</strong>
              <span>Enterprise value above development cost</span>
            </article>
            <article>
              <strong>~ USD 288,000</strong>
              <span>Implied value per key</span>
            </article>
          </div>
          <p className="exit-disclosure">
            The formal track record reports USD 287,000 per key. USD 57 million
            divided by 198 keys equals approximately USD 287,879. The USD 15
            million difference above development cost is not presented as
            distributable shareholder proceeds.
          </p>
        </div>
      </section>

      <section className="exit-capital page-width">
        <ExitHeading
          number="05"
          label="CAPITAL STRUCTURE AND OUTCOME"
          title="Enterprise value and equity return are not the same measure."
        />
        <div className="exit-capital-grid">
          <div className="exit-capital-structure">
            <p>Reported capital structure</p>
            <div>
              <strong>35%</strong>
              <span>Equity</span>
            </div>
            <div>
              <strong>65%</strong>
              <span>Debt</span>
            </div>
          </div>
          <div className="exit-capital-record">
            <article>
              <strong>USD 15m</strong>
              <span>Equity invested</span>
            </article>
            <article>
              <strong>USD 15m</strong>
              <span>Reported profit</span>
            </article>
            <article>
              <strong>120%</strong>
              <span>Reported ROI</span>
              <small>As reported</small>
            </article>
          </div>
        </div>
        <aside className="exit-capital-disclosure">
          <span>Reconciliation note</span>
          <p>
            The available source record does not include the detailed equity
            cash-flow, debt-settlement, fee or tax schedules required to
            reconcile the reported 120% ROI. A simple USD 15 million profit
            divided by USD 15 million invested produces 100%. The reported 120%
            ROI is therefore presented pending supporting documentation.
          </p>
        </aside>
      </section>

      <section className="exit-share-sale">
        <div className="page-width exit-share-sale-grid">
          <div>
            <ExitHeading
              number="06"
              label="SHARE SALE STRUCTURE"
              title="Ownership changed without changing the operator."
            />
          </div>
          <div>
            <p>
              The transaction was completed through a sale of shares rather than
              a direct disposal of the hotel’s individual assets. Ownership of
              the project company changed while Marriott remained the operator
              and the hotel continued trading under the same brand.
            </p>
            <div className="exit-confirmed-list">
              <span>Project acquired through a share transaction</span>
              <span>Marriott International remained operator</span>
              <span>Hotel continued trading through ownership transfer</span>
            </div>
            <p className="exit-source-limit">
              The available record does not provide sufficient detail to
              describe warranties, debt settlement, tax treatment, escrow
              arrangements or other transaction mechanics.
            </p>
          </div>
        </div>
      </section>

      <section className="exit-continuity page-width">
        <ExitHeading
          number="07"
          label="OPERATING CONTINUITY"
          title="The hotel remained an operating Marriott asset."
        />
        <p className="exit-intro">
          Retaining the operator reduced the disruption that could have resulted
          from simultaneously changing ownership, management and brand. The
          transaction was an ownership event rather than a reopening or
          repositioning.
        </p>
        <div className="exit-continuity-grid">
          {continuityItems.map((item, index) => (
            <span key={item}>
              <b>{String(index + 1).padStart(2, "0")}</b>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="exit-timing">
        <div className="page-width exit-timing-grid">
          <div>
            <ExitHeading
              number="08"
              label="TRANSACTION TIMING"
              title="Completion preceded a period of material disruption."
            />
            <time dateTime="2019-04-19">19 April 2019</time>
          </div>
          <div>
            <p>The transaction completed before:</p>
            <div className="exit-events">
              <span>The Easter attacks in Sri Lanka</span>
              <span>The Covid-19 pandemic</span>
              <span>Subsequent political and economic instability</span>
            </div>
            <p className="exit-timing-note">
              This sequence is recorded as context. It is not presented as
              evidence that those events were anticipated.
            </p>
          </div>
        </div>
      </section>

      <section className="exit-cycle page-width">
        <ExitHeading
          number="09"
          label="THE FULL-CYCLE RESULT"
          title="Origination risk became realised value."
        />
        <div className="exit-cycle-timeline">
          {cycleStages.map(([stage, result], index) => (
            <article key={stage}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{stage}</h3>
              <p>{result}</p>
            </article>
          ))}
        </div>
        <p className="exit-cycle-note">
          The result was not dependent on land appreciation alone. Value was
          created through site control, planning, brand engagement, capital
          structuring, construction, operating performance and transaction
          execution.
        </p>
      </section>

      <section className="exit-lessons">
        <div className="page-width">
          <ExitHeading
            number="10"
            label="EXIT LESSONS"
            title="What the transaction established."
          />
          <div className="exit-lessons-list">
            {exitLessons.map(([title, copy], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="exit-close">
        <div className="page-width exit-close-grid">
          <div>
            <p className="eyebrow eyebrow-dark">FULL DEVELOPMENT CYCLE</p>
            <h2>The project completed the full development cycle.</h2>
          </div>
          <div>
            <p>
              The Weligama Marriott progressed from greenfield land to a
              completed and stabilised internationally operated resort.
            </p>
            <p>
              The share sale on 19 April 2019 converted that work into a
              realised transaction at a reported enterprise value of USD 57
              million. Marriott remained as operator, allowing the hotel to
              continue trading under the same brand after ownership transferred.
            </p>
            <div
              className="exit-final-line"
              aria-label="Full development cycle"
            >
              <span>Originate</span>
              <b>→</b>
              <span>De-risk</span>
              <b>→</b>
              <span>Design</span>
              <b>→</b>
              <span>Build</span>
              <b>→</b>
              <span>Operate</span>
              <b>→</b>
              <span>Exit</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ExitPage;
