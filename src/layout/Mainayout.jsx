import React from "react";
import { NavLink } from "react-router-dom";

function MainLayout({ children }) {
  return (
    <div>
      <nav className="bg-blue-500 p-4">
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-gray-200"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/increment"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-gray-200"
              }
            >
              Increment
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/todo"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-gray-200"
              }
            >
              Todo
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/post"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-gray-200"
              }
            >
              Post Data
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Asosiy kontent */}
      <div className="p-4">{children}</div>
    </div>
  );
}

export default MainLayout;
