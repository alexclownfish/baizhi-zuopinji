import { Link } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext';

export default function Home() {
  const { data } = usePortfolio();

  return (
    <div>
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-content">
            <p className="title">{data.title}</p>
            <h1>
              Hi, I&apos;m <span className="gradient-text">{data.name}</span>
            </h1>
            <p className="bio">{data.bio}</p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn-gradient">
                View Projects
              </Link>
              <Link to="/contact" className="btn-outline">
                Contact Me
              </Link>
            </div>
          </div>
          <div className="hero-avatar">
            <div className="avatar-wrapper">
              <div className="avatar-inner">{data.name.charAt(0)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-container">
        <div className="feature-cards">
          <div className="glass-card feature-card">
            <h3>Clean Code</h3>
            <p>Writing maintainable, well-documented code that scales</p>
          </div>
          <div className="glass-card feature-card">
            <h3>Modern Tech</h3>
            <p>Using latest technologies and best practices</p>
          </div>
          <div className="glass-card feature-card">
            <h3>DevOps</h3>
            <p>Containerization and cloud-native deployment</p>
          </div>
        </div>
      </section>
    </div>
  );
}
