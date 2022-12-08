import React from "react";
import './Popup.css'
 
const Popup = props => {
  return (
    <div className="popup-box_mcp">
      <div className="box_mcp">
        <span className="close-icon_mcp" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;