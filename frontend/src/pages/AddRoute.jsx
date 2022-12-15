import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FormControl,
  FormGroup,
  FormLabel,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import { deleteMcp, mcpUncollect } from "../data/mcps";
import { unUseVehicle, vehiclesDecember } from "../data/vehicles";
import { routes } from "../data/routes";

const AddRoute = () => {
  const navigate = useNavigate();

  const [vehicle, setVehicle] = useState();
  const [mcps, setMcps] = useState([]);
  const [routeName, setRouteName] = useState("");

  const handleSubmit = () => {
    if (!vehicle || mcps.length === 0)
      return alert("Vui long chọn các thông tin trước khi submit");

    const newRoute = {
      id: (routes.length + 1).toString(),
      name: routeName,
      mcp: mcps,
      status: "Đang hoạt động",
      distance: "20",
      date: "15/12/2022",
      vehicle,
    };

    routes.push(newRoute);

    for (let index = 0; index < unUseVehicle.length; index++) {
      if (unUseVehicle[index].id === vehicle) unUseVehicle.splice(index, 1);
    }

    const temp = mcps.map((item) => item.address);
    mcps.forEach((item) => {
      deleteMcp(item.address);
    });

    navigate("/routes-task");
  };

  return (
    <div className="pt-28 ml-64 mb-11">
      <div className="flex items-start justify-evenly">
        <FormControl>
          <FormLabel id="vehicle">Chọn các MCPs để tạo tuyến đường</FormLabel>
          <FormGroup>
            {mcpUncollect.length > 0 ? (
              mcpUncollect.map((item) => {
                return (
                  <FormControlLabel
                    onChange={(e) => {
                      e.target.checked
                        ? setMcps([...mcps, item])
                        : setMcps(
                            mcps.filter((mcp) => mcp.address !== item.address)
                          );
                    }}
                    control={<Checkbox />}
                    label={
                      <div className="py-3 border-b border-gray-300">
                        <p className="font-semibold">{item.address}</p>
                        <p>Sức chứa: {item.capacity}</p>
                        <p>
                          Lượng rác hiện tại: {item.currentVolume}
                          <span
                            className={`ml-2 py-2 px-1 ${
                              Math.round(
                                (item.currentVolume / item.capacity) * 100
                              ) >= 75
                                ? "text-red-600 border border-red-600"
                                : "text-green-600 border border-green-600"
                            } font-semibold rounded-full`}
                          >
                            {Math.round(
                              (item.currentVolume / item.capacity) * 100
                            )}
                            %
                          </span>
                        </p>
                      </div>
                    }
                  />
                );
              })
            ) : (
              <p>Tất cả MCP đều đã có tuyến thu gom</p>
            )}
          </FormGroup>
        </FormControl>

        <FormControl>
          <FormLabel id="vehicle">
            Chọn phương tiện phụ trách tuyến đường
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            onChange={(e) => {
              setVehicle(e.target.value);
            }}
          >
            {unUseVehicle.length > 0 ? (
              unUseVehicle.map((item) => {
                return (
                  <FormControlLabel
                    value={item.id}
                    control={<Radio />}
                    label={
                      <div className="py-3 border-b border-gray-300">
                        <p>{item.id}</p>
                        <p className="font-semibold">{item.type}</p>
                        <p>Sức chứa: {item.capacity}</p>
                        <p>Tài xế: {item.collector}</p>
                      </div>
                    }
                  />
                );
              })
            ) : (
              <>
                <p>Chưa sắp xếp phương tiện sử dụng trong tháng</p>
                <p>hoặc các phương tiện đều đã được sử dụng</p>
              </>
            )}
          </RadioGroup>
        </FormControl>
      </div>

      <div className="my-10 ml-36">
        <label>Nhập tên tuyến đường: </label>
        <input
          type="text"
          name="route-name"
          id="route-name"
          onChange={(e) => {
            setRouteName(e.target.value);
          }}
          className="border border-gray-300 ml-5 w-96 px-2 py-4"
        />
      </div>

      <button
        type="button"
        id="submit"
        class="ml-96 mt-8 text-green-700 border border-solid border-green-700 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default AddRoute;
