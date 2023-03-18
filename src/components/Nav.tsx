import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Container from './Container';

const routes = [
  {
    route: '/',
    title: 'Home',
  },
  {
    route: '/about',
    title: 'About us',
  },
];

class Nav extends Component {
  render() {
    return (
      <header className="">
        <Container containerClass="py-2 flex gap-x-2 w-full items-center mx-auto">
          <nav className="ml-auto">
            <ul className="flex">
              {routes.map((route) => {
                return (
                  <li className="group" key={route.route}>
                    <NavLink
                      to={route.route}
                      className="relative p-2 text-black transition-all after:bottom-0.5 after:left-1/2 after:transition-all after:opacity-0 after:absolute after:w-1.5 after:h-1.5 after:rounded-full after:bg-amber-400 group-hover:text-amber-400 group-hover:after:opacity-100"
                    >
                      {route.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Container>
      </header>
    );
  }
}

export default Nav;
