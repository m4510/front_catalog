import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const BaseLayout = ({ children }) => {
  return (
    <>
      <div className="layout-container">
        <Header />
        <main>
          <div className="wrapper">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
};

BaseLayout.propTypes = { children: PropTypes.node.isRequired };

export default BaseLayout;
