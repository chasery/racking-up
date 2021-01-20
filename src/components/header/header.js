import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <header class="Header" role="banner">
      <div class="Header__wrapper">
        <h1 class="Header__title">
          <a href="/">Racking Up</a>
        </h1>
        <nav class="Nav" role="navigation">
          <ul>
            <li>
              <a href="/">Sign In</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
