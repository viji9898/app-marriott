import { Link } from "react-router-dom";
import { STUDY_FRAMEWORK } from "../data/projectStudies";
import CriteriaMatrix from "../components/studies/CriteriaMatrix";
import DecisionSummary from "../components/studies/DecisionSummary";
import EvidencePanel from "../components/studies/EvidencePanel";
import LandAssemblyDiagram from "../components/studies/LandAssemblyDiagram";
import RelatedStudies from "../components/studies/RelatedStudies";
import StudyContents from "../components/studies/StudyContents";
import StudyHero from "../components/studies/StudyHero";
import StudyNavigation from "../components/studies/StudyNavigation";
import { PROJECT_STUDIES } from "../data/projectStudies";

function StudySection({ section, study }) {
  return (
    <section id={section.id} className={`detail-study-section is-${section.type}`} tabIndex="-1">
      <p className="eyebrow eyebrow-dark">{section.title.toUpperCase()}</p>
      <h2>{section.title}</h2>
      {section.type === "criteria" && <CriteriaMatrix rows={section.rows} />}
      {section.type === "assembly" && <LandAssemblyDiagram steps={section.steps} content={section.content} />}
      {section.type === "evidence" && <EvidencePanel evidence={study.evidence} />}
      {section.type === "reasons" && (
        <div className="study-reasons-grid">
          <ul>{section.content.map((item) => <li key={item}>{item}</li>)}</ul>
          <img src={study.image} alt="Weligama Bay coastline and beachfront setting" loading="lazy" />
        </div>
      )}
      {section.type === "constraints" && (
        <ul className="study-constraints-list">{section.content.map((item) => <li key={item}>{item}</li>)}</ul>
      )}
      {section.type === "prose" && section.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {section.type === "retrospective" && section.content.map((paragraph) => <blockquote key={paragraph}>{paragraph}</blockquote>)}
    </section>
  );
}

function ProjectStudyPage({ study }) {
  if (study.status === "published") {
    const relatedStudies = study.relatedStudies
      .map((id) => PROJECT_STUDIES.find((candidate) => candidate.id === id))
      .filter(Boolean);

    return (
      <main className="project-study-page detail-study-page">
        <StudyHero study={study} />
        <div className="page-width detail-study-decision-wrap">
          <DecisionSummary
            text={study.decisionSummary}
            callouts={study.callouts}
          />
        </div>
        <div className="page-width detail-study-layout">
          <StudyContents sections={study.sections} />
          <div className="detail-study-content">
            {study.sections.map((section) => <StudySection key={section.id} section={section} study={study} />)}
            <StudyNavigation previous={study.previousStudy} next={study.nextStudy} />
            <RelatedStudies studies={relatedStudies} />
          </div>
        </div>
      </main>
    );
  }

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