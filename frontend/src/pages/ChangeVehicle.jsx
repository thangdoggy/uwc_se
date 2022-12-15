import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  FormControl,
  Radio,
  FormLabel,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

import { VehicleItem } from "../components";
import { changeVehicle, unUseVehicle } from "../data/vehicles";
import { routes } from "../data/routes";

const ChangeVehicle = () => {
  const { id } = useParams();

  let thisRoute = {};
  for (let index = 0; index < routes.length; index++) {
    if (routes[index].id === id) {
      thisRoute = {
        id,
        name: routes[index].name,
        mcp: routes[index].mcp,
        status: routes[index].status,
        distance: routes[index].distance,
        date: routes[index].date,
        vehicle: routes[index].vehicle,
      };
    }
  }

  const [vehicle, setVehicle] = useState();

  const navigate = useNavigate();

  const handleSubmit = (vehicle) => {
    if (!vehicle) alert("Vui lòng chọn phương tiện cho tuyến đường!");

    let temp = "";

    for (let index = 0; index < routes.length; index++) {
      if (routes[index].id === id) {
        temp = routes[index].vehicle;
        routes[index].vehicle = vehicle;
      }
    }

    changeVehicle(vehicle, temp);

    navigate("/routes-task");
  };
  return (
    <div className="pt-28 ml-64 mb-11">
      <div className="flex justify-evenly">
        <div>
          <h2 className="text-xl font-semibold pb-5">Thông tin tuyến đường</h2>
          <p className="pb-2">
            Mã tuyến đường:{" "}
            <span className="font-semibold"> {thisRoute.id}</span>
          </p>
          <p className="pb-2">
            Tên tuyến đường:{" "}
            <span className="font-semibold"> {thisRoute.name}</span>
          </p>
          <p className="pb-2">
            Khoảng cách:{" "}
            <span className="font-semibold"> {thisRoute.distance}</span>
          </p>
          <p className="pb-2">
            Ngày: <span className="font-semibold"> {thisRoute.date}</span>
          </p>
          <p className="pb-2">
            Phương tiện:{" "}
            <span className="font-semibold"> {thisRoute.vehicle}</span>
          </p>
          <p className="pb-2 font-semibold">Các MCP đi qua: </p>
          {thisRoute.mcp.map((item) => {
            return (
              <div className="pl-6 pt-2 pb-2 border-b">
                <p className="pb-2">
                  Vị trí: <span className="font-semibold"> {item.address}</span>
                </p>
                <p className="pb-2">
                  Sức chứa:{" "}
                  <span className="font-semibold"> {item.capacity}</span>
                </p>
                <p className="pb-2">
                  Lượng rác hiện tại: {item.currentVolume}
                  <span
                    className={`ml-2 py-2 px-1 ${
                      Math.round((item.currentVolume / item.capacity) * 100) >=
                      75
                        ? "text-red-600 border border-red-600"
                        : "text-green-600 border border-green-600"
                    } font-semibold rounded-full`}
                  >
                    {Math.round((item.currentVolume / item.capacity) * 100)}%
                  </span>
                </p>
              </div>
            );
          })}
        </div>
        <FormControl>
          <FormLabel id="vehicle">
            Thay đổi phương tiện cho tuyến đường
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={{}}
            name="radio-buttons-group"
            onChange={(e) => {
              setVehicle(e.target.value);
            }}
          >
            {unUseVehicle.length > 0 ? (
              unUseVehicle.map((vehicle) => {
                return (
                  <FormControlLabel
                    value={vehicle.id}
                    control={<Radio />}
                    label={
                      <VehicleItem
                        id={vehicle.id}
                        type={vehicle.type}
                        capacity={vehicle.capacity}
                      />
                    }
                  />
                );
              })
            ) : (
              <p>Tất cả phương tiện đã được sử dụng</p>
            )}
          </RadioGroup>
          <button
            type="button"
            id="submit"
            class="text-green-700 border border-solid border-green-700 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={() => {
              handleSubmit(vehicle);
            }}
          >
            Submit
          </button>
        </FormControl>
      </div>
    </div>
  );
};

export default ChangeVehicle;
