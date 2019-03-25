import cx from 'classnames';
import React from 'react';

export default function Container({
  className,
  children,
  tagName = 'div',
  ...props
}) {
  return React.createElement(
    tagName,
    {
      ...props,
      className: cx('Container', className),
    },
    children
  );
}
