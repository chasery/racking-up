import React from "react";
import Rack from "../Rack/Rack";
import "./RacksList.css";

const racksData = [
  {
    id: 1,
    rackName: "Fall 2021",
  },
  {
    id: 2,
    rackName: "Summer 2021",
  },
  {
    id: 3,
    rackName: "Anniversary Outfit",
  },
];

function createRacks(racks) {
  return racks.map((rack) => (
    <Rack key={rack.id} id={rack.id} name={rack.rackName} />
  ));
}

function RacksList(props) {
  return (
    <ol className="RacksList">
      {createRacks(racksData)}
      <li className="RacksList__add">+ Add Rack</li>
    </ol>
  );
}

export default RacksList;
