import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RackingUpContext from "../../RackingUpContext";
import Rack from "../Rack/Rack";
import "./RacksList.css";

function RacksList(props) {
  const context = useContext(RackingUpContext);

  const renderRacks = (racks) => {
    return racks.map((rack) => (
      <Rack key={rack.id} id={rack.id} name={rack.rackName} />
    ));
  };

  return (
    <ol className="RacksList">
      {renderRacks(context.racks)}
      <li className="RacksList__add">
        <Link to="/add-rack">+ Add Rack</Link>
      </li>
    </ol>
  );
}

export default RacksList;
