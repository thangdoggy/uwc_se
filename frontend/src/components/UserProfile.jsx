import React from "react";
import { Link, useNavigate } from "react-router-dom";

import avatar from "../img/avatar.png";

const UserProfile = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="nav-item absolute right-10 top-16 bg-white p-8 rounded-lg w-80 shadow-lg border border-gray-200">
      <p className="font-semibold text-lg">Hồ sơ của bạn</p>
      <Link
        to="#"
        className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6"
      >
        <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">
            {userInfo.name}
          </p>
          <p className="text-gray-500 text-md dark:text-gray-400">
            Back officer
          </p>
          <p className="text-gray-500 text-md font-semibold dark:text-gray-400">
            {userInfo.email}
          </p>
        </div>
      </Link>

      <div className="mt-5 flex items-center justify-between">
        <button
          className="bg-red-900 hover:bg-red-800 rounded-lg p-2 text-white"
          onClick={handleLogout}
        >
          Đăng xuất
        </button>
        <span className="hover:underline hover:text-green-900 cursor-pointer text-gray-900">
          Account Settings
        </span>
      </div>
    </div>
  );
};

export default UserProfile;
