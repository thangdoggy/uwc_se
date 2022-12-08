import React, { useState } from "react";

import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import MUIDataTable from "mui-datatables";

import { FaPlus } from "react-icons/fa";
import { BiCheckCircle } from "react-icons/bi";
import { BiExit } from "react-icons/bi";


import { mcpsData } from "../data/mcps";
import { Janitors } from "../data/janitors";
import Popup from './Popup';
import './Input.css'


const columns = [
  {
    name: "id",
    label: "ID",
    options: {
      filter: true,
      sort: true,
    }    
  },
  {
    name: "address",
    label: "Địa chỉ", 
    options: {
      filter: true,
      sort: false,
    }      
  },
  {
    name: "currentVolume",
    label: "Khối lượng hiện tại (%)",
    options: {
      filter: true,
      sort: true,
    }    
  },
  {
    name: "capacity",
    label: "Dung lượng (tấn)",
    options: {
      filter: true,
      sort: true,
    }    
  },  
  {
    name: "janitors",
    label: "Janitors",
    options: {
      filter: true,
      sort: false,
    }      
  },
];

export default function McpsTask() {
  const [month, setMonth] = useState("12/2022"); 
  const [popup1, setPopup1] = useState(false);
  const [popup2, setPopup2] = useState(false);
  const [infoToAdd, setInfoToAdd] = useState({
    "address": "",
    "capacity": 0,
    "janitors": []
  })
  const [checkedList, setCheckedList] = useState(new Array(Janitors.size).fill(false))
  const togglePopup1 = () => {
    setPopup1(!popup1);
  }  
  const togglePopup2 = () => {
    setPopup2(!popup2);
  }

  // delete in the database
  const deleteMcps = (rowsDeleted) => {
    rowsDeleted = rowsDeleted.data
    rowsDeleted.sort((x,y) => y.index - x.index)
    for (let i = 0; i < rowsDeleted.length; ++i) {
      mcpsData.splice(rowsDeleted[i].index, 1)
    }
  }

  return (
    <div className="ml-64 pt-28">
      <div className="flex items-center gap-5 mb-2 mr-11">
        <h1 className="font-bold text-2xl mb-5">MCPs</h1>
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
          onClick={togglePopup1}
        >
          <p className="text-sm">
            <FaPlus />
          </p>
          <p>Thêm MCP</p>
        </button>            
      </div> 

    <div>  
  <div>
    {popup1 && <Popup // add mcps pop-up
      content={<AddNew1 infoToAdd={infoToAdd} setInfoToAdd={setInfoToAdd} 
      togglePopup1={togglePopup1} togglePopup2={togglePopup2}/>}
      handleClose={togglePopup1}
    />}
  </div>  
  <div>
    {popup2 && <Popup // add mcps pop-up
      content={<AddNew2 infoToAdd={infoToAdd} setInfoToAdd={setInfoToAdd} 
      togglePopup1={togglePopup1} togglePopup2={togglePopup2} checkedList={checkedList} 
      setCheckedList={setCheckedList}/>}
      handleClose={togglePopup2}
    />}
  </div>    
    </div>

      <div className="w-full">
        <MUIDataTable
          data={mcpsData}
          columns={columns}
          options={{
            filterType: "multiselect",
            fixedHeader: true,
            responsive: "scroll",
            tableBodyHeight: "45vh",
            expandableRowsHeader: false,
            onRowClick: (rowData) => {},
            onRowSelectionChange: (rowData) => {},
            onRowsDelete: (rows) => {deleteMcps(rows)},
          }}
          className="mr-11"
        />
      </div>
    </div>
  )
}

