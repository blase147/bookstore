import { Link } from 'react-router-dom';

const Header = () => (
  <div className="nav-bar">
    <h2>Bookstore CMS</h2>
    <div>
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
    </div>
  </div>
);

export default Header;
