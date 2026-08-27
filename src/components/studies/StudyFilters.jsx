function StudyFilters({ stages, selectedStage, onSelect }) {
  return (
    <div className="study-filter-wrap">
      <div
        className="study-filters"
        role="group"
        aria-label="Filter project studies by stage"
      >
        {stages.map((stage) => (
          <button
            type="button"
            key={stage}
            aria-pressed={selectedStage === stage}
            onClick={() => onSelect(stage)}
          >
            {stage}
          </button>
        ))}
      </div>
    </div>
  );
}

export default StudyFilters;