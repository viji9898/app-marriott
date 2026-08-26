import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  Banknote,
  Building2,
  Calculator,
  Compass,
  HardHat,
  Layers3,
  LogOut,
  PencilRuler,
} from "lucide-react";

const projectRecord = [
  ["Asset", "Weligama Bay Marriott Resort & Spa"],
  ["Location", "Weligama, Sri Lanka"],
  ["Principal site", "3.1 acres, freehold beachfront"],
  ["Keys", "198"],
  ["Operator", "Marriott International"],
  ["Development lead", "Managing Director and Board Member"],
  ["Opened", "20 July 2017"],
  ["Exit", "19 April 2019"],
];

const overviewFacts = [
  ["198", "Keys"],
  ["USD 42M", "Development cost"],
  ["USD 57M", "Exit value"],
  ["USD 287K", "Exit value per key"],
];

const developmentCycle = [
  {
    number: "01",
    title: "Originate",
    icon: Compass,
    copy: "Weligama was identified after a review of opportunities along Sri Lanka’s coast, and the principal 3.1-acre beachfront site was assembled before a hotel brand was secured.",
    detail: "Land acquired 7 March 2011",
  },
  {
    number: "02",
    title: "Underwrite",
    icon: Calculator,
    copy: "The concept moved through several feasibility iterations, from an initial 50–60 room property to a 198-key resort. Scale, room orientation, area efficiency and operating economics were tested together.",
    detail: "50–60 rooms → 198 keys",
  },
  {
    number: "03",
    title: "Structure",
    icon: Layers3,
    copy: "The project included equity raising, bank financing and subsequent refinancing. The completed capital structure combined shareholder equity, debt from two Sri Lankan banks and institutional pension capital.",
    detail: "35% equity / 65% debt",
  },
  {
    number: "04",
    title: "Design",
    icon: PencilRuler,
    copy: "The developing brief was coordinated with Marriott and the consultant team. The product was organised around the bay, with every guest room oriented towards the sea and operations resolved behind it.",
    detail: "Marriott-led brand standards",
  },
  {
    number: "05",
    title: "Construct",
    icon: HardHat,
    copy: "Delivery was overseen hands-on from the site for approximately six years. A small core team managed consultants, contractors, procurement, utilities, approvals and continual design coordination.",
    detail: "Full-time, on-site oversight",
  },
  {
    number: "06",
    title: "Operate",
    icon: Activity,
    copy: "The project continued through pre-opening and the initial operating period with Marriott. The hotel opened in July 2017, became operationally profitable within its first season and progressed to stabilised performance.",
    detail: "Opened 20 July 2017",
  },
  {
    number: "07",
    title: "Exit",
    icon: LogOut,
    copy: "The exit was completed through a share sale to Hotel Properties Limited of Singapore. Marriott remained in place as operator, giving the buyer continuity of brand and management after completion.",
    detail: "Share sale completed 19 April 2019",
  },
];

const operatingMetrics = [
  ["ADR", "USD 155"],
  ["Occupancy", "75%"],
  ["GOP margin", "38%"],
];

const transactionMetrics = [
  ["Enterprise value", "USD 57M"],
  ["Development cost", "USD 42M"],
  ["Equity invested", "USD 15M"],
  ["Value per key", "USD 287K"],
];

