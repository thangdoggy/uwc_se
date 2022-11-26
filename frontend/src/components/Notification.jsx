import React from "react";

import { notifications } from "../data/messages";

const Notification = () => {
  return (
    <div className="nav-item absolute right-10 top-16 bg-white p-8 rounded-lg w-80 border border-gray-200">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg">Thông báo</p>
        </div>
      </div>
      <div className="mt-5 ">
        {notifications.map((item) => (
          <div className="flex items-center leading-8 gap-5 p-3 border-b border-gray-300">
            <img
              className="rounded-full w-12 h-12 border border-gray-900"
              src={item.image}
              alt={item.message}
            />
            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
        <div className="mt-5 hover:underline hover:text-green-900 cursor-pointer text-gray-900">
          Xem tất cả thông báo
        </div>
      </div>
    </div>
  );
};

export default Notification;
