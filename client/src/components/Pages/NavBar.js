import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineUser,
  AiOutlineCalendar,
} from "react-icons/ai/index";

function NavBar() {
  return (
    <h1 className="header">
    <div className="container">
      <div className="navbar">
        <NavLink exact to="/" activeClassName="active-link">
          < AiFillHome className="icon" />
        </NavLink>
        <NavLink to="/manage-users" activeClassName="active-link">
          <AiOutlineUser className="icon" />
        </NavLink>
        <NavLink to="/manage-events" activeClassName="active-link">
          <AiOutlineCalendar className="icon" />
        </NavLink>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
    Event Listener</h1>
  );
}

export default NavBar;