function OverviewPage() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    const previousDescription = description?.getAttribute("content");
    const previousCanonical = canonical?.getAttribute("href");

    document.title =
      "Project Overview | Weligama Bay Marriott Development Record";
    description?.setAttribute(
      "content",
      "Project overview of the 198-key Weligama Bay Marriott Resort & Spa: origination, capital structure, delivery, stabilised operations and the 2019 share sale.",
    );
    canonical?.setAttribute("href", "https://marriott.viji.com/overview");

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
    <main className="overview-page">
      <section className="overview-hero">
        <div className="overview-hero-image" aria-hidden="true" />
        <div className="page-width overview-hero-content">
          <p className="eyebrow">
            00 / PROJECT OVERVIEW <span>·</span> WELIGAMA, SRI LANKA
          </p>
          <h1>
            One asset.
            <br />
            <em>The full cycle.</em>
          </h1>
          <p className="overview-hero-intro">
            The project progressed from opportunity origination and land
            assembly through capital structuring, delivery, opening, operations
            and the eventual sale of the company that owned the resort.
          </p>
        </div>
      </section>

      <section className="overview-facts" aria-label="Key project facts">
        <div className="page-width overview-facts-grid">
          {overviewFacts.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="overview-definition page-width">
        <div className="overview-definition-copy">
          <p className="eyebrow eyebrow-dark">THE PROJECT</p>
          <h2>A greenfield beachfront resort developed for long-term value</h2>
          <p className="overview-lead">
            The project began with a freehold beachfront site and no brand
            commitment. It ended with a completed 198-key Marriott resort, a
            stabilised operating business and an institutional share sale.
          </p>
          <p>
            Following the end of Sri Lanka’s civil war, international tourism
            demand was rising while much of the established hotel inventory
            remained concentrated in Colombo or required substantial renewal.
            This created an opportunity to develop a large, internationally
            branded resort on the south coast, positioned for the country’s
            next phase of tourism growth.
          </p>
          <p>
            Weligama offered a broad natural bay, direct beach frontage and a
            location capable of supporting a destination-scale resort. The
            original boutique concept expanded as the feasibility work, brand
            requirements and operating model became clearer. The resulting
            asset was designed at a scale intended to support operating
            efficiency, market relevance and a credible future exit.
          </p>
        </div>

        <aside className="overview-record" aria-label="Project record">
          <div className="overview-record-heading">
            <Building2 size={20} strokeWidth={1.4} />
            <span>Project record</span>
          </div>
          <dl>
            {projectRecord.map(([term, description]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      <section className="overview-thesis">
        <div className="page-width overview-thesis-grid">
          <div>
            <p className="eyebrow">THE DEVELOPMENT THESIS</p>
            <h2>Demand, location, brand and scale had to work together</h2>
          </div>
          <div className="overview-thesis-points">
            <article>
              <span>01</span>
              <h3>Enter during a structural change in demand</h3>
              <p>
                The investment thesis was formed as Sri Lanka moved from a
                conflict-constrained tourism market into a period of rapid
                international demand growth.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Secure the site before the market fully repriced</h3>
              <p>
                The principal 3.1-acre site was assembled from three ownership
                groups for approximately USD 1.5 million and acquired before a
                hotel operator was appointed.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Use an international operator to de-risk execution</h3>
              <p>
                Marriott brought operating standards, distribution,
                pre-opening systems and brand recognition to a first-time
                greenfield hospitality development.
              </p>
            </article>
            <article>
              <span>04</span>
              <h3>Build a product with operating and exit relevance</h3>
              <p>
                The scale, all-sea-facing room orientation and resort
                facilities were assessed not only as design decisions, but as
                inputs into revenue, efficiency and long-term asset value.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="overview-cycle page-width">
        <div className="overview-section-heading">
          <div>
            <p className="eyebrow eyebrow-dark">DEVELOPMENT MANDATE</p>
            <h2>Responsibility across the development cycle</h2>
          </div>
          <p>
            Responsibility was not limited to a single workstream. The mandate
            continued as the project moved from an investment proposition into
            a physical asset, an operating business and, ultimately, a completed
            transaction.
          </p>
        </div>

        <div className="overview-cycle-list">
          {developmentCycle.map(
            ({ number, title, icon: Icon, copy, detail }) => (
              <article key={title}>
                <div className="overview-cycle-marker">
                  <span>{number}</span>
                  <Icon size={21} strokeWidth={1.35} />
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
                <b>{detail}</b>
              </article>
            ),
          )}
        </div>
      </section>

      <section className="overview-evidence">
        <div className="page-width">
          <div className="overview-section-heading overview-section-heading-light">
            <div>
              <p className="eyebrow">EVIDENCE OF DELIVERY</p>
              <h2>Operating performance and realised value</h2>
            </div>
            <p>
              The project was tested twice: first as an operating hotel and
              then as an investment asset. The figures below record the
              stabilised trading position and the completed transaction.
            </p>
          </div>

          <div className="overview-evidence-grid">
            <article>
              <div className="overview-evidence-title">
                <Activity size={20} strokeWidth={1.4} />
                <div>
                  <span>01 / OPERATIONS</span>
                  <h3>Stabilised performance</h3>
                </div>
              </div>
              <div className="overview-metric-list">
                {operatingMetrics.map(([label, value]) => (
                  <div key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
              <p>
                The hotel reached operational profitability during its first
                season and subsequently delivered the stabilised metrics shown
                above under Marriott’s management.
              </p>
            </article>

            <article>
              <div className="overview-evidence-title">
                <Banknote size={20} strokeWidth={1.4} />
                <div>
                  <span>02 / TRANSACTION</span>
                  <h3>Institutional share sale</h3>
                </div>
              </div>
              <div className="overview-metric-list overview-metric-list-transaction">
                {transactionMetrics.map(([label, value]) => (
                  <div key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
              <p>
                Hotel Properties Limited of Singapore acquired the company on
                19 April 2019. Marriott continued as operator following the
                sale.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="overview-close page-width">
        <div className="overview-close-icon" aria-hidden="true">
          <Building2 size={30} strokeWidth={1.15} />
        </div>
        <p className="eyebrow eyebrow-dark">THE TRACK RECORD</p>
        <h2>From an undeveloped site to a realised investment</h2>
        <p>
          The significance of Weligama is not limited to the completed hotel.
          It is a record of decisions made across land, product, capital,
          design, construction, operations and transaction execution. The
          following chapters examine those decisions in detail, including what
          worked and what could be approached differently today.
        </p>
        <div className="overview-close-actions">
          <Link className="button button-dark" to="/opportunity">
            Continue to the opportunity <ArrowRight size={16} />
          </Link>
          <Link className="text-link" to="/">
            Return to the homepage
          </Link>
        </div>
      </section>
    </main>
  );
}

export default OverviewPage;