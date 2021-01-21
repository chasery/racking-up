import React from "react";
import "./RacksList.css";
import Rack from "../Rack/Rack";

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
  return <ol className="RacksList">{createRacks(racksData)}</ol>;
}

export default RacksList;
