import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className='bg-stale-400'>
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
      </header>
    );
  }
}

export default Header;
