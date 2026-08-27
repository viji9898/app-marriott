import { Link } from "react-router-dom";

function RelatedStudies({ studies }) {
  return (
    <section className="related-studies" aria-labelledby="related-studies-title">
      <p className="eyebrow eyebrow-dark">RELATED STUDIES</p>
      <h2 id="related-studies-title">Continue through the development record</h2>
      <div>
        {studies.map((study) => (
          <Link to={study.route} key={study.id}>
            <span>{study.stage} · Study {study.number}</span>
            <h3>{study.title}</h3>
            <p>{study.status === "published" ? "View study" : "Study in preparation"}</p>
            <span aria-hidden="true">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default RelatedStudies;