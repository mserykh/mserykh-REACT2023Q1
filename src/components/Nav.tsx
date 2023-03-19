import clsx from 'clsx';
import React from 'react';
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

function Nav() {
  return (
    <header className="">
      <Container containerClass="py-4 flex gap-x-2 w-full items-center mx-auto">
        <nav className="ml-auto">
          <ul className="flex">
            {routes.map((route) => {
              return (
                <li className="group" key={route.route}>
                  <NavLink
                    to={route.route}
                    className="relative text-black transition-all after:-bottom-1.5 after:left-1/2 after:transition-all after:opacity-0 after:absolute after:w-1.5 after:h-1.5 after:rounded-full after:bg-amber-400 group-hover:text-amber-400 group-hover:after:opacity-100"
                  >
                    {({ isActive }) => (
                      <span
                        className={clsx([
                          'p-2',
                          isActive &&
                            'relative text-amber-400 after:bottom-0.5 after:left-1/2 after:transition-all after:absolute after:w-1.5 after:h-1.5 after:rounded-full after:bg-amber-400',
                        ])}
                      >
                        {route.title}
                      </span>
                    )}
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

export default Nav;
