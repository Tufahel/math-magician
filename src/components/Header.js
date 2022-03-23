import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div>
      <nav className="navigation">
        <h1 className="header">Math Magicians</h1>
        <ul className="links">
          <li>
            <NavLink to="/" className="link">Home</NavLink>
          </li>
          <li>|</li>
          <li>
            <NavLink to="/calculator" className="link">Calculator</NavLink>
          </li>
          <li>|</li>
          <li>
            <NavLink to="/quote" className="link">Quote</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
