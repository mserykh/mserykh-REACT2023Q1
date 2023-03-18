import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Container from './Container';
import Icon from './Icon';
import Logo from './Logo';

class Header extends Component {
  render() {
    return (
      <header className="w-full bg-amber-400">
        <Container containerClass="py-6 flex flex-col gap-y-4 md:flex-row gap-x-2 w-full items-center mx-auto justify-between">
          <Logo />
          <SearchBar />
          <Icon
            type="basket"
            className="w-10 fill-white hover:fill-black transition-all cursor-pointer"
          />
        </Container>
      </header>
    );
  }
}

export default Header;
