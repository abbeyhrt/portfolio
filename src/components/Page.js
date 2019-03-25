import React from 'react';
import Meta from './Meta';

export default function Page({ children, ...props }) {
  return (
    <React.Fragment>
      <Meta />
      <a href="#skip-to-content" className="show-on-focus">
        Skip to content
      </a>
      <div {...props}>{children}</div>
    </React.Fragment>
  );
}
