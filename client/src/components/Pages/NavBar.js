import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineUser,
  AiOutlineCalendar,
} from "react-icons/ai/index";

function NavBar() {
  return (
    <div className="container">
      <h1 className="header">Event Listener</h1>
      <div className="navbar">
        <NavLink exact to="/" activeClassName="active-link">
          <AiFillHome />
        </NavLink>
        <NavLink to="/manage-users" activeClassName="active-link">
          <AiOutlineUser />
        </NavLink>
        <NavLink to="/manage-events" activeClassName="active-link">
          <AiOutlineCalendar />
        </NavLink>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default NavBar;