import { useDeferredValue, useState } from "react";
import { Link } from "react-router-dom";
import { LIBRARY_PHASES, LIBRARY_RECORDS } from "../data/libraryRecords";

const evidenceGuide = [
  ["Primary record", "Original agreement, approval, drawing, financial statement or contemporaneous project record."],
  ["Contemporaneous record", "Created during the relevant project phase."],
  ["Retrospective record", "Prepared after completion using recollection and available project material."],
  ["Corroborated", "Supported by more than one independent project source."],
  ["Reported", "Contained in a source record but not yet independently reconciled."],
  ["Redacted", "Sensitive information has been removed from the published version."],
];

const relatedChapters = [
  ["01", "Overview", "/overview"],
  ["02", "Development", "/development"],
  ["03", "Design", "/design"],
  ["04", "Construction", "/construction"],
  ["05", "Operations", "/operations"],
  ["06", "Exit", "/exit"],
  ["07", "Lessons", "/lessons"],
];

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function EvidenceBadge({ status }) {
  return <span className={`library-badge evidence-${slugify(status)}`}>{status}</span>;
}

function AccessBadge({ access }) {
  return <span className={`library-access access-${slugify(access)}`}>{access}</span>;
}

function RecordAction({ record }) {
  if (record.fileUrl && record.access === "Public") {
    return <a href={record.fileUrl}>View document</a>;
  }

  if (record.access === "Restricted") {
    return <span>Restricted</span>;
  }

  return <span>Document pending publication</span>;
}

function LibraryHero() {
  return (
    <section className="library-page-hero">
      <div className="page-width library-page-hero-grid">
        <div className="library-page-hero-copy">
          <p className="eyebrow eyebrow-dark">PROJECT ARCHIVE</p>
          <h1>The documentary record behind the development.</h1>
          <p>
            A curated archive of the reports, drawings, approvals, financial records
            and operating evidence supporting the Marriott Weligama project history.
          </p>
        </div>
        <div className="library-archive-composition">
          <img
            className="library-hero-image"
            src="https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-marriott-case-study/hero-project-libary-marriott-road-building-view.webp"
            alt="Road and building view at the Marriott Weligama development"
          />
        </div>
      </div>
    </section>
  );
}

