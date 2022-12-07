import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  FormControl,
  Radio,
  FormLabel,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

import { VehicleItem, CollectorItem } from "../components";

import { AllVehicles, vehiclesDecember } from "../data/vehicles";
import { Collectors } from "../data/collector";

const AddVehicle = () => {
  const [id, setId] = useState();
  const [collector, setCollector] = useState();

  const navigate = useNavigate();

  const handleSubmit = (id, collector) => {
    if (!id || !collector)
      alert("Vui lòng chọn phương tiện và gán tài xế cho phương tiện!");

    const type = AllVehicles.find((vehicle) => vehicle.id === id).type;
    const capacity = AllVehicles.find((vehicle) => vehicle.id === id).capacity;
    const a = {
      id,
      type,
      capacity,
      collector,
    };

    vehiclesDecember.push(a);

    // const temp = JSON.parse(localStorage.getItem("vehiclesDecember"));
    // temp.push(a);
    // localStorage.setItem("vehiclesDecember", JSON.stringify(temp));
    navigate("/vehicles-task");

    for (let index = 0; index < AllVehicles.length; index++) {
      if (AllVehicles[index].id === id) AllVehicles.splice(index, 1);
    }

    // for (let index = 0; index < CollectorsDec.length; index++) {
    //   if (CollectorsDec[index].name === collector)
    //     CollectorsDec.splice(index, 1);
    // }
  };

  return (
    <div className="pt-28 ml-64 mb-11">
      <div className="flex items-start justify-evenly">
        <FormControl>
          <FormLabel id="vehicle">Chọn phương tiện</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            onChange={(e) => {
              setId(e.target.value);
            }}
          >
            {AllVehicles.length > 0 ? (
              AllVehicles.map((vehicle) => {
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
        </FormControl>

        <FormControl>
          <FormLabel id="vehicle">Chọn tài xế</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={{}}
            name="radio-buttons-group"
            onChange={(e) => {
              setCollector(e.target.value);
            }}
          >
            {Collectors.map((collector) => {
              return (
                <FormControlLabel
                  value={collector.name}
                  control={<Radio />}
                  label={
                    <CollectorItem id={collector.id} name={collector.name} />
                  }
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      </div>

      <button
        type="button"
        id="submit"
        class="ml-96 text-green-700 border border-solid border-green-700 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        onClick={() => {
          handleSubmit(id, collector);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default AddVehicle;
