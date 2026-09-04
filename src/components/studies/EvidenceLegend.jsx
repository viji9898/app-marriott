import { EVIDENCE_CLASSIFICATIONS } from "../../data/projectStudies";

function EvidenceLegend() {
  return (
    <aside className="evidence-legend" aria-labelledby="evidence-legend-title">
      <p className="eyebrow eyebrow-dark">EVIDENCE CLASSIFICATION</p>
      <h2 id="evidence-legend-title">How supporting evidence is described</h2>
      <dl>
        {EVIDENCE_CLASSIFICATIONS.map(([term, description]) => (
          <div key={term}>
            <dt>{term}</dt>
            <dd>{description}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

export default EvidenceLegend;
