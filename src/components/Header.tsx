import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Container from './Container';
import Icon from './Icon';
import SearchBar from '../components/SearchBar';

class Header extends Component {
  render() {
    return (
      <header className="w-full bg-amber-400">
        <Container containerClass="py-6 flex flex-col gap-y-4 md:flex-row gap-x-2 w-full items-center mx-auto justify-between">
          <NavLink to="/" className="flex gap-x-2 items-center group">
            <Icon type="logo" className="w-10 fill-white group-hover:fill-black transition-all" />
            <span className="text-2xl uppercase text-white font-semibold transition-all group-hover:text-black">
              Betterbuy
            </span>
          </NavLink>
          <SearchBar />
          <Icon type="basket" className="w-10 fill-white group-hover:fill-black transition-all" />
        </Container>
      </header>
    );
  }
}

export default Header;
