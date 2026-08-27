import DecisionSummary from "../../components/studies/DecisionSummary";
import RelatedStudies from "../../components/studies/RelatedStudies";
import StudyContents from "../../components/studies/StudyContents";
import StudyHero from "../../components/studies/StudyHero";
import StudyNavigation from "../../components/studies/StudyNavigation";
import { PROJECT_STUDIES } from "../../data/projectStudies";
import StudySection from "./StudySection";

function LandSelectionStudyPage({ study }) {
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
          {study.sections.map((section) => (
            <StudySection key={section.id} section={section} study={study} />
          ))}
          <StudyNavigation
            previous={study.previousStudy}
            next={study.nextStudy}
          />
          <RelatedStudies studies={relatedStudies} />
        </div>
      </div>
    </main>
  );
}

export default LandSelectionStudyPage;