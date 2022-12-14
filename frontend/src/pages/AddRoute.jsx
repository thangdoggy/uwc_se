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
import { mcpsData } from "../data/mcps";
const AddRoute = () => {
  const [id, setId] = useState(); //mcp
  const [vehicle, setVehicle] = useState();
  const [distance, setDistance] = useState();
  const [date, setDate] = useState();

  const navigate = useNavigate();

  const handleSubmit = (id, vehicle, distance, date) => {
    if (!id || !vehicle || !distance || !date)
      alert("Vui lòng chọn điền đủ các thông tin để tạo tuyến đường!");

    // const temp = JSON.parse(localStorage.getItem("vehiclesDecember"));
    // temp.push(a);
    // localStorage.setItem("vehiclesDecember", JSON.stringify(temp));
    navigate("/routes-task");

    // for (let index = 0; index < CollectorsDec.length; index++) {
    //   if (CollectorsDec[index].name === collector)
    //     CollectorsDec.splice(index, 1);
    // }
  };
};

export default AddRoute;
