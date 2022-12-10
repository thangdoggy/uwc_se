import React, { useState } from "react";

import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import MUIDataTable from "mui-datatables";

import { FaPlus } from "react-icons/fa";
import { BiCheckCircle } from "react-icons/bi";
import { BiExit } from "react-icons/bi";
import  { AiFillEdit } from "react-icons/ai";


import { mcpsData } from "../data/mcps";
import { Janitors } from "../data/janitors";
import Popup from './Popup';
import './McpsTask.css'


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
];

export default function McpsTask() {
  const [month, setMonth] = useState("12/2022"); 
  const [viewPopup, setViewPopup] = useState(false); // view popup state
  const [editPopup, setEditPopup] = useState(false);
  const [clickedMCPID, setClickedRow] = useState(0);
  const [popup1, setPopup1] = useState(false); // add new 1 popup state
  const [popup2, setPopup2] = useState(false); // add new 2 popup state
  const [infoToAdd, setInfoToAdd] = useState({
    "address": "",
    "currentVolume": 0,
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
  const toggleViewPopup = () => {
    setViewPopup(!viewPopup)
  }
  const toggleEditPopup = () => {
    setEditPopup(!editPopup)
  }

  // delete in the database
  const deleteMcps = (rowsDeleted) => {
    const mcpsDataKeys = Array.from(mcpsData.keys())
    rowsDeleted = rowsDeleted.data
    rowsDeleted.sort((x,y) => y.index - x.index) // sort descending order
    for (let i = 0; i < rowsDeleted.length; ++i) {
      const idToDelete = mcpsDataKeys[rowsDeleted[i].index]
      console.log(mcpsData.delete(idToDelete))
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
  <div>
  {viewPopup && <Popup 
  content={<ViewMCP mcpID={clickedMCPID} toggleViewPopup={toggleViewPopup} toggleEditPopup={toggleEditPopup}/>}
  handleClose={toggleViewPopup}
  />}
  </div>   
  <div>
  {editPopup && <Popup
  content={<EditMCP mcpID={clickedMCPID} toggleViewPopup={toggleViewPopup} toggleEditPopup={toggleEditPopup}/>}
  handleClose={toggleEditPopup}
  />}  
  </div>  
    </div>

      <div className="w-full">
        <MUIDataTable
          data={Array.from(mcpsData.keys()).map((id) => {
            let obj = {id: id}
            let remain = {...mcpsData.get(id)}
            delete remain.janitors
            obj = {...obj, ...remain}
            return obj
          })}
          columns={columns}
          options={{
            filterType: "multiselect",
            fixedHeader: true,
            responsive: "scroll",
            tableBodyHeight: "45vh",
            expandableRowsHeader: false,
            onRowClick: (rowData) => {
              setClickedRow(parseInt(rowData[0]))
              toggleViewPopup()
            },
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

  return(
  <div>
    <McpInfoForm userInfo={infoToAdd} setUserInfo={setInfoToAdd}/>
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

  return (
  <div>
    <JanitorsCheckForm userInfo={infoToAdd} setUserInfo={setInfoToAdd}
      checkedList={checkedList} setCheckedList={setCheckedList}/>
    <div style={{display: 'flex', justifyContent:'center'}}>
      <button
        className="flex items-center gap-2 h-11 px-5 border border-green-900 rounded-full font-semibold bg-white text-green-900 hover:bg-green-900 hover:text-white shadow-lg"
        style={{margin:'20px'}}
        onClick={() => {
          if (infoToAdd.address === "") {
            alert("Address cannot be left empty")
          } else if (infoToAdd.currentVolume < 0 || infoToAdd.currentVolume > 100) {
            alert("Current volume has to be in range of 0 to 100")
          } else if (infoToAdd.capacity < 0) {
            alert("Capacity should be greater than 0")
          } else {          
            const newMcpData = {
              address: infoToAdd.address,
              currentVolume: 0,
              capacity: infoToAdd.capacity,
              janitors: infoToAdd.janitors.sort()
            }
            mcpsData.set(mcpsData.size + 1, newMcpData)
            // reset 'info to add' to the default
            setInfoToAdd({
              "address": "",
              "currentVolume":0,
              "capacity": 0,
              "janitors": []
            })
            setCheckedList(new Array(Janitors.size).fill(false))
            togglePopup2();
          }
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

const ViewMCP = (props) => {
  const {mcpID, toggleViewPopup, toggleEditPopup} = props
  const [mcp] = useState(mcpsData.get(mcpID))
  return (
  <>
    <button
      className="ml-auto flex items-center gap-2 h-11 px-5 border border-green-900 rounded-full font-semibold bg-white text-green-900 hover:bg-green-900 hover:text-white shadow-lg"
      style={{position:'fixed', right: '17%'}}
      onClick={() => {
        toggleViewPopup()
        toggleEditPopup()
      }}
    >
      <p className="text-sm">
        <AiFillEdit />
      </p>
    </button>  
    <p style={{textAlign:'center', fontWeight:'bold'}}>THÔNG TIN MCP</p>    
    <p><b>ID:</b> {mcpID}</p>
    <p><b>Địa chỉ:</b> {mcp.address}</p>
    <p><b>Khối lượng hiện tại:</b> {mcp.currentVolume} (%)</p>
    <p><b>Sức chứa tối đa:</b> {mcp.capacity} (tấn)</p>
    <p><b>Người thu gom:</b></p>
    <div className="JanitorsViewBox">
      {
        mcp.janitors.map((id) => 
          <p>{id} - {Janitors.get(id).name}</p>
        )
      }

    </div>
  </>
  )
}

const getCurrentCheckedList = (janitors) => {
  const res = new Array(Janitors.size).fill(false)
  for (let i = 0; i < janitors.length; ++i) {
    res[janitors[i] - 1] = true
  }

  return res
}

const EditMCP = (props) => {
  const {mcpID, toggleViewPopup, toggleEditPopup} = props
  const [userInfo, setUserInfo] = useState(mcpsData.get(mcpID))
  const [checkedList, setCheckedList] = useState(getCurrentCheckedList(userInfo.janitors))

  return (
  <>
  <McpInfoForm userInfo={userInfo} setUserInfo={setUserInfo}/>
  <JanitorsCheckForm userInfo={userInfo} setUserInfo={setUserInfo} 
          checkedList={checkedList} setCheckedList={setCheckedList}/>
  <div style={{display: 'flex', justifyContent:'center'}}>
    <button
      className="flex items-center gap-2 h-11 px-5 border border-green-900 rounded-full font-semibold bg-white text-green-900 hover:bg-green-900 hover:text-white shadow-lg"
      style={{margin:'20px'}}
      onClick={() => {
        if (userInfo.address === "") {
          alert("Address cannot be left empty")
        } else if (userInfo.currentVolume < 0 || userInfo.currentVolume > 100) {
          alert("Current volume has to be in range of 0 to 100")
        } else if (userInfo.capacity < 0) {
          alert("Capacity should be greater than 0")
        } else {
          mcpsData.set(mcpID, {
            address: userInfo.address,
            currentVolume: userInfo.currentVolume,
            capacity: userInfo.capacity,
            janitors: userInfo.janitors.sort()
          })
          toggleEditPopup();
        }
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
        toggleEditPopup()
        toggleViewPopup()
      }}
    >
      <p className="text-sm">
        <BiExit />
      </p>
      QUAY LẠI
    </button>
  </div> 
  </>
  )
}

const McpInfoForm = (props) => {
  const {userInfo, setUserInfo} = props
  const handleFormChange = (event) => {
    const attr = event.target.name;
    const value = event.target.value;
    setUserInfo((values) => ({ ...values, [attr]: value }));
  };   
  return (
  <form>
    <div className="row_input">
      <div className="col-25_input">
        <label className="label_input">Địa chỉ</label>
      </div>
      <div className="col-75_input">
        <input
          className="input_input"
          type="text"
          placeholder="Nhập địa chỉ của MCP"
          name="address"
          value={userInfo.address}
          onChange={handleFormChange}
        />
      </div>
    </div>    
    <div className="row_input">
      <div className="col-25_input">
        <label className="label_input">Dung lượng hiện tại</label>
      </div>
      <div className="col-75_input">
        <input
          className="input_input"
          type="number"
          min="0"
          max="100"
          placeholder="Nhập dung lượng hiện tại của MCP (%)"
          name="currentVolume"
          value={userInfo.currentVolume}
          onChange={handleFormChange}
        />
      </div>
    </div>   
    <div className="row_input">
      <div className="col-25_input">
        <label className="label_input">Sức chứa</label>
      </div>
      <div className="col-75_input">
        <input
          className="input_input"
          type="number"
          min="0"
          placeholder="Nhập sức chứa của MCP (tấn)"
          name="capacity"
          value={userInfo.capacity}
          onChange={handleFormChange}
        />
      </div>
    </div>            
  </form>  
  )
}

const JanitorsCheckForm = (props) => {
  const {userInfo, setUserInfo, checkedList, setCheckedList} = props

  const handleCheck = (event) => {
    let id = event.target.value
    let position = event.target.name
    const updatedCheckedState = checkedList.map((item, index) =>
      index == position ? !item : item
    );

    let newJanitors = [...userInfo.janitors]
    if (event.target.checked) {
      newJanitors = [...newJanitors, parseInt(id)]
    } else {
      newJanitors.splice(newJanitors.indexOf(parseInt(id)), 1)
    }

    setCheckedList(updatedCheckedState)
    setUserInfo({...userInfo, janitors: newJanitors})
  }  

  return (
  <div className="JanitorsViewBox">
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
          {id + ' - ' + Janitors.get(id).name}
          <br/>
          </label>
        )
      }
    </form>  
  </div>  
  )
}