function LibraryStats() {
  const phases = new Set(LIBRARY_RECORDS.map((record) => record.phase)).size;
  const types = new Set(LIBRARY_RECORDS.map((record) => record.type)).size;
  const verified = LIBRARY_RECORDS.filter((record) =>
    ["Primary record", "Corroborated"].includes(record.evidenceStatus),
  ).length;
  const stats = [
    [LIBRARY_RECORDS.length, "Records"],
    [phases, "Project phases"],
    [types, "Document types"],
    ...(verified ? [[verified, "Verified records"]] : []),
  ];

  return (
    <section className="library-stats page-width" aria-label="Archive summary">
      {stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
    </section>
  );
}

function FormatPlaceholder({ record }) {
  if (record.thumbnail) {
    return (
      <img
        className="library-format-thumbnail"
        src={record.thumbnail}
        alt={`${record.shortTitle} report cover`}
      />
    );
  }

  return (
    <div className="library-format-placeholder" aria-hidden="true">
      <span>{record.format}</span>
      <b>{record.id}</b>
      <i /><i /><i />
    </div>
  );
}

function FeaturedRecord({ record }) {
  return (
    <article className="library-featured-record">
      <FormatPlaceholder record={record} />
      <div className="library-featured-body">
        <div className="library-record-kicker">
          <span>{record.phase}</span><span>{record.format}</span>
          {record.pages && <span>{record.pages} pages</span>}
        </div>
        <h3>{record.shortTitle}</h3>
        <p>{record.description}</p>
        <div className="library-record-status">
          <EvidenceBadge status={record.evidenceStatus} />
          <AccessBadge access={record.access} />
        </div>
        <div className="library-featured-footer">
          <span>{record.id}</span>
          <a href={`#record-${record.slug}`}>View record details</a>
        </div>
      </div>
    </article>
  );
}

function LibraryFilters({ filters, options, onChange, onReset, hasFilters }) {
  return (
    <div className="library-filters" role="search" aria-label="Filter archive records">
      <label>
        <span>Project phase</span>
        <select value={filters.phase} onChange={(event) => onChange("phase", event.target.value)}>
          {options.phases.map((phase) => <option key={phase}>{phase}</option>)}
        </select>
      </label>
      <label>
        <span>Document type</span>
        <select value={filters.type} onChange={(event) => onChange("type", event.target.value)}>
          {options.types.map((type) => <option key={type}>{type}</option>)}
        </select>
      </label>
      <label>
        <span>Access level</span>
        <select value={filters.access} onChange={(event) => onChange("access", event.target.value)}>
          {options.access.map((access) => <option key={access}>{access}</option>)}
        </select>
      </label>
      <label className="library-search-field">
        <span>Search the archive</span>
        <input
          type="search"
          value={filters.search}
          onChange={(event) => onChange("search", event.target.value)}
          placeholder="Search records"
        />
      </label>
      {hasFilters && <button type="button" onClick={onReset}>Reset filters</button>}
    </div>
  );
}

function PhaseNavigation({ phases, activePhase, onSelect }) {
  return (
    <nav className="library-phase-navigation" aria-label="Archive phases">
      {phases.map((phase) => (
        <button
          type="button"
          key={phase}
          className={activePhase === phase ? "is-active" : ""}
          aria-pressed={activePhase === phase}
          onClick={() => onSelect(phase)}
        >
          {phase}
        </button>
      ))}
    </nav>
  );
}

function RecordRow({ record }) {
  return (
    <article className="library-record-row" id={`record-${record.slug}`}>
      <div className="library-record-title" data-label="Title">
        <span>{record.id}</span>
        <h3>{record.title}</h3>
        <p>{record.description}</p>
      </div>
      <span data-label="Phase">{record.phase}</span>
      <span data-label="Date">{record.date || "Not dated"}</span>
      <span data-label="Type">{record.type}<small>{record.format}</small></span>
      <div data-label="Evidence"><EvidenceBadge status={record.evidenceStatus} /></div>
      <div data-label="Access"><AccessBadge access={record.access} /></div>
      <div className="library-record-action" data-label="Action"><RecordAction record={record} /></div>
      <details className="library-record-details">
        <summary>Record notes and related chapters</summary>
        {record.notes && <p className="library-record-note"><span>Record note</span>{record.notes}</p>}
        <div className="library-related-routes">
          <span>Related chapters</span>
          {record.relatedRoutes.map((route) => (
            <Link key={route} to={route}>{route.replace("/", "")}</Link>
          ))}
        </div>
      </details>
    </article>
  );
}

function RecordIndex({ records, onReset }) {
  if (!records.length) {
    return (
      <div className="library-empty-state">
        <h3>No records match these filters.</h3>
        <p>Adjust the search term or remove one or more filters.</p>
        <button type="button" onClick={onReset}>Reset filters</button>
      </div>
    );
  }

  return (
    <div className="library-record-index">
      <div className="library-index-head" aria-hidden="true">
        <span>Title</span><span>Phase</span><span>Date</span><span>Type</span>
        <span>Evidence</span><span>Access</span><span>Action</span>
      </div>
      {records.map((record) => <RecordRow key={record.id} record={record} />)}
    </div>
  );
}

function EvidenceGuide() {
  return (
    <section className="library-evidence-guide">
      <div className="page-width">
        <p className="eyebrow">EVIDENCE GUIDE</p>
        <h2>How the records are classified.</h2>
        <div className="library-evidence-grid">
          {evidenceGuide.map(([label, description]) => (
            <article key={label}><EvidenceBadge status={label} /><p>{description}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LibraryPage() {
  const initialFilters = { search: "", phase: "All", type: "All", access: "All" };
  const [filters, setFilters] = useState(initialFilters);
  const deferredSearch = useDeferredValue(filters.search.trim().toLowerCase());
  const representedPhases = new Set(LIBRARY_RECORDS.map((record) => record.phase));
  const phaseOptions = LIBRARY_PHASES.filter((phase) => phase === "All" || representedPhases.has(phase));
  const typeOptions = ["All", ...new Set(LIBRARY_RECORDS.map((record) => record.type))];
  const accessOptions = ["All", ...new Set(LIBRARY_RECORDS.map((record) => record.access))];
  const featuredRecords = LIBRARY_RECORDS.filter((record) => record.featured);
  const filteredRecords = LIBRARY_RECORDS.filter((record) => {
    const searchable = [
      record.title, record.shortTitle, record.description, record.id,
      record.phase, record.type, record.format,
    ].join(" ").toLowerCase();
    return (
      (!deferredSearch || searchable.includes(deferredSearch)) &&
      (filters.phase === "All" || record.phase === filters.phase) &&
      (filters.type === "All" || record.type === filters.type) &&
      (filters.access === "All" || record.access === filters.access)
    );
  });
  const hasFilters = Boolean(filters.search) || [filters.phase, filters.type, filters.access].some((value) => value !== "All");
  const updateFilter = (name, value) => setFilters((current) => ({ ...current, [name]: value }));
  const resetFilters = () => setFilters(initialFilters);

  return (
    <main className="library-page">
      <LibraryHero />
      <LibraryStats />

      <section className="library-featured page-width">
        <p className="eyebrow eyebrow-dark">SELECTED MATERIAL</p>
        <h2>Featured records</h2>
        <div className="library-featured-list">
          {featuredRecords.map((record) => <FeaturedRecord key={record.id} record={record} />)}
        </div>
      </section>

      <section className="library-browse page-width">
        <div className="library-browse-heading">
          <div><p className="eyebrow eyebrow-dark">DOCUMENT INDEX</p><h2>Browse the archive</h2></div>
          <p aria-live="polite">{filteredRecords.length} {filteredRecords.length === 1 ? "record" : "records"}</p>
        </div>
        <LibraryFilters
          filters={filters}
          options={{ phases: phaseOptions, types: typeOptions, access: accessOptions }}
          onChange={updateFilter}
          onReset={resetFilters}
          hasFilters={hasFilters}
        />
        <PhaseNavigation phases={phaseOptions} activePhase={filters.phase} onSelect={(phase) => updateFilter("phase", phase)} />
        <RecordIndex records={filteredRecords} onReset={resetFilters} />
      </section>

      <EvidenceGuide />

      <section className="library-access-note page-width">
        <span>ARCHIVE POLICY</span>
        <div><h2>Access and confidentiality</h2><p>Selected records are published in full. Commercially sensitive documents are presented as redacted extracts, verified summaries or restricted records. A listing in the archive does not imply that the underlying document is publicly available.</p></div>
      </section>

      <section className="library-related page-width">
        <p className="eyebrow eyebrow-dark">RELATED PROJECT CHAPTERS</p>
        <h2>Explore the project record.</h2>
        <nav aria-label="Related project chapters">
          {relatedChapters.map(([number, label, route]) => (
            <Link key={route} to={route}><span>{number}</span><strong>{label}</strong><b>→</b></Link>
          ))}
        </nav>
      </section>
    </main>
  );
}

export default LibraryPage;