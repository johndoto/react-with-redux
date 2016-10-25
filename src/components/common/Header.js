import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
const LogoImg = require('../../images/pluralsight-logo.png');

const Header = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <IndexLink to="/" className="navbar-brand">
            <img src={LogoImg} alt="" />
          </IndexLink>
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#nav-menu">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
          </button>
        </div>
        <div className="navbar-collapse collapse" id="nav-menu">
            <ul className="nav navbar-nav">
                <li>
                    <IndexLink to="/" activeClassName="active">Home</IndexLink>
                </li>
                <li>
                  <Link to="courses" activeClassName="active">Courses</Link>
                </li>
                <li>
                  <Link to="about" activeClassName="active">About</Link>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
