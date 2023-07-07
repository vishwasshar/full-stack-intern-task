import React from "react";

const DataList = (props) => {
  return (
    <ul className="list-none w-[20%] h-[100%] flex flex-col justify-evenly items-center bg-gray-950  rounded-xl">
      {props.data?.map((item) => {
        return (
          <li
            className=" w-[100%] py-2 text-center cursor-pointer hover:bg-gray-900"
            key={item.id}
            onClick={() => {
              props.setDisp(item.id);
            }}
          >
            {item.Name}
          </li>
        );
      })}
    </ul>
  );
};

export default DataList;
