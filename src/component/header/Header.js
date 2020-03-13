import React from "react";
import "./Header.css";

const header = () => {
  return (
    <header className="header">
      <h1> React SPA Assignment</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Users</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">LogIn</a>
          </li>
          <li>
            <a href="/">LogOut</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
