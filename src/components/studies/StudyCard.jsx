import { Link } from "react-router-dom";

function StudyCard({ study }) {
  return (
    <Link className="study-card" to={study.route}>
      <div className="study-card-heading">
        <span>{study.stage}</span>
        <span>Study {study.number}</span>
      </div>
      <h3>{study.title}</h3>
      <p>{study.summary}</p>
      <div className="study-card-footer">
        <span className="study-evidence">
          {study.evidenceStatus || "Evidence classification pending"}
        </span>
        <span className="study-preparation">
          {study.status === "published" ? "View study" : "Study in preparation"}
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}

export default StudyCard;
