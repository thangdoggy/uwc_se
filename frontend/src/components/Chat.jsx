import React from "react";

import { chats } from "../data/messages";

const Chat = () => {
  return (
    <div className="nav-item absolute right-10 top-16 bg-white p-8 rounded-lg w-80 border border-gray-200">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Tin nhắn</p>
        </div>
      </div>
      <div className="mt-5">
        {chats.map((item) => (
          <div className="flex items-center gap-5 p-3 leading-8 cursor-pointer border-b border-gray-300">
            <img
              className="rounded-full w-12"
              src={item.image}
              alt={item.message}
            />

            <div>
              <p className="font-semibold dark:text-gray-200 ">
                {item.message}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {item.desc}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                {item.time}
              </p>
            </div>
          </div>
        ))}
        <div className="mt-5 hover:underline hover:text-green-900 cursor-pointer text-gray-900">
          Xem tất cả tin nhắn
        </div>
      </div>
    </div>
  );
};

export default Chat;
