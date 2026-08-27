function LandAssemblyDiagram({ steps, content }) {
  return (
    <div className="land-assembly">
      <ol aria-label="Land assembly sequence">
        {steps.map((step, index) => (
          <li key={step}><span>{index + 1}</span><strong>{step}</strong></li>
        ))}
      </ol>
      {content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </div>
  );
}

export default LandAssemblyDiagram;