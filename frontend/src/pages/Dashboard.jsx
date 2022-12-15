import React from "react";

import {
  FaUserFriends,
  FaTruckMoving,
  FaMapMarkedAlt,
  FaRoute,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="">
      <div className="ml-60 pt-28 flex">
        <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
          <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg">
            <div class="flex-auto p-4">
              <div class="flex flex-wrap">
                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                    {" "}
                    số phương tiện
                  </h5>
                  <span class="font-semibold text-xl text-blueGray-700">
                    50
                  </span>
                </div>
                <div class="relative w-auto pl-4 flex-initial">
                  <div class="text-white p-3  text-2xl text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                    <FaTruckMoving />
                  </div>
                </div>
              </div>
              <p class="text-sm text-blueGray-400 mt-4">
                <span class="text-emerald-500 mr-2">
                  <i class="fas fa-arrow-up"></i> tăng 5 chiếc{" "}
                </span>
                <span class="whitespace-nowrap"> so với tháng trước </span>
              </p>
            </div>
          </div>
        </div>

        <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
          <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg">
            <div class="flex-auto p-4">
              <div class="flex flex-wrap">
                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                    {" "}
                    số điểm thu gom
                  </h5>
                  <span class="font-semibold text-xl text-blueGray-700">
                    125
                  </span>
                </div>
                <div class="relative w-auto pl-4 flex-initial">
                  <div class="text-white p-3  text-2xl text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                    <FaMapMarkedAlt />
                  </div>
                </div>
              </div>
              <p class="text-sm text-blueGray-400 mt-4">
                <span class="text-emerald-500 mr-2">
                  <i class="fas fa-arrow-up"></i> tăng 10 điểm{" "}
                </span>
                <span class="whitespace-nowrap"> so với tháng trước </span>
              </p>
            </div>
          </div>
        </div>

        <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
          <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg">
            <div class="flex-auto p-4">
              <div class="flex flex-wrap">
                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                    {" "}
                    số tuyến/ngày
                  </h5>
                  <span class="font-semibold text-xl text-blueGray-700">
                    25
                  </span>
                </div>
                <div class="relative w-auto pl-4 flex-initial">
                  <div class="text-white p-3  text-2xl text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                    <FaRoute />
                  </div>
                </div>
              </div>
              <p class="text-sm text-blueGray-400 mt-4">
                <span class="text-emerald-500 mr-2">
                  <i class="fas fa-arrow-up"></i> tăng 3 tuyến{" "}
                </span>
                <span class="whitespace-nowrap"> so với tháng trước </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-60 pt-28 flex">
        <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
          <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg">
            <div class="flex-auto p-4">
              <div class="flex flex-wrap">
                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                    {" "}
                    số tài xế
                  </h5>
                  <span class="font-semibold text-xl text-blueGray-700">
                    36
                  </span>
                </div>
                <div class="relative w-auto pl-4 flex-initial">
                  <div class="text-white p-3  text-2xl text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                    <FaUserFriends />
                  </div>
                </div>
              </div>
              <p class="text-sm text-blueGray-400 mt-4">
                <span class="text-emerald-500 mr-2">
                  <i class="fas fa-arrow-up"></i> tăng 6{" "}
                </span>
                <span class="whitespace-nowrap"> so với tháng trước </span>
              </p>
            </div>
          </div>
        </div>

        <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
          <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg">
            <div class="flex-auto p-4">
              <div class="flex flex-wrap">
                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                    {" "}
                    số lao công
                  </h5>
                  <span class="font-semibold text-xl text-blueGray-700">
                    300
                  </span>
                </div>
                <div class="relative w-auto pl-4 flex-initial">
                  <div class="text-white p-3  text-2xl text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                    <FaUserFriends />
                  </div>
                </div>
              </div>
              <p class="text-sm text-blueGray-400 mt-4">
                <span class="text-emerald-500 mr-2">
                  <i class="fas fa-arrow-up"></i> tăng 25{" "}
                </span>
                <span class="whitespace-nowrap"> so với tháng trước </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
