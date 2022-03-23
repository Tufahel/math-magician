import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav>
        <h1>Math Magician</h1>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/calculator">Calculator</NavLink>
          </li>
          <li>
            <NavLink to="/quote">Quote</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
