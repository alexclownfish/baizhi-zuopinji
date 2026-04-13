import { usePortfolio } from '../context/PortfolioContext';

export default function Skills() {
  const { data } = usePortfolio();

  return (
    <div className="skills-section">
      <div className="page-container" style={{ textAlign: 'center' }}>
        <h1 className="section-title gradient-text">Skills</h1>
        <p className="section-subtitle">Technologies I work with</p>

        <div className="skills-grid">
          {data.skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="tech-badges" style={{ justifyContent: 'center' }}>
          {data.skills.map((skill, index) => (
            <span key={index} className="tech-badge">{skill.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
