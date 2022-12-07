import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import MUIDataTable from "mui-datatables";

import { FaPlus } from "react-icons/fa";

import { vehiclesDecember, AllVehicles } from "../data/vehicles";

import Vehicle from "../img/vehicle.jpg";

const columns = [
  {
    name: "id",
    label: "ID",
  },
  {
    name: "img",
    label: "Hình ảnh",
    options: {
      customBodyRender: () => {
        return <img src={Vehicle} alt="" className="w-20 ml-3" />;
      },
    },
  },
  {
    name: "type",
    label: "Loại xe",
  },
  {
    name: "capacity",
    label: "Sức chứa",
    options: {
      customBodyRender: (value) => {
        return <p className="text-center">{value}</p>;
      },
    },
  },
  {
    name: "status",
    label: "Trạng thái",
    options: {
      customBodyRender: (value) => {
        if (value === "Đang hoạt động")
          return <p className="text-center text-green-600">Đang hoạt động</p>;
        return <p className="text-center text-red-600">Nghỉ</p>;
      },
    },
  },
  {
    name: "collector",
    label: "Tài xế",
  },
];

const VehiclesTask = () => {
  const [month, setMonth] = useState("12-2022");

  let data = [];

  const rowsSelected = [];

  // data = JSON.parse(localStorage.getItem("vehiclesDecember"));
  data = vehiclesDecember;

  const navigate = useNavigate();

  const title = (
    <div className="flex items-center gap-5 mb-2 mr-11 pt-4">
      <h1 className="font-bold text-2xl mb-5">Phương tiện hoạt động</h1>
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 120 }}
        color="success"
      >
        <InputLabel id="select-month">Chọn tháng</InputLabel>
        <Select
          labelId="select-month"
          id="select-month"
          value={month}
          onChange={(e) => {
            setMonth(e.target.value);
          }}
          label="month"
        >
          <MenuItem value="12-2022">12-2022</MenuItem>
          <MenuItem value="11-2022">11-2022</MenuItem>
          <MenuItem value="10-2022">10-2022</MenuItem>
          <MenuItem value="9-2022">9-2022</MenuItem>
          <MenuItem value="8-2022">8-2022</MenuItem>
          <MenuItem value="7-2022">7-2022</MenuItem>
          <MenuItem value="6-2022">6-2022</MenuItem>
        </Select>
      </FormControl>
      <button
        className="ml-auto flex items-center gap-2 h-11 px-5 border border-green-900 rounded-full font-semibold bg-white text-green-900 hover:bg-green-900 hover:text-white shadow-lg"
        onClick={() => {
          navigate(`/vehicles-task/add/${month}`);
        }}
      >
        <p className="text-sm">
          <FaPlus />
        </p>
        <p>Thêm phương tiện</p>
      </button>
    </div>
  );

  return (
    <div className="ml-64 pt-24">
      <div className="w-full">
        <MUIDataTable
          title={title}
          data={data}
          columns={columns}
          options={{
            filterType: "multiselect",
            fixedHeader: true,
            responsive: "scroll",
            tableBodyHeight: "55vh",
            expandableRowsHeader: false,
            onRowClick: (rowData) => {
              navigate(`/vehicles-task/changeCollector/${rowData[0]}`);
            },
            onRowSelectionChange: (rowData) => {
              for (let index = 0; index < rowsSelected.length; index++) {
                if (
                  rowsSelected[index].id ===
                  vehiclesDecember[rowData[0].dataIndex].id
                )
                  return rowsSelected.splice(index, 1);
              }
              rowsSelected.push(vehiclesDecember[rowData[0].dataIndex]);
            },
            onRowsDelete: () => {
              rowsSelected.map((vehicle) => {
                AllVehicles.push({
                  id: vehicle.id,
                  type: vehicle.type,
                  capacity: vehicle.capacity,
                });
                for (let index = 0; index < vehiclesDecember.length; index++) {
                  if (vehiclesDecember[index].id === vehicle.id)
                    vehiclesDecember.splice(index, 1);
                }
              });
            },
          }}
          className="mr-11"
        />
      </div>
    </div>
  );
};

export default VehiclesTask;
