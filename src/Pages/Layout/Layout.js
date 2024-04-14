import React from "react";
import PropTypes from "prop-types";
import "./Layout.scss";
import LazyHeader from "../Header/Header";
const Layout = ({ children }) => (
  <div className="Layout" data-testid="Layout">
    <LazyHeader />
    {children}
  </div>
);

Layout.propTypes = {};

Layout.defaultProps = {};

export default Layout;
