import React, { useState } from "react";
import { Link } from "react-router-dom";

import { BiMessageRounded } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";

import { UserProfile, Notification, Chat } from ".";

const Header = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [clickedProfile, setClickedProfile] = useState(false);
  const [clickedChat, setClickedChat] = useState(false);
  const [clickedNotification, setClickedNotification] = useState(false);

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
          <div
            className="relative p-2 text-2xl rounded-full text-green-900 hover:bg-green-900 hover:text-white cursor-pointer"
            onClick={() => {
              setClickedNotification(!clickedNotification);
              setClickedProfile(false);
              setClickedChat(false);
            }}
          >
            <MdNotificationsNone />
            <span
              style={{ background: "brown" }}
              className="absolute inline-flex rounded-full h-4 w-2 right-2 top-1 text-xs text-white"
            >
              2
            </span>
          </div>

          <div
            className="relative p-2 text-2xl rounded-full text-green-900 hover:bg-green-900 hover:text-white cursor-pointer"
            onClick={() => {
              setClickedChat(!clickedChat);
              setClickedNotification(false);
              setClickedProfile(false);
            }}
          >
            <BiMessageRounded />
            <span
              style={{ background: "brown" }}
              className="absolute inline-flex rounded-full h-4 w-2 right-2 top-1  text-xs text-white"
            >
              3
            </span>
          </div>

          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              setClickedProfile(!clickedProfile);
              setClickedChat(false);
              setClickedNotification(false);
            }}
          >
            <img
              src={Avatar}
              alt="User Avatar"
              className="ml-3 mr-3 rounded-full w-10"
            />
            <span className="text-md text-gray-600">
              <strong>Hi, {userInfo.name}</strong>
            </span>
            <MdKeyboardArrowDown className="ml-1 text-lg text-gray-600" />
          </div>
        </div>
      ) : (
        ""
      )}

      {clickedProfile && <UserProfile />}
      {clickedNotification && <Notification />}
      {clickedChat && <Chat />}
    </div>
  );
};

export default Header;
