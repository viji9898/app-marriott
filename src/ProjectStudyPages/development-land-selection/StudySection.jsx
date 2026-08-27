import EvidencePanel from "../../components/studies/EvidencePanel";
import CriteriaMatrix from "./CriteriaMatrix";
import LandAssemblyDiagram from "./LandAssemblyDiagram";

function StudySection({ section, study }) {
  return (
    <section
      id={section.id}
      className={`detail-study-section is-${section.type} is-${section.layout || "full"}`}
      tabIndex="-1"
    >
      <p className="eyebrow eyebrow-dark">{section.title.toUpperCase()}</p>
      <h2>{section.title}</h2>
      {section.type === "criteria" && <CriteriaMatrix rows={section.rows} />}
      {section.type === "assembly" && (
        <LandAssemblyDiagram
          steps={section.steps}
          content={section.content}
        />
      )}
      {section.type === "evidence" && (
        <EvidencePanel evidence={study.evidence} />
      )}
      {section.type === "reasons" && (
        <div className="study-reasons-grid">
          <ul>
            {section.content.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <img
            src={study.image}
            alt="Weligama Bay coastline and beachfront setting"
            loading="lazy"
          />
        </div>
      )}
      {section.type === "constraints" && (
        <ul className="study-constraints-list">
          {section.content.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {section.type === "prose" &&
        section.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {section.type === "retrospective" &&
        section.content.map((paragraph) => (
          <blockquote key={paragraph}>{paragraph}</blockquote>
        ))}
    </section>
  );
}

export default StudySection;