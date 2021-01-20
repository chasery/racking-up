import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <header className="Header" role="banner">
      <div className="Header__wrapper">
        <h1 className="Header__title">
          <a href="/">Racking Up</a>
        </h1>
        <nav className="Nav" role="navigation">
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
