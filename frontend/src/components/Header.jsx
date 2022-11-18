import React from "react";
import { Link } from "react-router-dom";

import { BiMessageRounded } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

import Logo from "../img/logo.png";
import avatar from "../img/avatar.png";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <button
    type="button"
    onClick={customFunc}
    className="ml-3 p-2 text-2xl rounded-full text-green-900 hover:bg-green-900 hover:text-white"
  >
    {icon}
  </button>
);

const Header = () => {
  return (
    <div className="flex justify-between relative drop-shadow-md bg-gray-100 h-20 px-11">
      <Link to="/" className="flex items-center">
        <img src={Logo} alt="" width="60px" />
        <h1 className="font-bold uppercase text-2xl text-green-900 pl-5">
          HỆ THỐNG THU GOM RÁC THẢI ĐÔ THỊ
        </h1>
      </Link>

      <div className="flex items-center">
        <NavButton
          title="Chat"
          customFunc={() => {}}
          color="text-green-900"
          icon={<BiMessageRounded />}
        />
        <NavButton
          title="Notifications"
          customFunc={() => {}}
          color="text-green-900"
          icon={<MdNotificationsNone />}
        />

        <div className="flex items-center cursor-pointer" onClick={() => {}}>
          <span className="text-lg text-gray-600 ml-3">
            <strong>Im into you, HN</strong>
          </span>
          <MdKeyboardArrowDown className="ml-1 text-lg text-gray-600" />
          <img
            src={avatar}
            alt="User Avatar"
            className="ml-3 mr-3 rounded-full w-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
