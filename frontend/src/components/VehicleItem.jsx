import React from "react";

import Img from "../img/vehicle.jpg";

const VehicleItem = (prop) => {
  return (
    <div className="flex gap-5 py-6">
      <img src={Img} alt="" className="w-36" />
      <div>
        <p>ID: {prop.id}</p>
        <p>Loại phương tiện: {prop.type}</p>
        <p>Sức chứa: {prop.capacity}</p>
      </div>
    </div>
  );
};

export default VehicleItem;
