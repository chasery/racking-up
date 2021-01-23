import React from "react";
import { Link } from "react-router-dom";
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
      <li className="RacksList__add">
        <Link to="/add-rack">+ Add Rack</Link>
      </li>
    </ol>
  );
}

export default RacksList;
