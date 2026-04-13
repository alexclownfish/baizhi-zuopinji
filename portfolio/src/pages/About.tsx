import { usePortfolio } from '../context/PortfolioContext';

export default function About() {
  const { data } = usePortfolio();

  return (
    <div className="about-section">
      <div className="page-container">
        <h1 className="section-title gradient-text">About Me</h1>
        <p className="section-subtitle">{data.bio}</p>

        <div className="experience-list">
          {data.experience.map((exp, index) => (
            <div key={index} className="glass-card experience-item">
              <h3 className="experience-role">{exp.role}</h3>
              <p className="experience-company">{exp.company}</p>
              <p className="experience-period">{exp.period}</p>
              <p className="experience-description">{exp.description}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '80px', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '24px', color: 'var(--text-secondary)' }}>Connect</h3>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a href={data.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
              GitHub
            </a>
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">
              LinkedIn
            </a>
            <a href={data.twitter} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
