import React from "react";

const DataCard = (props) => {
  return (
    <div className="w-[80%] flex items-center justify-center">
      <div className="bg-gray-950 p-10 rounded-xl flex flex-col items-center">
        <h1 className="text-5xl">{props.disp.Name}</h1>
        <p className=" my-4">Price: Rs. {props.disp.Price}</p>
        <p className="text-2xl">Item Id: {props.disp.id}</p>
      </div>
    </div>
  );
};

export default DataCard;
