import React from 'react';
import Logo from './IconTypes/Logo';

const iconMap = {
  logo: Logo,
};

type IconProps = {
  type: keyof typeof iconMap;
  className?: string;
  pathClass?: string;
};

export default function Icon({ type, className, pathClass }: IconProps) {
  const IconComponent = iconMap[type];
  if (!IconComponent) return null;

  return <IconComponent className={className} />;
}
