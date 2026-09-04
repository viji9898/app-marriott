import { Link } from "react-router-dom";

function StudiesIndex({ studies }) {
  if (studies.length === 0) {
    return (
      <p className="studies-index-empty">
        No studies have been added to this stage yet.
      </p>
    );
  }

  const groups = studies.reduce((result, study) => {
    (result[study.stage] ||= []).push(study);
    return result;
  }, {});

  return (
    <div className="studies-index">
      {Object.entries(groups).map(([stage, stageStudies]) => (
        <section className="studies-index-group" key={stage}>
          <header>
            <p>{stage}</p>
            <span>{String(stageStudies.length).padStart(2, "0")} studies</span>
          </header>
          <ol>
            {stageStudies.map((study) => (
              <li key={study.id}>
                <Link to={study.route}>
                  <span>{study.number}</span>
                  <h3>{study.indexTitle || study.title}</h3>
                  <span className="study-index-status">
                    {study.status === "published"
                      ? "View study"
                      : "In preparation"}
                  </span>
                  <span className="study-index-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}

export default StudiesIndex;
