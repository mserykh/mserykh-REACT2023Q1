import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Container from './Container';
import Icon from './Icon';

class Header extends Component {
  render() {
    return (
      <header className="bg-amber-400">
        <Container containerClass="py-4 flex gap-x-2 w-full items-center mx-auto">
          <NavLink to="/" className="w-10">
            <Icon type="logo" className="fill-white" />
          </NavLink>
          <nav className="ml-auto">
            <ul className="flex">
              <li className="">
                <NavLink to="/" className="px-2 py-4 text-white">
                  Main
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </nav>
        </Container>
      </header>
    );
  }
}

export default Header;
