import React from "react";
import { NavLink } from "react-router-dom";

import { links } from "../data/navlinks";

const Sidebar = () => {
  const activeLink =
    "flex items-center gap-2 rounded-lg mt-1 mr-5 mb-1 text-white pl-4 pt-2.5 pb-2.5 bg-green-900";
  const normalLink =
    "flex items-center gap-2 rounded-lg mt-1 mr-5 mb-1 text-gray-600 pl-4 pt-2.5 pb-2.5 hover:bg-gray-200";

  return (
    <div className="pl-5 pt-2 mt-20 w-52 h-screen overflow-auto shadow-2xl fixed">
      <div>
        {links.map((item) => {
          return (
            <div key={item.title}>
              <p className="mt-4 mb-2 uppercase font-bold text-gray-600">
                {item.title}
              </p>
              {item.links.map((link) => (
                <NavLink
                  to={`/${link.ref}`}
                  key={link.name}
                  onClick={() => {}}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <span className="text-xl">{link.icon}</span>
                  <span>{link.name}</span>
                </NavLink>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
