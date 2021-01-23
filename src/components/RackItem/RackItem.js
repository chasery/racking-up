import React from "react";
import { useParams } from "react-router-dom";
import { currencyFormat } from "../../currencyFormat";
import "./RackItem.css";

function RackItem(props) {
  const { rackId } = useParams();
  const { name, url, price } = props;
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
            <button>E</button>
            <button>D</button>
          </div>
        )}
      </li>
    );
  } else {
    return (
      <li className="RackItem">
        <span className="RackItem__infoName">
          This rack has no clothing items.
        </span>
      </li>
    );
  }
}

export default RackItem;
