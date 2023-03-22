import clsx from 'clsx';
import React from 'react';

type Props = {
  containerClass?: string;
  children?: React.ReactNode;
};

function Container(props: Props) {
  const { children, containerClass } = props;

  return <div className={clsx('px-10 max-w-6xl w-full', containerClass)}>{children}</div>;
}

export default Container;

Container.defaultProps = {
  containerClass: null,
  children: null,
};
