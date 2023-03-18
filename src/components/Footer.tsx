import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from './Container';
import Logo from './Logo';

class Footer extends Component {
  render() {
    return (
      <footer className="bg-amber-400 mt-auto">
        <Container containerClass="py-4 flex flex-wrap gap-y-4 gap-x-2 w-full items-center justify-center mx-auto">
          <div className="w-full flex flex-col content-start items-center">
            <Logo />
            <p className="text-white font-medium">Always a bargin</p>
          </div>
          <nav>
            <ul className="flex gap-2">
              <li>
                <NavLink to={'/'} className="text-white p-2 hover:underline">
                  Main
                </NavLink>
              </li>
              <li>
                <NavLink to={'/about'} className="text-white p-2 hover:underline">About</NavLink>
              </li>
            </ul>
          </nav>
          <div className="text-white font-medium flex gap-2">
            <Link to="https://www.github.com/mserykh" className="text-white p-2 hover:underline">Mady by mserykh</Link>
            <Link to="https://rs.school" className="text-white p-2 hover:underline">React course by RSSchool</Link>
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
