import React from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
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
      <div className="flex items-center">
        <img src={Logo} alt="" width="60px" />
        <h1 className="font-bold uppercase text-2xl text-green-900 pl-5">
          HỆ THỐNG THU GOM RÁC THẢI ĐÔ THỊ
        </h1>
      </div>

      <div className="flex items-center">
        <NavButton
          title="Chat"
          customFunc={() => {}}
          color="text-green-900"
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notifications"
          customFunc={() => {}}
          color="text-green-900"
          icon={<RiNotification3Line />}
        />

        <div className="flex items-center cursor-pointer" onClick={() => {}}>
          <span className="text-lg text-gray-600 ml-3">
            <strong>Cao Anh Quân</strong>
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
