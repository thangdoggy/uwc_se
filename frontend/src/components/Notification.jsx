import React from "react";

import { notifications } from "../data/messages";

const unRead =
  "flex items-center gap-5 px-8 py-3 border-b border-gray-300 cursor-pointer hover:bg-green-100 font-semibold bg-gray-200";
const read =
  "flex items-center gap-5 px-8 py-3 border-b border-gray-300 cursor-pointer hover:bg-green-100";

const Notification = () => {
  return (
    <div className="absolute right-10 top-16 py-8 bg-white rounded-lg w-96 h-128 overflow-auto border border-gray-200">
      <div className="flex justify-between items-center">
        <div className="w-full flex justify-between items-end px-8">
          <p className="font-bold text-lg">Thông báo</p>
          <p className="hover:underline hover:text-green-900 cursor-pointer text-gray-900">
            Xem tất cả thông báo
          </p>
        </div>
      </div>
      <div className="mt-5">
        {notifications.map((item) => (
          <div className={item.isRead ? read : unRead}>
            <img
              className="rounded-full w-12 h-12 border border-gray-900"
              src={item.image}
              alt={item.message}
            />
            <div>
              <p className="font-semibold">{item.message}</p>
              <p className="text-gray-500 text-sm ">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
