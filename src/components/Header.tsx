import React from 'react';
import Container from './Container';
import Nav from './Nav';

function Header() {
  return (
    <header className="w-full">
      <Container containerClass="py-2 flex flex-col gap-y-4 md:flex-row gap-x-2 w-full items-center mx-auto justify-between">
        <Nav />
      </Container>
    </header>
  );
}

export default Header;
