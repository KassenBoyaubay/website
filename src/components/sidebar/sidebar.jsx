import React, { useState } from "react";

import logo from "./logo.svg";

const Sidebar = () => {
  const [show, setShow] = useState("");

  const toggleBar = () => {
    if (show === "show-sidebar") setShow("");
    else setShow("show-sidebar");
  };

  return (
    <div className="mySass Sidebar">
      <button className="sidebar-toggle" onClick={() => toggleBar()}>
        <i className="fas fa-bars"></i>
      </button>
      <aside className={`sidebar ${show}`}>
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="" />
          <button className="close-btn" onClick={() => setShow("")}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <ul className="links">
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">projects</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
        <ul className="social-icons">
          <li>
            <a href="https://www.twitter.com">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i className="fab fa-behance"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i className="fab fa-sketch"></i>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
