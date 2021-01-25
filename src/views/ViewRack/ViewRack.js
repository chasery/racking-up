import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import RackingUpContext from "../../RackingUpContext";
import Rack from "../../components/Rack/Rack";
import "./ViewRack.css";

function ViewRack(props) {
  const context = useContext(RackingUpContext);
  const { rackId } = useParams();

  const renderRack = (rackId) => {
    const { id, rackName } = context.racks.find((rack) => rack.id === rackId);

    return <Rack id={id} name={rackName} />;
  };

  return (
    <main role="main">
      <section className="ViewRack">
        <div className="ViewRack__wrapper">{renderRack(rackId)}</div>
      </section>
    </main>
  );
}

export default ViewRack;
