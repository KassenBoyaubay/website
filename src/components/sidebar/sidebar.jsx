import React, { useEffect, useState } from "react";

import logo from "./logo.svg";

const Sidebar = () => {
  const [show, setShow] = useState("");

  const toggleBar = () => {
    if (show == "show-sidebar") setShow("");
    else setShow("show-sidebar");
  };

  return (
    <div className="mySass Sidebar">
      <button class="sidebar-toggle" onClick={() => toggleBar()}>
        <i class="fas fa-bars"></i>
      </button>
      <aside class={`sidebar ${show}`}>
        <div class="sidebar-header">
          <img src={logo} class="logo" alt="" />
          <button class="close-btn" onClick={() => setShow("")}>
            <i class="fas fa-times"></i>
          </button>
        </div>
        <ul class="links">
          <li>
            <a href="index.html">home</a>
          </li>
          <li>
            <a href="about.html">about</a>
          </li>
          <li>
            <a href="projects.html">projects</a>
          </li>
          <li>
            <a href="contact.html">contact</a>
          </li>
        </ul>
        <ul class="social-icons">
          <li>
            <a href="https://www.twitter.com">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i class="fab fa-behance"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i class="fab fa-sketch"></i>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
