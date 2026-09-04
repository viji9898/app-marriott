import { useState } from "react";
import EvidenceLegend from "../components/studies/EvidenceLegend";
import StudiesIndex from "../components/studies/StudiesIndex";
import StudyCard from "../components/studies/StudyCard";
import StudyFilters from "../components/studies/StudyFilters";
import {
  PROJECT_STUDIES,
  STUDY_FRAMEWORK,
  STUDY_STAGES,
} from "../data/projectStudies";

function ProjectStudiesPage() {
  const [selectedStage, setSelectedStage] = useState("All studies");
  const visibleStudies = PROJECT_STUDIES.filter(
    (study) => selectedStage === "All studies" || study.stage === selectedStage,
  );
  const featuredStudies = visibleStudies.filter((study) => study.featured);

  return (
    <main className="project-studies-page">
      <section className="studies-hero">
        <div className="page-width">
          <p className="eyebrow">PROJECT STUDIES</p>
          <h1>The decisions behind the development</h1>
          <p className="studies-hero-intro">
            Detailed studies of the principal decisions that shaped the
            project—from land selection and operator appointment to design
            coordination, construction and opening.
          </p>
          <ul className="studies-stage-summary" aria-label="Stages covered">
            {STUDY_STAGES.slice(1).map((stage) => (
              <li key={stage}>{stage}</li>
            ))}
          </ul>
        </div>
      </section>

      <StudyFilters
        stages={STUDY_STAGES}
        selectedStage={selectedStage}
        onSelect={setSelectedStage}
      />

      <section className="studies-featured page-width">
        <div className="studies-section-heading">
          <p className="eyebrow eyebrow-dark">FEATURED STUDIES</p>
          <h2>Principal decisions in focus</h2>
        </div>
        {featuredStudies.length > 0 ? (
          <div className="studies-featured-grid">
            {featuredStudies.map((study) => (
              <StudyCard study={study} key={study.id} />
            ))}
          </div>
        ) : (
          <p className="studies-empty">
            No featured studies in this stage yet.
          </p>
        )}
      </section>

      <section className="studies-complete page-width">
        <div className="studies-section-heading">
          <p className="eyebrow eyebrow-dark">COMPLETE INDEX</p>
          <h2>Browse all project studies</h2>
          <p>
            A stage-by-stage index of the decisions, constraints and delivery
            questions recorded across the project.
          </p>
        </div>
        <StudiesIndex studies={visibleStudies} />
      </section>

      <section className="studies-method">
        <div className="page-width studies-method-grid">
          <div>
            <p className="eyebrow">METHODOLOGY</p>
            <h2>A consistent decision record</h2>
            <p>
              Each study examines the context, constraints, options considered,
              decision taken, implementation and measurable outcome. Supporting
              records are linked where suitable documentary evidence is
              available.
            </p>
          </div>
          <ol>
            {STUDY_FRAMEWORK.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <div className="page-width studies-evidence-wrap">
        <EvidenceLegend />
      </div>
    </main>
  );
}

export default ProjectStudiesPage;
