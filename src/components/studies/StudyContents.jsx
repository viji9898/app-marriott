import { useEffect, useState } from "react";

function StudyContents({ sections }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-25% 0px -60%", threshold: 0 },
    );
    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="study-contents" aria-label="Study contents">
      <p>Contents</p>
      <div>
        {sections.map(({ id, title }) => (
          <a
            href={`#${id}`}
            key={id}
            aria-current={activeId === id ? "location" : undefined}
            onClick={() => {
              requestAnimationFrame(() => {
                document.getElementById(id)?.focus({ preventScroll: true });
              });
            }}
          >
            {title}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default StudyContents;