import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
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
import OverviewPage from "./pages/OverviewPage";
import OpportunityPage from "./pages/OpportunityPage";
import DevelopmentPage from "./pages/DevelopmentPage";
import DesignPage from "./pages/DesignPage";
import ConstructionPage from "./pages/ConstructionPage";
import OperationsPage from "./pages/OperationsPage";
import ExitPage from "./pages/ExitPage";
import LessonsPage from "./pages/LessonsPage";
import LibraryPage from "./pages/LibraryPage";
import "./App.css";

const siteUrl = "https://marriott.viji.com";
const socialImage =
  "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-marriott-case-study/hero-weligama-bay-marriott-view-for-balcony.webp";

const routeSeo = {
  "/": {
    title: "Inside the Development | Weligama Bay Marriott Resort",
    description:
      "The full development record of a 198-key Marriott resort in Weligama, Sri Lanka, from origination and construction through operations and exit.",
    label: "Development Record",
  },
  "/overview": {
    title: "Project Overview | Weligama Bay Marriott Development Record",
    description:
      "Project overview of the 198-key Weligama Bay Marriott Resort & Spa: origination, capital structure, delivery, stabilised operations and the 2019 share sale.",
    label: "Project Overview",
  },
  "/opportunity": {
    title: "The Opportunity | Weligama Bay Marriott Development Record",
    description:
      "The market, product and site thesis behind the Weligama Bay Marriott development before land acquisition, brand agreement and final design.",
    label: "Opportunity",
  },
  "/development": {
    title: "Development / Origination | Weligama Bay Marriott Development Record",
    description:
      "How the Weligama Bay Marriott market thesis became a controlled development site through coastal search, land assembly and acquisition.",
    label: "Development",
  },
  "/design": {
    title: "Design | Weligama Bay Marriott Development Record",
    description:
      "How the bay, constrained site, Marriott standards and operating requirements shaped the design of the 198-key Weligama Bay resort.",
    label: "Design",
  },
  "/construction": {
    title: "Construction | Weligama Bay Marriott Development Record",
    description:
      "The direct-control delivery, specialist coordination, infrastructure, procurement and commissioning of the 198-key Weligama resort.",
    label: "Construction",
  },
  "/operations": {
    title: "Operations | Weligama Bay Marriott Development Record",
    description:
      "How the 198-key Weligama resort was mobilised, opened, operated and stabilised at 75% occupancy, USD 155 ADR and a 38% GOP margin.",
    label: "Operations",
  },
  "/exit": {
    title: "Exit | Weligama Bay Marriott Development Record",
    description:
      "The 19 April 2019 share sale of the 198-key Weligama resort at a USD 57 million enterprise value, with Marriott retained as operator.",
    label: "Exit",
  },
  "/lessons": {
    title: "Lessons | Weligama Bay Marriott Development Record",
    description:
      "A candid record of the planning, sequencing, coordination, commissioning and operating lessons established by the Weligama resort development.",
    label: "Lessons",
  },
  "/library": {
    title: "Project Library | Marriott Weligama Development Record",
    description:
      "A curated archive of the reports, drawings, approvals, financial records and operating evidence behind the Marriott Weligama development.",
    label: "Project Library",
  },
};

const stages = [
  ["01", "Originate", Compass],
  ["02", "Underwrite", Calculator],
  ["03", "Structure", Layers3],
  ["04", "Design", PencilRuler],
  ["05", "Construct", HardHat],
  ["06", "Operate", Activity],
  ["07", "Exit", LogOut],
];

const projectTeam = [
  ["Marriott International", "Hotel Brand & Operator"],
  ["Belt Collins", "Landscape Architecture"],
  ["Wilson Associates", "Interior Design"],
  ["East West Engineering", "Main Contractor"],
  ["Shin Nippon", "Plumbing Contractor"],
  ["Access Engineering", "HVAC Contractor"],
  ["Fentons", "Electrical & ELV Contractor"],
];

function RouteSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = pathname.replace(/\/+$/, "") || "/";
    const page = routeSeo[normalizedPath];
    const canonicalUrl = `${siteUrl}${normalizedPath === "/" ? "/" : normalizedPath}`;
    const title = page?.title || "Page not found | Weligama Development Record";
    const description =
      page?.description || "This page is not part of the Weligama development record.";

    const setMeta = (selector, attribute, value, content) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    document.title = title;
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonicalUrl);
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta(
      'meta[name="robots"]',
      "name",
      "robots",
      page ? "index, follow, max-image-preview:large" : "noindex, nofollow",
    );
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[property="og:image"]', "property", "og:image", socialImage);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", socialImage);

    let schema = document.querySelector("#route-seo-schema");
    if (!schema) {
      schema = document.createElement("script");
      schema.id = "route-seo-schema";
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description,
      url: canonicalUrl,
      isPartOf: { "@id": `${siteUrl}/#website` },
      primaryImageOfPage: socialImage,
      inLanguage: "en",
      ...(page && normalizedPath !== "/"
        ? {
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Development Record",
                  item: `${siteUrl}/`,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: page.label,
                  item: canonicalUrl,
                },
              ],
            },
          }
        : {}),
    });
  }, [pathname]);

  return null;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
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
            <Link
              key={path}
              to={path}
              aria-current={pathname === path ? "page" : undefined}
            >
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
            <Link
              key={path}
              to={path}
              aria-current={pathname === path ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
              <ArrowRight size={16} />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
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
            A first-person account of delivering a complex beachfront resort in
            an emerging market, from identifying the right opportunity to
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
function ProjectTeam() {
  const [expanded, setExpanded] = useState(false);
  const visibleTeam = expanded ? projectTeam : projectTeam.slice(0, 4);

  return (
    <section className="project-team">
      <div className="page-width">
        <div className="project-team-heading">
          <p className="eyebrow eyebrow-dark">THE PROJECT TEAM</p>
          <p>
            Specialist consultants and contractors appointed to design, deliver
            and operate the resort.
          </p>
        </div>
        <div className="project-team-grid" id="project-team-list">
          {visibleTeam.map(([organisation, role]) => (
            <article key={organisation}>
              <h3>{organisation}</h3>
              <p>{role}</p>
            </article>
          ))}
        </div>
        <button
          className="project-team-toggle"
          type="button"
          aria-expanded={expanded}
          aria-controls="project-team-list"
          onClick={() => setExpanded((current) => !current)}
        >
          {expanded ? "Show less" : "View more"}
        </button>
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
          <Link to="/library">Project Library</Link>
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
      <ProjectTeam />
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
      <ScrollToTop />
      <RouteSeo />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/opportunity" element={<OpportunityPage />} />
        <Route path="/development" element={<DevelopmentPage />} />
        <Route path="/design" element={<DesignPage />} />
        <Route path="/construction" element={<ConstructionPage />} />
        <Route path="/operations" element={<OperationsPage />} />
        <Route path="/exit" element={<ExitPage />} />
        <Route path="/lessons" element={<LessonsPage />} />
        <Route path="/library" element={<LibraryPage />} />
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
