export default function Navbar() {
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
        <a href="/" className="nav-brand">Portfolio</a>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.to}>
              <a href={link.to} className="nav-link">{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
