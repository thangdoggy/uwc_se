import React from "react";

import Img from "../img/person.jpg";

const CollectorItem = (prop) => {
  return (
    <div className="flex gap-5 py-6">
      <img src={Img} alt="" className="w-24" />
      <div>
        <p>ID: {prop.id}</p>
        <p>Tên: {prop.name}</p>
      </div>
    </div>
  );
};

export default CollectorItem;
