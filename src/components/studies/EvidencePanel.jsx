function EvidencePanel({ evidence }) {
  if (evidence.length === 0) {
    return <p className="study-record-empty">Supporting records are not currently published.</p>;
  }
  return null;
}

export default EvidencePanel;