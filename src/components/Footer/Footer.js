import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <footer class="Footer" role="content-info">
      <div class="Footer__wrapper">
        <p class="Footer__copyright">
          Copyright &copy; 2021 Chasery. All rights reserved.
        </p>
        <div class="Footer__contact">
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
