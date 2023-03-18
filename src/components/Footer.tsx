import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Container from './Container';

class Footer extends Component {
  render() {
    return (
      <footer className="bg-amber-400 mt-auto">
        <Container containerClass="py-4 flex gap-x-2 w-full items-center mx-auto">
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
        </Container>
      </footer>
    );
  }
}

export default Footer;
