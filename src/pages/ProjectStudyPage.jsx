import { Link } from "react-router-dom";
import { STUDY_FRAMEWORK } from "../data/projectStudies";

function ProjectStudyPage({ study }) {
  return (
    <main className="project-study-page">
      <section className="project-study-hero">
        <div className="page-width">
          <p className="eyebrow">
            {study.stage} / Study {study.number}
          </p>
          <h1>{study.title}</h1>
          {study.summary && <p className="project-study-summary">{study.summary}</p>}
          <p className="project-study-status">Study in preparation</p>
        </div>
      </section>

      <section className="project-study-body page-width">
        <div>
          <p className="eyebrow eyebrow-dark">STUDY STRUCTURE</p>
          <h2>A consistent decision record</h2>
          <p>
            This study will follow the project-wide framework used to examine
            each decision and its supporting record.
          </p>
          <Link className="project-study-return" to="/project-studies">
            <span aria-hidden="true">←</span> Return to all project studies
          </Link>
        </div>
        <ol>
          {STUDY_FRAMEWORK.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}

export default ProjectStudyPage;