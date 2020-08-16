import React from "react";
import { Link, BrowserRouter, Router, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div id='navigation'>
      <ul>
        <li data-text='Home'>
          <NavLink to='/home'>Home</NavLink>
        </li>
        <li data-text='About'>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li data-text='Services'>
          <NavLink to='/services'>Services</NavLink>
        </li>
        <li data-text='Portfolio'>
          <NavLink to='/portfolio'>Portfolio</NavLink>
        </li>
        <li data-text='Contact'>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
