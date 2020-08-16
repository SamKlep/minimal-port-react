import React from "react";
import { Link, BrowserRouter, Router, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div id='navigation'>
      <ul>
        <li>
          <NavLink to='/home'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/services'>Services</NavLink>
        </li>
        <li>
          <NavLink to='/portfolio'>Portfolio</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
