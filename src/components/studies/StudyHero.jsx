import { Link } from "react-router-dom";

function StudyHero({ study }) {
  return (
    <section className="detail-study-hero">
      <div className="page-width detail-study-breadcrumb">
        <Link to="/project-studies">Project Studies</Link>
        <span aria-hidden="true">/</span>
        <Link to={`/${study.stage.toLowerCase()}`}>{study.stage}</Link>
        <span aria-hidden="true">/</span>
        <Link to={study.route} aria-current="page">
          {study.title}
        </Link>
      </div>
      <div className="page-width detail-study-hero-grid">
        <div>
          <p className="eyebrow">
            {study.stage} · Study {study.number}
          </p>
          <h1>{study.title}</h1>
          <p className="detail-study-standfirst">{study.summary}</p>
        </div>
        {study.image && (
          <figure>
            <img src={study.image} alt={study.imageAlt} fetchPriority="high" />
            <figcaption>
              Weligama Bay and the completed beachfront development.
            </figcaption>
          </figure>
        )}
      </div>
      <dl className="page-width detail-study-metadata">
        {study.metadata.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default StudyHero;
