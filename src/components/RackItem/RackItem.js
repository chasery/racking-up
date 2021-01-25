import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { currencyFormat } from "../../currencyFormat";
import "./RackItem.css";

function RackItem(props) {
  const history = useHistory();
  const { rackId } = useParams();
  const { id, name, url, price } = props;
  const formattedPrice = currencyFormat.format(price);

  if (name && url && price) {
    return (
      <li className="RackItem">
        <a
          className="RackItem__info"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          <span className="RackItem__infoName">{name}</span>
          {price && (
            <span className="RackItem__infoPrice">{formattedPrice}</span>
          )}
        </a>
        {rackId && (
          <div className="RackItem__controls">
            <button onClick={() => history.push(`/edit-rack-item/${id}`)}>
              E
            </button>
            <button>D</button>
          </div>
        )}
      </li>
    );
  } else {
    return (
      <li className="RackItem">
        <span className="RackItem__infoName">This rack has no items.</span>
      </li>
    );
  }
}

export default RackItem;
