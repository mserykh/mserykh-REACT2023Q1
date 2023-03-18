import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="bg-amber-400">
        <nav>
          <ul>
            <li>
              <NavLink to={'/'}>Main</NavLink>
            </li>
            <li>
              <NavLink to={'/about'}>About</NavLink>
            </li>
          </ul>
        </nav>
      </footer>
    );
  }
}

export default Footer;
