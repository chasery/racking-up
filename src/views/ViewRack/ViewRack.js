import React from "react";
import { useParams } from "react-router-dom";
import Rack from "../../components/Rack/Rack";
import "./ViewRack.css";

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

function renderRack(racks, rackId) {
  const { id, rackName } = racks.find((rack) => rack.id === parseInt(rackId));

  return <Rack id={id} name={rackName} />;
}

function ViewRack(props) {
  const { rackId } = useParams();

  return (
    <main role="main">
      <section className="ViewRack">
        <div className="ViewRack__wrapper">{renderRack(racksData, rackId)}</div>
      </section>
    </main>
  );
}

export default ViewRack;
