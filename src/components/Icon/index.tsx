import React from 'react';
import Basket from './IconTypes/Basket';
import Logo from './IconTypes/Logo';
import Search from './IconTypes/Search';

const iconMap = {
  basket: Basket,
  logo: Logo,
  search: Search,
};

type IconProps = {
  type: keyof typeof iconMap;
  className?: string;
  pathClass?: string;
};

export default function Icon({ type, className }: IconProps) {
  const IconComponent = iconMap[type];
  if (!IconComponent) return null;

  return <IconComponent className={className} />;
}
