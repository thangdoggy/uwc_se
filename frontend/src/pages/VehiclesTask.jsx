import React, { useState } from "react";

import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import MUIDataTable from "mui-datatables";

import { FaPlus } from "react-icons/fa";

import { vehicles } from "../data/vehicles";

const columns = [
  {
    name: "id",
    label: "Mã phương tiện",
  },
  {
    name: "type",
    label: "Loại phương tiện",
  },
  {
    name: "capacity",
    label: "Sức chứa",
  },
  {
    name: "status",
    label: "Trạng thái",
  },
  {
    name: "collector",
    label: "Tài xế",
  },
];

const VehiclesTask = () => {
  const [month, setMonth] = useState("12/2022");

  return (
    <div className="ml-64 pt-28">
      <div className="flex items-center gap-5 mb-2 mr-11">
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
            <MenuItem value="12/2022">12/2022</MenuItem>
            <MenuItem value="11/2022">11/2022</MenuItem>
            <MenuItem value="10/2022">10/2022</MenuItem>
            <MenuItem value="9/2022">9/2022</MenuItem>
            <MenuItem value="8/2022">8/2022</MenuItem>
            <MenuItem value="7/2022">7/2022</MenuItem>
            <MenuItem value="6/2022">6/2022</MenuItem>
          </Select>
        </FormControl>

        <button
          className="ml-auto flex items-center gap-2 h-11 px-5 border border-green-900 rounded-full font-semibold bg-white text-green-900 hover:bg-green-900 hover:text-white shadow-lg"
          onClick={() => {}}
        >
          <p className="text-sm">
            <FaPlus />
          </p>
          <p>Thêm phương tiện</p>
        </button>
      </div>

      <div className="w-full">
        <MUIDataTable
          data={vehicles}
          columns={columns}
          options={{
            filterType: "multiselect",
            fixedHeader: true,
            responsive: "scroll",
            tableBodyHeight: "45vh",
            expandableRowsHeader: false,
            onRowClick: (rowData) => {},
            onRowSelectionChange: (rowData) => {},
            onRowsDelete: () => {},
          }}
          className="mr-11"
        />
      </div>
    </div>
  );
};

export default VehiclesTask;
