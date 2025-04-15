import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          Рецепты
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Главная
          </Link>
        </div>
      </div>
    </nav>
  );
}