import React, { useContext } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import RackingUpContext from "../../RackingUpContext";
import RackItem from "../RackItem/RackItem";
import { currencyFormat } from "../../currencyFormat";
import "./Rack.css";

function Rack(props) {
  const context = useContext(RackingUpContext);
  const history = useHistory();
  const { rackId } = useParams();
  const { id, name } = props;
  const filteredRackItems = context.rackItems.filter(
    (item) => item.rackId === props.id
  );

  const createRackItems = (items) => {
    return items.map((item) => (
      <RackItem
        key={item.id}
        id={item.id}
        rackId={item.rackId}
        name={item.name}
        url={item.url}
        price={item.price}
      />
    ));
  };

  const getRackCost = (items) => {
    let cost = 0;
    items.map((item) => (cost += item.price));

    return currencyFormat.format(cost);
  };

  return (
    <li className="Rack">
      {rackId ? (
        <div className="Rack__header">
          <Link to={`/racks`} className="Rack__headerArrow">
            {"<-"}
          </Link>
          <span className="Rack__headerName">{name}</span>
          <span className="Rack__headerCost">
            {getRackCost(filteredRackItems)}
          </span>
          <div className="Rack__headerControls">
            <button onClick={() => history.push(`/edit-rack/${rackId}`)}>
              E
            </button>
            <button>D</button>
          </div>
        </div>
      ) : (
        <Link to={`/racks/${id}`} className="Rack__header">
          <span className="Rack__headerName">{name}</span>
          <span className="Rack__headerCost">
            {getRackCost(filteredRackItems)}
          </span>
          <span className="Rack__headerArrow">{"->"}</span>
        </Link>
      )}
      <ul className="Rack__items">
        {filteredRackItems.length ? (
          createRackItems(filteredRackItems)
        ) : (
          <RackItem />
        )}
      </ul>
    </li>
  );
}

export default Rack;
