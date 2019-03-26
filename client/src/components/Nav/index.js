import React from "react";
import logo from '../../logo.png'
import "./style.css";

function Nav(props) {
  return (
    <nav>
        <div className="nav-wrapper #0091ea light-blue accent-4">
        <img src={logo} className="fit-picture" alt=""></img>
        <ul id="nav-mobile" className="right hide-on-med-and-down link">
            <li><a href="/mirror">Mirrors</a></li>
            <li><a href="/">Search</a></li>
        </ul>
        </div>
    </nav>
  );
}
export default Nav;
