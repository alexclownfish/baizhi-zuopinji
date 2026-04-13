import { usePortfolio } from '../context/PortfolioContext';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { data } = usePortfolio();
  const { theme, setTheme } = useTheme();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar-modern">
      <div className="nav-container">
        <a href="/" className="nav-brand">{data.name}</a>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.to}>
              <a href={link.to} className="nav-link">{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="theme-switcher">
          <button
            className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
            onClick={() => setTheme('light')}
          >
            Light
          </button>
          <button
            className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
            onClick={() => setTheme('dark')}
          >
            Dark
          </button>
        </div>
      </div>
    </nav>
  );
}
