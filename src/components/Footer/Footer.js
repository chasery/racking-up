import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <footer className="Footer">
      <div className="Footer__wrapper">
        <p className="Footer__copyright">
          Copyright &copy; 2021 Chasery. All rights reserved.
        </p>
        <div className="Footer__contact">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="mailto:ryan@chasery.com">Email</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/chasery/">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/chasery">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
