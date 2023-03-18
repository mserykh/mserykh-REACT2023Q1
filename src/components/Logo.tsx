import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';

export default function Logo() {
  return (
    <NavLink to="/" className="flex gap-x-2 items-center group">
      <Icon type="logo" className="w-10 fill-white group-hover:fill-black transition-all" />
      <span className="text-2xl uppercase text-white font-semibold transition-all group-hover:text-black">
        Betterbuy
      </span>
    </NavLink>
  );
}
