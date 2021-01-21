import React from "react";
import { currencyFormat } from "../../currencyFormat";
import "./RackItem.css";

function RackItem(props) {
  const { name, url, price } = props;
  const formattedPrice = currencyFormat.format(price);

  return (
    <li className="RackItem">
      <a className="RackItem__name" href={url} target="_blank">
        {name}
      </a>
      {price ? <div className="RackItem__price">{formattedPrice}</div> : ""}
    </li>
  );
}

export default RackItem;
