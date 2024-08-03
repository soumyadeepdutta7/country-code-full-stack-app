import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { FaHome, FaSignInAlt, FaUserPlus, FaHeart, FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
  const { auth, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="logo">Country Info App</div>
      <ul className="nav-links">
        <li><Link to="/"><FaHome className="icon" /> Home</Link></li>
        {auth.user ? (
          <>
            <li><Link to="/favorites"><FaHeart className="icon" /> Favorites</Link></li>
            <li><button onClick={logout} className="logout-button"><FaSignOutAlt className="icon" /> Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login"><FaSignInAlt className="icon" /> Login</Link></li>
            <li><Link to="/register"><FaUserPlus className="icon" /> Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
