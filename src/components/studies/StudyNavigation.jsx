import { Link } from "react-router-dom";

function StudyNavigation({ previous, next }) {
  return (
    <nav
      className="study-sequence-navigation"
      aria-label="Project study sequence"
    >
      <Link to={previous.route}>
        <span>← Previous study</span>
        <strong>{previous.title}</strong>
      </Link>
      <Link to={next.route}>
        <span>Next study →</span>
        <strong>{next.title}</strong>
      </Link>
    </nav>
  );
}

export default StudyNavigation;
