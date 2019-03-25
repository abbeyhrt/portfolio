import React from 'react';

export default function Main({ children, ...props }) {
  return (
    <main id="skip-to-content" {...props}>
      {children}
    </main>
  );
}