const AddNew1 = (props) => {
  const {infoToAdd, setInfoToAdd, togglePopup1, togglePopup2} = props
  const handleFormChange = (event) => {
    const attr = event.target.name;
    const value = event.target.value;
    setInfoToAdd((values) => ({ ...values, [attr]: value }));
    console.log(infoToAdd)
  };  
  return(
  <div>
    <form>
      <EditableInput
        labelText="Địa chỉ"
        name="address"
        value={infoToAdd.address}
        onChange={handleFormChange}
      />
      <EditableInput
        labelText="Sức chứa"
        name="capacity"
        value={infoToAdd.capacity}
        onChange={handleFormChange}
      />
    </form>
    <div style={{display: 'flex', justifyContent:'center'}}>
      <button
        className="flex items-center gap-2 h-11 px-5 border border-green-900 rounded-full font-semibold bg-white text-green-900 hover:bg-green-900 hover:text-white shadow-lg"
        style={{margin:'20px'}}
        onClick={() => {
          togglePopup1()
          togglePopup2()
        }}
      >
          <p className="text-sm">
            <BiCheckCircle />
          </p>
        TIẾP TỤC
      </button>
      <button
        className="flex items-center gap-2 h-11 px-5 border border-green-900 rounded-full font-semibold bg-white text-green-900 hover:bg-green-900 hover:text-white shadow-lg"
        style={{margin:'20px'}}
        onClick={togglePopup1}
      >
        <p className="text-sm">
          <BiExit />
        </p>
        QUAY LẠI
      </button>
    </div>    
  </div>
  )
}

const AddNew2 = (props) => {
  const {infoToAdd, setInfoToAdd, togglePopup1, togglePopup2, checkedList, setCheckedList} = props
  // const [checkedList, setCheckedList] = useState(new Array(Janitors.size).fill(false))
  
  const handleCheck = (event) => {
    let id = event.target.value
    let position = event.target.name
    const updatedCheckedState = checkedList.map((item, index) =>
      index == position ? !item : item
    );

    let newJanitors = [...infoToAdd.janitors]
    if (event.target.checked) {
      newJanitors = [...newJanitors, id]
    } else {
      newJanitors.splice(newJanitors.indexOf(id), 1)
    }

    setCheckedList(updatedCheckedState)
    setInfoToAdd({...infoToAdd, janitors: newJanitors})
  }

  return (
  <div>
    <form>
      {
        Array.from(Janitors.keys()).map((id, index) => 
          <label>
          <input
            className="radioButton_input"
            type="checkbox"
            value={id}
            name={index}
            checked={checkedList[index]}
            onChange={handleCheck}
          />
          {Janitors.get(id).name}
          <br/>
          </label>
        )
      }
    </form>
    <div style={{display: 'flex', justifyContent:'center'}}>
      <button
        className="flex items-center gap-2 h-11 px-5 border border-green-900 rounded-full font-semibold bg-white text-green-900 hover:bg-green-900 hover:text-white shadow-lg"
        style={{margin:'20px'}}
        onClick={() => {
          const newMcpData = {
            id: mcpsData.length,
            address: infoToAdd.address,
            currentVolume: 0,
            capacity: infoToAdd.capacity,
            janitors: infoToAdd.janitors.sort()
          }
          // console.log(mcpsData )
          // mcpsData = [...mcpsData, newMcpData]
          mcpsData.push(newMcpData)
          togglePopup2();
        }}
      >
          <p className="text-sm">
            <BiCheckCircle />
          </p>
        HOÀN THÀNH
      </button>
      <button
        className="flex items-center gap-2 h-11 px-5 border border-green-900 rounded-full font-semibold bg-white text-green-900 hover:bg-green-900 hover:text-white shadow-lg"
        style={{margin:'20px'}}
        onClick={() => {
          togglePopup2()
          togglePopup1()
        }}
      >
        <p className="text-sm">
          <BiExit />
        </p>
        QUAY LẠI
      </button>
    </div>    
  </div>
  )
}

function EditableInput(props) {
  const { labelText, name, value, onChange } = props;

  return (
    <div className="row_input">
      <div className="col-25_input">
        <label className="label_input">{labelText}</label>
      </div>
      <div className="col-75_input">
        <input
          className="input_input"
          type="text"
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
