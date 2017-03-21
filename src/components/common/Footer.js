import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
// const LogoImg = require('../../images/pluralsight-logo.png');

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container text-center">

        <p>
          &copy; 2017 Cool Company Name
        </p>

        <ul className="list-inline">
          <li>
              <IndexLink to="/">Home</IndexLink>
          </li>
          <li>
            <Link to="courses">Courses</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>

      </div>
    </footer>
  );
};

export default Footer;
