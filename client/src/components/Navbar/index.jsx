import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="border fixed">
        <div className="nav-brand">
          <h3>
            <a href="/">Google Books</a>
          </h3>
        </div>
        <div className="collapsible">
          <input id="collapsible1" type="checkbox" name="collapsible1" />
          <label htmlFor="collapsible1">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </label>
          <div className="collapsible-body">
            <ul className="inline">
              <li>
                <a href="/searched">Searched</a>
              </li>
              <li>
                <a href="/saved">Saved</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
