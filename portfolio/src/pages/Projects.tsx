import { usePortfolio } from '../context/PortfolioContext';

export default function Projects() {
  const { data } = usePortfolio();

  return (
    <div className="projects-section">
      <div className="page-container" style={{ textAlign: 'center' }}>
        <h1 className="section-title gradient-text">Projects</h1>
        <p className="section-subtitle">Some of my recent work</p>

        <div className="projects-grid">
          {data.projects.map((project) => (
            <div key={project.id} className="glass-card project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
