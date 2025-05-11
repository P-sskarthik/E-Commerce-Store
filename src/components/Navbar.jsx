import { Link } from 'react-router';

function Navbar() {
  return (
    <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <ul style={{ display: 'flex', listStyle: 'none', padding: '1rem' }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
