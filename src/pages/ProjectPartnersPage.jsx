import { Link } from "react-router-dom";
import { PROJECT_PARTNER_CATEGORIES } from "../data/projectPartners";

function ProjectPartnersPage() {
  return (
    <main className="partners-page">
      <section className="partners-hero">
        <div className="page-width">
          <nav className="partners-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Project Partners</span>
          </nav>
          <p className="eyebrow eyebrow-dark">PROJECT DIRECTORY</p>
          <h1>The institutions and specialists behind the development</h1>
          <p className="partners-hero-intro">
            The resort brought together financial institutions, hotel advisors,
            international designers, specialist consultants and local contractors
            across the development lifecycle.
          </p>
        </div>
      </section>

      <div className="partners-directory page-width">
        {PROJECT_PARTNER_CATEGORIES.map(({ number, category, partners }) => (
          <section className="partners-category" key={category}>
            <header>
              <span>{number}</span>
              <h2>{category}</h2>
            </header>
            <div className="partners-directory-grid">
              {partners.map(([organisation, role]) => (
                <article key={organisation}>
                  <h3>{organisation}</h3>
                  <p>{role}</p>
                </article>
              ))}
            </div>
          </section>
        ))}

        <Link className="partners-return-link" to="/overview">
          Return to the development overview <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}

export default ProjectPartnersPage;
