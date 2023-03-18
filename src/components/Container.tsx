import clsx from 'clsx';
import React, { Component } from 'react';

type Props = {
  containerClass?: string;
  children?: React.ReactNode;
};

class Container extends Component<Props> {
  render() {
    const { children, containerClass } = this.props;

    return <div className={clsx('px-10 max-w-6xl w-full', containerClass)}>{children}</div>;
  }
}

export default Container;
