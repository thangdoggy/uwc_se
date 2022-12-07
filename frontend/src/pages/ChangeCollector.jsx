import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  FormControl,
  Radio,
  FormLabel,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

import { CollectorItem } from "../components";

import { AllVehicles, vehiclesDecember } from "../data/vehicles";
import { Collectors } from "../data/collector";

const ChangeCollector = () => {
  const { id } = useParams();

  const [collector, setCollector] = useState();

  const navigate = useNavigate();

  const handleSubmit = (collector) => {
    if (!collector) alert("Vui lòng chọn tài xế cho phương tiện!");

    for (let index = 0; index < vehiclesDecember.length; index++) {
      if (vehiclesDecember[index].id === id)
        vehiclesDecember[index].collector = collector;
    }

    navigate("/vehicles-task");
  };

  return (
    <div className="pt-28 ml-64 mb-11">
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
        <button
          type="button"
          id="submit"
          class="text-green-700 border border-solid border-green-700 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          onClick={() => {
            handleSubmit(collector);
          }}
        >
          Submit
        </button>
      </FormControl>
    </div>
  );
};

export default ChangeCollector;
