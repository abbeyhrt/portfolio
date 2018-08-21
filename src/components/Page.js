import './index.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Page = ({ children }) => (
  <>
    <Header />
    <div className="content">{children}</div>
    <Footer />
  </>
);

export default Page;
