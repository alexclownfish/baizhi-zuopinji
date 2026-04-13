import { usePortfolio } from '../context/PortfolioContext';

export default function Contact() {
  const { data } = usePortfolio();

  return (
    <div className="contact-section">
      <div className="page-container" style={{ textAlign: 'center' }}>
        <h1 className="section-title gradient-text">Contact</h1>
        <p className="section-subtitle">Get in touch</p>

        <div className="contact-grid">
          <div className="glass-card contact-info">
            <div className="contact-item">
              <p className="contact-label">Email</p>
              <a href={`mailto:${data.email}`} className="contact-value">
                {data.email}
              </a>
            </div>
            <div className="contact-item">
              <p className="contact-label">GitHub</p>
              <a href={data.github} target="_blank" rel="noopener noreferrer" className="contact-value">
                GitHub Profile
              </a>
            </div>
            <div className="contact-item">
              <p className="contact-label">LinkedIn</p>
              <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="contact-value">
                LinkedIn Profile
              </a>
            </div>
            <div className="contact-item">
              <p className="contact-label">Twitter</p>
              <a href={data.twitter} target="_blank" rel="noopener noreferrer" className="contact-value">
                Twitter Profile
              </a>
            </div>
          </div>

          <div className="glass-card contact-message">
            <p>
              Feel free to reach out through any of the channels above.
              I typically respond within 24-48 hours.
            </p>
            <p style={{ marginTop: '24px' }}>
              For quick communication, Twitter DMs are often the fastest way to get a response.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
