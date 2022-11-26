import React from "react";
import { Link } from "react-router-dom";

import { BiMessageRounded } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";

const NavButton = ({ title, customFunc, icon }) => (
  <button
    type="button"
    onClick={customFunc}
    className="p-2 text-2xl rounded-full text-green-900 hover:bg-green-900 hover:text-white"
  >
    {icon}
  </button>
);

const Header = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div className="fixed w-full flex justify-between shadow-md bg-gray-100 h-20 px-11 z-1000">
      <Link to="/" className="flex items-center">
        <img src={Logo} alt="" width="60px" />
        <h1 className="font-bold uppercase text-2xl text-green-900 pl-5">
          HỆ THỐNG QUẢN LÝ THU GOM RÁC THẢI ĐÔ THỊ
        </h1>
      </Link>

      {userInfo ? (
        <div className="flex items-center">
          <NavButton
            title="Notifications"
            customFunc={() => {}}
            icon={<MdNotificationsNone />}
          />
          <NavButton
            title="Chat"
            customFunc={() => {}}
            icon={<BiMessageRounded />}
          />

          <div className="flex items-center cursor-pointer" onClick={() => {}}>
            <img
              src={Avatar}
              alt="User Avatar"
              className="ml-3 mr-3 rounded-full w-10"
            />
            <span className="text-lg text-gray-600">
              <strong>Hi, {userInfo.name}</strong>
            </span>
            <MdKeyboardArrowDown className="ml-1 text-lg text-gray-600" />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
