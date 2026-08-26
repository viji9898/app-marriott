import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import {
  ArrowRight,
  Menu,
  X,
  Compass,
  Calculator,
  Layers3,
  PencilRuler,
  HardHat,
  Activity,
  LogOut,
  Map,
  FileText,
  Banknote,
  ClipboardCheck,
  Camera,
  CircleDot,
} from "lucide-react";
import {
  chapters,
  facts,
  flowLabels,
  lessons,
  libraryItems,
  navItems,
  outcomes,
  pageData,
} from "./data/projectData";
import "./App.css";

const stages = [
  ["01", "Originate", Compass],
  ["02", "Underwrite", Calculator],
  ["03", "Structure", Layers3],
  ["04", "Design", PencilRuler],
  ["05", "Construct", HardHat],
  ["06", "Operate", Activity],
  ["07", "Exit", LogOut],
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <Link className="wordmark" to="/" onClick={() => setOpen(false)}>
          WELIGAMA <span>/</span> DEVELOPMENT RECORD
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, path]) => (
            <Link key={path} to={path}>
              {label}
            </Link>
          ))}
        </nav>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {navItems.map(([label, path]) => (
            <Link key={path} to={path} onClick={() => setOpen(false)}>
              {label}
              <ArrowRight size={16} />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
function Hero() {
  return (
    <section className="hero">
      <div className="hero-image" aria-hidden="true" />
      <div className="hero-content page-width">
        <p className="eyebrow">
          A HOTEL DEVELOPMENT CASE STUDY <span>·</span> 2011–2019
        </p>
        <h1>
          Inside the
          <br />
          <em>Development</em>
        </h1>
        <p className="hero-title">Weligama Bay Marriott Resort &amp; Spa</p>
        <p className="hero-intro">
          The origination, financing, construction, operation and exit of a
          198-key internationally branded resort in Sri Lanka.
        </p>
        <div className="hero-actions">
          <a className="button button-copper" href="#development-cycle">
            Explore the Development <ArrowRight size={16} />
          </a>
          <Link className="button button-ghost" to="/overview">
            View Project Overview
          </Link>
        </div>
      </div>
      <a
        className="scroll-cue"
        href="#facts"
        aria-label="Scroll to project facts"
      >
        <span /> Scroll to explore
      </a>
    </section>
  );
}
function ProjectFacts() {
  return (
    <section id="facts" className="facts-band">
      <div className="page-width facts-grid">
        {facts.map(([value, label]) => (
          <div className="fact" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
function SectionIntro() {
  return (
    <section className="intro page-width">
      <div>
        <p className="eyebrow eyebrow-dark">THE COMPLETE DEVELOPMENT CYCLE</p>
        <h2>From greenfield site to institutional exit</h2>
      </div>
      <div className="intro-copy">
        <p>
          The project was conceived following the end of Sri Lanka’s civil war,
          when tourism demand was accelerating but internationally branded
          resort supply remained limited outside Colombo.
        </p>
        <p>
          The development evolved through several feasibility iterations before
          becoming a 198-key Marriott resort. The project progressed through
          site acquisition, feasibility, brand engagement, capital structuring,
          consultant selection, construction oversight, opening, stabilisation
          and eventual exit.
        </p>
      </div>
      <aside className="summary">
        <div>
          <span>Location</span>
          <b>Weligama, Sri Lanka</b>
        </div>
        <div>
          <span>Asset</span>
          <b>Beachfront resort</b>
        </div>
        <div>
          <span>Keys</span>
          <b>198</b>
        </div>
        <div>
          <span>Operator</span>
          <b>Marriott International</b>
        </div>
        <div>
          <span>Exit date</span>
          <b>19 April 2019</b>
        </div>
        <div>
          <span>Buyer</span>
          <b>Hotel Properties Limited, Singapore</b>
        </div>
        <div>
          <span>Transaction</span>
          <b>Share sale</b>
        </div>
      </aside>
    </section>
  );
}
function DevelopmentTimeline() {
  return (
    <section id="development-cycle" className="timeline-section">
      <div className="page-width">
        <div className="section-heading">
          <p className="eyebrow eyebrow-dark">THE COMPLETE DEVELOPMENT CYCLE</p>
          <h2>From greenfield site to institutional exit</h2>
          <p>
            A first-person account of delivering a complex beachfront resort
            in an emerging market, from identifying the right opportunity to
            achieving a successful institutional exit.
          </p>
        </div>
        <div className="timeline">
          {stages.map(([number, label, Icon]) => (
            <div className="stage" key={label}>
              <div className="stage-icon">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <span>{number}</span>
              <b>{label}</b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function ChapterGrid() {
  const icons = [
    Compass,
    Map,
    Banknote,
    PencilRuler,
    HardHat,
    Activity,
    LogOut,
    FileText,
  ];
  return (
    <section className="chapters page-width">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow eyebrow-dark">THE GUIDE</p>
          <h2>
            Eight chapters behind
            <br />
            the finished asset
          </h2>
        </div>
        <p>
          Each section follows the project from decision to consequence, with
          the working material to be added as the record develops.
        </p>
      </div>
      <div className="chapter-grid">
        {chapters.map(([number, title, _description, path], index) => {
          const Icon = icons[index];
          return (
            <Link className="chapter" to={path} key={title}>
              <div className="chapter-top">
                <span>{number}</span>
                <Icon size={22} strokeWidth={1.3} />
              </div>
              <h3>{title}</h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
function DecisionFlow() {
  return (
    <section className="decision">
      <div className="page-width">
        <p className="eyebrow">THE INVESTMENT LOGIC</p>
        <h2>
          Development is a sequence
          <br />
          of connected decisions
        </h2>
        <p className="decision-copy">
          Room count, brand standards, area efficiency, construction cost,
          operating performance and exit value cannot be considered
          independently. Each decision changes the economics and operational
          capability of the completed asset.
        </p>
        <div className="flow">
          {flowLabels.map((item, index) => (
            <div key={item} className="flow-item">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <b>{item}</b>
              {index < 5 && <ArrowRight size={17} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function LessonsPreview() {
  return (
    <section className="lessons page-width">
      <div className="split-heading">
        <div>
          <p className="eyebrow eyebrow-dark">FIELD NOTES</p>
          <h2>Selected lessons</h2>
        </div>
        <p>
          Development discipline is most visible in the decisions that do not
          make it into a brochure.
        </p>
      </div>
      <div className="lesson-grid">
        {lessons.map(([title, copy], index) => (
          <article key={title}>
            <span>0{index + 1}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
      <Link className="text-link" to="/lessons">
        Read the complete lessons <ArrowRight size={15} />
      </Link>
    </section>
  );
}
function OutcomeMetrics() {
  return (
    <section className="outcome">
      <div className="page-width outcome-grid">
        <div>
          <p className="eyebrow eyebrow-dark">PROJECT RESULTS</p>
          <h2>Delivered on vision and business plan</h2>
          <p>
            Marriott International remained as operator following the share sale
            to Hotel Properties Limited. The transaction completed the full
            development cycle from greenfield origination to institutional exit.
          </p>
        </div>
        <div className="metrics">
          {outcomes.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <b>{value}</b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function LibraryPreview() {
  const icons = [PencilRuler, Map, Banknote, ClipboardCheck, HardHat, Camera];
  return (
    <section className="library page-width">
      <div className="split-heading">
        <div>
          <p className="eyebrow eyebrow-dark">THE ARCHIVE</p>
          <h2>The project library</h2>
        </div>
        <p>
          The deeper sections will bring together the drawings, programmes,
          budgets, photographs, correspondence and decisions behind the
          completed asset.
        </p>
      </div>
      <div className="library-grid">
        {libraryItems.map((title, index) => {
          const Icon = icons[index];
          return (
            <div key={title}>
              <Icon size={20} strokeWidth={1.4} />
              <b>{title}</b>
              <span>In development</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer>
      <div className="page-width footer-grid">
        <div>
          <Link className="footer-title" to="/">
            WELIGAMA BAY MARRIOTT
            <br />
            RESORT &amp; SPA
          </Link>
          <p>
            A first-person record of originating, financing, delivering,
            operating and exiting a 198-key hospitality asset in Sri Lanka.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <Link to="/overview">Project Overview</Link>
          <Link to="/development">Development Guide</Link>
          <Link to="/lessons">Lessons</Link>
          <span>Project Library</span>
        </nav>
      </div>
      <div className="page-width copyright">
        © 2026 Viji Wijesuriya. Project development record.
      </div>
    </footer>
  );
}
function HomePage() {
  return (
    <>
      <Hero />
      <ProjectFacts />
      <DevelopmentTimeline />
      <ChapterGrid />
      <OutcomeMetrics />
      {window.location.hash === "#extended" && (
        <>
          <SectionIntro />
          <DecisionFlow />
          <LessonsPreview />
          <LibraryPreview />
        </>
      )}
    </>
  );
}
function PlaceholderPage({ section, title, intro }) {
  return (
    <main className="placeholder page-width">
      <p className="eyebrow eyebrow-dark">{section}</p>
      <h1>{title}</h1>
      <p className="placeholder-intro">{intro}</p>
      <div className="placeholder-note">
        <CircleDot size={20} />
        <p>This section is being developed.</p>
        <span>
          The project record will expand here with source material, decisions
          and outcomes.
        </span>
      </div>
      <Link className="text-link" to="/">
        Return to the homepage <ArrowRight size={15} />
      </Link>
    </main>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {Object.entries(pageData).map(([path, [section, title, intro]]) => (
          <Route
            key={path}
            path={path}
            element={
              <PlaceholderPage section={section} title={title} intro={intro} />
            }
          />
        ))}
        <Route
          path="*"
          element={
            <PlaceholderPage
              section="404 / NOT FOUND"
              title="Page not found"
              intro="This page is not part of the current project record."
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
