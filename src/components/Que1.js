import DataList from "./DataList";
import { useState } from "react";
import DataCard from "./DataCard";

function Que1() {
  const [displayData, setDisplayData] = useState(1);
  const Data = [
    { id: 1, Name: "Shirt 1", Price: 100 },
    { id: 2, Name: "Shirt 2", Price: 120 },
    { id: 3, Name: "Shirt 3", Price: 150 },
    { id: 4, Name: "Shirt 4", Price: 160 },
    { id: 5, Name: "Shirt 5", Price: 170 },
    { id: 6, Name: "Shirt 6", Price: 180 },
    { id: 7, Name: "Trouser 1", Price: 170 },
    { id: 8, Name: "Trouser 2", Price: 190 },
    { id: 9, Name: "Trouser 3", Price: 200 },
    { id: 10, Name: "Trouser 4", Price: 270 },
  ];

  return (
    <div className="flex p-5 h-[100vh] text-white bg-slate-200">
      <DataList data={Data} setDisp={setDisplayData}></DataList>
      <DataCard disp={Data[displayData - 1]} />
    </div>
  );
}

export default Que1;
