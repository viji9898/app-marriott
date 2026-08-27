function DecisionSummary({ text, callouts }) {
  return (
    <section className="study-decision-summary" aria-labelledby="decision-summary-title">
      <div>
        <p className="eyebrow eyebrow-dark">THE DECISION</p>
        <h2 id="decision-summary-title">Decision summary</h2>
        <p>{text}</p>
      </div>
      <dl>
        {callouts.map(([value, label]) => (
          <div key={label}>
            <dt>{value}</dt>
            <dd>{label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default DecisionSummary;