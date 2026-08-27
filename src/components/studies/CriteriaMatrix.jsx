function CriteriaMatrix({ rows }) {
  return (
    <div className="criteria-matrix-wrap" tabIndex="0" role="region" aria-label="Site search criteria table">
      <table className="criteria-matrix">
        <thead>
          <tr><th>Criterion</th><th>Requirement</th><th>Weligama assessment</th></tr>
        </thead>
        <tbody>
          {rows.map(([criterion, requirement, assessment]) => (
            <tr key={criterion}><th scope="row">{criterion}</th><td>{requirement}</td><td>{assessment}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CriteriaMatrix;