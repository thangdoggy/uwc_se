import React from "react";

import { chats } from "../data/messages";

const unRead =
  "flex items-center leading-8 gap-5 p-3 border-b border-gray-300 cursor-pointer hover:bg-green-100 bg-gray-100";
const read =
  "flex items-center leading-8 gap-5 p-3 border-b border-gray-300 cursor-pointer hover:bg-green-100";

const Chat = () => {
  return (
    <div className="absolute right-10 top-16 bg-white p-8 rounded-lg w-96 h-128 overflow-auto border border-gray-200">
      <div className="flex items-center justify-between">
        <div className="w-full flex items-end justify-between">
          <p className="font-bold text-lg">Tin nhắn</p>
          <p className="hover:underline hover:text-green-900 cursor-pointer text-gray-900">
            Xem tất cả tin nhắn
          </p>
        </div>
      </div>
      <div className="mt-5">
        {chats.map((item) => (
          <div className={item.isRead ? read : unRead}>
            <img
              className="rounded-full w-12"
              src={item.image}
              alt={item.message}
            />

            <div>
              <p className="font-semibold">{item.message}</p>
              <p className="text-gray-500 ">{item.desc}</p>
              <p className="text-gray-500">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
