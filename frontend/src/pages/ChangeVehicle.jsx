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
import { AllVehicles, vehiclesDecember } from "../data/vehicles";
import { routes } from "../data/routes";
const ChangeVehicle = () => {
  const { id } = useParams();

  const [vehicle, setVehicle] = useState();

  const navigate = useNavigate();

  const handleSubmit = (vehicle) => {
    if (!vehicle) alert("Vui lòng chọn phương tiện cho tuyến đường!");

    for (let index = 0; index < routes.length; index++) {
      if (routes[index].id === id) routes[index].vehicle = vehicle;
    }

    navigate("/routes-task");
  };
  return (
    <div className="pt-28 ml-64 mb-11">
      <FormControl>
        <FormLabel id="vehicle">Chọn phương tiện cho tuyến đường</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={{}}
          name="radio-buttons-group"
          onChange={(e) => {
            setVehicle(e.target.value);
          }}
        >
          {vehiclesDecember.map((vehicle) => {
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
          })}
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
  );
};

export default ChangeVehicle;
