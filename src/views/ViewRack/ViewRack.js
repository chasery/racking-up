import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
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
        <div className="ViewRack__wrapper">
          <ol className="ViewRack__rack">
            {renderRack(rackId)}
            <li className="ViewRack__add">
              <Link to={`/add-rack-item/${rackId}`}>+ Add Rack Item</Link>
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}

export default ViewRack;
